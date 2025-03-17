import React from "react";
import RightImgCol from "../asset/right-col-img.png";
import { ArrowRightCircle } from "lucide-react";

const MainDescSection = () => {
  return (
    <div className=" bg-[var(--color-blue)]">
      <div className="grid md:grid-cols-2 lg:px-20 xl:px-40 2xl:px-100 ">
        <div className="bg-[var(--color-blue)] flex flex-col justify-center px-10 py-10">
          <h1 className="text-3xl/0 font-bold py-5 text-wrap text-center md:text-left">
            <span className="text-[var(--color-white)]">Giving</span>
            <span className="text-[var(--color-yellow)]">Tuesday</span>
            <span className="text-[var(--color-red)]">Philippines</span>
          </h1>
          <p className="text-white py-5 opacity-70">
            Started in New York City, United States in 2012 by the Belfer Center
            for Innovation & Social Impact team of 92Y, Giving Tuesday is
            celebrated on the Tuesday following Thanksgiving, in response to
            Black Friday and Cyber ​​Monday days of consumption. It is a day
            that allows individuals, organizations and communities around the
            world to come together around a common goal: to celebrate and
            encourage giving. It demonstrates how every act of generosity
            counts, and that they mean even more when we give together.
          </p>
          <button className="text-[var(--color-white)] cursor-pointer flex items-center gap-1 hover:text-[var(--color-yellow)] hover:gap-3 transition-all duration-300 ease-in-out">
            Read more about GivingTuesday
            <ArrowRightCircle />
          </button>
        </div>
        <div className=" hidden md:block">
          <img
            className="object-cover w-full h-full"
            src={RightImgCol}
            alt="Kids playing outside"
          />
        </div>
      </div>
    </div>
  );
};

export default MainDescSection;
