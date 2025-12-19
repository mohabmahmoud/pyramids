'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'أحمد السالم',
      company: 'مستورد - هولندا',
      image: '👨🏽',
      content: 'تعاملنا مع مزرعة الخير منذ 5 سنوات ونشهد بجودة منتجاتهم وموثوقيتهم في التسليم. تمورهم من أفضل ما تذوقنا في أوروبا.',
      rating: 5,
      date: 'يناير 2024'
    },
    {
      id: 2,
      name: 'سارة محمد',
      company: 'مزارعة شريكة - القصيم',
      image: '👩🏽',
      content: 'ساعدوني في تصدير منتجاتي لأول مرة، وكانت العملية سلسة ومحترفة. زادت إيرادات مزرعتي بنسبة 40% بعد التعاون معهم.',
      rating: 5,
      date: 'ديسمبر 2023'
    },
    {
      id: 3,
      name: 'يوسف القاسم',
      company: 'تاجر جملة - الإمارات',
      image: '👨🏽‍💼',
      content: 'التمور التي نستوردها منهم تلاقي إقبالاً كبيراً في الأسواق الإماراتية. الجودة ثابتة والخدمة ممتازة.',
      rating: 4,
      date: 'نوفمبر 2023'
    },
    {
      id: 4,
      name: 'لينا فارس',
      company: 'سلسلة متاجر - السعودية',
      image: '👩🏽‍💼',
      content: 'نعمل معهم كمورد رئيسي للخضروات العضوية. التزامهم بمواعيد التسليم وجودة المنتج استثنائي.',
      rating: 5,
      date: 'أكتوبر 2023'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            آراء عملائنا
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            ثقة أكثر من 500 عميل محلي ودولي في خدماتنا
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex items-start mb-6">
                      <div className="text-4xl ml-6">{testimonial.image}</div>
                      <div className="text-right flex-1">
                        <h3 className="text-xl font-bold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.company}</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <span 
                              key={i} 
                              className={`text-xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed text-right mb-6">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex justify-between items-center pt-6 border-t">
                      <span className="text-gray-500">{testimonial.date}</span>
                      <div className="text-green-600 font-semibold">
                        منتج مستورد: {testimonial.id === 1 ? 'تمر المجهول' : 
                                     testimonial.id === 2 ? 'خضروات عضوية' :
                                     testimonial.id === 3 ? 'تمور متنوعة' : 'حمضيات'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Partners Logos */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold mb-8 text-gray-900">
            شركاؤنا في النجاح
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['🌍', '🏢', '🚢', '📦', '🌱', '🏪'].map((logo, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <div className="text-3xl mb-2">{logo}</div>
                <div className="text-sm text-gray-500">شريك {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}