import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-14 sm:py-20 bg-[#FBF9F6] border-t border-[#EFE8DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-[#9E4D12] font-semibold">
            Our Specialties
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#2A2724] mt-2 mb-3">
            Popular Menu
          </h2>
          <p className="text-sm sm:text-base text-[#665E56]">
            Crafted with fresh ingredients and traditional recipes. Prepared fresh to order.
          </p>
        </div>

        {/* Category Filter Pills (Scrollable on mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`menu-cat-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#B85D19] text-white shadow-xs font-semibold'
                    : 'bg-white text-[#524B44] border border-[#E5DDD2] hover:border-[#B85D19]/60 hover:bg-[#FAF6F0]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`menu-item-${item.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E1D7] hover:border-[#D4C4B2] transition-all duration-300 flex flex-col group shadow-xs hover:shadow-sm"
            >
              {/* Item Photo (Distinct and bright, lazy loaded) */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F2ECE4]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-[#FAF8F5] text-[#964710] border border-[#E2D5C5] text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                    <Sparkles className="w-3 h-3 text-[#B85D19]" />
                    <span>Popular</span>
                  </div>
                )}
                {item.spicy && (
                  <div className="absolute top-3 right-3 bg-red-50 text-red-700 border border-red-200 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
                    Desi Special
                  </div>
                )}
              </div>

              {/* Item Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-1.5">
                    <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#2A2724] group-hover:text-[#B85D19] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-semibold text-base sm:text-lg text-[#B85D19] shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#696159] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F2ECE4] flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#8A8177] font-medium">
                    Freshly Prepared
                  </span>

                  <a
                    href={`https://wa.me/923006165529?text=Hi%20Zaify's,%20I%20would%20like%20to%20order%20or%20inquire%20about:%20${encodeURIComponent(item.name)}%20(${item.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C3B14] hover:text-[#5E260B] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order / Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Footer Note */}
        <div className="mt-10 text-center bg-[#F4EFEA] border border-[#E7DFD4] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif-display text-base font-bold text-[#2A2724]">
              Looking for full family platters or custom catering?
            </h4>
            <p className="text-xs sm:text-sm text-[#665E56]">
              Call our manager directly or order via WhatsApp for quick service.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 bg-[#B85D19] hover:bg-[#9E4D12] text-white px-4 py-2 rounded-full text-xs font-semibold transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: 0300-6165529</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
