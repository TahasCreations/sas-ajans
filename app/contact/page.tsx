'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Mesajınız için teşekkür ederiz! Size 24 saat içinde geri döneceğiz.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            <span className="text-yellow-400 font-['Pacifico']">İletişime</span> Geçin
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vizyonunuzu hayata geçirmeye hazır mısınız? Projeniz için ücretsiz danışmanlık ve kişiselleştirilmiş teklif almak üzere bugün bizimle iletişime geçin.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-black mb-8">Bize Mesaj Gönderin</h2>

              {submitMessage && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                  {submitMessage}
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      placeholder="Ad soyadınızı girin"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-posta Adresi *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      placeholder="E-posta adresinizi girin"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon Numarası
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      placeholder="Telefon numaranızı girin"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      İlgilendiğiniz Hizmet
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm appearance-none pr-8"
                      >
                        <option value="">Bir hizmet seçin</option>
                        <option value="promotional-products">Promosyon Ürünleri</option>
                        <option value="trophies-medals">Kupalar ve Madalyalar</option>
                        <option value="custom-plaques">Özel Plaketler</option>
                        <option value="uv-printing">UV Baskı</option>
                        <option value="vehicle-wraps">Araç Reklamları</option>
                        <option value="window-films">Cam Kaplamalar</option>
                        <option value="posters-banners">Poster ve Afiş Tasarımı</option>
                        <option value="wall-wrapping">Duvar Giydirmeleri</option>
                        <option value="bus-stop-ads">Durak Reklamları</option>
                        <option value="laser-cutting">Lazer Kesim</option>
                        <option value="business-cards">Kartvizit Tasarımı</option>
                        <option value="invitations">Davetiye Tasarımı</option>
                        <option value="special-day-sets">Özel Günler İçin Promosyon Setleri</option>
                        <option value="custom-stamps">Özel Mühürler</option>
                        <option value="plexiglass-signage">Pleksiglas Tabela</option>
                        <option value="standard-signage">Standart Tabela</option>
                        <option value="multiple-services">Birden Fazla Hizmet</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i className="ri-arrow-down-s-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Proje Detayları *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-vertical"
                    placeholder="Proje gereksinimleriniz, zaman çizelgeniz ve özel detaylar hakkında bize bilgi verin..."
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 karakter
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-yellow-400 text-black py-4 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Mesaj Gönderiliyor...
                    </span>
                  ) : (
                    'Mesaj Gönder'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-black mb-8">İletişim Bilgileri</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-lg flex-shrink-0">
                      <i className="ri-phone-line text-xl text-black"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-1">Telefon</h3>
                      <a href="tel:+902125550123" className="text-gray-600 hover:text-yellow-600 cursor-pointer">
                        +90 212 555 0123
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-lg flex-shrink-0">
                      <i className="ri-mail-line text-xl text-black"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-1">E-posta</h3>
                      <a href="mailto:info@sasajans.com" className="text-gray-600 hover:text-yellow-600 cursor-pointer">
                        info@sasajans.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-lg flex-shrink-0">
                      <i className="ri-map-pin-line text-xl text-black"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-1">Adres</h3>
                      <p className="text-gray-600">
                        Beşiktaş, İstanbul<br />
                        Türkiye 34357
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-lg flex-shrink-0">
                      <i className="ri-time-line text-xl text-black"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-1">Çalışma Saatleri</h3>
                      <p className="text-gray-600">
                        Pazartesi - Cuma: 09:00 - 18:00<br />
                        Cumartesi: 10:00 - 16:00<br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-black rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Bizi Takip Edin</h3>
                <div className="flex space-x-4 mb-6">
                  <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                    <i className="ri-facebook-fill text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                    <i className="ri-instagram-line text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                    <i className="ri-twitter-fill text-xl"></i>
                  </a>
                </div>
                <p className="text-gray-300">
                  En son projelerimiz ve yaratıcı ilhamımızla sosyal medyada güncel kalın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Stüdyomuzu Ziyaret Edin</h2>
            <p className="text-xl text-gray-600">
              İstanbul&apos;un kalbinde yer alan modern stüdyomuz, en son teknoloji ile donatılmış ve yaratıcı profesyonellerle çalışmaktadır.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.8273647743056!2d29.0084853156494!3d41.04303007929665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2sBe%C5%9Fikta%C5%9F%2C%20Istanbul%2C%20Turkey!5e0!3m2!1sen!2s!4v1639583021845!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SAS Ajans Konum"
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}