import "./BestSellers.css";
import { ShoppingCart, Heart, RefreshCw } from "lucide-react";

function BestSellers() {
  return (
    <section className="bestsellers-section">
      <div className="bestsellers-header">
        <h2 className="section-title">Best Sellers</h2>
        <a href="#" className="top-20-btn">
          Top 20
        </a>
      </div>

      <div className="bestsellers-grid">
        {/* Card 1 */}
        <div className="bestseller-card">
          <div className="card-content">
            <div className="product-image">
              <img src="/a.webp" alt="Game Console Controller" />
            </div>

            <div className="product-details">
              <span className="category">
                Game Consoles, Video Games &
              </span>

              <h3 className="product-title">
                <a href="#">
                  Game Console Controller + USB 3.0 Cable
                </a>
              </h3>

              <div className="card-price-row">
                <div className="price-container">
                  <span className="current-price">$90.00</span>
                  <span className="old-price">$99.00</span>
                </div>

                <button className="cart-btn" aria-label="Add to cart">
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="card-hover-actions">
            <a href="#" className="action-link">
              <Heart size={14} /> Wishlist
            </a>

            <a href="#" className="action-link">
              <RefreshCw size={14} /> Compare
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bestseller-card">
          <div className="card-content">
            <div className="product-image">
              <img src="/b.webp" alt="Headphones Case" />
            </div>

            <div className="product-details">
              <span className="category">
                Accessories, Headphone Cases
              </span>

              <h3 className="product-title">
                <a href="#">
                  Universal Headphones Case in Black
                </a>
              </h3>

              <div className="card-price-row">
                <div className="price-container">
                  <span className="current-price">$159.00</span>
                </div>

                <button className="cart-btn" aria-label="Add to cart">
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="card-hover-actions">
            <a href="#" className="action-link">
              <Heart size={14} /> Wishlist
            </a>

            <a href="#" className="action-link">
              <RefreshCw size={14} /> Compare
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bestseller-card">
          <div className="card-content">
            <div className="product-image">
              <img src="/c.webp" alt="Tablet Red EliteBook" />
            </div>

            <div className="product-details">
              <span className="category">
                Smart Phones & Tablets,
              </span>

              <h3 className="product-title">
                <a href="#">
                  Tablet Thin EliteBook Revolve 810 G6
                </a>
              </h3>

              <div className="card-price-row">
                <div className="price-container">
                  <span className="current-price">$1,300.00</span>
                </div>

                <button className="cart-btn" aria-label="Add to cart">
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="card-hover-actions">
            <a href="#" className="action-link">
              <Heart size={14} /> Wishlist
            </a>

            <a href="#" className="action-link">
              <RefreshCw size={14} /> Compare
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bestseller-card">
          <div className="card-content">
            <div className="product-image">
              <img src="/d.webp" alt="Wireless Audio System" />
            </div>

            <div className="product-details">
              <span className="category">
                Audio Speakers, TV & Audio
              </span>

              <h3 className="product-title">
                <a href="#">
                  Wireless Audio System Multiroom 360
                </a>
              </h3>

              <div className="card-price-row">
                <div className="price-container">
                  <span className="current-price">$2,299.00</span>
                </div>

                <button className="cart-btn" aria-label="Add to cart">
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="card-hover-actions">
            <a href="#" className="action-link">
              <Heart size={14} /> Wishlist
            </a>

            <a href="#" className="action-link">
              <RefreshCw size={14} /> Compare
            </a>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bestseller-card">
          <div className="card-content">
            <div className="product-image">
              <img src="/e.webp" alt="Tablet Red EliteBook G2" />
            </div>

            <div className="product-details">
              <span className="category">
                Laptops, Laptops & Computers,
              </span>

              <h3 className="product-title">
                <a href="#">
                  Tablet Red EliteBook Revolve 810 G2
                </a>
              </h3>

              <div className="card-price-row">
                <div className="price-container">
                  <span className="current-price">$2,100.00</span>
                  <span className="old-price">$2,299.00</span>
                </div>

                <button className="cart-btn" aria-label="Add to cart">
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="card-hover-actions">
            <a href="#" className="action-link">
              <Heart size={14} /> Wishlist
            </a>

            <a href="#" className="action-link">
              <RefreshCw size={14} /> Compare
            </a>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bestseller-card">
          <div className="card-content">
            <div className="product-image">
              <img src="/f.webp" alt="LaserJet Printer" />
            </div>

            <div className="product-details">
              <span className="category">
                Printers, Printers & Ink
              </span>

              <h3 className="product-title">
                <a href="#">
                  Full Color LaserJet Pro M452dn
                </a>
              </h3>

              <div className="card-price-row">
                <div className="price-container">
                  <span className="current-price">$1,050.00</span>
                </div>

                <button className="cart-btn" aria-label="Add to cart">
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="card-hover-actions">
            <a href="#" className="action-link">
              <Heart size={14} /> Wishlist
            </a>

            <a href="#" className="action-link">
              <RefreshCw size={14} /> Compare
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BestSellers;