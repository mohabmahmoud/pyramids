"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiFileText } from "react-icons/fi";

export default function ContactPage() {
  const companyName = "شركة بيراميدز لاستيراد وتصدير الحاصلات الزراعية";
  const address =
    "الخط الوسطاني الربعمائة – قرية دقيشوا – مركز كفر الدوار – البحيرة";
  const phone = "01223893042";
  const email = "elfishawy_co400@yahoo.com";
  const taxNumber = "613-640-365";
  const lat = 31.1333; 
  const lng = 30.1333; 

  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-emerald-50/70 via-white to-white"
    >

      <section className="pt-12 pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-72 lg:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <img
              src="/images/contact.jpg" 
              alt="تواصل معنا"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-black/30 to-transparent" />

            <div className="absolute inset-y-0 right-0 flex items-center px-8 lg:px-12">
              <div className="max-w-xl text-white space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  تواصل معنا
                </span>

                <h1 className="text-3xl lg:text-4xl font-extrabold leading-snug">
                  تواصل معنا لبدء
                  <span className="text-emerald-200"> شركتك المُثمرة</span>
                </h1>

                <p className="text-sm lg:text-base text-emerald-50/90 leading-relaxed">
                  {companyName} — جاهزون للرد على استفساراتك وتقديم الدعم في كل
                  خطوة من التصدير والتوريد.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={`tel:+20${phone.replace(/^0/, "")}`}
                    className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500/90 hover:bg-emerald-500 text-white px-5 py-2.5 text-sm font-semibold shadow-lg transition"
                  >
                    <FiPhone />
                    اتصل الآن
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white/15 hover:bg-white/20 text-white px-5 py-2.5 text-sm font-semibold border border-white/20 transition"
                  >
                    <FiMail />
                    راسلنا
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl p-6 lg:p-10"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-emerald-900">
                  بيانات التواصل
                </h2>
                <p className="mt-2 text-sm lg:text-base text-gray-500">
                  كل طرق التواصل الرسمية الخاصة بالشركة.
                </p>
              </div>

              <InfoRow
                icon={<FiMapPin />}
                title="العنوان"
                value={address}
              />
              <InfoRow
                icon={<FiPhone />}
                title="اتصل بنا"
                value={phone}
                href={`tel:+20${phone.replace(/^0/, "")}`}
              />
              <InfoRow
                icon={<FiMail />}
                title="البريد الإلكتروني"
                value={email}
                href={`mailto:${email}`}
              />
              <InfoRow
                icon={<FiFileText />}
                title="رقم التسجيل الضريبي"
                value={taxNumber}
              />
            </div>

            <div className="space-y-4">
              <div className="rounded-[2rem] border border-gray-100 bg-emerald-50/50 p-6">
                <h3 className="text-lg font-extrabold text-emerald-900">
                  ارسل رسالة سريعة
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  اكتب بياناتك وسنتواصل معك في أقرب وقت.
                </p>

                <div className="mt-4 space-y-3">
                  <input
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="الاسم"
                  />
                  <input
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="رقم الهاتف"
                  />
                  <textarea
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200 min-h-[120px]"
                    placeholder="اكتب رسالتك..."
                  />
                  <button
                    type="button"
                    className="w-full rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-sm font-bold shadow-lg transition"
                  >
                    إرسال
                  </button>
                
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden"
        >
          <div className="p-6 lg:p-8 border-b border-gray-100">
            <h2 className="text-xl lg:text-2xl font-extrabold text-emerald-900">
              موقعنا على الخريطة
            </h2>
            <p className="mt-2 text-sm lg:text-base text-gray-500">
              يمكنك الوصول إلينا بسهولة عبر Google Maps.
            </p>
          </div>

          <div className="relative h-[360px] lg:h-[460px]">
            <iframe
              src={mapSrc}
              loading="lazy"
              className="w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location Map"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}


function InfoRow({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const row = (
    <div className="flex items-start gap-3">
      <span className="w-12 h-12 rounded-2xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0">
        {icon}
      </span>

      <div className="space-y-1">
        <p className="text-sm font-extrabold text-emerald-900">{title}</p>
        <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <div className="rounded-[2rem] border border-gray-100 bg-white p-4 hover:shadow-md transition-shadow">
      {href ? (
        <a href={href} className="block">
          {row}
        </a>
      ) : (
        row
      )}
    </div>
  );
}
