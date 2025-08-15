'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: 'ri-gift-line',
      title: 'Promosyon Ürünleri',
      description: 'Kalıcı izlenimler bırakan ve marka bilinirliğini güçlendiren özel kurumsal ve etkinlik hediyeleri.',
      details: 'Markalı kalemler ve kupalardan özel kıyafetler ve teknoloji aksesuarlarına kadar, markanızı mükemmel şekilde temsil eden promosyon ürünleri yaratıyoruz. Ayrıca kupalar, madalyalar, plaketler ve firmalara özel ödül ürünleri.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20promotional%20products%20display%20including%20branded%20mugs%2C%20pens%2C%20notebooks%2C%20and%20corporate%20gifts%20arranged%20on%20clean%20white%20background.%20High-quality%20corporate%20giveaways%20and%20marketing%20materials%20with%20elegant%20presentation%20and%20professional%20lighting.%20Modern%20promotional%20items%20showcase%20for%20business%20branding.&width=600&height=400&seq=promo-products-1&orientation=landscape'
    },
    {
      icon: 'ri-printer-line',
      title: 'UV Baskı',
      description: 'Çeşitli yüzeylerde canlı renkler ve olağanüstü detay hassasiyeti ile yüksek kaliteli, dayanıklı baskılar.',
      details: 'Son teknoloji UV baskı teknolojimiz, ahşap, metal, cam ve plastik gibi malzemeler üzerinde solmaya dayanıklı, çizilmeye karşı dirençli kaplamalarla muhteşem sonuçlar sunar.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20UV%20printing%20machine%20in%20professional%20printing%20facility%20with%20colorful%20printed%20samples%20on%20various%20materials%20like%20wood%2C%20metal%2C%20and%20acrylic.%20High-tech%20printing%20equipment%20with%20professional%20lighting%20and%20clean%20industrial%20workspace.%20Advanced%20printing%20technology%20demonstration%20with%20quality%20output%20samples.&width=600&height=400&seq=uv-printing-1&orientation=landscape'
    },
    {
      icon: 'ri-car-line',
      title: 'Araç Reklamları',
      description: 'Mobil reklam çözümleri ile markanızı şehirde hareket halinde tanıtın ve geniş kitlere ulaşın.',
      details: 'Oto, minibüs, kamyon ve ticari araçlar için profesyonel kaplama hizmetleri. Dijital baskı teknolojisi ile dayanıklı, hava koşullarına dayanıklı vinil kaplamalar. Araçlarınızı yürüyen reklam panosu haline getirin.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20vehicle%20wrapping%20and%20advertising%20services%20showing%20cars%2C%20vans%2C%20and%20trucks%20with%20custom%20vinyl%20wraps%20and%20advertising%20graphics.%20Mobile%20advertising%20solutions%20with%20high-quality%20vehicle%20wraps%20and%20durable%20materials.%20Professional%20vehicle%20advertising%20and%20branding%20services.&width=600&height=400&seq=vehicle-ads-1&orientation=landscape'
    },
    {
      icon: 'ri-window-line',
      title: 'Cam Kaplamalar',
      description: 'Bina camları ve vitrinler için profesyonel kaplama çözümleri ile görsel etki yaratın.',
      details: 'Ofis binalarının cam cephelerine, mağaza vitrinlerine ve iç mekan camlarına uygulanan özel tasarım kaplamalar. Gizlilik sağlarken estetik görünüm sunar. Matbaasız ve dijital baskılı seçenekler mevcut.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20glass%20coating%20and%20window%20treatment%20services%20showing%20office%20buildings%2C%20store%20fronts%2C%20and%20interior%20glass%20surfaces%20with%20custom%20design%20coatings.%20Privacy%20solutions%20and%20aesthetic%20glass%20treatments%20for%20commercial%20spaces.%20Professional%20glass%20coating%20and%20window%20design%20services.&width=600&height=400&seq=glass-coatings-1&orientation=landscape'
    },
    {
      icon: 'ri-image-line',
      title: 'Poster ve Afiş Tasarımı',
      description: 'Etkileyici poster, afiş, durak reklamları ve duvar giydirmeleri ile güçlü görsel iletişim.',
      details: 'İç ve dış mekan kullanımı için dayanıklı poster ve afiş baskıları. Durak reklamları, billboard tasarımları, duvar giydirmeleri ve büyük format baskı çözümleri. Hava koşullarına dayanıklı malzemeler ve canlı renkler.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20poster%20and%20banner%20design%20services%20showing%20creative%20posters%2C%20banners%2C%20billboards%2C%20and%20wall%20coverings%20with%20eye-catching%20designs.%20Large%20format%20printing%20solutions%20for%20indoor%20and%20outdoor%20use.%20Professional%20poster%20design%20and%20printing%20services.&width=600&height=400&seq=poster-design-1&orientation=landscape'
    },
    {
      icon: 'ri-scissors-cut-line',
      title: 'Lazer Kesim',
      description: 'Ahşap, akrilik ve daha fazla malzemede olağanüstü doğrulukla hassas kesim ve gravür işlemleri.',
      details: 'Bilgisayar kontrollü lazer kesim ve gravür hizmetleri ile karmaşık tasarımlar, özel şekiller ve detaylı sanat eserleri için mükemmel hassasiyet sağlıyoruz.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20laser%20cutting%20and%20engraving%20services%20showing%20computer-controlled%20laser%20machines%20working%20on%20wood%2C%20acrylic%2C%20and%20other%20materials.%20Precise%20cutting%20and%20engraving%20technology%20for%20complex%20designs%20and%20detailed%20artwork.%20High-precision%20laser%20cutting%20and%20engraving%20equipment.&width=600&height=400&seq=laser-cutting-1&orientation=landscape'
    },
    {
      icon: 'ri-bank-card-line',
      title: 'Kartvizit Tasarımı',
      description: 'Güçlü ilk izlenimler yaratan ve kimliğinizi yansıtan profesyonel, marka odaklı tasarımlar.',
      details: 'Premium malzemeler, benzersiz yüzey işlemleri ve yenilikçi düzenlemelerle profesyonelliğinizi ve marka kişiliğinizi sergileyen yaratıcı kartvizit tasarımları.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20card%20design%20services%20showing%20creative%20and%20premium%20business%20card%20designs%20with%20unique%20surface%20treatments%20and%20innovative%20layouts.%20High-quality%20materials%20and%20professional%20business%20card%20solutions.%20Creative%20business%20card%20design%20and%20printing%20services.&width=600&height=400&seq=business-cards-1&orientation=landscape'
    },
    {
      icon: 'ri-mail-line',
      title: 'Davetiye Tasarımı',
      description: 'Özel etkinlikler, düğünler ve kurumsal organizasyonlar için zarif ve kişiselleştirilmiş davetiyeler.',
      details: 'Güzel tipografi, premium kağıtlar ve zarif bitirme dokunuşlarıyla özel etkinliğinizin özünü yakalayan özel davetiye tasarımları.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20invitation%20design%20services%20showing%20elegant%20and%20personalized%20invitations%20for%20special%20events%2C%20weddings%2C%20and%20corporate%20functions.%20Beautiful%20typography%2C%20premium%20papers%2C%20and%20elegant%20finishing%20touches.%20Custom%20invitation%20design%20and%20printing%20services.&width=600&height=400&seq=invitation-design-1&orientation=landscape'
    },
    {
      icon: 'ri-gift-2-line',
      title: 'Özel Günler İçin Promosyon Setleri',
      description: 'Mühendisler Günü, Öğretmenler Günü gibi özel günler için firmanızın logosuyla özel hediye setleri.',
      details: 'Özel günleri kutlamak için tasarlanan promosyon setleri. Firmanızın logosunu taşıyan özel paketlemeler ve set içindeki tüm materyallerde marka kimliğinizin yer aldığı profesyonel hediye çözümleri. Çalışan motivasyonu ve müşteri ilişkilerini güçlendiren özel tarih odaklı hediye setleri.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20promotional%20gift%20sets%20for%20special%20occasions%20showing%20custom%20gift%20packages%20with%20company%20logos%20for%20special%20days%20like%20Engineers%20Day%2C%20Teachers%20Day%2C%20and%20other%20celebrations.%20Professional%20gift%20solutions%20with%20brand%20identity%20and%20employee%20motivation%20focus.%20Custom%20promotional%20gift%20sets%20and%20packaging%20services.&width=600&height=400&seq=gift-sets-1&orientation=landscape'
    },
    {
      icon: 'ri-stamp-line',
      title: 'Özel Mühürler',
      description: 'Net, açık baskılar veren bireyler ve işletmeler için kişiselleştirilmiş lastik mühürler.',
      details: 'Resmi belgeler ve markalama amaçları için özel spesifikasyonlarınıza göre üretilen yüksek kaliteli lastik mühürler, otomatik mühürler ve kabartma mühürleri.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20custom%20rubber%20stamp%20services%20showing%20high-quality%20rubber%20stamps%2C%20automatic%20stamps%2C%20and%20embossing%20stamps%20for%20official%20documents%20and%20branding%20purposes.%20Personalized%20stamp%20solutions%20with%20custom%20specifications%20and%20professional%20quality.%20Custom%20rubber%20stamp%20design%20and%20production%20services.&width=600&height=400&seq=custom-stamps-1&orientation=landscape'
    },
    {
      icon: 'ri-layout-line',
      title: 'Pleksiglas Tabela',
      description: 'Modern estetiği uzun ömürlü kalite ile birleştiren şık, dayanıklı pleksi tabela çözümleri.',
      details: 'LED arka aydınlatma, özel şekiller ve ofisler, perakende alanları ve kurumsal ortamlar için profesyonel montaj sistemleri olan çağdaş pleksiglas tabelalar.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20plexi%20signage%20solutions%20showing%20modern%20and%20stylish%20plexi%20signs%20with%20LED%20backlighting%2C%20custom%20shapes%2C%20and%20professional%20mounting%20systems%20for%20offices%2C%20retail%20spaces%2C%20and%20corporate%20environments.%20Contemporary%20plexi%20signage%20with%20long-lasting%20quality%20and%20modern%20aesthetics.%20Professional%20plexi%20signage%20design%20and%20installation%20services.&width=600&height=400&seq=plexi-signs-1&orientation=landscape'
    },
    {
      icon: 'ri-road-map-line',
      title: 'Standart Tabela',
      description: 'Marka mesajınızı etkin şekilde ileten dış ve iç mekan işletme tabela çözümleri.',
      details: 'Maksimum görünürlük ve etki için tasarlanmış mağaza cephesi tabelaları, yönlendirme tabelaları, güvenlik tabelaları ve promosyon panoları dahil kapsamlı tabela çözümleri.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20standard%20signage%20solutions%20showing%20comprehensive%20signage%20solutions%20including%20store%20front%20signs%2C%20directional%20signs%2C%20security%20signs%2C%20and%20promotional%20displays%20designed%20for%20maximum%20visibility%20and%20impact.%20Indoor%20and%20outdoor%20business%20signage%20solutions%20for%20effective%20brand%20messaging.%20Professional%20standard%20signage%20design%20and%20installation%20services.&width=600&height=400&seq=standard-signs-1&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            <span className="text-yellow-400 font-['Pacifico']">Hizmetlerimiz</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Markanızı yükseltmek ve olağanüstü kalite ve yenilikçi tasarım yoluyla iş başarısını artırmak için tasarlanmış kapsamlı yaratıcı çözümler.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-2xl text-yellow-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                <p className="text-gray-500 mb-4 text-sm leading-relaxed">{service.details}</p>
                <div className="flex justify-between items-center">
                  <Link href="/contact" className="text-yellow-600 font-semibold hover:text-yellow-700 text-sm">
                    Bu Hizmet İçin Teklif Alın
                  </Link>
                  <div className="w-24 h-16 bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Çalışma Sürecimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İlk danışmanlıktan nihai teslimata kadar, her seferinde olağanüstü sonuçlar garanti eden kanıtlanmış bir süreci takip ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-yellow-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Danışmanlık</h3>
              <p className="text-gray-600">Proje ihtiyaçlarınızı mükemmel şekilde anlamak için vizyonunuzu, gereksinimlerinizi ve hedeflerinizi tartışıyoruz.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-yellow-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Tasarım</h3>
              <p className="text-gray-600">Yaratıcı ekibimiz markanız ve hedeflerinizle uyumlu konseptler ve tasarımlar geliştirir.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Üretim</h3>
              <p className="text-gray-600">En son teknoloji ve premium malzemeler kullanarak projenizi hassasiyetle hayata geçiriyoruz.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Teslimat</h3>
              <p className="text-gray-600">Kalite kontrollü ve özenle paketlenmiş bitmiş ürünleriniz zamanında teslim edilir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Başlamaya Hazır Mısınız?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Proje gereksinimlerinizi görüşmek ve hizmetlerimiz için kişiselleştirilmiş bir teklif almak üzere bugün bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors">
              Teklif İsteyin
            </Link>
            <Link href="tel:+902125550123" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors">
              Hemen Arayın
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}