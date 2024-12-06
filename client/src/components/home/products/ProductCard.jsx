import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { images, productName, price, _id } = product;
  console.log(_id);
  console.log(product);
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-4 bg-[#F4F6F6] m-4 rounded-md">
        <img src={images} alt={images} />
      </figure>
      <div className="card-body items-center text-center font-rubik">
        <h2 className="card-title">{productName}</h2>
        <p>${price}/kg</p>
        <div className="card-actions">
          <Link
            to={`/blog/${_id}`}
            className="border-2 border-[#D9D9D9] px-[76px] py-[12px] rounded-md font-rubik font-medium"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
