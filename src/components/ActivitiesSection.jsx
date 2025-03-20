import { ArrowRightCircle } from "lucide-react";
import React from "react";
import activitiesItem from "../activites";

const ActivitiesSection = () => {
  return (
    <div className="bg-[var(--color-blue)]  text-white">
      <div className="w-full sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] 2xl:w-[96rem] mx-auto p-5 md:p-10">
        <div className="text-center flex flex-col items-center pb-5">
          <h2 className=" text-[2rem]/20 font-bold">Activities</h2>
          <hr className="w-[150px] h-[10ppx] text-[var(--color-yellow)]" />
        </div>
        {/* Slide Wrapper */}
        <div className="grid md:grid-cols-3 gap-5 py-5 ">
          {activitiesItem.map((activity) => (
            <div
              key={activity.id}
              className="bg-[var(--color-red)] shadow-lg rounded-sm flex flex-row md:flex-col gap-y-3"
            >
              <img
                className="w-full object-cover"
                src={activity.image}
                alt=""
              />
              <div className="p-5 flex flex-col gap-y-3">
                <h3 className="font-bold text-[1.2rem]">{activity.title}</h3>
                <p className="opacity-70 line-clamp-2 md:line-clamp-none">
                  {activity.description}
                </p>
                <button className="text-[var(--color-white)] cursor-pointer flex items-center gap-1 hover:text-[var(--color-yellow)] hover:gap-3 transition-all duration-300 ease-in-out">
                  Read more
                  <ArrowRightCircle />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
