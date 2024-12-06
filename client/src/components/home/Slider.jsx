import imgTwo from "../../assets/slider/slider_2.jpg"; // Add additional images as needed
import imgThree from "../../assets/slider/slider_3.jpg"; // Add additional images as needed

export const sliders = [
  {
    content: (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
        {/* Right side */}
        <div>
          <img
            className="w-[290px] h-[400px] rounded-t-[200px] rounded-b-[200px]"
            src={imgTwo}
            alt={imgTwo}
          />
        </div>
        {/* Left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="lg:w-[650px] h-[300px] bg-[#F4F6F6] rounded-xl w-10/12 mx-auto">
            <p className="text-[20px] p-6 font-questrial">
              I absolutely love Fresh Harvest! The quality of their produce is
              outstanding. It`s always fresh, flavorful, and delicious. The
              convenience of ordering online and having it delivered to my
              doorstep saves me so much time. Fresh Harvest has become my go-to
              for all my fruit and vegetable needs.
            </p>
            <h2 className="p-6 font-rubik"> <span className="font-bold">Jane Doe
                </span> - Professional chef</h2>
          </div>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
        {/* Right side */}
        <div>
          <img
            className="w-[290px] h-[400px] rounded-t-[200px] rounded-b-[200px]"
            src={imgTwo}
            alt={imgTwo}
          />
        </div>
        {/* Left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="lg:w-[650px] h-[300px] bg-[#F4F6F6] rounded-xl w-10/12 mx-auto">
            <p className="text-[20px] p-6 font-questrial">
              I absolutely love Fresh Harvest! The quality of their produce is
              outstanding. It`s always fresh, flavorful, and delicious. The
              convenience of ordering online and having it delivered to my
              doorstep saves me so much time. Fresh Harvest has become my go-to
              for all my fruit and vegetable needs.
            </p>
            <h2 className="p-6 font-rubik"> <span className="font-bold">Jane Doe
                </span> - Professional chef</h2>
          </div>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
        {/* Right side */}
        <div>
          <img
            className="w-[290px] h-[400px] rounded-t-[200px] rounded-b-[200px]"
            src={imgThree}
            alt="New Collection"
          />
        </div>
        {/* Left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="lg:w-[650px] h-[300px] bg-[#F4F6F6] rounded-xl w-10/12 mx-auto">
            <p className="text-[20px] p-6 font-questrial">
              I absolutely love Fresh Harvest! The quality of their produce is
              outstanding. It`s always fresh, flavorful, and delicious. The
              convenience of ordering online and having it delivered to my
              doorstep saves me so much time. Fresh Harvest has become my go-to
              for all my fruit and vegetable needs.
            </p>
            <h2 className="p-6 font-rubik"> <span className="font-bold">Jane Doe
                </span> - Professional chef</h2>
          </div>
        </div>
      </div>
    ),
  },
  // Add more slide objects as needed
];
