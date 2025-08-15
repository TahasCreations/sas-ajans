import React from 'react';
import { Gift, Printer, Scissors, CreditCard, Mail, Stamp, Square, Signpost as SignPost, Book } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Gift className="h-8 w-8" />,
      title: 'Promosyon Ürünleri',
      description: 'Kurumsal etkinlikler ve tanıtım faaliyetleri için özel tasarım promosyon ürünleri. Kalem, defter, çanta, mug bardak ve daha fazlası.',
      features: ['Kurumsal hediyeler', 'Etkinlik giveawayları', 'Marka tanıtım ürünleri']
    },
    {
      icon: <Printer className="h-8 w-8" />,
      title: 'UV Baskı Hizmetleri',
      description: 'Çeşitli yüzeylerde yüksek kalite, dayanıklı ve renk canlılığı yüksek UV baskı teknolojisi ile profesyonel baskı çözümleri.',
      features: ['Ahşap, metal, cam baskı', 'Renk canlılığı', 'Dayanıklı sonuçlar']
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: 'Lazer Kesim & Gravür',
      description: 'Ahşap, akrilik, metal ve daha birçok malzemede hassas kesim ve gravür işlemleri. Özel tasarım ve seri üretim seçenekleri.',
      features: ['Hassas kesim', 'Çoklu malzeme desteği', 'Özel tasarımlar']
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Kartvizit Tasarımı',
      description: 'Markanızı yansıtan profesyonel ve etkileyici kartvizit tasarımları. Modern tasarım anlayışı ile fark yaratın.',
      features: ['Profesyonel tasarım', 'Marka uyumu', 'Kaliteli baskı']
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Davetiye Tasarımı',
      description: 'Düğün, nişan, doğum günü ve kurumsal etkinlikler için özel tasarım davetiyeler. Unutulmaz anlarınız için özel çözümler.',
      features: ['Kişiselleştirilmiş tasarım', 'Özel etkinlik temaları', 'Premium malzemeler']
    },
    {
      icon: <Stamp className="h-8 w-8" />,
      title: 'Özel Kaşe Üretimi',
      description: 'İşletmeniz ve kişisel kullanımınız için özel tasarım kauçuk kaşe üretimi. Hızlı teslimat ve kaliteli malzeme garantisi.',
      features: ['Hızlı üretim', 'Dayanıklı malzeme', 'Özel tasarım']
    },
    {
      icon: <Square className="h-8 w-8" />,
      title: 'Pleksiglas Tabela',
      description: 'Modern ve şık görünümlü pleksiglas tabela çözümleri. İç ve dış mekan kullanımı için dayanıklı ve estetik seçenekler.',
      features: ['Modern görünüm', 'Dayanıklı malzeme', 'LED aydınlatma seçenekleri']
    },
    {
      icon: <SignPost className="h-8 w-8" />,
      title: 'Standart Tabela',
      description: 'İş yeriniz için dış ve iç mekan tabela çözümleri. Profesyonel görünüm ve uzun ömürlü kullanım garantisi.',
      features: ['İç-dış mekan uygun', 'Profesyonel görünüm', 'Uzun ömürlü']
    },
    {
      icon: <Book className="h-8 w-8" />,
      title: 'Kullanım Kılavuzu',
      description: 'Ürünleriniz için profesyonel tasarım ve baskı kalitesinde kullanım kılavuzları. Anlaşılır içerik ve görsel tasarım.',
      features: ['Profesyonel tasarım', 'Anlaşılır içerik', 'Kaliteli baskı']
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SAS Ajans olarak, işletmenizin tüm yaratıcı ve promosyon ihtiyaçlarına 
            profesyonel çözümler sunuyoruz. Her projede kalite ve mükemmeliyeti hedefliyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 hover:border-yellow-300 group"
            >
              <div className="text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-200">
                  Detaylı Bilgi Al →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hangi Hizmetimize İhtiyacınız Var?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Projeleriniz için ücretsiz danışmanlık alın. Uzman ekibimiz size en uygun 
            çözümleri sunmak için hazır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/iletisim" 
              className="inline-flex items-center px-8 py-3 bg-yellow-600 text-black font-medium rounded-md hover:bg-yellow-700 transition-colors duration-200"
            >
              Ücretsiz Danışmanlık Al
            </a>
            <a 
              href="tel:+905551234567" 
              className="inline-flex items-center px-8 py-3 border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black font-medium rounded-md transition-all duration-200"
            >
              Hemen Arayın
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;