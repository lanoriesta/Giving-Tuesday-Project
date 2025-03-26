import React from "react";
import BreadImg from "../asset/curr-campaigns/curr-campaigns-1.png";
import ReadImg from "../asset/curr-campaigns/curr-campaigns-2.png";
import ShareIcon from "../asset/curr-campaigns-icons/share2-icon.png";
import HashtagIcon from "../asset/curr-campaigns-icons/hashtag-icon.png";
import PostIcon from "../asset/curr-campaigns-icons/post-icon.png";

const CurrCampSection = () => {
  return (
    <div className=" bg-white md:flex flex-col items-center justify-center ">
      <div className="px-5 py-10 md:w-[48rem] lg:w-[64rem] xl:w-[80rem] 2xl:w-[96rem] mx-auto">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl/18 font-bold">Current Campaigns</h2>
          <hr className="w-[150px] h-[10ppx] text-[var(--color-yellow)]" />
        </div>
        <div>
          <div className="py-10 grid grid-cols-1 md:grid-cols-2  items-center gap-5">
            <img src={BreadImg} alt="bread" className="w-full shadow-lg" />
            <div className="p-5 md:p-10">
              <h2 className="text-center text-[2rem] font-semibold md:text-left">
                <span className="text-[var(--color-yellow)]">#</span>
                <span className="text-[var(--color-red)]">Pass</span>
                <span className="text-[var(--color-black)]">The</span>
                <span className="text-[var(--color-blue)]">Bread</span>
              </h2>
              <p className="opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="py-10 grid grid-cols-1 md:grid-cols-2  items-center gap-5">
            <img src={ReadImg} alt="" className="w-full md:order-2 shadow-lg" />
            <div className="md:order-1 p-5 md:p-10">
              <h2 className="text-center text-[2rem] font-semibold md:text-left">
                <span className="text-[var(--color-yellow)]">#</span>
                <span className="text-[var(--color-red)]">Read</span>
                <span className="text-[var(--color-black)]">Together</span>
                <span className="text-[var(--color-blue)]">PH</span>
              </h2>
              <p className="opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="py-10">
          <h2 className="text-[1.5rem] font-semibold text-center py-5">
            Help spread the Generosity Movement in the Philippines
          </h2>
          <div className="grid  grid-rows md:grid-cols-3 md:items-stretch items-center gap-8">
            <div className="grid grid-cols-4 md:block gap-3 items-center p-5 md:p-10">
              <div className="flex justify-center md:p-5">
                <img src={ShareIcon} alt="" className="w-30" />
              </div>
              <div className="col-span-3">
                <h3 className="text-[1.5rem]">Share</h3>
                <p className="opacity-70">
                  Share that you're joining Giving Tuesday, how you're planning
                  to give back, or a cause/non-profit you're supporting.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 md:block gap-3 items-center p-5 md:p-10">
              <div className="flex justify-center md:p-5">
                <img src={HashtagIcon} alt="" className="w-30" />
              </div>
              <div className="col-span-3">
                <h3 className=" text-[1.5rem]">Hashtag</h3>
                <p className="opacity-70">
                  Add the hashtag #givingtuesday and #givingtuesdayph to
                  caption.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 md:block gap-3 items-center p-5 md:p-10">
              <div className="flex justify-center md:p-5">
                <img src={PostIcon} alt="" className="w-30" />
              </div>
              <div className="col-span-3">
                <h3 className=" text-[1.5rem]">Post</h3>
                <p className="opacity-70">
                  Post on Instagram, Facebook, Twitter and other social media
                  channels to and rally your friends and family to be a part of
                  GivingTuesday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrCampSection;
