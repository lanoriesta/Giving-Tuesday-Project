import { X } from "lucide-react";
import React from "react";

const SideNav = ({ isSideNavOn, setIsSideNavOn }) => {
  return (
    <div
      className={`lg:hidden h-[100vh] w-full flex flex-col items-end bg-[var(--color-blue)]/50 p-5 shadow-lg fixed shadow-l-lg top-0  z-10 ${
        isSideNavOn ? " right-0 backdrop-blur-md" : " -right-500 "
      }`}
    >
      <div
        className={`lg:hidden h-screen flex flex-col items-end bg-[var(--color-blue)] p-5 shadow-lg fixed shadow-l-lg opacity-50 top-0 transition-all ease-in-out duration-300 z-12 ${
          isSideNavOn ? " right-0 opacity-100 " : " -right-100 opacity-0"
        }`}
      >
        <button
          className="p-2 rounded-sm shadow-lg bg-[var(--color-blue] cursor-pointer"
          onClick={() => setIsSideNavOn(false)}
        >
          <X color="yellow" />
        </button>
        <ul className="flex flex-col justify-between items-center px-4 text-white space-y-4 pt-5">
          <li>About</li>
          <li>Participate</li>
          <li>Activities</li>
          <li>Partners</li>
          <li>Giving Tuesday's Park</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
