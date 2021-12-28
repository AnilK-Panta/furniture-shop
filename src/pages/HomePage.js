import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AboutUs from "../sections/AboutUs";
import Clients from "../sections/Clients";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import HotDeals from "../sections/HotDeals";
import Products from "../sections/Products";
import Testimonials from "../sections/Testimonials";
import { setProduct } from "../redux/action/productAction";
import { ProductDetail } from "../apis/ProductDetail";

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProduct(ProductDetail));
  }, []);
  // setProduct;

  return (
    <div className="homepageWrapper d-flex column align-center">
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
