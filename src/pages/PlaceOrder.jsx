import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side form */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[500px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Zip Code"
            className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="number"
          placeholder="Phone Number"
          className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
        />
      </div>

      {/* right side */}

      <div className="mt-8">
        <div className="mt-8 w-full sm:min-w-[400px]">
          <CartTotal />
        </div>
        <div className="mt-10">
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          {/* payment method */}

          <div className="flex gap-3 flex-col md:flex-row">
            <div
              onClick={() => setMethod("esewa")}
              className="flex items-center gap-3 border p-2 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "esewa" && "bg-green-500"
                }`}
              ></p>
              <img src={assets.esewa} className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setMethod("khalti")}
              className="flex items-center gap-3 border p-2 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "khalti" && "bg-green-500"
                }`}
              ></p>
              <img src={assets.khalti} className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" && "bg-green-500"
                }`}
              ></p>
              <p className="text-gray-700 text-sm font-medium">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              className="bg-black text-white px-10 py-3 text-md cursor-pointer"
              onClick={() => navigate("/orders")}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
