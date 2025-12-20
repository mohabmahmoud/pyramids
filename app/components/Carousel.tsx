"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export type CarouselAction = {
  id: string;
  label: string;
  href?: string;              // لو لينك
  onClick?: () => void;       // لو عايز handle
  variant?: "primary" | "ghost";
  icon?: React.ReactNode;
  newTab?: boolean;           // للروابط الخارجية
};

export type CarouselSlide = {
  id: string | number;
  image: string;

  header?: string;            // البادج الصغير فوق
  title?: string;
  subtitle?: string;

  actions?: CarouselAction[]; // ✅ لكل slide أزرار/Clicks لوحده
  content?: React.ReactNode;  // ✅ لو عايز JSX كامل بدل النصوص
  sideCard?: React.ReactNode; // ✅ لو عايز الكارد اليمين لكل slide

  meta?: Record<string, any>; // ✅ أي بيانات إضافية لكل slide
};

type Props = {
  slides: CarouselSlide[];
  heightClassName?: string; // "h-screen" | "h-[85vh]" ...
  autoPlay?: boolean;
  intervalMs?: number;
  overlayGradient?: boolean;
  className?: string;

  onSlideChange?: (slide: CarouselSlide, index: number) => void;
  onSlideClick?: (slide: CarouselSlide, index: number) => void;
  onActionClick?: (action: CarouselAction, slide: CarouselSlide, index: number) => void;
};

export default function FullScreenCarousel({
  slides,
  heightClassName = "h-screen",
  autoPlay = true,
  intervalMs = 5500,
  overlayGradient = true,
  className = "",
  onSlideChange,
  onSlideClick,
  onActionClick,
}: Props) {
  const safeSlides = useMemo(() => slides ?? [], [slides]);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const count = safeSlides.length;
  const activeSlide = safeSlides[index];

  const goTo = (i: number) => {
    if (count === 0) return;
    const next = (i + count) % count;
    setIndex(next);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // autoplay
  useEffect(() => {
    if (!autoPlay || count <= 1) return;

    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((v) => (v + 1) % count);
    }, intervalMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [autoPlay, intervalMs, count]);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, count]);

  // change callback
  useEffect(() => {
    if (!activeSlide) return;
    onSlideChange?.(activeSlide, index);
  }, [index]); // intentionally only index

  if (!safeSlides.length) return null;

  const handleAction = (action: CarouselAction) => {
    // callback عام للـ analytics مثلاً
    onActionClick?.(action, activeSlide, index);

    // onClick لو موجود
    action.onClick?.();
  };

  return (
    <section dir="rtl" className={`relative w-full ${heightClassName} ${className}`}>
      {/* ===== Backgrounds ===== */}
      <div className="absolute inset-0 overflow-hidden">
        {safeSlides.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={String(s.id)}
              className={[
                "absolute inset-0 transition-opacity duration-700 ease-out",
                active ? "opacity-100" : "opacity-0",
              ].join(" ")}
              onClick={() => onSlideClick?.(s, i)}
              role="button"
              aria-label={`Slide ${i + 1}`}
            >
              <img
                src={s.image}
                alt={s.title ?? "Slide"}
                className={[
                  "w-full h-full object-cover",
                  "transition-transform duration-[1200ms] ease-out",
                  active ? "scale-105" : "scale-100",
                ].join(" ")}
              />

              {overlayGradient && (
                <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-black/25 to-transparent" />
              )}
            </div>
          );
        })}
      </div>

      {/* ===== Overlay Content (ONLY active slide) ===== */}
      <div className={`relative ${heightClassName}`}>
        <div className="absolute inset-0 flex items-center pt-60">
          <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 w-full">
            <div className="grid items-center gap-6 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="max-w-2xl">
                {activeSlide?.header && (
                  <div
                    className={[
                      "inline-flex items-center gap-2",
                      "rounded-full px-4 py-1.5",
                      "border border-white/25",
                      "bg-white/15 backdrop-blur-xl",
                      "text-white text-xs font-semibold",
                      "shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
                    ].join(" ")}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    <span>{activeSlide.header}</span>
                  </div>
                )}

                {activeSlide?.title && (
                  <h1 className="mt-4 text-3xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow">
                    {activeSlide.title}
                  </h1>
                )}

                {activeSlide?.subtitle && (
                  <p className="mt-3 text-sm lg:text-lg text-white/90 leading-relaxed drop-shadow">
                    {activeSlide.subtitle}
                  </p>
                )}

                {/* لو عندك JSX خاص بالسلايد */}
                {activeSlide?.content && (
                  <div className="mt-4 text-white/90">{activeSlide.content}</div>
                )}

                {/* Actions per slide ✅ */}
                {!!activeSlide?.actions?.length && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {activeSlide.actions.map((a) => {
                      const isPrimary = (a.variant ?? "primary") === "primary";
                      const cls = isPrimary
                        ? [
                            "px-6 py-3 rounded-2xl font-bold",
                            "bg-white text-slate-900",
                            "shadow-lg shadow-black/25",
                            "hover:scale-[1.02] active:scale-[0.99] transition",
                          ].join(" ")
                        : [
                            "px-6 py-3 rounded-2xl font-bold",
                            "bg-white/15 text-white",
                            "border border-white/25 backdrop-blur-xl",
                            "hover:bg-white/20 transition",
                          ].join(" ");

                      // لينك
                      if (a.href) {
                        const external = a.newTab || a.href.startsWith("http");
                        if (external) {
                          return (
                            <a
                              key={a.id}
                              href={a.href}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() => handleAction(a)}
                              className={cls}
                            >
                              <span className="inline-flex items-center gap-2">
                                {a.icon}
                                {a.label}
                              </span>
                            </a>
                          );
                        }

                        return (
                          <Link
                            key={a.id}
                            href={a.href}
                            onClick={() => handleAction(a)}
                            className={cls}
                          >
                            <span className="inline-flex items-center gap-2">
                              {a.icon}
                              {a.label}
                            </span>
                          </Link>
                        );
                      }

                      return (
                        <button
                          key={a.id}
                          type="button"
                          onClick={() => handleAction(a)}
                          className={cls}
                        >
                          <span className="inline-flex items-center gap-2">
                            {a.icon}
                            {a.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="hidden lg:block justify-self-end">
                {activeSlide?.sideCard ?? (
                  <div
                    className={[
                      "w-[360px] rounded-[2.5rem] p-6",
                      "border border-white/20",
                      "bg-white/10 backdrop-blur-2xl",
                      "shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
                    ].join(" ")}
                  >
                    <p className="text-white/90 text-sm font-semibold mb-2">لماذا بيراميدز؟</p>
                    <ul className="space-y-3 text-white/85 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 rounded-full bg-emerald-300" />
                        جودة عالية ومعايير تصدير دقيقة
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 rounded-full bg-blue-300" />
                        تعبئة وتغليف يحافظ على الطزاجة
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 w-2 h-2 rounded-full bg-red-300" />
                        نقل مبرد وتتبع للشحنات
                      </li>
                    </ul>

                    <div className="mt-5 pt-5 border-t border-white/15 flex items-center justify-between">
                      <div>
                        <p className="text-white/90 text-xs">معدل رضا العملاء</p>
                        <p className="text-white text-2xl font-extrabold">%99</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/90 text-xs">خبرة</p>
                        <p className="text-white text-2xl font-extrabold">17+</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {safeSlides.map((s, i) => {
                  const active = i === index;
                  return (
                    <button
                      key={String(s.id)}
                      type="button"
                      onClick={() => goTo(i)}
                      className={[
                        "h-2.5 rounded-full transition-all",
                        "border border-white/30",
                        "bg-white/10 backdrop-blur",
                        active ? "w-10 opacity-100" : "w-2.5 opacity-70 hover:opacity-100",
                      ].join(" ")}
                      aria-label={`اذهب إلى سلايد ${i + 1}`}
                    />
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className={[
                    "w-11 h-11 rounded-2xl",
                    "border border-white/25",
                    "bg-white/15 backdrop-blur-xl",
                    "text-white",
                    "hover:bg-white/20 transition",
                  ].join(" ")}
                  aria-label="السابق"
                >
                  <FiChevronRight className="mx-auto text-xl" />
                </button>

                <button
                  type="button"
                  onClick={next}
                  className={[
                    "w-11 h-11 rounded-2xl",
                    "border border-white/25",
                    "bg-white/15 backdrop-blur-xl",
                    "text-white",
                    "hover:bg-white/20 transition",
                  ].join(" ")}
                  aria-label="التالي"
                >
                  <FiChevronLeft className="mx-auto text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/35 to-transparent" />
      </div>
    </section>
  );
}
