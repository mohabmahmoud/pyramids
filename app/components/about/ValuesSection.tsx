import { motion } from "framer-motion";
import {
  FiShield,
  FiRefreshCw,
  FiThumbsUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

export function ValuesSection() {
  const values = [
    {
      title: "الثقة",
      icon: <FiShield className="text-blue-700 text-2xl" />,
      ring: "from-blue-100/80 via-blue-50/60 to-transparent",
      iconBg: "bg-blue-600/10",
      text: "بناء علاقات طويلة الأمد مع العملاء والموردين من خلال الشفافية والمصداقية.",
    },
    {
      title: "الاستدامة",
      icon: <FiRefreshCw className="text-green-700 text-2xl" />,
      ring: "from-green-100/80 via-green-50/60 to-transparent",
      iconBg: "bg-green-600/10",
      text: "دعم الممارسات الزراعية الصديقة للبيئة وضمان الحفاظ على الموارد الطبيعية للأجيال القادمة.",
    },
    {
      title: "الجودة",
      icon: <FiThumbsUp className="text-emerald-700 text-2xl" />,
      ring: "from-emerald-100/80 via-emerald-50/60 to-transparent",
      iconBg: "bg-emerald-600/10",
      text: "تقديم منتجات طازجة وصحية متوافقة مع المعايير الدولية.",
    },
    {
      title: "المسؤولية الاجتماعية",
      icon: <FiUsers className="text-red-700 text-2xl" />,
      ring: "from-red-100/80 via-red-50/60 to-transparent",
      iconBg: "bg-red-600/10",
      text: "دعم المجتمعات المحلية من خلال تمكين المزارعين وتعزيز فرص العمل في القطاع الزراعي.",
    },
    {
      title: "الابتكار",
      icon: <FiZap className="text-purple-700 text-2xl" />,
      ring: "from-purple-100/80 via-purple-50/60 to-transparent",
      iconBg: "bg-purple-600/10",
      text: "تطبيق أحدث التقنيات في الزراعة والتصدير لضمان كفاءة العمليات وجودة المنتجات.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-emerald-800">القيم</span>
        </div>

        <h2 className="mt-4 text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
          ما نؤمن به ونلتزم به
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-sm lg:text-base text-gray-600 leading-relaxed">
          قيمنا هي الأساس الذي نبني عليه جودة منتجاتنا وعلاقتنا مع عملائنا وشركائنا.
        </p>
      </motion.div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v, idx) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut", delay: idx * 0.05 }}
            className="relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 p-6"
          >
            <div className={`absolute inset-x-0 -top-14 h-40 bg-gradient-to-b ${v.ring}`} />
            <div className="relative">
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-2xl ${v.iconBg} flex items-center justify-center`}>
                  {v.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-extrabold text-slate-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{v.text}</p>
                </div>
              </div>

              <div className="mt-5 h-px w-full bg-gradient-to-l from-transparent via-gray-200 to-transparent" />

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-500">قيمة أساسية</span>
                <span className="text-xs font-semibold text-emerald-700">Pyramids</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
