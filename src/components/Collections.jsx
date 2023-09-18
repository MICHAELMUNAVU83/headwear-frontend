import React from "react";

const Collections = () => {
  return (
    <div>
      <div className="flex flex-col justify-center pt-12 items-center gap-1">
        <p className="text-4xl font-bold ">Popular Collections</p>
        <p className=" font-normal text-2xl text-[#777777]">
          Visit our shop to see amazing creations from our designers.
        </p>
      </div>
      <div className="py-16 px-4 flex justify-between w-[100%]">
        <div className="w-[50%] bg-[#EFEFEF] flex flex-col justify-between  h-[60vh]">
          <div className="flex w-[100%] flex-col items-start p-4">
            <p className="text-2xl font-bold text-[#333333]">
              Complete your look
            </p>
            <p className="w-[40%] bg-[#333333] h-[2px]"></p>
            <p className="text-[#88908F]">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          <div className="flex w-[100%]  flex-col items-end">
            <img className="h-[40vh] w-[60%] object-cover" src="/hero.png" />
          </div>
        </div>
        <div className="w-[48%] flex flex-col justify-between   h-[60vh]">
          <div className="flex w-[100%] justify-between h-[48%]">
            <div className="w-[48%] h-[100%] bg-[#EFEFEF]">
              <div className="flex w-[100%] flex-col items-start p-4">
                <p className="text-xl font-bold text-[#333333]">
                  Complete your look
                </p>
                <p className="w-[40%] bg-[#333333] h-[2px]"></p>
                <p className="text-[#88908F]">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
              <div className="flex w-[100%] h-[50%] flex-col items-start">
                <img
                  className="h-[100%] w-[60%] object-contain"
                  src="/hero.png"
                />
              </div>
            </div>
            <div className="w-[48%] h-[100%] flex  items-end bg-[#C7EEEA]">
              <div className="flex w-[100%]  flex-col items-start">
                <img
                  className="h-[20vh] w-[60%] object-cover"
                  src="/hero.png"
                />
              </div>
              <div className="flex w-[100%] flex-col  p-4">
                <p className="text-sm font-bold text-[#333333]">
                  Complete your look
                </p>
                <p className="w-[40%] bg-[#333333] h-[2px]"></p>
                <p className=" text-xs text-[#88908F]">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-[100%] bg-[#C7EEEA] items-end justify-between h-[48%]">
            <div className="flex w-[100%]  flex-col items-start">
              <img className="h-[20vh] w-[60%] object-cover" src="/hero.png" />
            </div>
            <div className="flex w-[100%] flex-col items-start p-4">
              <p className="text-2xl font-bold text-[#333333]">
                Complete your look
              </p>
              <p className="w-[40%] bg-[#333333] h-[2px]"></p>
              <p className="text-[#88908F]">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
