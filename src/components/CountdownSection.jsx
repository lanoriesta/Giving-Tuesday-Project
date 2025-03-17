import React from "react";

const CountdownSection = () => {
  return (
    <div className="text-white py-12 px-5 md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] mx-auto ">
      <div className="grid grid-cols-4 gap-2">
        <div className="text-center">
          <p className="drop-shadow-lg text-[3rem]/12">143</p>
          <p className=" drop-shadow-lg text-[1.2rem]">Days</p>
        </div>
        <div className="text-center">
          <p className=" drop-shadow-lg text-[3rem]/12">23</p>
          <p className=" drop-shadow-lg text-[1.2rem]">Hours</p>
        </div>
        <div className="text-center">
          <p className="drop-shadow-lg text-[3rem]/12">16</p>
          <p className=" drop-shadow-lg text-[1.2rem]">Minutes</p>
        </div>
        <div className="text-center">
          <p className="drop-shadow-lg text-[3rem]/12">54</p>
          <p className=" drop-shadow-lg text-[1.2rem]">Seconds</p>
        </div>
      </div>
      <div className="text-center py-10 flex flex-col items-center">
        <p className="drop-shadow-lg text-[2rem]/12 font-bold py-2">
          November 30, 2021
        </p>
        <hr className="w-[150px] h-[10ppx]" />
      </div>
    </div>
  );
};

export default CountdownSection;
