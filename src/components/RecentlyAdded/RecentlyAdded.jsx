import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ShoppingCart, Heart, RefreshCw } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import './RecentlyAdded.css';


import headphone1 from '../../assets/b.webp';
import headphone2 from '../../assets/cc.webp';
import headphone3 from '../../assets/dd.webp';
import controller from '../../assets/ee.webp';
import speaker from '../../assets/ff.webp';
import tablet1 from '../../assets/hh.webp';
import headphone4 from '../../assets/dd.webp';
import laptop1 from '../../assets/jj.webp';
import laptop2 from '../../assets/kk.webp';
import laptop3 from '../../assets/ll.webp';
import computerCase from '../../assets/mm.webp';
import printer from '../../assets/nn.webp';
import camera1 from '../../assets/oo.webp';
import phone1 from '../../assets/pp.webp';
import powerbank from '../../assets/qq.webp';
import smartwatch from '../../assets/rr.webp';
import camera2 from '../../assets/ss.webp';
import charger from '../../assets/tt.webp';
import laptop4 from '../../assets/uu.webp';
import phone2 from '../../assets/vv.webp';


const productsData = [
  { id: 1, category: "Accessories, Headphone", title: "Universal Headphones Case in Black", price: "159.00", oldPrice: null, image: headphone1 },
  { id: 2, category: "Accessories, Headphone", title: "Headphones USB Wires", price: "50.00", oldPrice: null, image: headphone2 },
  { id: 3, category: "Accessories", title: "Ultra Wireless S50 Headphones S50", price: "350.00", oldPrice: null, image: headphone3 },
  { id: 4, category: "Game Consoles, Video", title: "Game Console Controller + USB 3.0", price: "90.00", oldPrice: "99.00", image: controller },
  { id: 5, category: "Audio Speakers, TV & Video", title: "Wireless Audio System Multiroom", price: "2,299.00", oldPrice: null, image: speaker },
  { id: 6, category: "Laptops, Laptops & Tablets", title: "Tablet White EliteBook Revolve", price: "1,300.00", oldPrice: null, image: tablet1 },
  { id: 7, category: "Accessories, Headphone", title: "Purple Solo 2 Wireless", price: "248.00", oldPrice: null, image: headphone4 },
  { id: 8, category: "Laptops, Laptops & Tablets", title: "Notebook Widescreen Y700-", price: "1,299.00", oldPrice: null, image: laptop1 },
  { id: 9, category: "Laptops, Laptops & Tablets", title: "Laptop WiFi CX61 2QF 15.6\" 4210M", price: "2,299.00", oldPrice: null, image: laptop2 },
  { id: 10, category: "Laptops, Laptops & Tablets", title: "Laptop Screener CX70 2QF-621XPL", price: "2,399.00", oldPrice: null, image: laptop3 },
  { id: 11, category: "Computer Cases", title: "Aerocool EN52377 Dead Silence", price: "150.00", oldPrice: "180.00", image: computerCase },
  { id: 12, category: "Printers, Printers & Ink", title: "Full Color LaserJet Pro M452dn", price: "1,050.00", oldPrice: null, image: printer },
  { id: 13, category: "Cameras, Cameras & Video", title: "White NX Mini F1 SMART NX", price: "559.00", oldPrice: null, image: camera1 },
  { id: 14, category: "Smart Phones & Tablets", title: "Smartphone 6S 32GB LTE", price: "1,100.00", oldPrice: "1,215.00", image: phone1 },
  { id: 15, category: "Accessories, Power", title: "Powerbank 1130 mAh Blue", price: "200.00", oldPrice: "210.00", image: powerbank },
  { id: 16, category: "Gadgets, Smartwatches", title: "Smartwatch 2.0 LTE WiFi Waterproof", price: "700.00", oldPrice: "725.00", image: smartwatch },
  { id: 17, category: "Cameras, Cameras & Video", title: "Smart Camera 6200U with 500GB", price: "2,999.00", oldPrice: null, image: camera2 },
  { id: 18, category: "Accessories, Chargers", title: "Wireless Charger 2040 White", price: "248.00", oldPrice: null, image: charger },
  { id: 19, category: "Smart Phones & Tablets", title: "Ultrabook UX305CA-FC050T", price: "1,200.00", oldPrice: "1,218.00", image: laptop4 },
  { id: 20, category: "Smart Phones & Tablets", title: "Smartphone 6S 32GB LTE", price: "780.00", oldPrice: null, image: phone2 }
];

const RecentlyAdded = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="recently-container">
      
      <div className="recently-header">
        <h2 className="header-title">Recently Added</h2>

        <div className="arrows">
          <button ref={prevRef} className="arrow-btn">
            <ChevronLeft size={20} />
          </button>
          <button ref={nextRef} className="arrow-btn">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={6}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {productsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="product-card">
              <span className="card-category">{item.category}</span>
              <h4 className="card-title">{item.title}</h4>

              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="card-price-row">
                <div className="price-box">
                  <span className="current-price">${item.price}</span>
                  {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
                </div>

                <button className="cart-btn">
                  <ShoppingCart size={16} />
                </button>
              </div>

              
              <div className="hidden-actions">
                <button className="action-link">
                  <Heart size={13} /> Wishlist
                </button>
                <button className="action-link">
                  <RefreshCw size={13} /> Compare
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentlyAdded;