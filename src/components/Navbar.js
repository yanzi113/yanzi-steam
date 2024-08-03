import React from "react";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { ImDownload } from "react-icons/im";
import { MdArrowDropDown } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="flex items-center bg-[#171a21] ">
      {/* left */}
      <div className="flex items-center justify-center lg:justify-start py-1 px-1 mr-1 lg:py-6 lg:px-8 w-full lg:w-auto">
        <div className="lg:hidden left-4 absolute text-white">
          {/* https://tailwindcss.com/docs/screens 
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... } min-width: 1024px 表示规则在屏幕宽度大于或等于 1024 像素时生效。*/}
          {/* left-几就是距离左边缘多少像素 */}
          <IoMenu className="text-[30px]" />
        </div>
        <div className="flex items-center  text-white font-semibold text-[24px]">
          <img src={logo} className="w-12 h-13 mr-2" />
          <p className="lg:text-[#c5c3c0] tracking-wide">GAMES</p>
        </div>
      </div>
      {/* middle */}
      <div className="hidden lg:flex pl-8">
        <ul className="text-[#d7d6d4] text-[16px] flex gap-5">
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
      <div className="absolute top-3 right-10 lg:flex hidden">
        <div className="flex items-center bg-[#5c7e10] text-[#e8e8e8] px-2 py-1 cursor-pointer hover:text-white hover:bg-[#6c9018]">
          <ImDownload className="mr-2" />
          <p className="text-[11px] tracking-wide">安装 games</p>
        </div>
        <div className="flex gap-2 text-[#b8b6b4] text-[11px] items-center px-1 py-[2px] ml-2">
          <p className="hover:text-white cursor-pointer">登录</p>
          <p>|</p>
          <div className="flex items-center">
            <p className="hover:text-white cursor-pointer">语言</p>
            <MdArrowDropDown className="text-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
