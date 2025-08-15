'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20creative%20design%20studio%20workspace%20with%20professional%20lighting%2C%20sleek%20furniture%2C%20and%20contemporary%20architecture.%20Clean%20minimalist%20office%20environment%20with%20design%20tools%2C%20computers%2C%20and%20creative%20materials.%20Professional%20business%20atmosphere%20with%20natural%20lighting%20and%20modern%20interior%20design%20elements.%20High-end%20creative%20agency%20workspace%20with%20sophisticated%20design%20elements%20and%20professional%20equipment.&width=1920&height=1080&seq=hero-bg-1&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Markanız İçin
            <span className="block text-yellow-400 font-['Pacifico'] text-4xl md:text-6xl mt-2">
              Yaratıcı Çözümler
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            SAS Ajans, markanızın öne çıkmasını sağlayan promosyon ürünleri, hassas baskı, özel tasarımlar ve profesyonel tabela çözümleri konusunda uzman, tam hizmet veren yaratıcı ortağınızdır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors cursor-pointer whitespace-nowrap">
              Hizmetlerimizi Keşfedin
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors cursor-pointer whitespace-nowrap">
              Teklif Alın
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Uzmanlık Alanlarımız</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fikirden uygulamaya kadar, markanızın günümüzün rekabetçi pazarında öne çıkmasını sağlayan olağanüstü yaratıcı çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-xl mb-6">
                <i className="ri-gift-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Promosyon Ürünleri</h3>
              <p className="text-gray-600 mb-6">Kalıcı izlenimler bırakan ve marka bilinirliğini güçlendiren özel kurumsal ve etkinlik hediyeleri.</p>
              <Link href="/services" className="text-yellow-600 font-semibold hover:text-yellow-700 cursor-pointer whitespace-nowrap">
                Daha Fazla Bilgi <i className="ri-arrow-right-line ml-1"></i>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-xl mb-6">
                <i className="ri-printer-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">UV Baskı</h3>
              <p className="text-gray-600 mb-6">Çeşitli yüzeylerde canlı renkler ve olağanüstü detay hassasiyeti ile yüksek kaliteli, dayanıklı baskılar.</p>
              <Link href="/services" className="text-yellow-600 font-semibold hover:text-yellow-700 cursor-pointer whitespace-nowrap">
                Daha Fazla Bilgi <i className="ri-arrow-right-line ml-1"></i>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-xl mb-6">
                <i className="ri-scissors-cut-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Lazer Kesim</h3>
              <p className="text-gray-600 mb-6">Ahşap, akrilik ve daha fazla malzemede olağanüstü doğrulukla hassas kesim ve gravür işlemleri.</p>
              <Link href="/services" className="text-yellow-600 font-semibold hover:text-yellow-700 cursor-pointer whitespace-nowrap">
                Daha Fazla Bilgi <i className="ri-arrow-right-line ml-1"></i>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-xl mb-6">
                <i className="ri-bank-card-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Kartvizit Tasarımı</h3>
              <p className="text-gray-600 mb-6">Güçlü ilk izlenimler yaratan ve kimliğinizi yansıtan profesyonel, marka odaklı tasarımlar.</p>
              <Link href="/services" className="text-yellow-600 font-semibold hover:text-yellow-700 cursor-pointer whitespace-nowrap">
                Daha Fazla Bilgi <i className="ri-arrow-right-line ml-1"></i>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-xl mb-6">
                <i className="ri-mail-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Davetiye Tasarımı</h3>
              <p className="text-gray-600 mb-6">Özel etkinlikler, düğünler ve kurumsal organizasyonlar için zarif ve kişiselleştirilmiş davetiyeler.</p>
              <Link href="/services" className="text-yellow-600 font-semibold hover:text-yellow-700 cursor-pointer whitespace-nowrap">
                Daha Fazla Bilgi <i className="ri-arrow-right-line ml-1"></i>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-xl mb-6">
                <i className="ri-road-map-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Özel Tabela</h3>
              <p className="text-gray-600 mb-6">İç ve dış mekan işletme uygulamaları için şık pleksiglas ve standart tabela çözümleri.</p>
              <Link href="/services" className="text-yellow-600 font-semibold hover:text-yellow-700 cursor-pointer whitespace-nowrap">
                Daha Fazla Bilgi <i className="ri-arrow-right-line ml-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Neden <span className="text-yellow-400 font-['Pacifico']">SAS Ajans</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Yılların deneyimi ve en son teknoloji ile beklentileri aşan ve iş başarısını artıran olağanüstü sonuçlar sunuyoruz.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full flex-shrink-0">
                    <i className="ri-check-line text-xl text-yellow-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Premium Kalite</h3>
                    <p className="text-gray-600">Her seferinde üstün sonuçlar elde etmek için sadece en kaliteli malzemeler ve en son teknolojiyi kullanıyoruz.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full flex-shrink-0">
                    <i className="ri-time-line text-xl text-yellow-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Hızlı Teslimat</h3>
                    <p className="text-gray-600">Kaliteden ödün vermeden hızlı teslimat, son tarihlerinizi tutarlı şekilde karşılıyoruz.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full flex-shrink-0">
                    <i className="ri-customer-service-2-line text-xl text-yellow-600"></i>
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
                src="https://readdy.ai/api/search-image?query=Professional%20creative%20team%20working%20together%20in%20modern%20design%20studio.%20Diverse%20group%20of%20designers%20and%20marketers%20collaborating%20on%20projects%20with%20computers%2C%20design%20materials%2C%20and%20creative%20tools.%20Bright%20natural%20lighting%20in%20contemporary%20office%20space%20with%20professional%20atmosphere%20and%20modern%20equipment.%20Team%20collaboration%20and%20creativity%20in%20advertising%20agency%20environment.&width=800&height=600&seq=why-choose-us-1&orientation=landscape"
                alt="SAS Ajans Ekibi"
                className="rounded-2xl shadow-2xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Markanızı Yükseltmeye Hazır Mısınız?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Projenizi birlikte konuşalım ve olağanüstü bir şey yaratalım. Bugün ücretsiz danışmanlığınızı alın.
          </p>
          <Link href="/contact" className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors cursor-pointer whitespace-nowrap">
            Projenizi Başlatın
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}