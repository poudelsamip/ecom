import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            aut, reiciendis debitis iure nobis asperiores explicabo, ipsam fuga
            error deleniti odio rem cum eveniet aperiam. Soluta nobis possimus
            similique ad.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+977 9845123670</li>
            <li>email@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ forever.com All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
