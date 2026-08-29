import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { 
  FaFacebookF, 
  FaWhatsapp, 
  FaPinterestP, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube, 
  FaRss,
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaCcAmex
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Newsletter Handle Submit Functionality
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address!');
      return;
    }
    
    // Logic for newsletter signup success
    setMessage('Thank you for subscribing! Your $20 coupon code is: WELCOME20');
    setEmail('');
    
    // Message clear after 5 seconds
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <footer className="footer-wrapper">
      {/* 1. Yellow Newsletter Bar */}
      <div className="newsletter-bar">
        <div className="newsletter-container">
          <div className="newsletter-left">
            <Send className="paper-icon" size={24} />
            <h3 className="newsletter-title">Sign up to Newsletter</h3>
            <span className="newsletter-subtitle">
              ...and receive <strong>$20 coupon for first shopping</strong>
            </span>
          </div>
          <div className="newsletter-right">
            <form onSubmit={handleSubscribe} className="subscribe-box">
              <input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">SignUp</button>
            </form>
            {message && <p className="newsletter-feedback">{message}</p>}
          </div>
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          
          {/* Brand Info & Support */}
          <div className="footer-col brand-col">
            <h2 className="footer-logo">electro<span>.</span></h2>
            <div className="support-info">
              <p className="support-label">Got Questions ? Call us 24/7!</p>
              <h3 className="phone-number">(800) 8001-8588, (0600) 874 548</h3>
            </div>
            <div className="contact-info">
              <h4>Contact Info</h4>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaPinterestP /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaRss /></a>
            </div>
          </div>

          {/* Links Column 1 & 2 */}
          <div className="footer-col links-col">
            <h4 className="col-title">Find It Fast</h4>
            <div className="sub-links-grid">
              <ul>
                <li><a href="#">Laptops & Computers</a></li>
                <li><a href="#">Cameras & Photography</a></li>
                <li><a href="#">Smart Phones & Tablets</a></li>
                <li><a href="#">Video Games & Consoles</a></li>
                <li><a href="#">TV & Audio</a></li>
                <li><a href="#">Gadgets</a></li>
                <li><a href="#">Waterproof Headphones</a></li>
              </ul>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Compare</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Store Directory</a></li>
              </ul>
            </div>
          </div>

          {/* Links Column 3 */}
          <div className="footer-col links-col">
            <h4 className="col-title">Customer Care</h4>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Track your Order</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Returns/Exchange</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Product Support</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright & Payment Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © <strong>Electro</strong> - All Rights Reserved
          </p>
          <div className="payment-badges">
            <FaCcDiscover title="Discover" className="payment-icon discover" />
            <FaCcMastercard title="MasterCard" className="payment-icon mastercard" />
            <FaCcPaypal title="PayPal" className="payment-icon paypal" />
            <FaCcAmex title="Amex" className="payment-icon amex" />
            <FaCcVisa title="Visa" className="payment-icon visa" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;