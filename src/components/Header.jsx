import React, { useState } from "react";
import Logo from "../asset/giving-tuesday-logo.png";
import { AlignJustify } from "lucide-react";
import SideNav from "./SideNav";

const Header = () => {
  const [clickSideNav, setClickSideNav] = useState(false);
  return (
    <div className="flex justify-between items-center px-3 mx-2 relative py-5 lg:px-20 xl:px-40 2xl:px-100 ">
      <div className="pl-8">
        <img
          className=" drop-shadow-md"
          src={Logo}
          alt="Giving Tuesday Philppines Logo"
        />
      </div>
      <div className="lg:hidden">
        <button
          className="p-2 rounded-sm drop-shadow-lg bg-[var(--color-blue)] cursor-pointer"
          onClick={() => setClickSideNav(!clickSideNav)}
        >
          <AlignJustify color="yellow" />
        </button>
      </div>
      <SideNav isSideNavOn={clickSideNav} setIsSideNavOn={setClickSideNav} />
      <div className="hidden lg:flex text-white">
        <ul className="flex justify-between items-center space-x-4 drop-shadow-lg">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Participate</li>
          <li className="cursor-pointer">Activities</li>
          <li className="cursor-pointer">Partners</li>
          <li className="cursor-pointer">Giving Tuesday's Park</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
