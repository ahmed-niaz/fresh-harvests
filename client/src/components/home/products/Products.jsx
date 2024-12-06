import { useQuery } from "react-query";
import useAxios from "../../../hooks/useAxios";
import Loader from "../../shared/loader";
import ProductCard from "./ProductCard";
const Products = () => {
  const axiosCommon = useAxios();

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosCommon.get(`/api/v1/products`);
      return res.data;
    },
  });

  if (isLoading) return <Loader />;

  return (
    <main>
      <div className="flex flex-col items-center justify-center ">
        <p className="text-[#749B3F] text-rubik pb-4 bg-[#749B3F1A] py-[4px] px-[12px] w-[140px] font-bold text-center rounded-md">
          Our Products
        </p>
        <h4 className="text-[48px] pb-4 font-rubik font-medium text-[#212337]">
          Our Fresh Products
        </h4>
        <p className="font-questrial pb-4 mb-[12px] w-4/12 text-center">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>{" "}
      </div>

      {/* card */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto lg:p-0 p-4">
        {data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Products;
