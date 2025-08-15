'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function PromotionalProducts() {
  const productCategories = [
    {
      icon: 'ri-trophy-line',
      title: 'Kupalar',
      description: 'Spor yarışmaları, başarı ödülleri ve kurumsal etkinlikler için özel tasarım kupalar.',
      details: 'Çeşitli boyutlarda metal, kristal ve plastik kupalar. Özel gravür ve logo baskısı ile kişiselleştirme seçenekleri.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20trophy%20cups%20collection%20with%20various%20sizes%20and%20materials%20including%20metal%2C%20crystal%2C%20and%20plastic%20trophies.%20Elegant%20awards%20display%20with%20custom%20engraving%20and%20logo%20printing%20options.%20Sports%20and%20corporate%20achievement%20trophies%20arranged%20on%20clean%20white%20background%20with%20professional%20lighting%20and%20premium%20presentation.&width=600&height=400&seq=trophies-1&orientation=landscape'
    },
    {
      icon: 'ri-medal-line',
      title: 'Madalyalar',
      description: 'Spor müsabakaları ve başarı ödülleri için altın, gümüş, bronz madalyalar.',
      details: 'Özel tasarım madalyalar, kurdeleler ve özel ambalajlama seçenekleri ile birlikte sunulmaktadır.',
      image: 'https://readdy.ai/api/search-image?query=Premium%20medals%20collection%20with%20gold%2C%20silver%2C%20and%20bronze%20finishes%20for%20sports%20competitions%20and%20achievement%20awards.%20Custom%20designed%20medals%20with%20ribbons%20and%20special%20packaging%20options.%20Professional%20medal%20display%20with%20elegant%20presentation%20and%20various%20sizes%20and%20designs%20for%20different%20events%20and%20achievements.&width=600&height=400&seq=medals-1&orientation=landscape'
    },
    {
      icon: 'ri-award-line',
      title: 'Plaketler',
      description: 'Kurumsal ödüller, teşekkür plaketleri ve özel anma plaketleri.',
      details: 'Ahşap, metal, kristal ve akrilik malzemelerden üretilen özel tasarım plaketler. Logo ve metin gravürü dahil.',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20corporate%20plaques%20and%20awards%20made%20from%20wood%2C%20metal%2C%20crystal%2C%20and%20acrylic%20materials.%20Custom%20designed%20appreciation%20plaques%20with%20logo%20engraving%20and%20text%20inscription.%20Professional%20award%20plaques%20display%20with%20premium%20materials%20and%20sophisticated%20craftsmanship%20for%20corporate%20recognition%20and%20special%20commemorative%20purposes.&width=600&height=400&seq=plaques-1&orientation=landscape'
    },
    {
      icon: 'ri-building-line',
      title: 'Firmalara Özel Plaketler',
      description: 'Kurumsal kimliğinizi yansıtan özel tasarım firmaya özel plaketler.',
      details: 'Şirket logosu, kurumsal renkleri ve özel mesajları içeren tamamen kişiselleştirilmiş plaket tasarımları.',
      image: 'https://readdy.ai/api/search-image?query=Custom%20corporate%20plaques%20featuring%20company%20logos%2C%20brand%20colors%2C%20and%20personalized%20messages.%20Bespoke%20business%20award%20designs%20with%20premium%20materials%20and%20professional%20engraving.%20Company-specific%20commemorative%20plaques%20with%20elegant%20presentation%20and%20sophisticated%20corporate%20branding%20elements%20for%20business%20recognition%20and%20corporate%20gifts.&width=600&height=400&seq=corporate-plaques-1&orientation=landscape'
    },
    {
      icon: 'ri-palette-line',
      title: 'Plaket Tasarımları',
      description: 'Özel etkinlikler ve organizasyonlar için yaratıcı plaket tasarım hizmetleri.',
      details: 'Etkinliğinizin temasına uygun özgün tasarımlar, çeşitli şekil ve boyut seçenekleri ile sunuyoruz.',
      image: 'https://readdy.ai/api/search-image?query=Creative%20plaque%20design%20services%20with%20unique%20artistic%20layouts%20for%20special%20events%20and%20organizations.%20Custom%20shaped%20plaques%20with%20various%20sizes%20and%20creative%20design%20elements.%20Professional%20plaque%20design%20showcase%20with%20artistic%20patterns%2C%20modern%20typography%2C%20and%20innovative%20layouts%20for%20special%20occasions%20and%20commemorative%20purposes.&width=600&height=400&seq=plaque-designs-1&orientation=landscape'
    },
    {
      icon: 'ri-gift-2-line',
      title: 'Promosyon Ürünleri',
      description: 'Markalı kalemler, kupalar, çantalar ve diğer promosyon malzemeleri.',
      details: 'Logo baskılı kalemler, özel tasarım kupalar, çantalar, anahtarlıklar ve kurumsal hediye setleri.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20promotional%20products%20collection%20including%20branded%20pens%2C%20custom%20mugs%2C%20bags%2C%20keychains%2C%20and%20corporate%20gift%20sets.%20High-quality%20marketing%20materials%20with%20logo%20printing%20and%20custom%20branding.%20Business%20promotional%20items%20display%20with%20elegant%20presentation%20and%20professional%20packaging%20for%20corporate%20marketing%20and%20brand%20awareness%20campaigns.&width=600&height=400&seq=promo-items-1&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            <span className="text-yellow-400 font-['Pacifico']">Promosyon</span> Ürünleri
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kupalar, madalyalar, plaketler ve promosyon ürünleri ile başarıları ödüllendirin ve markanızı öne çıkarın.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {productCategories.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-xl">
                    <i className={`${product.icon} text-2xl text-black`}></i>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{product.details}</p>
                  <Link href="/contact" className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 cursor-pointer whitespace-nowrap">
                    Bu Ürün İçin Teklif Alın
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Neden Bizi Tercih Edin?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yüksek kaliteli malzemeler, özel tasarımlar ve hızlı teslimat ile her projenizde mükemmel sonuçlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-20 h-20 flex items-center justify-center bg-yellow-400 rounded-full mx-auto mb-6">
                <i className="ri-star-line text-3xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Premium Kalite</h3>
              <p className="text-gray-600">En kaliteli malzemeler ve üstün işçilik ile dayanıklı ürünler üretiyoruz.</p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-20 h-20 flex items-center justify-center bg-yellow-400 rounded-full mx-auto mb-6">
                <i className="ri-brush-line text-3xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Özel Tasarım</h3>
              <p className="text-gray-600">Her projeye özel tasarım çözümleri ve kişiselleştirme seçenekleri sunuyoruz.</p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-20 h-20 flex items-center justify-center bg-yellow-400 rounded-full mx-auto mb-6">
                <i className="ri-rocket-line text-3xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Hızlı Teslimat</h3>
              <p className="text-gray-600">Etkinlik tarihlerinizi kaçırmamak için hızlı ve güvenilir teslimat garantisi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Özel Tasarım İhtiyacınız Var mı?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Etkinliğiniz için özel tasarım kupa, madalya ve plaket siparişleriniz için bugün bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors cursor-pointer whitespace-nowrap">
              Teklif İsteyin
            </Link>
            <a href="tel:+902125550123" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors cursor-pointer whitespace-nowrap">
              Hemen Arayın
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
