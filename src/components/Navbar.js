import React from "react";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { ImDownload } from "react-icons/im";
const Navbar = () => {
  return (
    <div className="flex items-center bg-[#171a21]">
      {/* left */}
      <div className="flex items-center justify-center lg:justify-start py-1 px-1 mr-2 lg:py-6 lg:px-8 w-full lg:w-auto">
        <div className="lg:hidden left-4 absolute text-white">
          {/* https://tailwindcss.com/docs/screens 
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... } min-width: 1024px 表示规则在屏幕宽度大于或等于 1024 像素时生效。*/}
          {/* left-几就是距离左边缘多少像素 */}
          <IoMenu className="text-[30px]" />
        </div>
        <div className="flex items-center  text-white font-semibold text-[21px]">
          <img src={logo} className="w-10 h-10 mr-2" />
          <p className="lg:text-[#c5c3c0]">PC GAMES</p>
        </div>
      </div>
      {/* middle */}
      <div className="hidden lg:flex pl-10">
        <ul className="text-[#dcdedf] text-[16px] flex gap-5">
          <li>
            <p>商店</p>
          </li>
          <li>
            <p>社区</p>
          </li>
          <li>
            <p>关于</p>
          </li>
          <li>
            <p>客服</p>
          </li>
        </ul>
      </div>
      {/* right */}
       <div className="absolute top-3 right-10">
        <div className="flex items-center bg-[#5c7e10] text-[#fff]">
        <ImDownload />
        <p>安装steam</p>
        </div>
       </div>
    </div>
  );
};
export default Navbar;
