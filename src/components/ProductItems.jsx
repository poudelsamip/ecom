import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItems = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="text-gray-700 cursor-pointer border border-gray-400"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
        />
      </div>
      <p className="pt-3 px-2 pb-1 text-sm">{name}</p>
      <p className="text-sm px-2 mb-2 font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItems;
