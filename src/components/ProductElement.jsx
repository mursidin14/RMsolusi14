import { Link } from "react-router-dom";

const ProductElement = ({ id, title, imageUrl, price}) => {
  const product = {
    id, title, imageUrl, price
  };
  return (
    <div className="max-w-2xl">
      <div className="shadow-md rounded-lg max-w-sm bg-base-100">
        <Link to={`https://wa.me/6285397747546`} target="_blank">
          <img
            className="rounded-t-lg p-8"
            src={`${imageUrl}`}
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-5">
          <Link to={`https://wa.me/6285397747546`} target="_blank">
            <h3 className="font-semibold text-xl tracking-tight mb-5 text-accent-content">
              {title}
            </h3>
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-accent-content">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductElement;
