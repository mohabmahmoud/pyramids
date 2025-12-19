"use client";

import React from "react";
import { motion } from "framer-motion";
import { MissionVisionSection } from "../components/about/MissionVisionSection";
import { ValuesSection } from "../components/about/ValuesSection";
import { AboutCompanySection } from "../components/about/AboutCompanySection";

export default function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-b from-emerald-50/70 via-white to-white">
      <section className="pt-12 pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-72 lg:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* ✅ غيّر مسار الصورة */}
            <img
              src="/images/about.jpg"
              alt="رحلتنا في عالم الحاصلات الزراعية"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-black/30 to-transparent" />

            {/* Text */}
            <div className="absolute inset-y-0 right-0 flex items-center px-8 lg:px-12">
              <div className="max-w-2xl text-white space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  من نحن
                </span>

                <h1 className="text-3xl lg:text-4xl font-extrabold leading-snug">
                  رحلتنا في عالم
                  <span className="text-emerald-200"> الحاصلات الزراعية</span>
                </h1>

                <p className="text-sm lg:text-base text-emerald-50/90 leading-relaxed">
                  تأسست <span className="font-semibold">الفيشاوي لتصدير الحاصلات الزراعية</span> بهدف
                  تقديم منتجات زراعية ذات جودة فائقة للسوق العالمي.
                </p>

                <p className="text-sm lg:text-base text-emerald-50/90 leading-relaxed">
                  نجمع بين <span className="font-semibold">الخبرة والتكنولوجيا</span> لتوفير أجود
                  أنواع الخضروات والفواكه الطازجة من مزارع مصر إلى أسواق العالم. نضمن لكم جودة
                  المنتجات والتزامنا بأعلى معايير الأمان الغذائي لنكون شريككم الأول في عالم الزراعة.
                </p>

                {/* Optional mini stats */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="px-4 py-2 rounded-2xl bg-white/12 border border-white/15">
                    <p className="text-xs text-white/80">تركيزنا</p>
                    <p className="text-sm font-bold">جودة + أمان غذائي</p>
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-white/12 border border-white/15">
                    <p className="text-xs text-white/80">نطاقنا</p>
                    <p className="text-sm font-bold">من مصر للعالم</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <MissionVisionSection />
      </section>
      <section className="max-w-6xl mx-auto px-4 pb-16">

      <ValuesSection/>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
      <AboutCompanySection/>
      </section>
    </main>
  );
}
