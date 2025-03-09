import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import OurPolicy from "../components/OurPolicy";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-10">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            adipisci vel esse ratione reprehenderit porro ipsam iste nostrum!
            Fugit deleniti enim rerum dolorem illum, praesentium minima
            voluptatum blanditiis et libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            porro, quod placeat illum harum doloribus optio ratione, consequatur
            vel possimus exercitationem maiores illo aliquam dignissimos
            reiciendis neque ipsum consectetur. Aperiam, quidem at a voluptate
            recusandae ducimus, quam praesentium quibusdam labore quisquam
            officia molestiae? Tempora quod obcaecati alias molestiae eaque eum!
          </p>
          <b className="text-gray-900">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            illum, modi sit delectus fugit vitae quas nesciunt consequatur dicta
            hic.
          </p>
        </div>
      </div>
      <div className="text-3xl my-20">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <div className="border border-gray-400">
          <OurPolicy />
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default About;
