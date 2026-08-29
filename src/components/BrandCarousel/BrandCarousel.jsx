import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import './BrandCarousel.css';

// Video ke mutabiq exact brand list
const brandsData = [
  { id: 1, name: "airdnd", class: "font-airdnd" },
  { id: 2, name: "coinbuild", class: "font-coinbuild" },
  { id: 3, name: "dirrbble", class: "font-dirrbble" },
  { id: 4, name: "Instagirom", class: "font-instagirom" },
  { id: 5, name: "NEETFLIX", class: "font-neetflix" },
  { id: 6, name: "Pincorest", class: "font-pincorest" },
];

const BrandCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="brand-carousel-container">
      {/* Navigation Arrows */}
      <button ref={prevRef} className="brand-arrow brand-prev">
        <ChevronLeft size={18} />
      </button>
      
      <button ref={nextRef} className="brand-arrow brand-next">
        <ChevronRight size={18} />
      </button>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {brandsData.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="brand-item">
              <span className={`brand-logo-text ${brand.class}`}>
                {brand.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandCarousel;