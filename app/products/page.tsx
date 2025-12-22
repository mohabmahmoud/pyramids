"use client";

import React from "react";
import { motion } from "framer-motion";
import FruitsSection from "../components/products/FruitsSection";
import VegetablesSection from "../components/products/VegetablesSection";

export default function ProductsPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-b from-emerald-50/70 via-white to-white">
      <section className="pt-12 pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-72 lg:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
           
            <img
              src="/images/products/cover.jpg"
              alt="منتجات بيراميدزلتصدير الحاصلات الزراعية"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-6 lg:px-12">
                <div className="max-w-2xl text-white space-y-4">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    منتجاتنا
                  </span>

                  <h1 className="text-3xl lg:text-5xl font-extrabold leading-snug">
                    تنوع يرضي جميع الأذواق
                  </h1>

                  <p className="text-base lg:text-lg text-emerald-50/95 leading-relaxed">
                    <span className="font-bold">بيراميدزلتصدير الحاصلات الزراعية</span> — نقدم مجموعة
                    متنوعة من الحاصلات تشمل الخضروات مثل <strong>الطماطم، الخيار، البطاطس، والبصل</strong>،
                    بالإضافة إلى الفاكهة مثل <strong>البرتقال، المانجو، الفراولة، والعنب</strong>.
                  </p>

                  <p className="text-sm lg:text-base text-white/85 leading-relaxed">
                    يتم تصدير منتجاتنا وفق أعلى معايير الجودة العالمية لضمان الحفاظ على الطزاجة والطعم
                    المميز الذي تشتهر به المحاصيل المصرية.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="#products-list"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 transition text-white font-bold"
                    >
                      استعرض المنتجات
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white/15 hover:bg-white/20 transition text-white font-bold border border-white/25"
                    >
                      اطلب عرض سعر
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>
      </section>
<section className="max-w-6xl mx-auto px-4 pb-14">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
  >
    <div className="grid lg:grid-cols-2 gap-10 items-center p-6 lg:p-10">

      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          كيف نُصدر منتجاتنا؟
        </div>

        <h2 className="text-2xl lg:text-3xl font-extrabold text-emerald-900 leading-snug">
          رحلة تصدير تبدأ من المزرعة وتنتهي بثقة العميل
        </h2>

        <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-3">
          <p>
            تبدأ عملية التصدير لدينا من اختيار المزارع بعناية، حيث نحرص على زراعة المحاصيل باستخدام
            <strong> مغذيات طبيعية</strong> خالية تمامًا من المبيدات الكيميائية الضارة، مما يضمن تقديم
            منتجات صحية وآمنة.
          </p>

          <p>
            يعتمد فريق العمل على <strong>تقنيات حديثة</strong> للإشراف على مراحل الزراعة والحصاد
            والتعبئة، مع تطبيق معايير دقيقة في الفرز والتجهيز.
          </p>

          <p>
            يتم تخزين المنتجات ونقلها في <strong>ظروف مثالية</strong> تحافظ على جودتها حتى تصل إلى
            المستهلك النهائي بأفضل حالة.
          </p>

          <p>
            نفخر بتصدير منتجاتنا إلى دول عربية مثل <strong>السعودية، الإمارات، الكويت، وقطر</strong>،
            بالإضافة إلى أسواق دولية مثل <strong>أوروبا، آسيا، وأفريقيا</strong>. ونبني علاقات طويلة
            الأمد من خلال الالتزام بالمواعيد وتوفير المنتجات وفق احتياجات الأسواق المختلفة.
          </p>

          <p>
            تسعى شركة بيراميدزدائمًا لتوسيع نطاق خدماتها لأسواق جديدة، مع الحفاظ على التزامها
            <strong> بالجودة العالية</strong> و<strong>التكلفة التنافسية</strong>.
          </p>
        </div>

    
        <div className="grid sm:grid-cols-3 gap-3 pt-2">
          <div className="rounded-2xl border border-gray-100 bg-emerald-50/50 p-4">
            <p className="text-xs text-gray-500">معاييرنا</p>
            <p className="font-extrabold text-emerald-900">جودة + أمان</p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-blue-50/50 p-4">
            <p className="text-xs text-gray-500">التقنيات</p>
            <p className="font-extrabold text-slate-900">إشراف حديث</p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-amber-50/60 p-4">
            <p className="text-xs text-gray-500">الأسواق</p>
            <p className="font-extrabold text-slate-900">عربي + دولي</p>
          </div>
        </div>
      </div>

  
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.35 }}
        className="relative"
      >
        <div className="relative h-64 lg:h-80 rounded-[2rem] overflow-hidden shadow-lg">
       
          <img
            src="/images/products/export-process.jpg"
            alt="رحلة التصدير"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-transparent" />
        </div>

  
        <div className="absolute -bottom-4 right-4 bg-white rounded-2xl shadow-lg px-4 py-2 border border-gray-100">
          <p className="text-xs text-gray-500">تغطية أسواق متعددة</p>
          <p className="text-sm font-extrabold text-emerald-900">عربي + عالمي</p>
        </div>
      </motion.div>
    </div>
  </motion.div>
</section>


  
        <main dir="rtl" className="min-h-screen bg-gradient-to-b from-emerald-50/70 via-white to-white">
    
      <FruitsSection />
      <VegetablesSection />
    </main>
    </main>
  );
}
