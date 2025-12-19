export default function Services() {
  const services = [
    {
      title: 'الاستشارات الزراعية',
      description: 'تقديم استشارات متخصصة لتحسين جودة المحاصيل وزيادة الإنتاجية',
      features: ['تحليل التربة', 'تخطيط الزراعة', 'إدارة المياه'],
      icon: '🌱'
    },
    {
      title: 'التعبئة والتغليف',
      description: 'أنظمة تعبئة متكاملة تلبي معايير التصدير الدولية',
      features: ['عبوات غذائية', 'تبريد وتحكم بالرطوبة', 'تتبع بالباركود'],
      icon: '📦'
    },
    {
      title: 'الشحن واللوجستيات',
      description: 'شحن مبرد لمنتجاتك إلى أي وجهة حول العالم',
      features: ['شحن جوي وبحري', 'تخليص جمركي', 'تتبع مباشر'],
      icon: '🚚'
    },
    {
      title: 'المساعدة التسويقية',
      description: 'ربط منتجاتك بالأسواق العالمية والمستوردين',
      features: ['دراسة السوق', 'بحث عن مستوردين', 'تفاوض تجاري'],
      icon: '📊'
    },
    {
      title: 'الشهادات والمواصفات',
      description: 'مساعدتك في الحصول على الشهادات الدولية المطلوبة',
      features: ['ISO 22000', 'HACCP', 'شهادات عضوية'],
      icon: '📝'
    },
    {
      title: 'التمويل والتأمين',
      description: 'تسهيلات تمويلية وتأمين على البضائع أثناء النقل',
      features: ['تمويل تصديري', 'تأمين شامل', 'ضمان الجودة'],
      icon: '💳'
    },
  ];

  const processSteps = [
    { step: 1, title: 'التقييم', description: 'تقييم المنتج ومتطلبات التصدير' },
    { step: 2, title: 'التجهيز', description: 'تحضير المستندات والشهادات' },
    { step: 3, title: 'التعبئة', description: 'التعبئة حسب معايير الوجهة' },
    { step: 4, title: 'الشحن', description: 'شحن مبرد مع تتبع مستمر' },
    { step: 5, title: 'التسليم', description: 'تسليم للمستورد مع متابعة' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            خدماتنا الشاملة للتصدير
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            نقدم حزمة متكاملة من الخدمات تغطي جميع مراحل عملية التصدير، 
            من المزرعة إلى السوق العالمي
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-right">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-right">
                    <span className="ml-2 text-green-500">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Export Process */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
            خطوات عملية التصدير
          </h3>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:flex justify-between items-center mb-12">
              {processSteps.map((step, index) => (
                <div key={step.step} className="flex flex-col items-center relative z-10">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm text-center max-w-[120px]">
                    {step.description}
                  </p>
                  
                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-8 left-1/2 w-full h-1 bg-green-200 -z-10"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Process View */}
            <div className="md:hidden space-y-6">
              {processSteps.map((step) => (
                <div key={step.step} className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="mr-4">
                    <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 bg-white rounded-xl border border-green-200">
            <div className="flex items-start">
              <div className="text-2xl mr-4">⏱️</div>
              <div>
                <h4 className="font-bold text-lg mb-2">مدة العملية النموذجية</h4>
                <p className="text-gray-600">
                  تتراوح مدة عملية التصدير الكاملة بين 15-45 يوم حسب الوجهة والمتطلبات. 
                  نوفر تحديثات مستمرة على مدار العملية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}