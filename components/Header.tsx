'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+90 555 123 45 67</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@sasajans.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Pazartesi - Cuma: 09:00 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-4">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-black">SAS</span>
              </div>
              <span className={`text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
                Ajans
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/" 
                className={`font-medium transition-colors hover:text-primary-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/services" 
                className={`font-medium transition-colors hover:text-primary-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Hizmetler
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium transition-colors hover:text-primary-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                İletişim
              </Link>
              <Link 
                href="/contact" 
                className="bg-primary-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-primary-300 transition-colors"
              >
                Teklif Al
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 font-medium hover:text-primary-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 font-medium hover:text-primary-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetler
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 font-medium hover:text-primary-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <Link 
                href="/contact" 
                className="bg-primary-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-primary-300 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
