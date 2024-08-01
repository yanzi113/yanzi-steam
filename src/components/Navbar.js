import React from "react";
import logo from "../assets/logo.png";
import{ FaBeer } from 'react-icons/fa';
const Navbar = () => {
  return <div className="bg-[#171a21]">
    {/* left */}
    <div className="flex items-center justify-center text-white font-semibold text-[24px] py-4 ">
      <img src={logo} className="w-12 h-12 mr-2" />
      <p>PC GAMES</p>
    </div>
    {/* middle */}
  </div>
};
export default Navbar;