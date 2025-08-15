'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Gift, Printer, Scissors, CreditCard, Mail, MapPin, CheckCircle, Clock, HeadphonesIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
        }}
      >
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Markanız İçin
            <span className="block text-primary-400 font-pacifico text-4xl md:text-6xl mt-2 animate-slide-up">
              Yaratıcı Çözümler
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            SAS Ajans, markanızın öne çıkmasını sağlayan promosyon ürünleri, hassas baskı, özel tasarımlar ve profesyonel tabela çözümleri konusunda uzman, tam hizmet veren yaratıcı ortağınızdır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link href="/services" className="btn-primary">
              Hizmetlerimizi Keşfedin
            </Link>
            <Link href="/contact" className="btn-secondary">
              Teklif Alın
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Uzmanlık Alanlarımız</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fikirden uygulamaya kadar, markanızın günümüzün rekabetçi pazarında öne çıkmasını sağlayan olağanüstü yaratıcı çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-200 transition-colors">
                <Gift className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Promosyon Ürünleri</h3>
              <p className="text-gray-600 mb-6">Kalıcı izlenimler bırakan ve marka bilinirliğini güçlendiren özel kurumsal ve etkinlik hediyeleri.</p>
              <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center">
                Daha Fazla Bilgi <span className="ml-1">→</span>
              </Link>
            </div>

            <div className="card group">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-200 transition-colors">
                <Printer className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">UV Baskı</h3>
              <p className="text-gray-600 mb-6">Çeşitli yüzeylerde canlı renkler ve olağanüstü detay hassasiyeti ile yüksek kaliteli, dayanıklı baskılar.</p>
              <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center">
                Daha Fazla Bilgi <span className="ml-1">→</span>
              </Link>
            </div>

            <div className="card group">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-200 transition-colors">
                <Scissors className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Lazer Kesim</h3>
              <p className="text-gray-600 mb-6">Ahşap, akrilik ve daha fazla malzemede olağanüstü doğrulukla hassas kesim ve gravür işlemleri.</p>
              <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center">
                Daha Fazla Bilgi <span className="ml-1">→</span>
              </Link>
            </div>

            <div className="card group">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-200 transition-colors">
                <CreditCard className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Kartvizit Tasarımı</h3>
              <p className="text-gray-600 mb-6">Güçlü ilk izlenimler yaratan ve kimliğinizi yansıtan profesyonel, marka odaklı tasarımlar.</p>
              <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center">
                Daha Fazla Bilgi <span className="ml-1">→</span>
              </Link>
            </div>

            <div className="card group">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-200 transition-colors">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Davetiye Tasarımı</h3>
              <p className="text-gray-600 mb-6">Özel etkinlikler, düğünler ve kurumsal organizasyonlar için zarif ve kişiselleştirilmiş davetiyeler.</p>
              <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center">
                Daha Fazla Bilgi <span className="ml-1">→</span>
              </Link>
            </div>

            <div className="card group">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-200 transition-colors">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Özel Tabela</h3>
              <p className="text-gray-600 mb-6">İç ve dış mekan işletme uygulamaları için şık pleksiglas ve standart tabela çözümleri.</p>
              <Link href="/services" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center">
                Daha Fazla Bilgi <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Neden <span className="text-primary-400 font-pacifico">SAS Ajans</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Yılların deneyimi ve en son teknoloji ile beklentileri aşan ve iş başarısını artıran olağanüstü sonuçlar sunuyoruz.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-full flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Premium Kalite</h3>
                    <p className="text-gray-600">Her seferinde üstün sonuçlar elde etmek için sadece en kaliteli malzemeler ve en son teknolojiyi kullanıyoruz.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-full flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Hızlı Teslimat</h3>
                    <p className="text-gray-600">Kaliteden ödün vermeden hızlı teslimat, son tarihlerinizi tutarlı şekilde karşılıyoruz.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-full flex-shrink-0">
                    <HeadphonesIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Uzman Destek</h3>
                    <p className="text-gray-600">Projenizin her adımında size rehberlik etmek için hazır özel destek ekibimiz.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="SAS Ajans Ekibi"
                className="rounded-2xl shadow-custom object-cover w-full h-96"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Markanızı Yükseltmeye Hazır Mısınız?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Projenizi birlikte konuşalım ve olağanüstü bir şey yaratalım. Bugün ücretsiz danışmanlığınızı alın.
          </p>
          <Link href="/contact" className="btn-primary">
            Projenizi Başlatın
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}