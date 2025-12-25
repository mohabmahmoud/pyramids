"use client";

import React from "react";
import { Handshake, Recycle, ThumbsUp, ShieldCheck, Sparkles } from "lucide-react";

type ValueItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const values: ValueItem[] = [
  {
    icon: <Handshake className="h-7 w-7" />,
    title: "الثقة",
    description:
      "بناء علاقات طويلة الأمد مع العملاء والموردين من خلال الشفافية والمصداقية",
  },
  {
    icon: <Recycle className="h-7 w-7" />,
    title: "الاستدامة",
    description:
      "دعم الممارسات الزراعية الصديقة للبيئة وضمان الحفاظ على الموارد الطبيعية للأجيال القادمة",
  },
  {
    icon: <ThumbsUp className="h-7 w-7" />,
    title: "الجودة",
    description:
      "تقديم منتجات طازجة وصحية متوافقة مع المعايير الدولية",
  },
  
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: "الابتكار",
    description:
      "تطبيق أحدث التقنيات في الزراعة والتصدير لضمان كفاءة العمليات وجودة المنتجات",
  },
];

const ValuesCards: React.FC = () => {
  return (
    <section dir="rtl" className="w-full">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {values.map((item) => (
          <div
            key={item.title}
            className="
              group
              flex flex-col items-center text-center
              rounded-2xl border border-gray-200
              bg-gray-50
              p-6
              mx-2
              shadow-sm
              py-25
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:border-emerald-500
              hover:bg-emerald-500
              hover:shadow-lg
            "
          >

            <div className="mb-4 flex items-center justify-center">
              <div
                className="
                  flex h-16 w-16 items-center justify-center
                  rounded-full bg-white
                  text-emerald-600
                  shadow-sm
                  transition-transform transition-colors duration-300 ease-out
                  group-hover:scale-105
                "
              >
                {item.icon}
              </div>
            </div>

            {/* Title */}
            <h3
              className="
                mb-2 text-base font-semibold
                text-gray-800
                transition-colors duration-300 ease-out
                group-hover:text-white
              "
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="
                text-sm leading-relaxed
                text-gray-500
                transition-colors duration-300 ease-out
                group-hover:text-emerald-50
              "
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesCards;
