import grocery from "../../assets/products/grocery-man.png";
import logo from "../../assets/logo/Logo.png";
import fresh from "../../assets/logo/fresh-harvests.png";
import product_card from "../../assets/products/product-card.png";
const AboutUs = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center container mx-auto mt-[150px]">
      <div className="w-3/5 ">
        <img src={grocery} alt={grocery} />
        <div className="flex items-center justify-center -mt-56 ml-36">
          <img src={logo} alt={logo} />
          <img src={fresh} alt={fresh} />
        </div>
        <div className="flex justify-center ml-56">
          <img src={product_card} alt="" />
        </div>
      </div>
      <div className="lg:w-2/5 mt-[24px] lg:ml-0 ml-6">
        <p className="text-[#749B3F] text-rubik bg-[#749B3F1A] py-[4px] px-[12px] w-[108px] font-bold text-center rounded-md">
          About us
        </p>
        <h4 className="text-[48px] font-rubik font-medium text-[#212337]">
          About Fresh Harvest
        </h4>
        <p className="font-questrial mb-[12px]">
          Welcome to Fresh Harvest, your premier destination for high-quality
          and fresh produce. We are passionate about providing you with the
          finest fruits, vegetables, and salad ingredients to nourish your body
          and delight your taste buds. With a commitment to excellence,
          sustainability, and customer satisfaction, Fresh Harvest is here to
          revolutionize your grocery shopping experience.
        </p>

        <button className="text-[#FF6A1A] py-[16px] px-[32px] border-2 border-[#FF6A1A] rounded-[8px] font-bold">
          Read More
        </button>
      </div>
    </main>
  );
};

export default AboutUs;
