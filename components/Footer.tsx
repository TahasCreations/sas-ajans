'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-['Pacifico'] text-2xl text-yellow-400">SAS</span>
              <span className="text-xl font-semibold">Ajans</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Yaratıcı çözümler ve promosyon hizmetleri konusunda güvenilir ortağınız. Vizyonunuzu hassasiyet ve profesyonellik ile hayata geçiriyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Hizmetler</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Promosyon Ürünleri</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">UV Baskı</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Lazer Kesim</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Kartvizit Tasarımı</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Özel Tabela</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">İletişim</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <i className="ri-phone-line mr-2"></i>
                +90 212 555 0123
              </li>
              <li className="text-gray-300">
                <i className="ri-mail-line mr-2"></i>
                info@sasajans.com
              </li>
              <li className="text-gray-300">
                <i className="ri-map-pin-line mr-2"></i>
                İstanbul, Türkiye
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 SAS Ajans. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}