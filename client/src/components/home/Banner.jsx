import salad from "../../assets/products/salad.png";
import app_store from "../../assets/icons/appstore.png";
import google_store from "../../assets/icons/googleplay.png";
import green_arrow from "../../assets/products/green-arrow.png";
import girl from "../../assets/products/girl.png";
const Banner = () => {
  return (
    <main className="bg-banner -z-10 -mt-36 bg-cover h-[950px] mb-[40px]">
      <div className="">
        <div className="container mx-auto flex items-center justify-center">
          <div className="pt-60 lg:w-3/5">
            <h2 className="text-[#749B3F] font-rubik font-[20px] leading-3">
              Welcome to the Fresh Harvest
            </h2>
            <h1 className="text-[48px] lg:text-[80px] font-semibold font-rubik text-[#212337]">
              Fresh Fruits and Vegetables
            </h1>
            <h4 className="font-questrial w-4/6 font-medium">
              At Fresh Harvests, we are passionate about providing you with the
              freshest and most flavorful fruits and vegetables
            </h4>
            <button className=" h-[53px] w-[150px] mt-[32px] bg-[#FF6A1A] text-white rounded-lg font-semibold font-rubik">
              Shop Now
            </button>
            <img src={green_arrow} alt="" className="lg:flex hidden ml-28 w-[55px]" />
            <div className=" lg:ml-48 lg:-mt-16 ">
              <div className="lg:w-[331px] h-[160px] bg-[#EBEBEB] rounded-xl flex items-center justify-center">
                <div className="w-3/5 p-[19px] font-rubik">
                  <h2 className="text-[#176D38] font-bold ">Special Offer</h2>
                  <h2 className="text-[24px] font-semibold">Fresh Salad</h2>
                  <h3 className="flex items-center font-semibold">
                    {" "}
                    <span className="text-[#176D38] ">up to</span>{" "}
                    <span className="text-[24px] font-bold"> 70%</span> off
                  </h3>
                  <div className="bg-[#176D38] flex items-center justify-center rounded-full">
                    <span className="text-white"> CODE :</span>{" "}
                    <span className="text-[#FAC714]">FRESH25</span>
                  </div>
                </div>
                <div className="w-2/5">
                  <img className="rounded-full -ml-4" src={salad} alt="" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-questrial">Download App</h2>
              <div className="flex gap-4 sm:z-10">
                <img src={app_store} alt={app_store} />
                <img src={google_store} alt={google_store} />
              </div>
            </div>
          </div>
          <div className="w-2/5 mb-2">
            <img className="w-full h-[470px] lg:h-[750px] lg:mt-[190px] " src={girl} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
