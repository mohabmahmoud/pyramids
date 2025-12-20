"use client";

import { motion } from "framer-motion";
import type { ProductItem } from "./product";

type ProductCardProps = ProductItem & {
  idx: number;
};

export default function ProductCard({ name, image, category, idx }: ProductCardProps) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-3xl
        border border-white/35
        bg-white/60 backdrop-blur-xl
        shadow-[0_12px_40px_rgba(15,23,42,0.12)]
        hover:shadow-[0_18px_55px_rgba(15,23,42,0.18)]
        transition-all duration-300
      "
    >
      <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-sky-300/25 blur-3xl" />

      {/* image */}
      <div className="relative h-60">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/images/products/placeholder.jpg";
          }}
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

        {/* glass badge */}
        <div className="absolute top-3 right-3">
          <span
            className="
              inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              text-[11px] font-extrabold
              text-emerald-900
              bg-white/55 backdrop-blur-md
              border border-white/50
              shadow-sm
            "
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {category}
          </span>
        </div>
      </div>

      {/* content */}
      <div className="relative p-4">
        <h3 className="text-base font-extrabold text-slate-900">{name}</h3>
        <p className="mt-1 text-xs text-slate-700/70">
          طازج • فرز وتعبئة • جاهز للتصدير
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span
            className="
              text-xs font-bold text-emerald-900
              px-3 py-1 rounded-full
              bg-emerald-50/60 backdrop-blur-md
              border border-emerald-200/60
            "
          >
            {category}
          </span>

          <span className="text-[11px] text-slate-500/80">Pyramids</span>
        </div>
      </div>

      <div
        className="
          pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          bg-gradient-to-tr from-white/0 via-white/15 to-white/0
        "
      />
    </div>
  );
}
