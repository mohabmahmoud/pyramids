"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

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
 
       
 
    
       <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 pt-8">
         {vegetables.map((item, idx) => (
   <ProductCard key={item.name} {...item
   } idx={idx} />
         ))}
       </div>
     </section>
   );
}
