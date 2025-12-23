"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsWhatsapp } from "react-icons/bs";

const WHATSAPP_NUMBER = "201200275444"; // ← عدّل رقم الواتساب هنا بصيغة دولية بدون +

const FloatingWhatsAppButton: React.FC = () => {
  const pathname = usePathname();
  const [showLabel, setShowLabel] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    // بداية الأنيميشن
    setAnimateIn(true);
    setShowLabel(true);

    const labelTimer = setTimeout(() => setShowLabel(false), 2500);

    return () => {
      clearTimeout(labelTimer);
    };
  }, [pathname]);

  if (pathname !== "/") return null;

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* بلونة "تواصل معانا" */}
      <div
        className={`
          overflow-hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-md
          transition-all duration-700 ease-out
          ${showLabel ? "max-w-xs opacity-100 translate-x-0" : "max-w-0 opacity-0 -translate-x-3"}
        `}
      >
        تواصل معانا
      </div>

      {/* زرار واتساب مدوّر */}
      <Link
        href={waLink}
        target="_blank"
        aria-label="تواصل معنا عبر واتساب"
        className={`
          flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg
          transition-all duration-500 ease-out
          hover:bg-emerald-600 hover:shadow-xl hover:-translate-y-1
          transform
          ${animateIn
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-90"
          }
        `}
      >
        <BsWhatsapp size={30} />
      </Link>
    </div>
  );
};

export default FloatingWhatsAppButton;
