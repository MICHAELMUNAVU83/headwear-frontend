import React from "react";

const Hero = () => {
  return (
    <div className="w-[100%] h-[60vh] bg-[#C7EEEA] flex justify-center items-end gap-8">
      <div className="w-[30%] h-[80%]">
        <img src="/hero.png" className="w-[100%] h-[100%] object-contain" />
      </div>
      <div className="w-[40%] pb-12 flex  gap-2 flex-col ">
        <p className="text-4xl font-bold text-[#333333]">New Collection</p>
        <div className="flex flex-col font-bold text-[40px] gap-0">
          <p>Find your new</p>
          <p>Favourite Clothing</p>
        </div>
        <p className="text-[#88908F]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
        <button className="w-[150px] h-[50px] bg-[#48CAB2] hover:bg-black duration-300 ease-in-out cursor-pointer text-white  text-xl ">
          Discover Now !
        </button>
      </div>
    </div>
  );
};

export default Hero;
