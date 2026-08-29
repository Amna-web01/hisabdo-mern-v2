import React from 'react';
import './PromoBanner.css';

const PromoBanner = () => {
  return (
    <div className="promo-banner-container">
      <h2 className="promo-banner-title">
        SHOP AND <strong>SAVE BIG</strong> ON HOTTEST TABLETS
      </h2>
      <div className="promo-banner-badge">
        STARTING AT <span className="promo-banner-price">$79.99</span>
      </div>
    </div>
  );
};

export default PromoBanner;