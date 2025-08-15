'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Gift, Printer, Scissors, CreditCard, Mail, MapPin, Star, Clock, Users, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'promosyon',
      icon: Gift,
      title: 'Promosyon Ürünleri',
      description: 'Markanızı güçlendiren ve kalıcı izlenimler bırakan özel kurumsal ve etkinlik hediyeleri.',
      features: [
        'Kurumsal promosyon ürünleri',
        'Etkinlik hediyeleri',
        'Özel tasarım promosyonlar',
        'Toplu sipariş çözümleri',
        'Kalite garantili ürünler'
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'uv-baski',
      icon: Printer,
      title: 'UV Baskı',
      description: 'Çeşitli yüzeylerde canlı renkler ve olağanüstü detay hassasiyeti ile yüksek kaliteli, dayanıklı baskılar.',
      features: [
        'Ahşap yüzey baskı',
        'Plastik ve metal baskı',
        'Cam ve seramik baskı',
        'Özel efektli baskılar',
        'Dayanıklı UV mürekkep'
      ],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80'
    },
    {
      id: 'lazer-kesim',
      icon: Scissors,
      title: 'Lazer Kesim',
      description: 'Ahşap, akrilik ve daha fazla malzemede olağanüstü doğrulukla hassas kesim ve gravür işlemleri.',
      features: [
        'Ahşap lazer kesim',
        'Akrilik kesim ve gravür',
        'Deri ve kumaş işleme',
        'Metal gravür',
        'Hassas kesim teknolojisi'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'kartvizit',
      icon: CreditCard,
      title: 'Kartvizit Tasarımı',
      description: 'Güçlü ilk izlenimler yaratan ve kimliğinizi yansıtan profesyonel, marka odaklı tasarımlar.',
      features: [
        'Kurumsal kartvizit tasarımı',
        'Özel baskı teknikleri',
        'Farklı malzeme seçenekleri',
        'Hızlı teslimat',
        'Revizyon hakkı'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2011&q=80'
    },
    {
      id: 'davetiye',
      icon: Mail,
      title: 'Davetiye Tasarımı',
      description: 'Özel etkinlikler, düğünler ve kurumsal organizasyonlar için zarif ve kişiselleştirilmiş davetiyeler.',
      features: [
        'Düğün davetiyeleri',
        'Kurumsal etkinlik davetiyeleri',
        'Özel tasarım çözümler',
        'Farklı baskı seçenekleri',
        'Kişiselleştirilmiş içerik'
      ],
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'tabela',
      icon: MapPin,
      title: 'Özel Tabela',
      description: 'İç ve dış mekan işletme uygulamaları için şık pleksiglas ve standart tabela çözümleri.',
      features: [
        'İç mekan tabelaları',
        'Dış mekan tabelaları',
        'Pleksiglas tabelalar',
        'LED aydınlatmalı tabelalar',
        'Montaj hizmeti'
      ],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80'
    }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Mutlu Müşteri' },
    { icon: Award, number: '1000+', label: 'Tamamlanan Proje' },
    { icon: Clock, number: '5+', label: 'Yıllık Deneyim' },
    { icon: Star, number: '4.9', label: 'Müşteri Puanı' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Markanızın ihtiyaçlarına özel, yaratıcı ve kaliteli çözümler sunuyoruz. 
            Her proje, benzersiz ve özel olarak tasarlanır.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Tüm Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her hizmet, en yüksek kalite standartlarında ve müşteri memnuniyeti odaklı olarak sunulur.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-black">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-primary-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="btn-primary inline-block"
                  >
                    Teklif Alın
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-custom object-cover w-full h-96"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projenizi Başlatmaya Hazır Mısınız?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Uzman ekibimizle görüşün, projenizi detaylandırın ve olağanüstü sonuçlar elde edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Ücretsiz Danışmanlık
            </Link>
            <Link href="/contact" className="btn-secondary">
              Fiyat Teklifi Alın
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}