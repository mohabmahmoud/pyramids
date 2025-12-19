"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiGlobe, FiCheckCircle , FiZap } from "react-icons/fi";

export function AboutCompanySection() {
  const bullets = [
    {
      icon: <FiGlobe className="text-blue-700 text-xl" />,
      title: "توسع عالمي",
      text: "تطوير استراتيجيات جديدة للتوسع في الأسواق العالمية مع التركيز على استيفاء متطلبات الجودة والسلامة الغذائية.",
    },
    {
      icon: <FiZap className="text-purple-700 text-xl" />,
      title: "ابتكار مستمر",
      text: "تعزيز الابتكار في العمليات الزراعية والتصديرية لضمان منتجات متوافقة مع أعلى المعايير الدولية.",
    },
    {
      icon: <FiCheckCircle className="text-green-700 text-xl" />,
      title: "استدامة وحماية البيئة",
      text: "اعتماد ممارسات زراعية مستدامة وتقنيات تقلل من الأثر البيئي.",
    },
    {
      icon: <FiCheckCircle className="text-emerald-700 text-xl" />,
      title: "جودة وسعر تنافسي",
      text: "توفير منتجات طازجة وآمنة بأسعار تنافسية لتلبية توقعات العملاء في الدول العربية والأجنبية.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-xl p-6 lg:p-10"
      >
        <div className="absolute inset-x-0 -top-24 h-56 bg-gradient-to-b from-emerald-100/70 via-blue-50/60 to-transparent pointer-events-none" />

        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 shadow-sm">
              <FiCalendar className="text-emerald-700" />
              <span className="text-xs font-semibold text-emerald-800">
                خبرة ممتدة منذ 2007
              </span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug">
              خبرة عميقة في تصدير الخضروات والفاكهة المصرية للأسواق العربية والدولية
            </h2>

            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
              شركة الفيشاوي للاستيراد والتصدير للحاصلات الزراعية تعد واحدة من أبرز الشركات المتخصصة في
              تصدير الخضروات والفاكهة المصرية إلى الأسواق العربية والدولية. تمتد خبرتنا لأكثر من{" "}
              <span className="font-bold text-emerald-800">17 عامًا</span> منذ تأسيسنا في{" "}
              <span className="font-bold text-emerald-800">عام 2007</span>، حيث نعمل على توفير منتجات
              زراعية عالية الجودة وبأقل تكلفة ممكنة لتلبية احتياجات العملاء في مختلف أنحاء العالم.
            </p>

            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
              رؤيتنا تتمثل في أن نكون{" "}
              <span className="font-bold text-emerald-800">الشريك الأول</span> للمنتجات الزراعية المصرية
              في الأسواق العالمية.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {bullets.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-gray-100 bg-white/80 p-4 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center">
                      {b.icon}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm">
                        {b.title}
                      </h3>
                      <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                        {b.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative h-64 lg:h-80 rounded-[2rem] overflow-hidden shadow-lg"
            >
              
              <img
                src="/images/about/company.jpg"
                alt="عن شركة الفيشاوي"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/15 to-transparent" />
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4 mt-5">
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <p className="text-xs text-gray-500">سنوات الخبرة</p>
                <p className="text-2xl font-extrabold text-emerald-800 mt-1">17+</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <p className="text-xs text-gray-500">تأسست عام</p>
                <p className="text-2xl font-extrabold text-emerald-800 mt-1">2007</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <p className="text-xs text-gray-500">أسواق مستهدفة</p>
                <p className="text-sm font-bold text-slate-900 mt-2">عربية ودولية</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <p className="text-xs text-gray-500">وعدنا</p>
                <p className="text-sm font-bold text-slate-900 mt-2">جودة + أمان + سعر</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
