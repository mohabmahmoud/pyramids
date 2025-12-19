"use client";

import React from "react";
import { motion } from "framer-motion";

type ProductItem = {
  name: string;
  category: string; // "خضروات"
  image: string;
};

const vegetables: ProductItem[] = [
  { name: "فلفل", category: "خضروات", image: "/images/products/vegetables/pepper.png" },
  { name: "خس", category: "خضروات", image: "/images/products/vegetables/lettuce.png" },
  { name: "طماطم", category: "خضروات", image: "/images/products/vegetables/tomato.png" },
  { name: "خيار", category: "خضروات", image: "/images/products/vegetables/cucumber.png" },
  { name: "بصل", category: "خضروات", image: "/images/products/vegetables/onion.png" },
  { name: "ثوم", category: "خضروات", image: "/images/products/vegetables/garlic.png" },
  { name: "بطاطس", category: "خضروات", image: "/images/products/vegetables/potato.png" },
  { name: "جزر", category: "خضروات", image: "/images/products/vegetables/carrot.png" },
  { name: "كوسة", category: "خضروات", image: "/images/products/vegetables/zucchini.png" },
  { name: "باذنجان", category: "خضروات", image: "/images/products/vegetables/eggplant.png" },
  { name: "بطاطا", category: "خضروات", image: "/images/products/vegetables/sweet-potato.png" },
];

export default function VegetablesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-14">
      {/* Header */}
      <div className="text-center mb-7">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          الخضروات
        </div>
        <h2 className="mt-3 text-2xl lg:text-3xl font-extrabold text-emerald-900">
          خضروات طازجة بجودة تصديرية
        </h2>
        <p className="mt-2 text-sm lg:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          نختار أفضل المحاصيل بعناية ونلتزم بمعايير الفرز والتعبئة لضمان وصول المنتج بأعلى جودة.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {vegetables.map((item, idx) => (
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
                  (e.currentTarget as HTMLImageElement).src =
                    "/images/products/placeholder.png";
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
                  خضروات
                </span>
                <span className="text-[11px] text-gray-400">Pyramids / ElFishawy</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
