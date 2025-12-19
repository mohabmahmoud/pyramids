'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        product: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'الهاتف',
      details: ['+966 50 123 4567', '+966 11 234 5678'],
      description: 'متاحون من الأحد إلى الخميس، 8 صباحاً - 5 مساءً'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'البريد الإلكتروني',
      details: ['export@alfalah-farms.com', 'info@alfalah-farms.com'],
      description: 'نرد خلال 24 ساعة عمل'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'المكتب الرئيسي',
      details: ['الرياض، حي العليا', 'مبنى التجارة، الطابق الرابع'],
      description: 'الزيارة بالتنسيق المسبق'
    }
  ];

  const products = [
    'اختر المنتج',
    'التمور بأنواعها',
    'الزيتون والزيوت',
    'الحمضيات',
    'الخضروات',
    'الحبوب',
    'منتجات عضوية',
    'أخرى'
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-900 to-emerald-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            تواصل معنا للبدء في التصدير
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">
            اطلب عرض سعر أو استفسر عن خدماتنا. فريقنا متاح للإجابة على جميع استفساراتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">أرسل طلبك الآن</h3>
            
            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-400 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="text-xl font-bold mb-2">تم إرسال طلبك بنجاح!</h4>
                <p className="text-green-100">
                  سنتواصل معك خلال 24 ساعة عمل. شكراً لاهتمامك.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="+966 5X XXX XXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">المنتج المطلوب</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      {products.map((product, index) => (
                        <option key={index} value={product} className="bg-green-900">
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">رسالتك</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="أخبرنا عن احتياجاتك، الكمية المطلوبة، والوجهة..."
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="ml-3 w-5 h-5"
                  />
                  <label htmlFor="newsletter" className="text-sm">
                    أرغب في تلقي النشرة الإخبارية والعروض الخاصة
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-green-900 font-bold py-4 rounded-lg hover:bg-green-100 transition flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-900"></span>
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      إرسال الطلب
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">معلومات الاتصال</h3>
            
            <div className="space-y-8 mb-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-white/20 p-4 rounded-xl ml-6">
                    {info.icon}
                  </div>
                  <div className="text-right">
                    <h4 className="text-xl font-bold mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-green-100 text-lg">{detail}</p>
                    ))}
                    <p className="text-green-200 text-sm mt-2">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-xl font-bold mb-4">أسئلة متكررة</h4>
              <div className="space-y-3">
                {[
                  'ما هي الشهادات المطلوبة للتصدير؟',
                  'كم تستغرق عملية التصدير؟',
                  'هل تقدمون خدمات تخليص جمركي؟',
                  'ما هي طرق الدفع المتاحة؟'
                ].map((question, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                    <span>{question}</span>
                    <button className="text-white hover:text-green-200">↓</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <p className="mb-4">تابعنا على:</p>
              <div className="flex gap-4">
                {['📘', '🐦', '💼', '📷'].map((icon, index) => (
                  <button 
                    key={index}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}