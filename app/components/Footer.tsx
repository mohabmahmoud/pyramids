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
    { icon: <FiPhone />, text: "+201200275444", href: "tel:+201200275444" },
    { icon: <FiMail />, text: "pyramidsforimportandexport@gmail.com", href: "mailto:pyramidsforimportandexport@gmail.com" },
    { icon: <FiMapPin />, text: "الخط الوسطاني الربعمائة – قرية دقيشوا – مركز كفر الدوار – البحيرة", href: "#" },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, href: "#", label: "فيسبوك" },
    { icon: <FiInstagram />, href: "#", label: "إنستجرام" },
    { icon: <FiLinkedin />, href: "#", label: "لينكدإن" },
  ];

  return (
    <footer dir="rtl" className="mt-16 bg-gradient-to-b from-white to-slate-50">
      {/* الخط العلوي */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-10 lg:py-12">
          {/* الهيدر */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8 sm:mb-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl opacity-30" />
                <img
                  src="/icon.png"
                  alt="Pyramids Logo"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
              </div>
              
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900">
                  شركة بيراميدز
                </h2>
                <p className="text-xs sm:text-sm text-emerald-700 font-medium">
                  لتصدير الحاصلات الزراعية
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 shadow-sm">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-emerald-800">
                  جودة • سرعة • التزام
                </span>
              </div>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600">
                شريكك الموثوق في تصدير المنتجات الزراعية المصرية
              </p>
            </div>
          </div>

          {/* البطاقات */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {/* بطاقة نبذة عن الشركة */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-1.5 h-4 sm:w-2 sm:h-6 rounded-full bg-gradient-to-b from-emerald-500 to-emerald-400" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  نبذة عن الشركة
                </h3>
              </div>
              
              <p className="text-sm text-slate-700 mb-3 sm:mb-4 leading-relaxed text-justify">
                شركة متخصصة في تصدير الخضروات والفواكه الطازجة من المزارع
                المصرية إلى الأسواق العالمية بأعلى معايير الجودة والالتزام.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-medium group text-sm sm:text-base"
              >
                <span>اعرف المزيد</span>
                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

            {/* بطاقة الروابط السريعة */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-1.5 h-4 sm:w-2 sm:h-6 rounded-full bg-gradient-to-b from-emerald-500 to-emerald-400" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  روابط سريعة
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 p-2 rounded-lg transition-colors text-center sm:text-right"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* بطاقة تواصل معنا - مصححة */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-1.5 h-4 sm:w-2 sm:h-6 rounded-full bg-gradient-to-b from-emerald-500 to-emerald-400" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  تواصل معنا
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.href}
                    className="flex items-start gap-3 text-slate-700 hover:text-emerald-700 transition-colors group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors flex-shrink-0 mt-0.5">
                      {info.icon}
                    </div>
                    
                    <span 
                      dir={i !== 2 ? "ltr" : undefined}
                      className={`text-xs sm:text-sm font-medium flex-1 ${
                        i === 1 ? 'break-all' : 'break-words'
                      } ${i === 2 ? 'rtl:text-right ltr:text-left' : 'ltr:text-left'}`}
                    >
                      {info.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* القسم السفلي */}
          <div className="pt-6 sm:pt-8 border-t border-slate-200">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
              {/* روابط التواصل الاجتماعي */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <span className="text-xs sm:text-sm font-medium text-slate-700 hidden xs:block">
                  تابعنا على:
                </span>
                <div className="flex gap-1.5 sm:gap-2">
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      aria-label={s.label}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl flex items-center justify-center bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* حقوق النشر */}
              <div className="text-center order-first lg:order-none">
                <p className="text-xs sm:text-sm text-slate-600">
                  © {currentYear} شركة بيراميدز. جميع الحقوق محفوظة.
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  مصمم بعناية لخدمتكم
                </p>
              </div>

              {/* معلومات إضافية */}
              <div className="text-center lg:text-right">
                <p className="text-xs sm:text-sm text-slate-600">
                  السبت - الخميس: ٩ صباحاً - ٥ مساءً
                </p>
                <p className="text-xs text-slate-500 mt-0.5">نحن هنا لخدمتكم</p>
              </div>
            </div>

            {/* الخط السفلي */}
            <div className="mt-6 sm:mt-8 h-0.5 sm:h-1 w-full rounded-full bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
          </div>
        </div>
      </div>
    </footer>
  );
}