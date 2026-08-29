import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PromoBanners from "./components/Promo-Banners/Promo-Banners";
import Products from "./components/Products/Products";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import BestSellers from "./components/BestSellers/BestSellers";
import PromoBanner from './components/PromoBanner/PromoBanner';
import RecentlyAdded from './components/RecentlyAdded/RecentlyAdded';
import BrandCarousel from './components/BrandCarousel/BrandCarousel';
import ProductWidgets from './components/ProductWidgets/ProductWidgets';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Header />
      <Hero />
       <PromoBanners />
      <Products />
      <ProductGrid />
      <BestSellers />
      <PromoBanner />
      <RecentlyAdded />
      <BrandCarousel />
      <ProductWidgets />
      <Footer />
    </>
  );
}

export default App;