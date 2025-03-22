import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-20 text-gray-700">
        <img src={assets.contact_img} className="w-full md:max-w-[400px]" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl">Our Store</p>

          <p>
            Bharatpur, Chitwan
            <br />
            Bagmati Province, Nepal
          </p>

          <p>
            Tel: (+977) 9801234567
            <br />
            Email: myfashionstore@gmail.com
          </p>

          <div>
            <p className="font-semibold text-xl text-gray-700">Career</p>
            <p className="text-sm text-gray-700">
              Explore job openings at our store
            </p>
            <button className="border px-8 py-3 bg-black text-white mt-5 cursor-pointer">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
