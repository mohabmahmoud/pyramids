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

  // scroll states
  const [scrolled, setScrolled] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      // لما ينزل شوية نغيّر الستايل
      setScrolled(y > 12);

      // hide on scroll down, show on scroll up
      const goingDown = y > lastY;
      const delta = Math.abs(y - lastY);

      // تجاهل حركات صغيرة عشان ما يهتزّش
      if (delta > 6) {
        // ما نخفيش في أول الصفحة
        if (y > 140 && goingDown) setHide(true);
        if (!goingDown) setHide(false);
      }

      lastY = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = useMemo(
    () => [
      { name: 'الرئيسية', href: '/', icon: <FiHome />, color: 'text-blue-600' },
      { name: 'من نحن', href: '/about', icon: <FiUsers />, color: 'text-emerald-600' },
      { name: 'منتجاتنا', href: '/products', icon: <FiPackage />, color: 'text-blue-600' },
      { name: 'خدماتنا', href: '/services', icon: <FiSettings />, color: 'text-emerald-600' },
      { name: 'تواصل معنا', href: '/contact', icon: <FiPhone />, color: 'text-red-600' },
    ],
    []
  );

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      dir="rtl"
      className={[
        'absolute top-0 left-0 right-0 z-50',
        'transition-all duration-500 ease-out',
        hide ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100',
        isMenuOpen ? 'opacity-100 translate-y-0' : '',
      ].join(' ')}
    >
      
      <div
        className={[
          
          'transition-all duration-500 ease-out',
          scrolled || isMenuOpen
            ? 'bg-white/80 backdrop-blur-xl shadow-sm border-gray-200/70'
            : 'bg-gradient-to-b from-black/35 via-black/10 to-transparent border-transparent',
        ].join(' ')}
      >
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/icon.png"
                alt="Pyramids Logo"
                className={[
                  'w-11 h-11 rounded-xl bg-white object-contain',
                  'transition-all duration-500',
                  scrolled || isMenuOpen ? 'shadow' : 'shadow-black/30 shadow-lg',
                ].join(' ')}
              />
              <div className="leading-tight">
                <h1
                  className={[
                    'text-lg font-extrabold transition-colors duration-500',
                    scrolled || isMenuOpen ? 'text-blue-900' : 'text-white drop-shadow',
                  ].join(' ')}
                >
                  شركة بيراميدز
                </h1>
                <p
                  className={[
                    'text-xs transition-colors duration-500',
                    scrolled || isMenuOpen ? 'text-gray-600' : 'text-white/85 drop-shadow',
                  ].join(' ')}
                >
                  خير الأرض في منتجاتنا
                </p>
              </div>
            </Link>

            <nav
              className={[
                'hidden lg:flex items-center gap-1 px-2 py-1 rounded-2xl border',
                'transition-all duration-500',
                scrolled || isMenuOpen
                  ? 'bg-gray-50 border-gray-200'
                  : 'bg-white/15 border-white/25 backdrop-blur-md',
              ].join(' ')}
            >
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={[
                      'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold',
                      'transition-all duration-300',
                      active
                        ? `${scrolled || isMenuOpen ? 'bg-white shadow-sm' : 'bg-white/20'} ${item.color}`
                        : `${scrolled || isMenuOpen ? 'text-gray-600 hover:bg-white' : 'text-white/90 hover:bg-white/10'}`,
                    ].join(' ')}
                  >
                    <span
                      className={[
                        'transition-colors duration-300',
                        active ? item.color : scrolled || isMenuOpen ? 'text-gray-400' : 'text-white/70',
                      ].join(' ')}
                    >
                      {item.icon}
                    </span>
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <button
              onClick={() => setIsMenuOpen((p) => !p)}
              className={[
                'lg:hidden p-2 rounded-xl border transition-all duration-300',
                scrolled || isMenuOpen
                  ? 'bg-white border-gray-200 text-gray-800'
                  : 'bg-white/15 border-white/25 text-white backdrop-blur-md',
              ].join(' ')}
              aria-label="القائمة"
            >
              {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="mx-3 mb-3 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-xl">
              <div className="px-3 py-3 space-y-2">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                        active ? 'bg-gray-100 font-bold' : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className={item.color}>{item.icon}</span>
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="border-t p-4">
                <a
                  href="tel:+201001234567"
                  className="flex items-center justify-center gap-3 bg-emerald-600 text-white py-3 rounded-xl"
                >
                  <FiPhone /> اتصل بنا
                </a>
              </div>
            </div>
          </div>
        )}

       
      
      </div>
    </header>
  );
}
