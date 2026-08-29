import { useEffect, useState } from "react";
import "./Products.css";

function Products() {
  const [time, setTime] = useState({
    hours: 7,
    mins: 17,
    secs: 28,
  });

 
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((previous) => {
        let { hours, mins, secs } = previous;

        if (secs > 0) {
          secs--;
        } else if (mins > 0) {
          mins--;
          secs = 59;
        } else if (hours > 0) {
          hours--;
          mins = 59;
          secs = 59;
        }

        return { hours, mins, secs };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="products-section">

      <div className="product-grid-wrapper">

        

        <div className="product-card featured-card">

          <div className="card-header-title">
            Special Offer
          </div>

          <div className="save-badge">
            <span className="save-text">Save</span>
            <span className="save-amount">$9.00</span>
          </div>

          <img
            src="/2.webp"
            alt="Game Console Controller"
          />

          <a href="#" className="title">
            Game Console Controller + USB 3.0 Cable
          </a>

          <div className="price-group">
            <span className="price-discounted">
              $90.00
            </span>

            <span className="old-price">
              $99.00
            </span>
          </div>

          {/* Countdown */}

          <div className="timer-container">

            <div className="timer-title">
              Hurry Up! Offer ends in:
            </div>

            <div className="timer-boxes">

              <div className="timer-box-wrapper">
                <div className="timer-box">
                  {String(time.hours).padStart(2, "0")}
                </div>
                <span className="timer-label">
                  HOURS
                </span>
              </div>

              <span className="timer-separator">
                :
              </span>

              <div className="timer-box-wrapper">
                <div className="timer-box">
                  {String(time.mins).padStart(2, "0")}
                </div>
                <span className="timer-label">
                  MINS
                </span>
              </div>

              <span className="timer-separator">
                :
              </span>

              <div className="timer-box-wrapper">
                <div className="timer-box">
                  {String(time.secs).padStart(2, "0")}
                </div>
                <span className="timer-label">
                  SECS
                </span>
              </div>

            </div>
          </div>

        </div>


       

        <div className="small-products-grid">

          

          <div className="product-card small-card">

            <img
              src="/3.webp"
              alt="Audio System"
            />

            <div className="category">
              Audio Speakers, TV & Audio
            </div>

            <a href="#" className="title">
              Wireless Audio System Multiroom 360
            </a>

            <div className="price-cart-row">

              <span className="price-regular">
                $2,299.00
              </span>

              <button className="cart-btn">
                🛒
              </button>

            </div>
          </div>


          

          <div className="product-card small-card">

            <img
              src="/4.webp"
              alt="Tablet"
            />

            <div className="category">
              Laptops, Laptops & Computers
            </div>

            <a href="#" className="title">
              Tablet Red EliteBook Revolve 810 G2
            </a>

            <div className="price-cart-row">

              <div className="price-group">

                <span className="price-discounted">
                  $2,100.00
                </span>

                <span className="old-price">
                  $2,299.00
                </span>

              </div>

              <button className="cart-btn">
                🛒
              </button>

            </div>
          </div>


          {/* Product 3 */}

          <div className="product-card small-card">

            <img
              src="/5.webp"
              alt="Headphones"
            />

            <div className="category">
              Accessories, Headphones
            </div>

            <a href="#" className="title">
              White Solo 2 Wireless
            </a>

            <div className="price-cart-row">

              <span className="price-regular">
                $248.99
              </span>

              <button className="cart-btn">
                🛒
              </button>

            </div>
          </div>


          

          <div className="product-card small-card">

            <img
              src="/1.webp"
              alt="Smartphone"
            />

            <div className="category">
              Smart Phones & Tablets
            </div>

            <a href="#" className="title">
              Smartphone 6S 32GB LTE
            </a>

            <div className="price-cart-row">

              <div className="price-group">

                <span className="price-discounted">
                  $1,100.00
                </span>

                <span className="old-price">
                  $1,215.00
                </span>

              </div>

              <button className="cart-btn">
                🛒
              </button>

            </div>
          </div>


          

          <div className="product-card small-card">

            <img
              src="/7.webp"
              alt="Camera"
            />

            <div className="category">
              Cameras, Cameras & Photography
            </div>

            <a href="#" className="title">
              Purple NX Mini F1 aparat SMART NX
            </a>

            <div className="price-cart-row">

              <span className="price-regular">
                $559.00
              </span>

              <button className="cart-btn">
                🛒
              </button>

            </div>
          </div>


          {/* Product 6 */}

          <div className="product-card small-card">

            <img
              src="/8.webp"
              alt="Printer"
            />

            <div className="category">
              Printers, Printers & Ink
            </div>

            <a href="#" className="title">
              Full Color LaserJet Pro M452dn
            </a>

            <div className="price-cart-row">

              <span className="price-regular">
                $1,050.00
              </span>

              <button className="cart-btn">
                🛒
              </button>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Products;