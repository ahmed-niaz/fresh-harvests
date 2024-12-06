import AboutUs from "../../components/home/AboutUs";
import Banner from "../../components/home/Banner";
import Blog from "../../components/home/Blog";
import Products from "../../components/home/products/Products";
import SpecialOffers from "../../components/home/SpecialOffers";
import Testimonials from "../../components/home/Testimonials";

const Home = () => {
  return (
    <main>
    <Banner/>
    <Products/>
    <AboutUs/>
    <SpecialOffers/>
    <Testimonials/>
    <Blog/>
    </main>
  );
};

export default Home;
