"use client";

import React from "react";
import { motion } from "framer-motion";
import { MissionVisionSection } from "../components/about/MissionVisionSection";
import { ValuesSection } from "../components/about/ValuesSection";
import { AboutCompanySection } from "../components/about/AboutCompanySection";
import FullScreenCarousel from "../components/Carousel";

export default function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-b from-emerald-50/70 via-white to-white">
    
            <FullScreenCarousel
                   heightClassName="h-[75vh]"
                   slides={[
                     {
                       id: "0",
                       image: "/images/about.jpg",
                       header: "من نحن",
                       title: " رحلتنا في عالم الفواكة والخضروات الطازجة",
                       subtitle:   "نجمع بين الخبرة والتكنولوجيا لتوفير أجود أنواع الخضروات والفواكه الطازجة من مزارع مصر إلى أسواق العالم. نضمن لكم جودة المنتجات والتزامنا بأعلى معايير الأمان الغذائي لنكون شريككم الأول في عالم الزراعة.",
                       actions: [
                         {
                           id: "fruits",
                           label: "استعرض الفاكهة",

                           
                           variant: "primary",
                         },
                       ],
                     },
                   ]}
                 />



     
      <section className="max-w-6xl mx-auto px-4 pb-16 pt-8">
        <MissionVisionSection />
      </section>
      <section className="max-w-6xl mx-auto px-4 pb-16">

      <ValuesSection/>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
      <AboutCompanySection/>
      </section>
    </main>
  );
}
