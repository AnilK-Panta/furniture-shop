import AboutUs from "../sections/AboutUs";
import Clients from "../sections/Clients";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import HotDeals from "../sections/HotDeals";
import Products from "../sections/Products";
import Testimonials from "../sections/Testimonials";

export default function HomePage() {
  return (
    <div className="homepageWrapper">
      <Hero />
      <Clients />
      <HotDeals />
      <AboutUs />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}
