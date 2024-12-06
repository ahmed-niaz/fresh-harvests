import fruits from "../../assets/products/fruits.png";

const SpecialOffers = () => {
  return (
    <main className="bg-banner mt-[150px] py-24 bg-cover">
      <div className="container mx-auto flex items-center justify-between">
        <div className="lg:w-8/12 w-full flex flex-col items-center justify-center lg:flex-none lg:justify-start lg:items-start">
          <p className="text-[#749B3F] text-rubik bg-[#749B3F1A] py-[4px] px-[12px] w-[140px] font-bold text-center rounded-md">
            Special Offer
          </p>
          <h4 className="text-[48px] lg:text-[70px] font-rubik font-medium text-[#212337]">
            Seasonal Fruit Bundle{" "}
          </h4>
          <h4 className="text-[48px] font-rubik font-medium text-[#212337]">
            Discount up to <span className="text-[#FF6A1A]">80% OFF</span> {" "}
          </h4>
          <div className="font-rubik flex gap-6 mt-4">
            <div className="bg-white w-[98px] flex items-center justify-center flex-col py-4">
                <h2 className="text-[40px] font-medium">03</h2>
                <h4>days</h4>
            </div>
            <div className="bg-white w-[98px] flex items-center justify-center flex-col py-4">
                <h2 className="text-[40px] font-medium">12</h2>
                <h4>Hours</h4>
            </div>
            <div className="bg-white w-[98px] flex items-center justify-center flex-col py-4">
                <h2 className="text-[40px] font-medium">23</h2>
                <h4>Min</h4>
            </div>
            <div className="bg-white w-[98px] flex items-center justify-center flex-col py-4">
                <h2 className="text-[40px] font-medium">13</h2>
                <h4>second</h4>
            </div>
          </div>
          <button className="bg-[#176D38] py-[15px] px-[30px] rounded-full mt-12">
            <span className="font-bold">CODE:</span><span className="text-[#FAC714] font-bold">FRUIT28</span>
          </button>
        </div>
        <div className="4/12 pt-12 lg:flex hidden">
          <img src={fruits} alt={fruits} />
        </div>
      </div>
    </main>
  );
};

export default SpecialOffers;
