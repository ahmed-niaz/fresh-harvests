import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import useAxios from "../../hooks/useAxios";
import Loader from "../../components/shared/loader";
import star from "../../assets/icons/star.svg";
import white from "../../assets/icons/white.svg";
import cart from "../../assets/icons/white-cart.svg";
import Products from "../../components/home/products/Products";
import RelatedProducts from "./RelatedProducts";

const Blog = () => {
  const { id } = useParams(); // Extract the `id` parameter from the URL
  console.log("Product ID:", id);
  const axiosCommon = useAxios();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id], // Ensure a unique key for each product
    queryFn: async () => {
      const res = await axiosCommon.get(`/api/v1/products/${id}`); // Fetch product details by ID
      return res.data; // Assuming `res.data` contains the product object
    },
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching product details.</div>;

  console.log("Product Details:", data);

  return (
    <main className="container mx-auto">
      <div className="flex items-center w-full container mx-auto gap-12">
        <div className="w-1/2 border-2 border-[#0000001A]">
          <img className="w-[566px] h-[566px]" src={data.images} alt="" />
        </div>
        <div className="w-1/2">
          <div className="flex flex-col gap-4">
            <p className="text-[#749B3F] text-rubik bg-[#749B3F1A] py-[4px] px-[12px] w-[108px] font-bold text-center rounded-md">
              Fruits
            </p>
            <h2 className="font-rubik font-bold text-[48px]">
              {data.productName}
            </h2>
            <h2 className="flex">
              <img src={star} alt={star} />
              <img src={star} alt={star} />
              <img src={star} alt={star} />
              <img src={star} alt={star} />
              <img src={star} alt={star} />
              <p className="font-rubik font-semibold">
                5.0 <span className="font-normal">(1 review)</span>{" "}
              </p>
            </h2>
            <h2 className="text-[32px] font-bold font-rubik text-[#FF6A1A]">
              ${data.price}/kg
            </h2>
            <p className="text-[18px] font-questrial ">
              From our farm directly to your door, our fresh coconuts are
              harvested at the peak of ripeness, offering you a sweet, hydrating
              treat full of flavor. Packed with natural nutrients, coconut is
              perfect for a variety of culinary uses, from smoothies to savory
              dishes, or even for a refreshing drink straight from the shell.
            </p>
          </div>
          <div className="mt-16">
            <h2>
              Quantity:{" "}
              <span className="px-[16px] py-[12px] border-2 border-[#D9D9D9]">
                -
              </span>
              <span className="px-[16px] py-[12px]  border-2 border-[#D9D9D9]">
                1
              </span>
              <span className="px-[16px] py-[12px] border-2 border-[#D9D9D9]">
                -
              </span>
              <span className="ml-2">/ kg</span>
            </h2>
          </div>
          <div className="mt-12 flex gap-4 items-center">
            <div>
              <button className="flex items-center bg-[#F4F6F6] px-4 py-2 rounded-md">
                <img className="w-[32px] h-[32px]" src={white} alt={white} />
                <span className="font-rubik font-bold">Save as favorite</span>
              </button>
            </div>
            <div>
              <button className="flex items-center bg-[#FF6A1A] px-4 py-2 rounded-md">
                <img className="w-[32px] h-[32px]" src={cart} alt={cart} />
                <span className="font-rubik font-bold text-white">
                  Add to cart
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-center">
          <button className="flex items-center bg-[#749B3F] px-4 py-2 rounded-md">
            <span className="font-rubik font-bold text-white">Description</span>
          </button>
          <button className="flex items-center  px-4 py-2 rounded-md">
            <span className="font-rubik font-bold text-gray">Reviews</span>
          </button>
        </div>
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 mt-4">
          <div className="w-[650px]  bg-[#F4F6F6] rounded-xl">
            <p className="text-[20px] p-6 font-questrial">{data.description}</p>
          </div>
        </div>
      </div>
      <RelatedProducts id={id} />
    </main>
  );
};

export default Blog;
