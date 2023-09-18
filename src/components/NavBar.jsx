import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="w-[100%] p-4 flex justify-between">
      <div className="flex items-end   gap-8">
        <p className="text-[#333333] font-bold text-xl">Headwear</p>
        <p className=" uppercase font-bold  transition-all ease-in-out duration-500 cursor-pointer hover:text-[#48CAB2]">
          Home
        </p>
        <p className=" uppercase font-bold  transition-all ease-in-out duration-500 cursor-pointer hover:text-[#48CAB2]">
          Home
        </p>
        <p className=" uppercase font-bold  transition-all ease-in-out duration-500 cursor-pointer hover:text-[#48CAB2]">
          Home
        </p>
        <p className=" uppercase font-bold  transition-all ease-in-out duration-500 cursor-pointer hover:text-[#48CAB2]">
          Home
        </p>
        <p className=" uppercase font-bold  transition-all ease-in-out duration-500 cursor-pointer hover:text-[#48CAB2]">
          Home
        </p>
      </div>
      <div className="flex items-center gap-2">
        <AiOutlineUser className="text-[#333333]  transition-all ease-in-out duration-500 cursor-pointer hover:text-[#48CAB2] text-2xl" />
        <AiOutlineShopping className="text-[#333333]  transition-all ease-in-out duration-500 cursor-pointer hover:text-[#48CAB2] text-2xl" />
      </div>
    </div>
  );
};

export default NavBar;
