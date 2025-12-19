"use client";

import React from "react";
import { motion } from "framer-motion";

type ProductItem = {
  name: string;
  category: string; // "فاكهه"
  image: string;    // path
};

const fruits: ProductItem[] = [
  { name: "ليمون", category: "فاكهه", image: "/images/products/fruits/lemon.jpg" },
  { name: "برتقال", category: "فاكهه", image: "/images/products/fruits/orange.jpg" },
  { name: "موز", category: "فاكهه", image: "/images/products/fruits/banana.jpg" },
  { name: "مانجو", category: "فاكهه", image: "/images/products/fruits/mango.jpg" },
  { name: "عنب", category: "فاكهه", image: "/images/products/fruits/grapes.jpg" },
  { name: "جوافة", category: "فاكهه", image: "/images/products/fruits/guava.jpg" },
  { name: "قشطة", category: "فاكهه", image: "/images/products/fruits/cherimoya.jpg" },
  { name: "يوسفي", category: "فاكهه", image: "/images/products/fruits/mandarin.jpg" },
  { name: "رمان", category: "فاكهه", image: "/images/products/fruits/pomegranate.jpg" },
  { name: "بطيخ", category: "فاكهه", image: "/images/products/fruits/watermelon.jpg" },
  { name: "فراولة", category: "فاكهه", image: "/images/products/fruits/strawberry.jpg" },
];

export default function FruitsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-14">
      {/* Header */}
      <div className="text-center mb-7">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          الفاكهة
        </div>
        <h2 className="mt-3 text-2xl lg:text-3xl font-extrabold text-emerald-900">
          تنوّع يرضي جميع الأذواق
        </h2>
        <p className="mt-2 text-sm lg:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          نقدم فواكه طازجة وفق أعلى معايير الجودة للحفاظ على الطزاجة والطعم المميز للمحاصيل المصرية.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {fruits.map((item, idx) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.03 }}
            className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-40">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                onError={(e) => {
                  // fallback لو الصورة مش موجودة
                  (e.currentTarget as HTMLImageElement).src = "/images/products/placeholder.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-emerald-800 border border-white">
                  شركة الفيشاوي / {item.category}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-base font-extrabold text-slate-900">{item.name}</h3>
              <p className="mt-1 text-xs text-gray-500">
                طازج • فرز وتعبئة • جاهز للتصدير
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                  فاكهة
                </span>
                <span className="text-[11px] text-gray-400">Pyramids</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
