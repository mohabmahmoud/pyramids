// src/app/page.tsx
import ContactCTA from "./components/ContactCTA";
import ProductShowcase from "./components/ProductShowcase";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (  
    <main dir="rtl">
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            تصدير الحاصلات الزراعية عالية الجودة
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            نربط المزارعين المحليين بالأسواق العالمية بأعلى معايير الجودة
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
              استعرض المنتجات
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition">
              اتصل بنا
            </button>
          </div>
        </div>
      </section>

      <ProductShowcase />
      <Services />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
