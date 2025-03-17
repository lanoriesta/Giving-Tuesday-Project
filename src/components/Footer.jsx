import React from "react";
import GivingTuesdayTextLogo from "../asset/GivingTuesday 1 logo txt.png";

const Footer = () => {
  return (
    <footer className=" text-white py-7">
      <div className="flex flex-col items-center md:items-start gap-3">
        <img src={GivingTuesdayTextLogo} alt="Giving Tuesday" width={300} />
        <p className="text-[var(--color-white)]/60 text-xs text-center md:text-left">
          &copy; 2021 Giving Tuesday PH. All Rights Reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
