// src/components/SimpleFooter.tsx
"use client";

import React from "react";
import Link from "next/link";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";

export default function SimpleFooter() {
  const currentYear = new Date().getFullYear();

  // ✅ غيّر مسار الصورة هنا
  const FOOTER_BG = "/images/footer-2.webp";

  const navItems = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "منتجاتنا", href: "/products" },
    { name: "خدماتنا", href: "/services" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  const contactInfo = [
    { icon: <FiPhone />, text: "+20 100 123 4567", href: "tel:+201001234567" },
    { icon: <FiMail />, text: "info@pyramids.com", href: "mailto:info@pyramids.com" },
    { icon: <FiMapPin />, text: "القاهرة، مصر", href: "#" },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, href: "#", label: "فيسبوك" },
    { icon: <FiInstagram />, href: "#", label: "إنستجرام" },
    { icon: <FiLinkedin />, href: "#", label: "لينكدإن" },
  ];

  // ✅ Glass tokens
  const glassCard =
    "relative rounded-3xl p-6 border border-white/45 bg-white/12 backdrop-blur-2xl " +
    "shadow-[0_18px_60px_rgba(0,0,0,0.14)] " +
    "hover:shadow-[0_28px_90px_rgba(0,0,0,0.18)] transition-all";

  const shine =
    "pointer-events-none absolute inset-0 rounded-3xl " +
    "bg-gradient-to-l from-white/18 via-white/8 to-transparent opacity-70";

  const softRing =
    "pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/25";

  return (
    <footer dir="rtl" className="mt-16">
      {/* top hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent" />

      <div className="relative overflow-hidden">
        {/* ✅ Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${FOOTER_BG})`}}
        />

        {/* ✅ very soft tint فوق الصورة (رمادي/أبيض خفيف جدًا) */}
        <div className="absolute inset-0 bg-white/80" />
        {/* لو عايزه رمادي أكتر: bg-slate-50/90 أو bg-gray-50/90 */}

        {/* ✅ optional: vignette لطيف */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/30" />

        {/* ✅ content */}
        <div className="relative">
          {/* base gradient فوق الخلفية */}
          <div className="bg-gradient-to-b from-transparent via-white/20 to-white/55">
            <div className="max-w-6xl mx-auto px-4 lg:px-6 py-12">
              {/* header row */}
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-white/25 blur-md" />
                    <img
                      src="/icon.png"
                      alt="Logo"
                      className="relative w-12 h-12 rounded-2xl object-contain bg-white/55 ring-1 ring-white/45 shadow-sm backdrop-blur"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg lg:text-xl font-extrabold text-emerald-950">
                      شركة بيراميدز
                    </h3>
                    <p className="text-xs text-gray-700/80">
                      لتصدير الحاصلات الزراعية
                    </p>
                  </div>
                </div>

                <span
                  className="
                    hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full
                    border border-white/45 bg-white/12 backdrop-blur-2xl
                    shadow-[0_14px_45px_rgba(0,0,0,0.12)]
                    text-xs font-semibold text-emerald-900/90
                  "
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  جودة • سرعة • التزام
                </span>
              </div>

              {/* cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* about */}
                <div className={glassCard}>
                  <div className={shine} />
                  <div className={softRing} />
                  <h4 className="relative text-base font-extrabold text-emerald-950 mb-3">
                    نبذة عن الشركة
                  </h4>
                  <p className="relative text-sm text-gray-800/80 leading-relaxed">
                    شركة متخصصة في تصدير الخضروات والفواكه الطازجة من المزارع
                    المصرية إلى الأسواق العالمية بأعلى معايير الجودة والالتزام.
                  </p>

                  <div className="relative mt-4">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900/90 hover:text-emerald-950 transition-colors"
                    >
                      اعرف المزيد
                      <FiArrowUpRight />
                    </Link>
                  </div>
                </div>

                {/* links */}
                <div className={glassCard}>
                  <div className={shine} />
                  <div className={softRing} />
                  <h4 className="relative text-base font-extrabold text-emerald-950 mb-3">
                    روابط سريعة
                  </h4>

                  <div className="relative grid grid-cols-2 gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm text-gray-800/80 hover:text-emerald-950 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* contact */}
                <div className={glassCard}>
                  <div className={shine} />
                  <div className={softRing} />
                  <h4 className="relative text-base font-extrabold text-emerald-950 mb-3">
                    تواصل معنا
                  </h4>

                  <div className="relative space-y-3">
                    {contactInfo.map((info, i) => (
                      <a
                        key={i}
                        href={info.href}
                        className="flex items-center gap-3 text-sm text-gray-800/85 hover:text-emerald-950 transition-colors"
                      >
                        <span
                          className="
                            w-10 h-10 rounded-2xl flex items-center justify-center
                            border border-white/50 bg-white/14 backdrop-blur-2xl
                            shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                            text-emerald-900/90
                          "
                        >
                          {info.icon}
                        </span>
                        <span className="font-semibold">{info.text}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* bottom */}
              <div className="mt-10 pt-6">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex gap-3">
                    {socialLinks.map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        aria-label={s.label}
                        className="
                          w-11 h-11 rounded-2xl flex items-center justify-center
                          border border-white/45 bg-white/12 backdrop-blur-2xl
                          shadow-[0_16px_50px_rgba(0,0,0,0.14)]
                          text-gray-800/80 hover:text-emerald-950
                          hover:-translate-y-0.5 transition-all
                        "
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>

                  <p className="text-sm text-gray-800/70 text-center">
                    © {currentYear} شركة بيراميدز. جميع الحقوق محفوظة.
                  </p>
                </div>

                <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
