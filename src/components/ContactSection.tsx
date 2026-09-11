import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    type: 'inquiry',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Zaify's! My name is ${formData.name || 'Guest'}. ${formData.message ? `Message: ${formData.message}` : 'I would like to inquire about dining / menu / table reservation.'}`
    );
    window.open(`https://wa.me/923006165529?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-[#9E4D12] font-semibold">
            Get In Touch
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#2A2724] mt-2 mb-3">
            Contact & Location
          </h2>
          <p className="text-sm sm:text-base text-[#665E56]">
            Visit us in Satellite Town, call for reservations, or reach out directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Official Restaurant Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E1D7] shadow-xs">
              <h3 className="font-serif-display text-2xl font-bold text-[#2A2724] mb-2">
                {RESTAURANT_INFO.name}
              </h3>
              <p className="text-xs uppercase tracking-wider text-[#9E4D12] font-semibold mb-6">
                Satellite Town, Rawalpindi
              </p>

              <div className="space-y-4 text-sm text-[#47413A]">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F6EFE6] text-[#B85D19] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8C8379] uppercase block">Location</span>
                    <strong className="text-[#2A2724] font-medium block leading-snug">
                      {RESTAURANT_INFO.address}
                    </strong>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F6EFE6] text-[#B85D19] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8C8379] uppercase block">Phone / Mobile</span>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                      className="text-[#2A2724] font-bold text-base hover:text-[#B85D19] transition-colors"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F6EFE6] text-[#B85D19] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8C8379] uppercase block">Email</span>
                    <a
                      href={`mailto:${RESTAURANT_INFO.email}`}
                      className="text-[#2A2724] hover:text-[#B85D19] transition-colors break-all"
                    >
                      {RESTAURANT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F6EFE6] text-[#B85D19] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8C8379] uppercase block">Opening Hours</span>
                    <span className="text-[#2A2724] font-medium">{RESTAURANT_INFO.timing}</span>
                  </div>
                </div>
              </div>

              {/* Three Mandatory Quick Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#F0E9DF] flex flex-col sm:flex-row gap-3">
                <a
                  id="contact-call-btn"
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#B85D19] hover:bg-[#9E4D12] text-white px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-98 text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  id="contact-whatsapp-btn"
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BE5C] text-white px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-98 text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Google Maps / Directions Button */}
              <a
                id="contact-maps-btn"
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-[#F6F2EB] hover:bg-[#EFE7DD] text-[#332E29] border border-[#DDD3C6] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-center"
              >
                <Navigation className="w-4 h-4 text-[#B85D19]" />
                <span>Google Maps / Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Simple Contact & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E1D7] shadow-xs">
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#2A2724] mb-2">
                Send a Message or Reservation Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#665E56] mb-6">
                Fill out the quick form below. Our team responds promptly.
              </p>

              {submitted ? (
                <div className="bg-[#F6F9F4] border border-[#CDE3C2] rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E5F3DD] text-[#2F7317] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-display text-xl font-bold text-[#1E3B13] mb-1">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#3E5C31] mb-4">
                    Your inquiry has been recorded. For instant table confirmation, feel free to ring us directly at{' '}
                    <strong className="font-semibold">{RESTAURANT_INFO.phone}</strong>.
                  </p>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', message: '', type: 'inquiry' });
                      }}
                      className="text-xs text-[#524B44] underline hover:text-[#2A2724]"
                    >
                      Send another message
                    </button>
                    <button
                      onClick={handleWhatsAppInquiry}
                      className="text-xs font-semibold text-[#1E3B13] bg-[#E5F3DD] px-3 py-1.5 rounded-md hover:bg-[#D5EAC9]"
                    >
                      Continue to WhatsApp
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-[#4A433C] uppercase mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Mehmood"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D9D0C3] focus:outline-hidden focus:border-[#B85D19] focus:ring-1 focus:ring-[#B85D19] text-sm text-[#2A2724] placeholder-[#A39B91] bg-[#FAF8F5]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#4A433C] uppercase mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0300-XXXXXXX"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D9D0C3] focus:outline-hidden focus:border-[#B85D19] focus:ring-1 focus:ring-[#B85D19] text-sm text-[#2A2724] placeholder-[#A39B91] bg-[#FAF8F5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-type" className="block text-xs font-semibold text-[#4A433C] uppercase mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      id="contact-type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D9D0C3] focus:outline-hidden focus:border-[#B85D19] focus:ring-1 focus:ring-[#B85D19] text-sm text-[#2A2724] bg-[#FAF8F5]"
                    >
                      <option value="inquiry">General Question / Feedback</option>
                      <option value="table">Table Reservation</option>
                      <option value="catering">Family Gathering / Catering</option>
                      <option value="takeaway">Takeaway Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[#4A433C] uppercase mb-1.5">
                      Message / Special Request
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let us know how many guests, preferred time, or any question..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D9D0C3] focus:outline-hidden focus:border-[#B85D19] focus:ring-1 focus:ring-[#B85D19] text-sm text-[#2A2724] placeholder-[#A39B91] bg-[#FAF8F5] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B85D19] hover:bg-[#9E4D12] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all shadow-xs active:scale-98 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppInquiry}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#2E7D32] hover:text-[#1B5E20] py-2 px-3 rounded-lg hover:bg-[#F2F7F2] transition-colors"
                    >
                      <span>Or send via WhatsApp</span>
                      <MessageSquare className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
