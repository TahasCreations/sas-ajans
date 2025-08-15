import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Star className="h-6 w-6 text-yellow-600" />,
      title: 'Premium Kalite',
      description: 'En yüksek standartlarda hizmet sunuyoruz'
    },
    {
      icon: <Users className="h-6 w-6 text-yellow-600" />,
      title: 'Uzman Ekip',
      description: 'Alanında deneyimli profesyonel kadromuz'
    },
    {
      icon: <Award className="h-6 w-6 text-yellow-600" />,
      title: 'Güvenilir Hizmet',
      description: 'Zamanında teslimat ve mükemmel sonuçlar'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Yaratıcı Çözümlerle
              <span className="block text-yellow-600">Markanızı Öne Çıkarın</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              SAS Ajans olarak, promosyon ürünleri, UV baskı, lazer kesim ve daha fazlasıyla 
              işletmenizin ihtiyaçlarına özel yaratıcı çözümler sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/hizmetler"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-600 hover:bg-yellow-700 transition-all duration-200 transform hover:scale-105"
              >
                Hizmetlerimizi Keşfedin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/iletisim"
                className="inline-flex items-center px-8 py-3 border-2 border-yellow-600 text-base font-medium rounded-md text-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-200"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Neden SAS Ajans?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              İzmir'de faaliyet gösteren deneyimli ekibimizle, markanızın ihtiyaçlarına 
              özel çözümler üretiyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Hizmet Alanlarımız
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Promosyon ürünlerinden dijital baskıya, tasarımdan üretime kadar 
              geniş hizmet yelpazemizle yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              'Promosyon Ürünleri',
              'UV Baskı Hizmetleri', 
              'Lazer Kesim & Gravür',
              'Kartvizit Tasarımı',
              'Davetiye Tasarımı',
              'Özel Kaşe Üretimi',
              'Pleksiglas Tabela',
              'Standart Tabela',
              'Kullanım Kılavuzu'
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-yellow-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-black">
                  {service}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/hizmetler"
              className="inline-flex items-center px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Tüm Hizmetleri Görüntüle
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Projenizi Hayata Geçirmek İçin Hazır mısınız?
          </h2>
          <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            Markanızı öne çıkaracak yaratıcı çözümler için bizimle iletişime geçin. 
            Ücretsiz danışmanlık hizmeti sunuyoruz.
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Hemen İletişime Geç
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;