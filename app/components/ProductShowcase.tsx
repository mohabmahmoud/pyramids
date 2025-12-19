'use client';

import { useState } from 'react';

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'dates', name: 'التمور' },
    { id: 'olives', name: 'الزيتون' },
    { id: 'citrus', name: 'الحمضيات' },
    { id: 'vegetables', name: 'الخضروات' },
    { id: 'grains', name: 'الحبوب' },
  ];

  const products = [
    {
      id: 1,
      name: 'تمر المجهول',
      category: 'dates',
      description: 'تمر ممتاز من واحات المملكة، حاصل على شهادات الجودة الدولية',
      price: '$25/كجم',
      season: 'سبتمبر - نوفمبر',
      certifications: ['ISO 22000', 'HACCP', 'USDA'],
      exportMarkets: ['أوروبا', 'كندا', 'سنغافورة'],
      minOrder: '20 طن',
      imageColor: 'bg-amber-100'
    },
    {
      id: 2,
      name: 'زيتون أصفر عضوي',
      category: 'olives',
      description: 'زيتون عضوي معتمد للتصدير، محفوظ بطريقة طبيعية',
      price: '$18/كجم',
      season: 'أكتوبر - ديسمبر',
      certifications: ['USDA Organic', 'EU Organic'],
      exportMarkets: ['الاتحاد الأوروبي', 'اليابان'],
      minOrder: '15 طن',
      imageColor: 'bg-green-100'
    },
    {
      id: 3,
      name: 'برتقال فالنسيا',
      category: 'citrus',
      description: 'برتقال عالي الجودة، غني بالفيتامينات',
      price: '$12/كجم',
      season: 'يناير - مارس',
      certifications: ['GlobalGAP', 'ISO 22000'],
      exportMarkets: ['روسيا', 'الصين', 'دول الخليج'],
      minOrder: '25 طن',
      imageColor: 'bg-orange-100'
    },
    {
      id: 4,
      name: 'طماطم كرزية',
      category: 'vegetables',
      description: 'طماطم عضوية طازجة، معبأة بعناية',
      price: '$8/كجم',
      season: 'طوال السنة',
      certifications: ['EU Organic', 'JAS'],
      exportMarkets: ['دول الخليج', 'الأردن'],
      minOrder: '10 طن',
      imageColor: 'bg-red-100'
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            منتجاتنا الزراعية
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            نقدم مجموعة متنوعة من الحاصلات الزراعية ذات الجودة العالية، 
            ملتزمين بأعلى معايير السلامة والجودة الدولية
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-50 border'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className={`${product.imageColor} rounded-2xl p-6 transition-transform hover:scale-[1.02]`}>
              <div className="flex justify-between items-start mb-4">
                <div className="text-right">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="text-sm text-gray-500 block mt-1">{product.category}</span>
                </div>
                <span className="text-2xl font-bold text-green-700">{product.price}</span>
              </div>
              
              <p className="text-gray-600 mb-4 text-right">{product.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-500 ml-2">📅 موسم الحصاد:</span>
                  <span className="font-medium">{product.season}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, index) => (
                    <span key={index} className="bg-white text-blue-600 text-xs px-3 py-1 rounded-full border">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between text-sm">
                  <div className="text-right">
                    <div className="text-gray-500">الأسواق:</div>
                    <div className="font-medium">{product.exportMarkets.join('، ')}</div>
                  </div>
                  <div className="text-left">
                    <div className="text-gray-500">الحد الأدنى:</div>
                    <div className="font-medium">{product.minOrder}</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-white text-green-600 border border-green-600 py-3 rounded-lg hover:bg-green-50 transition">
                طلب عينة
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">نوع منتج</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30+</div>
              <div className="text-gray-600">دولة مستوردة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">مزارع شريك</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">سنة خبرة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}