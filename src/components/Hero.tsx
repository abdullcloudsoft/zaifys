import React from 'react';
import { Phone, UtensilsCrossed, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onViewMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewMenu }) => {
  return (
    <section id="home" className="relative pt-20 sm:pt-28 pb-12 sm:pb-20 overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Hero Container */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8E1D7] shadow-xs">
          {/* One single, bright, appetizing hero food photo */}
          <div className="relative w-full h-[460px] sm:h-[540px] md:h-[580px]">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80"
              alt="Zaify's Authentic Fresh Dining Spread"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />

            {/* Subtle, soft light gradient for natural text legibility (no dark overlay, no heavy poster) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/90 via-[#FAF8F5]/40 to-transparent sm:bg-gradient-to-r sm:from-[#FAF8F5]/90 sm:via-[#FAF8F5]/60 sm:to-transparent flex items-end sm:items-center p-6 sm:p-12 md:p-16">
              
              {/* Minimalist Hero Content */}
              <div className="max-w-xl">
                {/* Location indicator */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#E6DDD2] text-[#8C4616] text-xs font-semibold mb-3 sm:mb-4 shadow-xs">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Commercial Market, Satellite Town</span>
                </div>

                {/* Restaurant Name */}
                <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#2A2724] tracking-tight leading-none mb-3 sm:mb-4">
                  Zaify's
                </h1>

                {/* Minimalist Tagline */}
                <p className="text-lg sm:text-2xl text-[#4A433C] font-serif-display italic mb-6 sm:mb-8 font-medium">
                  Authentic Taste, Made With Passion
                </p>

                {/* Two Simple Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <button
                    id="hero-view-menu-btn"
                    onClick={onViewMenu}
                    className="flex items-center justify-center gap-2 bg-[#B85D19] hover:bg-[#9E4D12] text-white px-6 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all shadow-sm active:scale-95"
                  >
                    <UtensilsCrossed className="w-4 h-4" />
                    <span>View Menu</span>
                  </button>

                  <a
                    id="hero-call-now-btn"
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="flex items-center justify-center gap-2 bg-white hover:bg-[#F9F6F0] text-[#2A2724] border border-[#D9CEBF] hover:border-[#B85D19] px-6 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all shadow-xs active:scale-95"
                  >
                    <Phone className="w-4 h-4 text-[#B85D19]" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Trust Highlights Bar (Light, clean, no clutter) */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs sm:text-sm text-[#575048]">
          <div className="bg-[#F6F1EA] border border-[#E9E1D6] rounded-xl p-3 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#EBDDCF] flex items-center justify-center text-[#964710] shrink-0 font-bold">
              ✓
            </div>
            <span className="font-medium text-[#38332E]">100% Fresh & Halal</span>
          </div>

          <div className="bg-[#F6F1EA] border border-[#E9E1D6] rounded-xl p-3 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#EBDDCF] flex items-center justify-center text-[#964710] shrink-0">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium text-[#38332E]">12:00 PM – 1:00 AM</span>
          </div>

          <div className="bg-[#F6F1EA] border border-[#E9E1D6] rounded-xl p-3 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#EBDDCF] flex items-center justify-center text-[#964710] shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium text-[#38332E]">Commercial Market</span>
          </div>

          <div className="bg-[#F6F1EA] border border-[#E9E1D6] rounded-xl p-3 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#EBDDCF] flex items-center justify-center text-[#964710] shrink-0 font-bold">
              ★
            </div>
            <span className="font-medium text-[#38332E]">Dine-in & Takeaway</span>
          </div>
        </div>
      </div>
    </section>
  );
};
