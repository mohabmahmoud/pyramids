// src/components/contact/ContactInfoCard.tsx
"use client";

import React from "react";
import { FiMapPin, FiPhone, FiMail, FiFileText } from "react-icons/fi";

export default function ContactInfoCard() {
  return (
    <section dir="rtl" className="max-w-6xl mx-auto px-4 lg:px-6 py-10">
      <div className="rounded-3xl border border-emerald-100 bg-white shadow-sm p-6 lg:p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-emerald-950">
            تواصل معنا لبدء شركتك المُثمرة
          </h1>
          <p className="mt-2 text-sm lg:text-base text-gray-600">
            شركة بيراميدز لاستيراد وتصدير الحاصلات الزراعية
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* العنوان */}
          <InfoRow
            icon={<FiMapPin />}
            title="العنوان"
            value="الخط الوسطاني الربعمائة – قرية دقيشوا – مركز كفر الدوار – البحيرة"
          />

          {/* اتصل بنا */}
          <InfoRow
            icon={<FiPhone />}
            title="اتصل بنا"
            value="01223893042"
            href="tel:+201223893042"
          />

          {/* البريد */}
          <InfoRow
            icon={<FiMail />}
            title="البريد الإلكتروني"
            value="elfishawy_co400@yahoo.com"
            href="mailto:elfishawy_co400@yahoo.com"
          />

          {/* التسجيل الضريبي */}
          <InfoRow
            icon={<FiFileText />}
            title="رقم التسجيل الضريبي"
            value="613-640-365"
          />
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
        {icon}
      </span>

      <div className="space-y-1">
        <p className="text-sm font-extrabold text-emerald-950">{title}</p>
        <p className="text-sm text-gray-700 leading-relaxed">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 hover:shadow-md transition-shadow">
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
