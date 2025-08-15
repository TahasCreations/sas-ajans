'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <span className="font-['Pacifico'] text-2xl text-yellow-400">SAS</span>
            <span className="text-xl font-semibold">Ajans</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors cursor-pointer">
              Ana Sayfa
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-black transition-colors cursor-pointer">
              Hizmetler
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black transition-colors cursor-pointer">
              İletişim
            </Link>
            <Link href="/contact" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap">
              Teklif Al
            </Link>
          </nav>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link href="/" className="text-gray-700 hover:text-black transition-colors cursor-pointer">
                Ana Sayfa
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-black transition-colors cursor-pointer">
                Hizmetler
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black transition-colors cursor-pointer">
                İletişim
              </Link>
              <Link href="/contact" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors cursor-pointer text-center whitespace-nowrap">
                Teklif Al
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}