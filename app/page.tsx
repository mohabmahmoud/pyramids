// src/app/page.tsx
import FullScreenCarousel from "./components/Carousel";
import ContactCTA from "./components/ContactCTA";
import ProductShowcase from "./components/ProductShowcase";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (  
    <main dir="rtl">
      <FullScreenCarousel  slides={[
    //  { id:"0",image:"/images/headers/v-1.jpg",title:"تصدير الحاصلات الزراعية",subtitle:"حلول متكاملة لتصدير الحاصلات الزراعية",ctaText:"استشارة",ctaHref:"/contact" }, 
    //  { id:"2",image:"/images/headers/f-1.jpg",title:"تصدير الحاصلات الزراعية",subtitle:"حلول متكاملة لتصدير الحاصلات الزراعية",ctaText:"استشارة",ctaHref:"/contact" },
    //  { id:"2",image:"/images/headers/v-2.jpg",title:"تصدير الحاصلات الزراعية",subtitle:"حلول متكاملة لتصدير الحاصلات الزراعية",ctaText:"استشارة",ctaHref:"/contact" },
    // 
    ]} />

     
    </main>
  );
}
