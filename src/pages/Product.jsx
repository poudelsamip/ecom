import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* products data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* products images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18%] w-full gap-1">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-1">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_dull_icon} className="w-3.5" />
            <p className="ml-2">(999)</p>
          </div>
          <p className="mt-5 text-3xl font-medium ">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-600 w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`border py-2 px-4 bg-gray-100 cursor-pointer ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer"
            onClick={() => addToCart(productData._id, size)}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on Delivery Available</p>
            <p>Easy 7 Days Return Policy</p>
          </div>
        </div>
      </div>

      {/* description and review */}

      <div className="mt-20">
        <div className="flex cursor-pointer">
          <b className="border border-b-0 px-5 py-3 text-sm">Description</b>
          <p className="border border-b-0 px-5 py-3 text-sm">Reviews (999)</p>
        </div>
        <div className="flex flex-col gap-4 border p-6 text-sm text-gray-700">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            sit quis molestiae nulla distinctio laudantium molestias, cupiditate
            fuga. Enim, minima.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, est
            unde provident repellat voluptates itaque quisquam neque deleniti
            exercitationem alias beatae atque quo cum. Expedita!
          </p>
        </div>
      </div>

      {/* related products */}
      <div>
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
