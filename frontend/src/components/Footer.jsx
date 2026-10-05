import React from "react";
import assets from "../assets/assets.js";

const Footer = () => {
  return (
    <div className=" ">
      <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo3} alt="logo footer" className="mb-5 w-25" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officia
            amet voluptatum doloremque dolor in dolore? Neque saepe impedit illo
            eius nulla excepturi repudiandae ea omnis ab praesentium, dolorem
            deserunt.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mt-5 mb-5 text-[#E019FF]">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>Abou us</li>
            <li>Delivery</li>
            <li>Privacy olicy</li>
          </ul>
        </div>
        <div>
            <p className="text-xl font-medium mt-5 mb-5 text-[#E019FF]">GET IN TOUCH </p>
           <ul className="flex flex-col gap-1 text-gray-600">
            <li>+213 ..........</li>
            <li>email@niva.com</li>
          </ul>
        </div>
      </div>

{/** Copyright text */}
<div>
    <hr className="text-gray-300" />
    <p className="py-5 text-sm text-center">Copyright 2026@ Niva.com - All Rights Reserved</p>
</div>

    </div>
  );
};

export default Footer;
