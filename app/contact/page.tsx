'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: 'ri-phone-line',
      title: 'Telefon',
      info: '+90 212 555 0123',
      description: 'Pazartesi - Cuma: 09:00 - 18:00'
    },
    {
      icon: 'ri-mail-line',
      title: 'E-posta',
      info: 'info@sasajans.com',
      description: '24 saat içinde yanıt alın'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Adres',
      info: 'İstanbul, Türkiye',
      description: 'Merkezi konum, kolay ulaşım'
    }
  ];

  const services = [
    'Promosyon Ürünleri',
    'UV Baskı',
    'Araç Reklamları',
    'Cam Kaplamalar',
    'Poster Tasarımı',
    'Lazer Kesim',
    'Kartvizit Tasarımı',
    'Davetiye Tasarımı',
    'Özel Mühürler',
    'Pleksiglas Tabela',
    'Standart Tabela'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            <span className="text-yellow-400 font-['Pacifico']">İletişim</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proje gereksinimlerinizi görüşmek ve olağanüstü bir şey yaratmak için bizimle iletişime geçin.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-xl text-yellow-600`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                      <p className="text-lg text-gray-700 mb-1">{item.info}</p>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-black mb-6">Hizmet Alanlarımız</h3>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <i className="ri-check-line text-yellow-600"></i>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-black mb-6">Teklif İsteyin</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="E-posta adresiniz"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Telefon numaranız"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Firma
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Firma adınız"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Hizmet Türü
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Hizmet seçiniz</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Proje Detayları *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Proje gereksinimlerinizi ve detaylarınızı buraya yazın..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-black py-4 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">Konumumuz</h2>
            <p className="text-gray-600">İstanbul'da merkezi konumda hizmet veriyoruz</p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <i className="ri-map-pin-line text-6xl text-gray-400 mb-4"></i>
              <p className="text-gray-500 text-lg">Harita burada görüntülenecek</p>
              <p className="text-gray-400">Google Maps entegrasyonu</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Sık Sorulan Sorular</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Projeleriniz hakkında merak ettiğiniz soruların cevaplarını bulun.
          </p>
          <div className="bg-yellow-50 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-black mb-4">Proje süreçleri nasıl işliyor?</h3>
            <p className="text-gray-700 mb-6">
              Proje süreçlerimiz danışmanlık, tasarım, üretim ve teslimat aşamalarından oluşur. 
              Her aşamada sizinle yakın iletişim halinde çalışırız.
            </p>
            <Link href="/contact" className="text-yellow-600 font-semibold hover:text-yellow-700">
              Daha fazla bilgi için tıklayın →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}