import imgOne from "../../assets/products/blog-1.png";
import imgTwo from "../../assets/products/blog-2.png";
import imgThree from "../../assets/products/blog-3.png";
import arrow from "../../assets/icons/arrow.png";
const Blog = () => {
  return (
    <main className="mt-[150px]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#749B3F] text-rubik pb-4 bg-[#749B3F1A] py-[4px] px-[12px] w-[140px] font-bold text-center rounded-md">
          Our Blog
        </p>
        <h4 className="text-[48px] pb-4 font-rubik font-medium text-[#212337]">
          Fresh Harvest Blog
        </h4>
        <p className="font-questrial pb-4 mb-[12px] lg:w-4/12 text-center w-10/12">
          Don`t just take our word for it—here`s what some of our customers have
          to say about their experience with Fresh Harvest:
        </p>
      </div>
      <div className="container mx-auto flex lg:flex-row flex-col items-center justify-center gap-4">
        <div className="card lg:w-96 w-10/12">
          <figure>
            <img className="w-full" src={imgOne} alt={imgOne} />
          </figure>
          <div className="card-body p-0 mt-4">
            <p>May 23,2024</p>
            <h2 className="font-rubik font-semibold">
              Exploring Seasonal Delights: A Guide to What`s Fresh Right Now
            </h2>
            <div className="flex items-center gap-4 ">
              <h4 className="font-rubik text-[#FF6A1A] font-semibold">
                Read More{" "}
              </h4>
              <span>
                <img src={arrow} alt={arrow} />
              </span>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 w-10/12">
          <figure>
            <img className="w-full" src={imgTwo} alt={imgTwo} />
          </figure>
          <div className="card-body p-0 mt-4">
            <p>May 23,2024</p>
            <h2 className="font-rubik font-semibold">
              Mastering Salad Creations: Tips and Tricks for Building Delicious
              and Nutritious Salads"
            </h2>
            <div className="flex items-center gap-4 ">
              <h4 className="font-rubik text-[#FF6A1A] font-semibold">
                Read More{" "}
              </h4>
              <span>
                <img src={arrow} alt={arrow} />
              </span>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 w-10/12">
          <figure>
            <img className="w-full" src={imgThree} alt={imgThree} />
          </figure>
          <div className="card-body p-0 mt-4">
            <p>May 23,2024</p>
            <h2 className="font-rubik font-semibold">
              Exploring Seasonal Delights: A Guide to What`s Fresh Right Now
            </h2>
            <div className="flex items-center gap-4 ">
              <h4 className="font-rubik text-[#FF6A1A] font-semibold">
                Read More{" "}
              </h4>
              <span>
                <img src={arrow} alt={arrow} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
