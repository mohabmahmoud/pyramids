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

  return (
    <footer dir="rtl" className="mt-16 border-t border-emerald-100">
      <div className="bg-gradient-to-b from-emerald-50/40 via-white to-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-10">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <img
                src="/icon.png"
                alt="Logo"
                className="w-12 h-12 rounded-2xl bg-white shadow-sm object-contain ring-1 ring-emerald-100"
              />
              <div>
                <h3 className="text-lg lg:text-xl font-extrabold text-emerald-950">
                  شركة بيراميدز
                </h3>
                <p className="text-xs text-gray-500">لتصدير الحاصلات الزراعية</p>
              </div>
            </div>

            <span className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-emerald-100 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              جودة • سرعة • التزام
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl p-6 bg-white shadow-sm border border-emerald-100/70 hover:shadow-md transition-shadow">
              <h4 className="text-base font-extrabold text-emerald-950 mb-3">
                نبذة عن الشركة
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                شركة متخصصة في تصدير الخضروات والفواكه الطازجة من المزارع المصرية إلى
                الأسواق العالمية بأعلى معايير الجودة والالتزام.
              </p>

              <div className="mt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  اعرف المزيد
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl p-6 bg-white shadow-sm border border-emerald-100/70 hover:shadow-md transition-shadow">
              <h4 className="text-base font-extrabold text-emerald-950 mb-3">
                روابط سريعة
              </h4>

              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-emerald-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-6 bg-white shadow-sm border border-emerald-100/70 hover:shadow-md transition-shadow">
              <h4 className="text-base font-extrabold text-emerald-950 mb-3">
                تواصل معنا
              </h4>

              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-emerald-700 transition-colors"
                  >
                    <span className="w-9 h-9 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                      {info.icon}
                    </span>
                    <span className="font-medium">{info.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-emerald-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-2xl bg-white border border-emerald-100 shadow-sm flex items-center justify-center text-gray-600 hover:text-emerald-700 hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <p className="text-sm text-gray-500 text-center">
                © {currentYear} شركة بيراميدز. جميع الحقوق محفوظة.
              </p>
            </div>

            <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
          </div>
        </div>
      </div>
    </footer>
  );
}
