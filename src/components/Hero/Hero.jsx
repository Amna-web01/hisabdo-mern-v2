import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      subtitle: "Shop To Get What You Love",
      title: (
        <>
          Timepieces That Make A Statement
          <br />
          Up To <strong>40% OFF</strong>
        </>
      ),
      image: "/33.webp",
      alt: "Smartphones",
    },

    {
      subtitle: "Under Favorable Smartwatches",
      title: (
        <>
          The New
          <br />
          <strong>Standard</strong>
        </>
      ),
      price: (
        <>
          FROM $749<sup>99</sup>
        </>
      ),
      image: "/11.webp",
      alt: "Smartwatches",
    },

    {
      subtitle: "Shop To Get What You Love",
      title: (
        <>
          Timepieces That Make A Statement
          <br />
          Up To <strong>40% OFF</strong>
        </>
      ),
      image: "/22.webp",
      alt: "Audio Speaker",
    },
  ];

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) =>
        (previousIndex + 1) % slides.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Dot click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="hero-container">

      <div className="sidebar-spacer"></div>

      <div className="slider-area">

        {slides.map((slide, index) => (
          <div
            className={`slide ${
              index === currentIndex ? "active" : ""
            }`}
            key={index}
          >

            <div className="slide-content">

              <div className="sub-title">
                {slide.subtitle}
              </div>

              <h1 className="main-title">
                {slide.title}
              </h1>

              {slide.price && (
                <div className="price-amount">
                  {slide.price}
                </div>
              )}

              <a href="#" className="btn-buy">
                Start Buying
              </a>

            </div>


            <div className="slide-image">
              <img
                src={slide.image}
                alt={slide.alt}
              />
            </div>

          </div>
        ))}


        {/* Slider dots */}
        <div className="slider-dots">

          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Hero;