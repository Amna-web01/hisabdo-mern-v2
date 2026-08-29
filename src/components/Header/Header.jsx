import { useEffect, useRef, useState } from "react";
import "./Header.css";

function Header() {
  // Departments menu state
  const [departmentsOpen, setDepartmentsOpen] = useState(false);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active submenu state for Departments dropdown
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const departmentsRef = useRef(null);
  const departmentsButtonRef = useRef(null);

  // Toggle Submenu item on click
  const handleSubMenuToggle = (index) => {
    setActiveSubMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  // Close Departments menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        departmentsOpen &&
        departmentsRef.current &&
        !departmentsRef.current.contains(event.target) &&
        departmentsButtonRef.current &&
        !departmentsButtonRef.current.contains(event.target)
      ) {
        setDepartmentsOpen(false);
        setActiveSubMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [departmentsOpen]);

  // Close Departments menu with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && departmentsOpen) {
        setDepartmentsOpen(false);
        setActiveSubMenu(null);
        departmentsButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [departmentsOpen]);

  return (
    <header className="site-header">

      {/* ================= TOP BAR ================= */}

      <div className="topbar">
        <div className="topbar__inner container">

          <p className="topbar__welcome">
            Welcome to Worldwide Electronics Store
          </p>

          <ul className="topbar__links">

            <li className="topbar__item">
              <a href="#" className="topbar__link">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>

                Store Locator
              </a>
            </li>

            <li className="topbar__item">
              <a href="#" className="topbar__link">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="1" y="3" width="15" height="13" rx="1" />
                  <path d="M16 8h4l3 3v5h-7V8Z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>

                Track Your Order
              </a>
            </li>

            <li className="topbar__item">
              <a href="#" className="topbar__link">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>

                Shop
              </a>
            </li>

            <li className="topbar__item">
              <a href="#" className="topbar__link">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>

                My Account
              </a>
            </li>

          </ul>
        </div>
      </div>


      {/* ================= MAIN NAVBAR ================= */}

      <div className="navbar">
        <div className="navbar__inner container">

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="navbar__hamburger"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>


          {/* Logo */}
          <a href="/" className="navbar__logo">
            electro<span className="navbar__logo-dot">.</span>
          </a>


          {/* Search */}
          <form
            className="navbar__search"
            role="search"
            onSubmit={(event) => event.preventDefault()}
          >

            <label htmlFor="searchInput" className="sr-only">
              Search for Products
            </label>

            <input
              type="search"
              id="searchInput"
              className="navbar__search-input"
              placeholder="Search for Products"
              name="q"
            />

            <label htmlFor="searchCategory" className="sr-only">
              Category
            </label>

            <select
              id="searchCategory"
              className="navbar__search-select"
              name="category"
            >
              <option>All Categories</option>
              <option>Computers & Accessories</option>
              <option>Cameras, Audio & Video</option>
              <option>Mobiles & Tablets</option>
              <option>TV & Audio</option>
              <option>Watches & Eyewear</option>
            </select>

            <button
              type="submit"
              className="navbar__search-btn"
              aria-label="Search"
            >
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

          </form>


          {/* Navbar Actions */}
          <ul className="navbar__actions">

            {/* Compare */}
            <li className="navbar__action">
              <a
                href="#"
                className="navbar__action-link"
                aria-label="Compare products"
              >
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m17 2 4 4-4 4" />
                  <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
                  <path d="m7 22-4-4 4-4" />
                  <path d="M21 13v1a4 4 0 0 1-4 4H3" />
                </svg>

                <span
                  className="navbar__action-badge"
                  id="compareCount"
                >
                  0
                </span>
              </a>
            </li>


            {/* Wishlist */}
            <li className="navbar__action">
              <a
                href="#"
                className="navbar__action-link"
                aria-label="Wishlist"
              >
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                </svg>
              </a>
            </li>


            {/* Account */}
            <li className="navbar__action">
              <a
                href="#"
                className="navbar__action-link"
                aria-label="My account"
              >
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </a>
            </li>


            {/* Cart */}
            <li className="navbar__action navbar__action--cart">

              <a
                href="#"
                className="navbar__action-link"
                aria-label="Cart"
              >
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>

                <span
                  className="navbar__action-badge"
                  id="cartCount"
                >
                  1
                </span>
              </a>

              <span
                className="navbar__cart-total"
                id="cartTotal"
              >
                $1,347.00
              </span>

            </li>

          </ul>

        </div>
      </div>


      {/* ================= DEPARTMENTS BAR ================= */}

      <div className="deptbar">

        <div className="deptbar__inner container">

          <button
            type="button"
            className="deptbar__toggle"
            id="departmentsToggle"
            ref={departmentsButtonRef}
            aria-expanded={departmentsOpen}
            aria-controls="departmentsMenu"
            onClick={(event) => {
              event.stopPropagation();
              setDepartmentsOpen((prev) => !prev);
              setActiveSubMenu(null);
            }}
          >
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>

            All Departments
          </button>


          <nav className="deptbar__nav" aria-label="Primary">
            <ul className="deptbar__links">

              <li className="deptbar__item deptbar__item--has-dropdown">
                <a
                  href="#"
                  className="deptbar__link deptbar__link--active"
                >
                  All Pages

                  <svg
                    className="icon icon--sm"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>

                </a>
              </li>

              <li className="deptbar__item">
                <a
                  href="/pages/featured-brands.html"
                  className="deptbar__link"
                >
                  Featured Brands
                </a>
              </li>

              <li className="deptbar__item">
                <a
                  href="/pages/trending-styles.html"
                  className="deptbar__link"
                >
                  Trending Styles
                </a>
              </li>

              <li className="deptbar__item">
                <a
                  href="/pages/gift-cards.html"
                  className="deptbar__link"
                >
                  Gift Cards
                </a>
              </li>

            </ul>
          </nav>


          <p className="deptbar__shipping">
            Free Shipping on Orders $50+
          </p>

        </div>


        {/* ================= MEGA MENU ================= */}

        <div
          className="mega-menu"
          id="departmentsMenu"
          ref={departmentsRef}
          hidden={!departmentsOpen}
        >

          <ul className="mega-menu__list">

            <li className="mega-menu__item mega-menu__item--bold">
              <a href="#">Value of the Day</a>
            </li>

            <li className="mega-menu__item mega-menu__item--bold">
              <a href="#">Top 100 Offers</a>
            </li>

            <li className="mega-menu__item mega-menu__item--bold">
              <a href="#">New Arrivals</a>
            </li>

            <li 
              className={`mega-menu__item mega-menu__item--has-sub ${activeSubMenu === 0 ? "active" : ""}`}
              onClick={() => handleSubMenuToggle(0)}
            >
              <a href="#">Computers & Accessories</a>

              <ArrowIcon />
            </li>

            <li 
              className={`mega-menu__item mega-menu__item--has-sub ${activeSubMenu === 1 ? "active" : ""}`}
              onClick={() => handleSubMenuToggle(1)}
            >
              <a href="#">Cameras, Audio & Video</a>

              <ArrowIcon />
            </li>

            <li 
              className={`mega-menu__item mega-menu__item--has-sub ${activeSubMenu === 2 ? "active" : ""}`}
              onClick={() => handleSubMenuToggle(2)}
            >
              <a href="#">Mobiles & Tablets</a>

              <ArrowIcon />
            </li>

            <li 
              className={`mega-menu__item mega-menu__item--has-sub ${activeSubMenu === 3 ? "active" : ""}`}
              onClick={() => handleSubMenuToggle(3)}
            >
              <a href="#">Movies, Music & Video Games</a>

              <ArrowIcon />
            </li>

            <li 
              className={`mega-menu__item mega-menu__item--has-sub ${activeSubMenu === 4 ? "active" : ""}`}
              onClick={() => handleSubMenuToggle(4)}
            >
              <a href="#">TV & Audio</a>

              <ArrowIcon />
            </li>

            <li 
              className={`mega-menu__item mega-menu__item--has-sub ${activeSubMenu === 5 ? "active" : ""}`}
              onClick={() => handleSubMenuToggle(5)}
            >
              <a href="#">Watches & Eyewear</a>

              <ArrowIcon />
            </li>

            <li 
              className={`mega-menu__item mega-menu__item--has-sub ${activeSubMenu === 6 ? "active" : ""}`}
              onClick={() => handleSubMenuToggle(6)}
            >
              <a href="#">Car, Motorbike & Industrial</a>

              <ArrowIcon />
            </li>

            <li 
              className={`mega-menu__item mega-menu__item--has-sub ${activeSubMenu === 7 ? "active" : ""}`}
              onClick={() => handleSubMenuToggle(7)}
            >
              <a href="#">Accessories</a>

              <ArrowIcon />
            </li>

          </ul>
        </div>

      </div>


      {/* ================= MOBILE MENU ================= */}

      <nav
        className="mobile-menu"
        id="mobileMenu"
        aria-label="Mobile"
        hidden={!mobileMenuOpen}
      >

        <ul className="mobile-menu__links">

          <li>
            <a href="#">All Pages</a>
          </li>

          <li>
            <a href="/pages/featured-brands.html">
              Featured Brands
            </a>
          </li>

          <li>
            <a href="/pages/trending-styles.html">
              Trending Styles
            </a>
          </li>

          <li>
            <a href="/pages/gift-cards.html">
              Gift Cards
            </a>
          </li>

        </ul>

        <hr className="mobile-menu__divider" />

        <ul className="mobile-menu__links">

          <li>
            <a href="#">Store Locator</a>
          </li>

          <li>
            <a href="#">Track Your Order</a>
          </li>

          <li>
            <a href="#">Shop</a>
          </li>

          <li>
            <a href="#">My Account</a>
          </li>

        </ul>

      </nav>

    </header>
  );
}


// Reusable arrow icon
function ArrowIcon() {
  return (
    <svg
      className="icon icon--sm"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default Header;