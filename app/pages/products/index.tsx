// pages/products/index.tsx
import { GetStaticProps } from 'next';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  season: string;
  certifications: string[];
  exportMarkets: string[];
  minOrder: string;
  image: string;
  color: string;
}

export const getStaticProps: GetStaticProps = async () => {
  // TEST DATA - Agricultural Export Products
  const products: Product[] = [
    {
      id: 1,
      name: 'تمر المجهول',
      category: 'تمور',
      description: 'تمر ممتاز من واحات المملكة العربية السعودية، ذو جودة عالية وحاصل على شهادات دولية',
      price: '25 دولار/كجم',
      season: 'سبتمبر - نوفمبر',
      certifications: ['ISO 22000', 'HACCP', 'USDA', 'Halal Certified'],
      exportMarkets: ['الاتحاد الأوروبي', 'كندا', 'سنغافورة', 'اليابان'],
      minOrder: '20 طن',
      image: '/images/dates.jpg',
      color: 'amber'
    },
    {
      id: 2,
      name: 'زيتون أصفر عضوي',
      category: 'زيتون',
      description: 'زيتون عضوي معتمد للتصدير، محفوظ بطريقة طبيعية دون مواد حافظة',
      price: '18 دولار/كجم',
      season: 'أكتوبر - ديسمبر',
      certifications: ['USDA Organic', 'EU Organic', 'JAS Organic'],
      exportMarkets: ['الاتحاد الأوروبي', 'اليابان', 'كوريا الجنوبية'],
      minOrder: '15 طن',
      image: '/images/olives.jpg',
      color: 'green'
    },
    {
      id: 3,
      name: 'برتقال فالنسيا',
      category: 'حمضيات',
      description: 'برتقال فالنسيا عالي الجودة، غني بالفيتامينات والمعادن، معبأ بعناية',
      price: '12 دولار/كجم',
      season: 'يناير - مارس',
      certifications: ['GlobalGAP', 'ISO 22000', 'BRCGS'],
      exportMarkets: ['روسيا', 'الصين', 'دول الخليج', 'الهند'],
      minOrder: '25 طن',
      image: '/images/oranges.jpg',
      color: 'orange'
    },
    {
      id: 4,
      name: 'طماطم كرزية عضوية',
      category: 'خضروات',
      description: 'طماطم كرزية عضوية طازجة، معبأة بعناية للحفاظ على النضارة',
      price: '8 دولار/كجم',
      season: 'طوال السنة (محاصيل محمية)',
      certifications: ['EU Organic', 'JAS', 'ISO 22000'],
      exportMarkets: ['دول الخليج', 'الأردن', 'لبنان'],
      minOrder: '10 طن',
      image: '/images/tomatoes.jpg',
      color: 'red'
    },
    {
      id: 5,
      name: 'قمح صلب',
      category: 'حبوب',
      description: 'قمح صلب عالي الجودة مناسب لصناعة المعكرونة والباستا',
      price: '350 دولار/طن',
      season: 'أبريل - يونيو',
      certifications: ['ISO 22000', 'HACCP', 'Non-GMO'],
      exportMarkets: ['إيطاليا', 'إسبانيا', 'تركيا', 'مصر'],
      minOrder: '50 طن',
      image: '/images/wheat.jpg',
      color: 'yellow'
    },
    {
      id: 6,
      name: 'عسل سدر أصلي',
      category: 'منتجات النحل',
      description: 'عسل سدر طبيعي 100% من جبال السروات، معبأ بحاويات خاصة',
      price: '45 دولار/كجم',
      season: 'أغسطس - أكتوبر',
      certifications: ['ISO 22000', 'Halal Certified', 'Organic'],
      exportMarkets: ['الاتحاد الأوروبي', 'الولايات المتحدة', 'دول الخليج'],
      minOrder: '5 طن',
      image: '/images/honey.jpg',
      color: 'gold'
    },
    {
      id: 7,
      name: 'تين مجفف',
      category: 'فواكه مجففة',
      description: 'تين مجفف طبيعي، خالي من المواد الحافظة، معبأ بأكياس محكمة',
      price: '15 دولار/كجم',
      season: 'يوليو - سبتمبر',
      certifications: ['ISO 22000', 'HACCP', 'Kosher'],
      exportMarkets: ['أوروبا', 'أمريكا الشمالية', 'أستراليا'],
      minOrder: '8 طن',
      image: '/images/figs.jpg',
      color: 'purple'
    },
    {
      id: 8,
      name: 'بصل أحمر',
      category: 'خضروات',
      description: 'بصل أحمر عالي الجودة، معبأ في شبكات للحفاظ على التهوية',
      price: '6 دولار/كجم',
      season: 'مارس - مايو',
      certifications: ['GlobalGAP', 'ISO 22000'],
      exportMarkets: ['الهند', 'باكستان', 'بنغلاديش', 'سريلانكا'],
      minOrder: '30 طن',
      image: '/images/onions.jpg',
      color: 'pink'
    }
  ];
  
  return {
    props: {
      products,
    },
  };
};

export default function ProductsPage({ products }: { products: Product[] }) {
  const categories = [
    { id: 'all', name: 'الكل', count: products.length },
    { id: 'تمور', name: 'التمور', count: products.filter(p => p.category === 'تمور').length },
    { id: 'زيتون', name: 'الزيتون', count: products.filter(p => p.category === 'زيتون').length },
    { id: 'حمضيات', name: 'الحمضيات', count: products.filter(p => p.category === 'حمضيات').length },
    { id: 'خضروات', name: 'الخضروات', count: products.filter(p => p.category === 'خضروات').length },
    { id: 'حبوب', name: 'الحبوب', count: products.filter(p => p.category === 'حبوب').length },
    { id: 'منتجات النحل', name: 'منتجات النحل', count: products.filter(p => p.category === 'منتجات النحل').length },
    { id: 'فواكه مجففة', name: 'فواكه مجففة', count: products.filter(p => p.category === 'فواكه مجففة').length },
  ];

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      'amber': 'bg-amber-50 border-amber-200',
      'green': 'bg-green-50 border-green-200',
      'orange': 'bg-orange-50 border-orange-200',
      'red': 'bg-red-50 border-red-200',
      'yellow': 'bg-yellow-50 border-yellow-200',
      'gold': 'bg-yellow-100 border-yellow-300',
      'purple': 'bg-purple-50 border-purple-200',
      'pink': 'bg-pink-50 border-pink-200'
    };
    return colorMap[color] || 'bg-gray-50 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            منتجاتنا الزراعية للتصدير
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            اكتشف مجموعة منتجاتنا الزراعية عالية الجودة، المزروعة بعناية والمعدة للتصدير وفق أعلى المعايير العالمية
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="text-2xl font-bold text-green-700">{products.length}</div>
              <div className="text-gray-600">نوع منتج</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="text-2xl font-bold text-green-700">{new Set(products.flatMap(p => p.exportMarkets)).size}+</div>
              <div className="text-gray-600">سوق دولي</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="text-2xl font-bold text-green-700">100%</div>
              <div className="text-gray-600">جودة معتمدة</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="text-2xl font-bold text-green-700">24/7</div>
              <div className="text-gray-600">دعم فني</div>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">التصنيفات</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Link 
                key={cat.id}
                href={cat.id === 'all' ? '/products' : `/products/category/${cat.id}`}
                className="flex items-center gap-2 px-6 py-3 bg-white border rounded-xl hover:bg-green-50 hover:border-green-300 transition-colors"
              >
                <span className="font-medium">{cat.name}</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {cat.count}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`${getColorClass(product.color)} border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Product Image Placeholder */}
              <div className="h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`text-6xl ${
                    product.color === 'amber' ? 'text-amber-200' :
                    product.color === 'green' ? 'text-green-200' :
                    product.color === 'orange' ? 'text-orange-200' :
                    product.color === 'red' ? 'text-red-200' :
                    product.color === 'yellow' ? 'text-yellow-200' :
                    product.color === 'gold' ? 'text-yellow-300' :
                    product.color === 'purple' ? 'text-purple-200' :
                    'text-pink-200'
                  }`}>
                    {product.category === 'تمور' ? '🌴' :
                     product.category === 'زيتون' ? '🫒' :
                     product.category === 'حمضيات' ? '🍊' :
                     product.category === 'خضروات' ? '🥦' :
                     product.category === 'حبوب' ? '🌾' :
                     product.category === 'منتجات النحل' ? '🍯' :
                     product.category === 'فواكه مجففة' ? '🍇' : '🌱'}
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  {product.category}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="text-2xl font-bold text-green-700">{product.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4 text-right text-sm leading-relaxed">
                  {product.description}
                </p>
                
                {/* Season */}
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="ml-2">📅</span>
                    <span>موسم التصدير: <span className="font-medium text-gray-700">{product.season}</span></span>
                  </div>
                </div>
                
                {/* Certifications */}
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">الشهادات:</div>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.slice(0, 3).map((cert, idx) => (
                      <span key={idx} className="bg-white text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200">
                        {cert}
                      </span>
                    ))}
                    {product.certifications.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border">
                        +{product.certifications.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Export Markets */}
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">الأسواق المستهدفة:</div>
                  <div className="flex flex-wrap gap-1">
                    {product.exportMarkets.slice(0, 2).map((market, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {market}
                      </span>
                    ))}
                    {product.exportMarkets.length > 2 && (
                      <span className="text-gray-500 text-xs">+{product.exportMarkets.length - 2}</span>
                    )}
                  </div>
                </div>
                
                {/* Order Info & Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-sm">
                    <div className="text-gray-500">الحد الأدنى للطلب:</div>
                    <div className="font-bold text-gray-800">{product.minOrder}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
                      طلب عرض سعر
                    </button>
                    <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition text-sm">
                      التفاصيل
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Export Information Section */}
        <div className="bg-gradient-to-r from-green-900 to-emerald-800 text-white rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">جاهزون للتصدير؟</h2>
              <p className="text-green-100">
                نضمن لك عملية تصدير سلسة من البداية إلى النهاية مع فريقنا المتخصص
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">📦</div>
                  <div className="font-bold">تعبئة معيارية</div>
                  <div className="text-sm text-green-200">حسب الوجهة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📋</div>
                  <div className="font-bold">مستندات كاملة</div>
                  <div className="text-sm text-green-200">شهادات صحية</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚢</div>
                  <div className="font-bold">شحن مبرد</div>
                  <div className="text-sm text-green-200">حفظ الجودة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📞</div>
                  <div className="font-bold">متابعة مستمرة</div>
                  <div className="text-sm text-green-200">حتى التسليم</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">للاستفسارات وجميع الطلبات</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-medium">
              تواصل مع فريق المبيعات
            </button>
            <button className="px-8 py-3 bg-white border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition font-medium">
              طلب كتالوج المنتجات
            </button>
            <button className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition font-medium">
              تحميل شروط التصدير (PDF)
            </button>
          </div>
          <p className="text-gray-500 mt-6">
            للطلبات الكبيرة: تواصل مباشرة على <strong>+966 50 123 4567</strong> أو <strong>export@alfalah-farms.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}