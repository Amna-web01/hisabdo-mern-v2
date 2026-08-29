import React from 'react';
import './ProductWidgets.css';


import img1 from '../../assets/c.webp';
import img2 from '../../assets/oa.webp';
import img3 from '../../assets/vv.webp';
import img4 from '../../assets/a.webp';
import img5 from '../../assets/b.webp';
import img6 from '../../assets/c.webp';
import img7 from '../../assets/ya.webp';
import img8 from '../../assets/pp.webp';
import img9 from '../../assets/kk.webp';
import img10 from '../../assets/zz.webp';


const featuredProducts = [
  { id: 1, title: "Tablet Thin EliteBook Revolve 810 G6", price: "1,300.00", oldPrice: null, image: img1 },
  { id: 2, title: "Notebook Widescreen Z51-70 40K6013UPB", price: "1,100.00", oldPrice: null, image: img2 },
  { id: 3, title: "Smartphone 6S 128GB LTE", price: "750.00", oldPrice: "780.00", image: img3 },
];


const topSellingProducts = [
  { id: 1, title: "Game Console Controller + USB 3.0 Cable", price: "90.00", oldPrice: "99.00", image: img4 },
  { id: 2, title: "Universal Headphones Case in Black", price: "159.00", oldPrice: null, image: img5 },
  { id: 3, title: "Tablet Thin EliteBook Revolve 810 G6", price: "1,300.00", oldPrice: null, image: img6 },
];


const onSaleProducts = [
  { id: 1, title: "Notebook Black Spire V Nitro VN7-591G", price: "1,999.00", oldPrice: "2,299.00", rating: 5, image: img7 },
  { id: 2, title: "Smartphone 6S 32GB LTE", price: "1,100.00", oldPrice: "1,215.00", rating: 4, image: img8 },
  { id: 3, title: "Apple MacBook Pro MF841HN/A 13-inch Laptop", price: "1,500.00", oldPrice: "1,800.00", rating: 5, image: img9 },
];

const ProductWidgets = () => {
  return (
    <div className="widgets-container">
      {/* Column 1: Featured Products */}
      <div className="widget-column">
        <h3 className="widget-title">Featured Products</h3>
        <div className="widget-list">
          {featuredProducts.map(item => (
            <div key={item.id} className="widget-item">
              <div className="widget-img-box">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="widget-info">
                <h4 className="widget-item-title">{item.title}</h4>
                <div className="widget-price">
                  <span className={item.oldPrice ? "price-sale" : "price-normal"}>${item.price}</span>
                  {item.oldPrice && <span className="price-old">${item.oldPrice}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="widget-column">
        <h3 className="widget-title">Top Selling Products</h3>
        <div className="widget-list">
          {topSellingProducts.map(item => (
            <div key={item.id} className="widget-item">
              <div className="widget-img-box">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="widget-info">
                <h4 className="widget-item-title">{item.title}</h4>
                <div className="widget-price">
                  <span className={item.oldPrice ? "price-sale" : "price-normal"}>${item.price}</span>
                  {item.oldPrice && <span className="price-old">${item.oldPrice}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="widget-column">
        <h3 className="widget-title">On-sale Products</h3>
        <div className="widget-list">
          {onSaleProducts.map(item => (
            <div key={item.id} className="widget-item">
              <div className="widget-img-box">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="widget-info">
                <h4 className="widget-item-title">{item.title}</h4>
                <div className="stars">
                  {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                </div>
                <div className="widget-price">
                  <span className="price-sale">${item.price}</span>
                  <span className="price-old">${item.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="widget-banner">
        <div className="banner-content">
          <p className="banner-subtitle">smart<span>G3</span></p>
          <span className="banner-tag">Now with 4G</span>
          <div className="banner-price">
            <small>STARTING AT</small>
            <h3><sup>$</sup>129<sup>99</sup></h3>
          </div>
        </div>
        <img 
          src={img10} 
          alt="Smart G3" 
          className="banner-img"
        />
      </div>
    </div>
  );
};

export default ProductWidgets;