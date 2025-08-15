'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-black">SAS</span>
              </div>
              <span className="text-2xl font-bold">Ajans</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Markanızın öne çıkmasını sağlayan yaratıcı çözümler sunan profesyonel ajans. 
              Kalite, hız ve müşteri memnuniyeti odaklı hizmet anlayışımızla yanınızdayız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-400 hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-400 hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-400 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-400 hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-400">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Portfolyo
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-400">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#promosyon" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Promosyon Ürünleri
                </Link>
              </li>
              <li>
                <Link href="/services#uv-baski" className="text-gray-300 hover:text-primary-400 transition-colors">
                  UV Baskı
                </Link>
              </li>
              <li>
                <Link href="/services#lazer-kesim" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Lazer Kesim
                </Link>
              </li>
              <li>
                <Link href="/services#kartvizit" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Kartvizit Tasarımı
                </Link>
              </li>
              <li>
                <Link href="/services#tabela" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Özel Tabela
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-400">İletişim Bilgileri</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Merkez Mahallesi</p>
                  <p className="text-gray-300">İstanbul, Türkiye</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">+90 555 123 45 67</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">info@sasajans.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-gray-300">Pazartesi - Cuma</p>
                  <p className="text-gray-300">09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Güncel Kalın</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              En son haberler, özel teklifler ve yaratıcı fikirler için bültenimize abone olun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
              />
              <button className="bg-primary-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary-300 transition-colors whitespace-nowrap">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} SAS Ajans. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Kullanım Şartları
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
