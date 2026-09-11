import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { X, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-[#F6F2EC] border-t border-[#EAE2D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-[#9E4D12] font-semibold">
            Visual Highlights
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#2A2724] mt-2 mb-3">
            Restaurant Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#665E56]">
            A glimpse into our freshly prepared dishes, live charcoal grills and welcoming atmosphere.
          </p>
        </div>

        {/* Gallery Grid (8 distinct images, 4 cols on desktop, 2 on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setSelectedItem(item)}
              className="group relative h-44 sm:h-56 rounded-xl overflow-hidden bg-[#EDE5DB] border border-[#DDD3C7] cursor-pointer shadow-xs hover:shadow-sm transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Light gentle hover overlay with zoom icon and title */}
              <div className="absolute inset-0 bg-[#FAF8F5]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                <div className="self-end p-1 rounded-full bg-white text-[#B85D19] shadow-xs">
                  <ZoomIn className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#9E4D12] font-semibold block">
                    {item.category}
                  </span>
                  <p className="text-xs sm:text-sm font-serif-display font-bold text-[#2A2724] leading-tight">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full border border-[#E5DCD2] shadow-xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-4/3 w-full bg-[#EDE5DB]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#2A2724] flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Close image preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-between bg-[#FAF8F5]">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#B85D19] font-semibold block">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-serif-display text-lg font-bold text-[#2A2724]">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-xs font-semibold text-[#5A524A] hover:text-[#2A2724] px-3 py-1.5 rounded-md border border-[#DDD3C7] bg-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
