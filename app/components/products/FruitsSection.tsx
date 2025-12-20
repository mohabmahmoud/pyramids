"use client";

import { ProductItem } from "./product";
import ProductCard from "./ProductCard";



const fruits: ProductItem[] = [
  { name: "ليمون", category: "فاكهه", image: "/images/products/fruits/lemon.jpg" },
  { name: "برتقال", category: "فاكهه", image: "/images/products/fruits/orange.jpg" },
  { name: "موز", category: "فاكهه", image: "/images/products/fruits/banana.jpg" },
  { name: "مانجو", category: "فاكهه", image: "/images/products/fruits/mango.jpg" },
  { name: "عنب", category: "فاكهه", image: "/images/products/fruits/grapes.jpg" },
  { name: "جوافة", category: "فاكهه", image: "/images/products/fruits/guava.jpg" },
  { name: "قشطة", category: "فاكهه", image: "/images/products/fruits/cherimoya.jpg" },
  { name: "يوسفي", category: "فاكهه", image: "/images/products/fruits/mandarin.jpg" },
  { name: "رمان", category: "فاكهه", image: "/images/products/fruits/pomegranate.jpg" },
  { name: "بطيخ", category: "فاكهه", image: "/images/products/fruits/watermelon.jpg" },
  { name: "فراولة", category: "فاكهه", image: "/images/products/fruits/strawberry.jpg" },
];

export default function FruitsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-14">

      

   
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 pt-8">
        {fruits.map((item, idx) => (
  <ProductCard key={item.name} {...item
  } idx={idx} />
        ))}
      </div>
    </section>
  );
}
