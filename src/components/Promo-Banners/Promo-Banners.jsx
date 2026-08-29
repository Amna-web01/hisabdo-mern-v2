import "./PromoBanners.css";

function PromoBanners() {
  return (
    <section className="promo-banners">
      <div className="container promo-banners__grid">

  
        <article className="promo-card">
          <div className="promo-card__media" aria-hidden="true">
            <img src="/download.jpg" alt="Hero Image" />
          </div>

          <div className="promo-card__body">
            <p className="promo-card__title">
              Catch Big <strong>Deals</strong> On The Cameras
            </p>

            <a href="#" className="promo-card__link">
              Shop now

              <span className="promo-card__arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
            </a>
          </div>
        </article>


        
        <article className="promo-card">
          <div className="promo-card__media" aria-hidden="true">
            <img src="/download (1).jpg" alt="Hero Image" />
          </div>

          <div className="promo-card__body">
            <p className="promo-card__title">
              Tablets, <strong>Smartphones</strong> And More
            </p>

            <a
              href="#"
              className="promo-card__link promo-card__link--percent"
            >
              Up to <strong>70%</strong>

              <span
                className="promo-card__arrow promo-card__arrow--filled"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
            </a>
          </div>
        </article>


        
        <article className="promo-card">
          <div className="promo-card__media" aria-hidden="true">
            <img src="/download (2).jpg" alt="Hero Image" />
          </div>

          <div className="promo-card__body">
            <p className="promo-card__title">
              Shop The <strong>Hottest</strong> Products
            </p>

            <a href="#" className="promo-card__link">
              Shop now

              <span className="promo-card__arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
            </a>
          </div>
        </article>

      </div>
    </section>
  );
}

export default PromoBanners;