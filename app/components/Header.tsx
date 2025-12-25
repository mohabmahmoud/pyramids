'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  FiMenu,
  FiX,
  FiHome,
  FiUsers,
  FiPackage,
  FiSettings,
  FiPhone,
} from 'react-icons/fi';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;

          // تغيير الستايل عند التمرير
          setScrolled(y > 10);

          // إخفاء عند التمرير لأسفل، إظهار عند التمرير لأعلى
          const goingDown = y > lastY;
          const delta = Math.abs(y - lastY);

          // تجاهل الحركات الصغيرة
          if (delta > 6) {
            // لا نخفي في أول الصفحة
            if (y > 100 && goingDown) {
              setHide(true);
            }
            if (!goingDown) {
              setHide(false);
            }
          }

          lastY = y;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = useMemo(
    () => [
      { name: 'الرئيسية', href: '/', icon: <FiHome />, color: 'text-blue-600' },
      { name: 'من نحن', href: '/about', icon: <FiUsers />, color: 'text-emerald-600' },
      { name: 'فواكهنا', href: '/fruits', icon: <FiPackage />, color: 'text-blue-600' },
      { name: 'خضرواتنا', href: '/vegetables', icon: <FiPackage />, color: 'text-red-600' },
      { name: 'خدماتنا', href: '/services', icon: <FiSettings />, color: 'text-emerald-600' },
      { name: 'تواصل معنا', href: '/contact', icon: <FiPhone />, color: 'text-red-600' },
    ],
    []
  );

  const isActive = (href: string) => 
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      dir="rtl"
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
        hide ? '-translate-y-full' : 'translate-y-0',
      ].join(' ')}
    >
      {/* شريط علوي متحرك */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 transform origin-left scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100" />
      
      <div
        className={[
          'transition-all duration-500 ease-out',
          scrolled || isMenuOpen
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
            : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent',
        ].join(' ')}
      >
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* الشعار */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className={[
                  'absolute inset-0 rounded-xl transition-all duration-500',
                  scrolled || isMenuOpen 
                    ? 'bg-gradient-to-br from-emerald-100 to-blue-100 blur-md opacity-60' 
                    : 'bg-gradient-to-br from-white/30 to-white/10 blur-md opacity-40'
                ].join(' ')} />
                <img
                  src="/icon.png"
                  alt="Pyramids Logo"
                  className={[
                    'relative w-12 h-12 lg:w-14 lg:h-14 rounded-xl object-contain transition-all duration-500',
                    'border transform group-hover:scale-105',
                    scrolled || isMenuOpen 
                      ? 'border-gray-100 bg-white shadow-md' 
                      : 'border-white/30 bg-white/20 shadow-lg'
                  ].join(' ')}
                />
              </div>
              <div className="leading-tight">
                <h1
                  className={[
                    'text-lg lg:text-xl font-extrabold transition-all duration-500',
                    scrolled || isMenuOpen 
                      ? 'text-gray-900' 
                      : 'text-white drop-shadow-lg'
                  ].join(' ')}
                >
                  شركة بيراميدز
                </h1>
                <p
                  className={[
                    'text-xs lg:text-sm transition-all duration-500',
                    scrolled || isMenuOpen 
                      ? 'text-gray-600' 
                      : 'text-white/90 drop-shadow'
                  ].join(' ')}
                >
                  خير الأرض في منتجاتنا
                </p>
              </div>
            </Link>

            {/* التنقل الرئيسي - سطح المكتب */}
            <nav
              className={[
                'hidden lg:flex items-center gap-1 px-2 py-1 rounded-2xl',
                'transition-all duration-500',
                scrolled || isMenuOpen
                  ? 'bg-white/80 backdrop-blur-sm shadow-sm'
                  : 'bg-white/15 backdrop-blur-md'
              ].join(' ')}
            >
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={[
                      'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold',
                      'transition-all duration-300 relative group/nav-item',
                      active
                        ? `${scrolled || isMenuOpen ? 'text-white' : 'text-white'} bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-md`
                        : `${scrolled || isMenuOpen ? 'text-gray-700' : 'text-white/90'}`
                    ].join(' ')}
                  >
                    {/* تأثير hover جديد بدون خلفية بيضاء */}
                    <div className={[
                      'absolute inset-0 rounded-xl transition-all duration-300',
                      'group-hover/nav-item:bg-gradient-to-r group-hover/nav-item:from-emerald-50/80 group-hover/nav-item:to-blue-50/80',
                      scrolled || isMenuOpen && !active
                        ? '' 
                        : 'group-hover/nav-item:from-white/15 group-hover/nav-item:to-white/5'
                    ].join(' ')} />
                    
                    {/* تأثير إطار عند hover */}
                    <div className={[
                      'absolute inset-0 rounded-xl border transition-all duration-300 opacity-0 group-hover/nav-item:opacity-100',
                      scrolled || isMenuOpen && !active
                        ? 'border-emerald-200' 
                        : 'border-white/30'
                    ].join(' ')} />
                    
                    <span
                      className={[
                        'relative z-10 transition-colors duration-300',
                        active 
                          ? 'text-white' 
                          : scrolled || isMenuOpen 
                            ? 'text-gray-600 group-hover/nav-item:text-emerald-600' 
                            : 'text-white/80 group-hover/nav-item:text-white'
                      ].join(' ')}
                    >
                      {item.icon}
                    </span>
                    <span className={[
                      'relative z-10 transition-colors duration-300',
                      active 
                        ? 'text-white' 
                        : scrolled || isMenuOpen 
                          ? 'text-gray-800 group-hover/nav-item:text-emerald-700' 
                          : 'text-white group-hover/nav-item:text-white'
                    ].join(' ')}>
                      {item.name}
                    </span>
                    
                    {/* خط تحت العنصر النشط */}
                    {active && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full" />
                    )}
                    
                    {/* تأثير توهج خفيف عند hover */}
                    <div className={[
                      'absolute inset-0 rounded-xl opacity-0 group-hover/nav-item:opacity-30 transition-opacity duration-300',
                      scrolled || isMenuOpen && !active
                        ? 'bg-emerald-100' 
                        : 'bg-white'
                    ].join(' ')} />
                  </Link>
                );
              })}
            </nav>

            {/* زر القائمة - الموبايل */}
            <button
              onClick={() => setIsMenuOpen((p) => !p)}
              className={[
                'lg:hidden p-2.5 rounded-xl transition-all duration-300 relative',
                'group/menu-btn',
                scrolled || isMenuOpen
                  ? 'bg-white text-gray-800 shadow-sm hover:shadow-md'
                  : 'bg-white/20 text-white backdrop-blur-md hover:bg-white/30'
              ].join(' ')}
              aria-label="القائمة"
            >
              {/* تأثير خلفية عند hover */}
              <div className={[
                'absolute inset-0 rounded-xl transition-all duration-300',
                'opacity-0 group-hover/menu-btn:opacity-100',
                scrolled || isMenuOpen
                  ? 'bg-gradient-to-r from-emerald-50 to-blue-50' 
                  : 'bg-gradient-to-r from-white/20 to-white/10'
              ].join(' ')} />
              
              <span className="relative">
                {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </span>
            </button>
          </div>
        </div>

        {/* القائمة المنسدلة - الموبايل */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fadeInDown">
            <div className="mx-3 mb-3 rounded-2xl overflow-hidden border border-gray-200 bg-white/95 backdrop-blur-xl shadow-xl">
              <div className="px-3 py-3 space-y-1">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 relative
                        ${active 
                          ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md' 
                          : 'text-gray-700'
                        }
                      `}
                    >
                      {/* تأثير hover للعناصر غير النشطة */}
                      {!active && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-50/0 to-blue-50/0 hover:from-emerald-50/80 hover:to-blue-50/80 transition-all duration-300" />
                      )}
                      
                      <span className={`relative z-10 ${active ? 'text-white' : item.color}`}>
                        {item.icon}
                      </span>
                      <span className="relative z-10 font-semibold">
                        {item.name}
                      </span>
                      
                      {/* سهم للروابط غير النشطة */}
                      {!active && (
                        <span className="relative z-10 mr-auto text-gray-400 text-sm transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* زر الاتصال في القائمة المنسدلة */}
              <div className="border-t border-gray-100 p-4">
                <a
                  href="tel:+201200275444"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  <FiPhone /> 
                  <span>اتصل بنا الآن</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}