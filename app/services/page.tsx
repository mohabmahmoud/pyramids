// src/app/services/page.tsx
'use client';

import React from "react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-b from-emerald-50/70 via-white to-white">

      {/* ===== Hero Section ===== */}
      <section className="pt-12 pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-72 lg:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <img
              src="/images/services.jpg"
              alt="تصدير الحاصلات الزراعية"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-black/30 to-transparent" />

            <div className="absolute inset-y-0 right-0 flex items-center px-8 lg:px-12">
              <div className="max-w-xl text-white space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  خدماتنا
                </span>
                <h1 className="text-3xl lg:text-4xl font-extrabold leading-snug">
                  حلول متكاملة لتصدير
                  <span className="text-emerald-200"> الحاصلات الزراعية</span>
                </h1>
                <p className="text-sm lg:text-base text-emerald-50/90 leading-relaxed">
                  من اختيار المحصول وفرزه وتعبئته، إلى النقل المبرد والاستشارات المتخصصة، نرافقك في كل خطوة
                  لضمان وصول منتجاتك إلى الأسواق العالمية بأعلى مستويات الجودة.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Detailed Sections ===== */}
      <section className="max-w-6xl mx-auto px-4 pb-16 space-y-12">

        <ServiceCard
          title="تصدير المنتجات الزراعية"
          subtitle="من المزرعة إلى الأسواق العالمية"
          image="/images/services/export.jpg"
          right
        >
          <p className="mb-3">
            تُعد شركة <strong>بيراميدز لتصدير الحاصلات الزراعية</strong> من الشركات الرائدة في مجال
            تصدير الخضروات والفواكه الطازجة من المزارع المصرية إلى مختلف الأسواق العالمية، مع
            الالتزام الكامل بتطبيق أعلى معايير الجودة والسلامة الغذائية.
          </p>
          <p className="mb-3">
            نقوم بتصدير مجموعة واسعة من المحاصيل مثل <strong>الطماطم، الفراولة، البطاطس، البصل</strong>
            إلى جانب الفواكه مثل <strong>البرتقال والموز</strong>، مع مراعاة المواصفات الخاصة بكل سوق.
          </p>
          <p>
            نعتمد على شراكات قوية مع المزارعين المحليين لضمان استمرارية التوريد وتحسين جودة المحصول،
            مما يمكننا من تلبية احتياجات عملائنا بثقة واستدامة.
          </p>
        </ServiceCard>

        <ServiceCard
          title="التعبئة والتغليف"
          subtitle="حماية المنتج والحفاظ على طزاجته"
          image="/images/services/packaging.jpeg"
        >
          <p className="mb-3">
            تمثل مرحلة <strong>التعبئة والتغليف</strong> عنصرًا أساسيًا في نجاح عملية التصدير، حيث نحرص
            على حماية المنتجات من التلف والحفاظ على جودتها أثناء النقل والتخزين.
          </p>
          <p className="mb-3">
            نستخدم عبوات <strong>صديقة للبيئة</strong>، ويتم فرز المنتجات بعناية وفق الحجم ودرجة النضج،
            بما يضمن تقليل الفاقد وتحقيق أفضل مظهر نهائي للمنتج.
          </p>
          <p>
            كما يتم تصميم العبوات بطريقة تسمح بتهوية مناسبة، مما يقلل من فرص التعفن ويحافظ على
            الطزاجة لأطول فترة ممكنة.
          </p>
        </ServiceCard>

        <ServiceCard
          title="خدمات النقل واللوجستيات"
          subtitle="وصول آمن وفي الوقت المحدد"
          image="/images/services/transport.jpg"
          right
        >
          <p className="mb-3">
            توفر شركة بيراميدز منظومة نقل متكاملة تضمن وصول الشحنات في <strong>الوقت المحدد</strong>
            وبأفضل حالة ممكنة، مع الالتزام بكافة الاشتراطات اللوجستية.
          </p>
          <p className="mb-3">
            نعتمد على وسائل نقل مبردة تشمل الشاحنات المبردة، بالإضافة إلى الشحن البحري والجوي، ويتم
            اختيار الوسيلة الأنسب وفق طبيعة المنتج ومتطلبات السوق.
          </p>
          <p>
            كما نوفر أنظمة <strong>تتبع حديثة</strong> تتيح لعملائنا متابعة شحناتهم لحظة بلحظة، مما يعزز
            الثقة والشفافية.
          </p>
        </ServiceCard>

        <ServiceCard
          title="استشارات وخدمات دعم التصدير"
          subtitle="خبرة عملية لدعم قراراتك التجارية"
          image="/images/services/consulting.jpg"
        >
          <p className="mb-3">
            نقدم خدمات <strong>استشارية متخصصة</strong> للشركات الراغبة في تصدير منتجاتها الزراعية، مع
            دراسة دقيقة للأسواق المستهدفة ومتطلباتها التنظيمية.
          </p>
          <p className="mb-3">
            نساعد عملاءنا في اختيار <strong>أفضل المحاصيل</strong> المناسبة للتصدير، ونوفر حلولًا عملية
            للتسويق والدخول إلى أسواق جديدة بثقة.
          </p>
          <p>
            كما نقدم إرشادات شاملة حول <strong>المعايير الصحية والتشريعات الجمركية</strong>، ونرافق
            عملاءنا من بداية التعاقد وحتى ما بعد التسليم لبناء شراكات طويلة الأمد.
          </p>
        </ServiceCard>
      </section>
    </main>
  );
}

/* ===== Service Card ===== */

function ServiceCard({ title, subtitle, image, right = false, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative"
    >
      <div
        className={`group bg-white rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 p-6 lg:p-10 ${
          right ? 'lg:[direction:rtl]' : 'lg:[direction:ltr]'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-3 [direction:rtl]">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-emerald-900">
              {title}
            </h2>
            <p className="text-sm lg:text-base text-gray-500">{subtitle}</p>
            <div className="text-sm lg:text-base text-gray-700 leading-relaxed space-y-2">
              {children}
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="relative h-64 lg:h-72 rounded-[2rem] overflow-hidden shadow-lg">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-black/5 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
