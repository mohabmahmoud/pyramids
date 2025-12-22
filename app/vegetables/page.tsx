"use client";

import React, { useCallback, useRef } from "react";
import FruitsSection from "../components/products/FruitsSection";
import FullScreenCarousel from "../components/Carousel";
import { motion } from "framer-motion";
import VegetablesSection from "../components/products/VegetablesSection";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollToY(targetY: number, duration = 1100) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  const start = performance.now();

  const step = (now: number) => {
    const elapsed = now - start;
    const t = Math.min(1, elapsed / duration);
    const eased = easeInOutCubic(t);

    window.scrollTo(0, startY + diff * eased);

    if (t < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

export default function Page() {
  const fruitsRef = useRef<HTMLDivElement | null>(null);

  const scrollToFruits = useCallback(() => {
    const el = fruitsRef.current;
    if (!el) return;
    const delayMs = 150;

    const headerOffset = 96; 
     setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const targetY = window.scrollY + rect.top - headerOffset;
      smoothScrollToY(targetY, 1200);
    }, delayMs);
  }, []);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-emerald-50/70 via-white to-white"
    >
      <FullScreenCarousel
        heightClassName="h-[75vh]"
        slides={[
          {
            id: "0",
            image: "/images/headers/v-1.jpg",
            header: "خضروات",
            title: "تنوّع يرضي جميع الأذواق",
            subtitle: " نقدم  طازجة وفق أعلى معايير الجودة للحفاظ على الطزاجة والطعم المميز للمحاصيل المصرية.",
            actions: [
              {
                id: "fruits",
                label: "استعرض الخضروات",
                onClick: scrollToFruits,
                variant: "primary",
              },
            ],
          },
        ]}
      />
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
            src="/images/headers/export.jpg"
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

      <div ref={fruitsRef} className="scroll-mt-32" />

      <VegetablesSection />
    </main>
  );
}
