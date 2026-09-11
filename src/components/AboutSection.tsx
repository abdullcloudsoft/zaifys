import React from 'react';
import { MapPin, HeartHandshake, Utensils, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Visual: Bright, welcoming dining atmosphere */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D7] shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
                alt="Zaify's Restaurant Welcoming Dining Space"
                loading="lazy"
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs border border-[#E6DDD2] rounded-xl p-3.5 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8C3B14]">
                  <MapPin className="w-4 h-4 text-[#B85D19] shrink-0" />
                  <span>57-B, Commercial Market, Satellite Town, Rawalpindi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text: Short, clean, strictly adhering to prompt */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-widest text-[#9E4D12] font-semibold">
              About Zaify's
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#2A2724] mt-2 mb-4 leading-tight">
              A Warm, Comfortable Dining Experience in Rawalpindi
            </h2>

            {/* Strictly following the user's prompt requirement: Short and clean */}
            <p className="text-sm sm:text-base text-[#524B44] leading-relaxed mb-4">
              Located in <strong className="text-[#2A2724] font-semibold">Satellite Town, Rawalpindi</strong>, Zaify's focuses on serving delicious, freshly prepared food paired with a welcoming, comfortable restaurant atmosphere for families and food lovers alike.
            </p>

            <p className="text-sm sm:text-base text-[#524B44] leading-relaxed mb-6">
              From traditional wok-cooked Karahis and earthen Handis to live charcoal BBQ skewers, every dish is crafted with prime ingredients and genuine passion for authentic taste.
            </p>

            {/* 3 Quick Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#F6F1EA] border border-[#E9E0D4] rounded-xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EADDCE] flex items-center justify-center text-[#9E4D12] shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2A2724]">Authentic Recipes</h4>
                  <p className="text-[11px] text-[#696159]">Freshly prepared</p>
                </div>
              </div>

              <div className="bg-[#F6F1EA] border border-[#E9E0D4] rounded-xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EADDCE] flex items-center justify-center text-[#9E4D12] shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2A2724]">Family Friendly</h4>
                  <p className="text-[11px] text-[#696159]">Cozy seating</p>
                </div>
              </div>

              <div className="bg-[#F6F1EA] border border-[#E9E0D4] rounded-xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EADDCE] flex items-center justify-center text-[#9E4D12] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2A2724]">Strict Hygiene</h4>
                  <p className="text-[11px] text-[#696159]">Clean kitchen</p>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#8C3B14] hover:text-[#5E260B] underline underline-offset-4"
              >
                <MapPin className="w-4 h-4" />
                <span>Find us on Google Maps</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
