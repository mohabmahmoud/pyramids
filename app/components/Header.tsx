'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiHome, FiUsers, FiPackage, FiSettings, FiPhone } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '/', icon: <FiHome />, color: 'text-blue-600' },
    { name: 'من نحن', href: '/about', icon: <FiUsers />, color: 'text-emerald-600' },
    { name: 'منتجاتنا', href: '/products', icon: <FiPackage />, color: 'text-blue-600' },
    { name: 'خدماتنا', href: '/services', icon: <FiSettings />, color: 'text-emerald-600' },
    { name: 'تواصل معنا', href: '/contact', icon: <FiPhone />, color: 'text-red-600' },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      dir="rtl"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-md border-b border-gray-200'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/icon.png"
              alt="Pyramids Logo"
              className="w-11 h-11 rounded-xl bg-white shadow"
            />
            <div className="leading-tight">
              <h1 className="text-lg font-extrabold text-blue-900">شركة بيراميدز</h1>
              <p className="text-xs text-gray-500">خير الأرض في منتجاتنا</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-2xl border">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    active
                      ? `bg-white shadow-sm ${item.color}`
                      : 'text-gray-600 hover:bg-white'
                  }`}
                >
                  <span className={active ? item.color : 'text-gray-400'}>
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl border bg-white"
            aria-label="القائمة"
          >
            {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3 space-y-2">
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
      )}

      {/* Decorative line */}
      <div className="h-0.5 bg-gradient-to-r from-blue-400 via-green-400 to-red-400" />
    </header>
  );
}
