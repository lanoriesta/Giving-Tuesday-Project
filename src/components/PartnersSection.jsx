import React from "react";
import UniRobImg from "../asset/partners-logo/UniRob 1.png";
import TrendMicroImg from "../asset/partners-logo/trenM 1.png";
import GoogleImg from "../asset/partners-logo/Google 1.png";
import OracleImg from "../asset/partners-logo/Oracle 1.png";
import MicrosoftImg from "../asset/partners-logo/MCS 1.png";
import ContactImg from "../asset/contact-img.png";
import FBIcon from "../asset/social-icons/fb-icon.png";
import IGIcon from "../asset/social-icons/ig-icon.png";
import YTIcon from "../asset/social-icons/yt-icon.png";
import Flagimg from "../asset/vertical-flag.png";
import Footer from "./Footer";

const PartnersSection = () => {
  return (
    <div className="bg-[var(--color-gray)] py-10 relative overflow-hidden lg:px-20 xl:px-40 2xl:px-80 md:flex flex-col items-center justify-center">
      <div className="absolute right-0 -bottom-100 ">
        <img src={Flagimg} alt="" className="w-[80px] md:w-[100px] rotate-45" />
      </div>
      <div className="text-center flex flex-col items-center py-5">
        <h2 className=" text-[2rem]/20 font-bold text-white">Partners</h2>
        <hr className="w-[150px] h-[10ppx] text-[var(--color-yellow)]" />
      </div>
      {/* PARTNERS LOGO */}
      <div className="grid grid-cols-5 items-center justify-center gap-5 p-5 py-10">
        <div>
          <img src={UniRobImg} alt="Universal Robina" />
        </div>
        <div>
          <img src={TrendMicroImg} alt="Trend Micro" />
        </div>
        <div>
          <img src={GoogleImg} alt="Google" />
        </div>
        <div>
          <img src={OracleImg} alt="Oracle" />
        </div>
        <div>
          <img src={MicrosoftImg} alt="Microsoft" />
        </div>
      </div>
      <div>
        <div className="py-5">
          <div className="text-center flex flex-col items-center "></div>
          {/* FORM SECTION */}
          <div className="grid md:grid-cols-2 gap-5 p-5">
            <div className="flex flex-col md:flex-rows">
              <h3 className="text-[1.3rem]/5 text-[var(--color-yellow)] text-center md:text-left py-5">
                Contact us or Be Part of our Team
              </h3>
              <form action="#" className="flex flex-col gap-5 z-1">
                <div className="flex flex-row gap-5">
                  <input
                    className="bg-white w-full p-2 rounded-xs shadow-md"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-row gap-5">
                  <input
                    className="bg-white w-full p-2 rounded-xs shadow-md"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-row gap-5">
                  <textarea
                    className="bg-white w-full p-2 rounded-xs shadow-md"
                    name=""
                    id=""
                    rows={5}
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[var(--color-blue)] rounded-xs p-2 text-white cursor-pointer shadow-md hover:bg-[var(--color-yellow)] hover:text-[var(--color-blue)] transition-all"
                >
                  Submit
                </button>
              </form>
              <div className="flex flex-col gap-3 justify-center md:items-start pt-10 items-center">
                <div className=" text-white text-center md:text-left">
                  <p className="text-[var(--color-yellow)]">Email Us</p>
                  <a className="font-bold" href="">
                    admin@example.com
                  </a>
                </div>
                <div className="flex flex-row gap-2">
                  <img src={FBIcon} alt="" />
                  <img src={IGIcon} alt="" />
                  <img src={YTIcon} alt="" />
                </div>
              </div>
              <Footer />
            </div>
            <div className="hidden md:block z-1">
              <img src={ContactImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
