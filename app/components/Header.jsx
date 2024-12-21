'use client';

import { useState } from 'react';
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

const Header = ({ pageTitle = 'DBV Enterprises', pageDescription = 'Your trusted partner in electronics & supplies' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 0);
    });
  }

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-sky-600 text-white py-2.5 hidden z-10 md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center hover:text-sky-100 transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                <Link href="tel:+254700000000">
                  +254 700 000 000
                </Link>
              </span>
              <span className="flex items-center hover:text-sky-100 transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                <Link href="mailto:info@dbv.co.ke">
                  info@dbv.co.ke
                </Link>
              </span>
            </div>
            <div className="flex items-center hover:text-sky-100 transition-colors">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Mombasa, Kenya</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white sticky transition-all duration-200 ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">D</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold text-gray-900">DBV</h1>
                  <p className="text-sm text-sky-600">Enterprises</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group px-4 py-2 text-gray-600 hover:text-sky-600 font-medium transition-colors duration-200"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-sky-600 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;