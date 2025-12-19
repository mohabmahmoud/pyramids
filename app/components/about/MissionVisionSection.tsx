// ===== Mission & Vision Section (About #2) =====
import { motion } from "framer-motion";
import { FiTarget, FiEye } from "react-icons/fi";

export function MissionVisionSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-14">
      <div className="grid gap-6 lg:grid-cols-2">
      
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.25rem] bg-white border border-emerald-100 shadow-xl p-6 lg:p-8"
        >
          <div className="absolute inset-x-0 -top-16 h-40 bg-gradient-to-b from-emerald-100/80 via-emerald-50/60 to-transparent" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 flex items-center justify-center">
                <FiTarget className="text-emerald-700 text-2xl" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-extrabold text-emerald-900">
                  الرسالة
                </h2>
                <p className="text-sm text-gray-500">قيمنا في كل شحنة</p>
              </div>
            </div>

            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
              تلتزم شركة الفيشاوي بتوفير منتجات زراعية طازجة وطبيعية بأعلى جودة للعملاء حول
              العالم، مع ضمان تحقيق قيمة مضافة للشركاء والمزارعين المحليين. تهدف الشركة إلى
              دعم الاستدامة الزراعية وحماية البيئة، مع تعزيز علاقاتها مع العملاء من خلال
              الالتزام بالمصداقية والكفاءة والشفافية في جميع عملياتها.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <BadgePill label="جودة عالية" />
              <BadgePill label="شفافية" />
              <BadgePill label="استدامة" />
              <BadgePill label="دعم المزارعين" />
            </div>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="relative overflow-hidden rounded-[2.25rem] bg-white border border-blue-100 shadow-xl p-6 lg:p-8"
        >
          <div className="absolute inset-x-0 -top-16 h-40 bg-gradient-to-b from-blue-100/70 via-blue-50/60 to-transparent" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center">
                <FiEye className="text-blue-700 text-2xl" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-extrabold text-slate-900">
                  الرؤية
                </h2>
                <p className="text-sm text-gray-500">إلى أين نتجه</p>
              </div>
            </div>

            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
              أن تكون شركة الفيشاوي الخيار الأول عالميًا في مجال تصدير الخضروات والفواكه
              الطازجة، وأن تسهم في تعزيز سمعة المنتجات الزراعية المصرية على المستوى الدولي من
              خلال تقديم أعلى مستويات الجودة والالتزام بمعايير الزراعة المستدامة. تسعى الشركة
              لتكون نموذجًا يحتذى به في الابتكار والاستدامة في القطاع الزراعي.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <BadgePill label="ريادة عالمية" tone="blue" />
              <BadgePill label="ابتكار" tone="blue" />
              <BadgePill label="سمعة مصرية" tone="blue" />
              <BadgePill label="معايير عالمية" tone="blue" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BadgePill({ label, tone = "emerald" }: { label: string; tone?: "emerald" | "blue" }) {
  const cls =
    tone === "blue"
      ? "bg-blue-50 text-blue-700 border-blue-100"
      : "bg-emerald-50 text-emerald-700 border-emerald-100";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${cls}`}>
      {label}
    </span>
  );
}
