// src/app/page.tsx
import FullScreenCarousel from "./components/Carousel";
import ContactCTA from "./components/ContactCTA";
import ValuesCards from "./components/home/ValuesCards";
import ProductShowcase from "./components/ProductShowcase";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (  
    <main dir="rtl">
    <FullScreenCarousel
          slides={[
             {
            id: 1,
            image: "/images/headers/f-1.jpg",
            header: "فاكهة",
            title: "تنوّع يرضي جميع الأذواق",
            subtitle: " نقدم فواكه طازجة وفق أعلى معايير الجودة للحفاظ على الطزاجة والطعم المميز للمحاصيل المصرية.",
            actions: [
              {
                id: "fruits",
                label: "استعرض الفاكهة",
                variant: "primary",
                href: "/fruits",
              },
            ],
          },
            {
    id: 2,
    video: {
      src: "/our-services.mp4",
      loop: true,
      muted: true,
    },
    header: "خبرة في تصدير الحاصلات الزراعية",
    title: "من المزرعة إلى العالم بجودة عالمية",
    subtitle: "إدارة كاملة لسلسلة التوريد من الحصاد حتى وصول الشحنة.",
    actions: [
      {
        id:"contact",
        label: "خدماتنا",
        href: "/services",
        variant: "primary",
      },
    ],
            },
             
        
          ]}
        />
         <div className="mx-auto max-w-6xl pt-8">
          <p className="text-center text-xx font-bold text-emerald-700 ">
            لماذا نحن؟
          </p>
        <h1 className="text-center text-2xl font-bold text-gray-800 md:text-3xl pb-4">
          ما يميزنا 
        </h1>

        <ValuesCards />
      </div>
    

     
    </main>
  );
}
