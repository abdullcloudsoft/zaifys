import React from 'react';
import { Phone, MessageCircle, Utensils, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MobileQuickBarProps {
  onViewMenu: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onViewMenu }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#FAF8F5]/98 backdrop-blur-md border-t border-[#E5DDD2] px-3 py-2 shadow-lg">
      <div className="flex items-center justify-around gap-1 max-w-md mx-auto">
        {/* Call Now */}
        <a
          id="mobile-bar-call"
          href={`tel:${RESTAURANT_INFO.phoneRaw}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#B85D19] text-white text-[11px] font-semibold active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          id="mobile-bar-whatsapp"
          href={RESTAURANT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#25D366] text-white text-[11px] font-semibold active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* View Menu */}
        <button
          id="mobile-bar-menu"
          onClick={onViewMenu}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-white border border-[#DDD3C7] text-[#332E28] text-[11px] font-semibold active:scale-95 transition-transform"
        >
          <Utensils className="w-4 h-4 mb-0.5 text-[#B85D19]" />
          <span>Menu</span>
        </button>

        {/* Directions */}
        <a
          id="mobile-bar-directions"
          href={RESTAURANT_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-white border border-[#DDD3C7] text-[#332E28] text-[11px] font-semibold active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 mb-0.5 text-[#B85D19]" />
          <span>Map</span>
        </a>
      </div>
    </div>
  );
};
