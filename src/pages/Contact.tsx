import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Telefon',
      content: '+90 555 123 45 67',
      link: 'tel:+905551234567'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'E-posta',
      content: 'info@sasajans.com',
      link: 'mailto:info@sasajans.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Adres',
      content: 'İzmir, Türkiye',
      link: 'https://maps.google.com/maps?q=İzmir,Turkey'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cuma: 09:00 - 18:00',
      link: null
    }
  ];

  const socialMedia = [
    {
      icon: <Facebook className="h-5 w-5" />,
      name: 'Facebook',
      link: 'https://facebook.com/sasajans'
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      name: 'Instagram',
      link: 'https://instagram.com/sasajans'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: 'LinkedIn',
      link: 'https://linkedin.com/company/sasajans'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            İletişim
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projeleriniz için bizimle iletişime geçin. Deneyimli ekibimiz size en kısa sürede dönüş yapacaktır.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6">
              Bize Mesaj Gönderin
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-colors"
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
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-colors"
                  placeholder="ornek@email.com"
                />
              </div>

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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-colors"
                  placeholder="0555 123 45 67"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-colors resize-none"
                  placeholder="Projeniz hakkında detayları paylaşın..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-yellow-600 text-black font-medium rounded-md hover:bg-yellow-700 transition-all duration-200 transform hover:scale-105"
              >
                <Send className="mr-2 h-5 w-5" />
                Mesaj Gönder
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">
              İletişim Bilgileri
            </h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-yellow-600 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-black">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-yellow-600 transition-colors duration-200"
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-black mb-4">
                Sosyal Medya
              </h3>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-yellow-600 text-gray-600 hover:text-black rounded-full transition-all duration-200 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-4">
                Konumumuz
              </h3>
              <div className="bg-gray-200 rounded-md h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm">
                    İzmir, Türkiye
                  </p>
                  <a
                    href="https://maps.google.com/maps?q=İzmir,Turkey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                  >
                    Haritada Görüntüle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-black rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hemen Başlayalım
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Projelerinizi gerçekleştirmek için sabırsızlanıyoruz. 
            Ücretsiz danışmanlık için bugün arayın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905551234567"
              className="inline-flex items-center px-8 py-3 bg-yellow-600 text-black font-medium rounded-md hover:bg-yellow-700 transition-colors duration-200"
            >
              <Phone className="mr-2 h-5 w-5" />
              Şimdi Arayın
            </a>
            <a
              href="mailto:info@sasajans.com"
              className="inline-flex items-center px-8 py-3 border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black font-medium rounded-md transition-all duration-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              E-posta Gönderin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;