import "./ProductGrid.css";

function ProductGrid() {
  return (
    <section className="product-grid-section">
      <div className="product-container">

        {/* LEFT COLUMN */}
        <div className="product-column">

          {/* Card 1 */}
          <div className="product-card small-card">
            <div className="product-info">
              <span className="category">
                Accessories, Power Banks
              </span>

              <h3 className="product-title">
                <a href="#">Powerbank 1130 mAh Blue</a>
              </h3>
            </div>

            <div className="product-image">
              <img src="/44.webp" alt="Powerbank" />
            </div>

            <div className="card-bottom">
              <div className="price-container">
                <span className="current-price">$200.00</span>
                <span className="old-price">$210.00</span>
              </div>

              <button className="cart-btn" aria-label="Add to cart">
                🛒
              </button>
            </div>

            <div className="card-hover-actions">
              <a href="#" className="action-link">
                ♡ Wishlist
              </a>

              <a href="#" className="action-link">
                ↻ Compare
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="product-card small-card">
            <div className="product-info">
              <span className="category">
                Laptops, Laptops & Computers
              </span>

              <h3 className="product-title">
                <a href="#">
                  Laptop Screener CX70 2QF-621XPL 17.3" 4210
                </a>
              </h3>
            </div>

            <div className="product-image">
              <img src="/55.webp" alt="Laptop" />
            </div>

            <div className="card-bottom">
              <div className="price-container">
                <span className="current-price">
                  $2,399.00
                </span>
              </div>

              <button className="cart-btn" aria-label="View product">
                →
              </button>
            </div>

            <div className="card-hover-actions">
              <a href="#" className="action-link">
                ♡ Wishlist
              </a>

              <a href="#" className="action-link">
                ↻ Compare
              </a>
            </div>
          </div>

        </div>

        {/* CENTER COLUMN */}
        <div className="product-column center-column">

          <div className="product-card featured-card">

            <div className="featured-info">
              <span className="category">
                Game Consoles, Video Games & Consoles
              </span>

              <h2 className="product-title featured-title">
                <a href="#">
                  Game Console Controller + USB 3.0 Cable
                </a>
              </h2>
            </div>

            <div className="featured-image">
              <img
                src="/66.webp"
                alt="Game Console Controller"
              />
            </div>

            {/* Gallery Thumbnails */}
            <div className="gallery-thumbnails">

              <div className="thumb-box active">
                <img src="/77.webp" alt="Thumb 1" />
              </div>

              <div className="thumb-box">
                <img src="/88.webp" alt="Thumb 2" />
              </div>

              <div className="thumb-box">
                <img src="/99.webp" alt="Thumb 3" />
              </div>

            </div>

            <div className="card-bottom featured-bottom">

              <div className="price-container">
                <span className="current-price featured-price">
                  $90.00
                </span>

                <span className="old-price">
                  $99.00
                </span>
              </div>

              <button className="add-to-cart-btn">
                🛒 Add to cart
              </button>

            </div>

            <div className="card-hover-actions featured-hover-actions">

              <a href="#" className="action-link">
                ♡ Wishlist
              </a>

              <a href="#" className="action-link">
                ↻ Compare
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="product-column">

          {/* Card 3 */}
          <div className="product-card small-card">

            <div className="product-info">
              <span className="category">
                Computer Cases, Computer Components
              </span>

              <h3 className="product-title">
                <a href="#">
                  Aerocool ENS2377 Dead Silence Gaming Cube Case
                </a>
              </h3>
            </div>

            <div className="product-image">
              <img src="/00.webp" alt="Gaming Case" />
            </div>

            <div className="card-bottom">

              <div className="price-container">
                <span className="current-price">
                  $150.00
                </span>

                <span className="old-price">
                  $180.00
                </span>
              </div>

              <button className="cart-btn" aria-label="Add to cart">
                🛒
              </button>

            </div>

            <div className="card-hover-actions">

              <a href="#" className="action-link">
                ♡ Wishlist
              </a>

              <a href="#" className="action-link">
                ↻ Compare
              </a>

            </div>

          </div>

          {/* Card 4 */}
          <div className="product-card small-card">

            <div className="product-info">
              <span className="category">
                Home Entertainment, TVs
              </span>

              <h3 className="product-title">
                <a href="#">
                  Widescreen 4K SUHD TV
                </a>
              </h3>
            </div>

            <div className="product-image">
              <img src="/01.webp" alt="TV" />
            </div>

            <div className="card-bottom">

              <div className="price-container">
                <span className="current-price">
                  $3,299.00
                </span>
              </div>

              <button className="cart-btn" aria-label="Add to cart">
                🛒
              </button>

            </div>

            <div className="card-hover-actions">

              <a href="#" className="action-link">
                ♡ Wishlist
              </a>

              <a href="#" className="action-link">
                ↻ Compare
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductGrid;