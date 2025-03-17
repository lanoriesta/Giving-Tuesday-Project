import React from "react";
import MKVImg from "../asset/GivingTuesday 1 logo txt.png";

const MainKeyVisualSection = () => {
  return (
    <div className="bg-[url(dist/assets/mkv-bg.png)] bg-cover bg-center flex flex-col justify-center items-center py-15 px-5">
      <div className="py-5">
        <img src={MKVImg} alt="" className="drop-shadow-md" />
      </div>
      <div className="flex flex-col gap-3 py-5">
        <button className="bg-[var(--color-blue)] text-white px-8 py-2 hover:bg-[var(--color-yellow)] hover:text-[var(--color-blue)] transition-all cursor-pointer">
          Join GivingTuesdayPh
        </button>
        <button className="bg-[var(--color-blue)] text-white px-8 py-2 hover:bg-[var(--color-yellow)] hover:text-[var(--color-blue)] transition-all cursor-pointer">
          Join GivingTuesdayPh Spark
        </button>
        <button className="bg-[var(--color-blue)] text-white px-8 py-2 hover:bg-[var(--color-yellow)] hover:text-[var(--color-blue)] transition-all cursor-pointer">
          Volunteer to be a Community Leader
        </button>
      </div>
    </div>
  );
};

export default MainKeyVisualSection;
