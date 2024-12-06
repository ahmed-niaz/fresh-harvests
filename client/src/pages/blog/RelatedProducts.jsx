import { useQuery } from "react-query";
import useAxios from "../../hooks/useAxios";
import Loader from "../../components/shared/loader";
import ProductCard from "../../components/home/products/ProductCard";


const RelatedProducts = ({id}) => {
    const axiosCommon = useAxios();
    console.log(id);

    const { data, isLoading } = useQuery({
      queryKey: ["products"],
      queryFn: async () => {
        const res = await axiosCommon.get(`/api/v1/products`);
        return res.data;
      },
    });
  
    if (isLoading) return <Loader />;
  
    return (
      <main className="mt-[150px]">
        <div className="flex flex-col items-center justify-center ">
          <p className="text-[#749B3F] text-rubik pb-4 bg-[#749B3F1A] py-[4px] px-[12px] w-[140px] font-bold text-center rounded-md">
            Our Products
          </p>
          <h4 className="text-[48px] pb-4 font-rubik font-medium text-[#212337]">
           Related Products
          </h4>
          <p className="font-questrial pb-4 mb-[12px] w-4/12 text-center">
            We pride ourselves on offering a wide variety of fresh and flavorful
            fruits, vegetables, and salad ingredients.
          </p>{" "}
        </div>
  
        {/* card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto ">
          {data.slice(0,4).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </main>
    );
}

export default RelatedProducts