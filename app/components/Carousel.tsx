"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

type Slide = {
  id: string;
  image: string; // "/images/hero/1.jpg"
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
};

type Props = {
  slides: Slide[];
  className?: string;

  /** full screen height by default */
  heightClassName?: string; // default: "h-[70vh] lg:h-[85vh]"

  /** autoplay delay in ms */
  delayMs?: number; // default 4500
};

export default function FullScreenCarousel({
  slides,
  className = "",
  heightClassName = "h-[100vh] lg:h-[100vh]",
  delayMs = 4500,
}: Props) {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: delayMs,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [delayMs]
  );

  /**
   * بعض المشاريع بتطلع TS error: Expected 0-1 args but got 2
   * بسبب typings قديمة. الحل ده يضمن التوافق 100%.
   */
  const useEmblaCompat = useEmblaCarousel as unknown as (
    options?: Parameters<typeof useEmblaCarousel>[0],
    plugins?: unknown[]
  ) => [React.RefCallback<HTMLDivElement>, EmblaCarouselType | undefined];

  const [emblaRef, emblaApi] = useEmblaCompat(
    { loop: true, align: "start", skipSnaps: false },
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setSnapCount(emblaApi.scrollSnapList().length);

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSnapCount(emblaApi.scrollSnapList().length);
      onSelect();
    });

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  if (!slides?.length) return null;

  return (
    <section className={`w-full ${className}`}>
      <div className={`relative w-full ${heightClassName} overflow-hidden shadow-2xl`}>
        <div ref={emblaRef} className="h-full w-full">
          <div className="flex h-full touch-pan-y">
            {slides.map((s, i) => (
              <div
                key={s.id}
                className="relative min-w-0 flex-[0_0_100%] h-full"
                aria-hidden={i !== selectedIndex}
              >
                {/* image */}
                <img
                  src={s.image}
                  alt={s.title ?? `slide-${i + 1}`}
                  className={`
                    absolute inset-0 h-full w-full object-cover
                    transition-transform duration-700 ease-out
                    ${i === selectedIndex ? "scale-100" : "scale-[1.03]"}
                  `}
                  draggable={false}
                />

                <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-black/25 to-transparent" />

                {/* text content */}
                <div className="absolute inset-y-0 right-0 flex items-center px-6 lg:px-12">
                  <div
                    className={`
                      max-w-xl text-white space-y-3 lg:space-y-4
                      transition-all duration-700 ease-out
                      ${i === selectedIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    `}
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                      {s.subtitle ?? "شركة الفيشاوي"}
                    </span>

                    {s.title && (
                      <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight">
                        {s.title}
                      </h2>
                    )}

                    {s.subtitle && (
                      <p className="text-sm lg:text-base text-white/90 leading-relaxed">
                        {s.subtitle}
                      </p>
                    )}

                    {s.ctaText && s.ctaHref && (
                      <a
                        href={s.ctaHref}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition"
                      >
                        {s.ctaText}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

   

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
          {Array.from({ length: snapCount }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollTo(idx)}
              aria-label={`اذهب إلى الشريحة ${idx + 1}`}
              className={`
                h-2.5 rounded-full transition-all
                ${idx === selectedIndex ? "w-7 bg-emerald-300" : "w-2.5 bg-white/60 hover:bg-white"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
