import React, { useState } from "react";
import logo from "../Images/restaurant.png";
import { FaHome, FaCartArrowDown } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { IoRestaurantSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="relative border-[5px] bg-[#264653] border-[#000000] pt-2 pb-2 nav-open ">
      <div className="bg-[#0077B6] m-auto w-[81rem] h-[4.4rem] rounded-[20px] flex justify-between items-center border-[4px] border-[#ffffff] overflow-hidden">
        <div className="flex justify-center items-center pl-[1.15rem] pr-[1.15rem] font-[cookie] font-semibold text-white gap-5">
          <div className="w-[4rem] h-full">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="size-full" />
            </Link>
          </div>
          <div className="">
            <Link to={"/"} className="text-[3rem]">
              Ratatouille
            </Link>
          </div>
        </div>
        <ul className="ul_list flex justify-center items-center gap-2 p-2 h-full font-extrabold font-[poppins] text-white text-[1.2rem] z-20 transition-all duration-300">
          <li className="sm:w-full h-full">
            <Link
              to={"/"}
              className="h-full flex justify-center items-center gap-2 p-2 rounded-xl bg-[#ffffff] text-black"
            >
              <FaHome className="text-[2rem]" />
              <span>Home</span>
            </Link>
          </li>
          {/* <li>
            <span className='flex justify-center items-center p-2 rounded-xl hover:bg-[#ffffff] hover:text-black transition-all duration-300 ease-in'>
              Online: {onlineStatus ? '💚' : '💔'}
            </span>
          </li> */}
          <li className="sm:w-full h-full">
            <Link
              to={"/about"}
              className="h-full flex justify-center items-center gap-2 p-2 rounded-xl hover:bg-[#ffffff] hover:text-black transition-all duration-300 ease-in"
            >
              <IoRestaurantSharp className="text-[2rem]" />
              <span>About Us</span>
            </Link>
          </li>
          <li className="sm:w-full h-full">
            <span className="h-full flex justify-center items-center p-2 rounded-xl hover:bg-[#ffffff] hover:text-black transition-all duration-300 ease-in">
              <FaBookBookmark className="text-[2rem] mr-1" />
              <span>Portfolio</span>
            </span>
          </li>
          <li className="sm:w-full h-full">
            <span className="h-full flex justify-center items-center p-2 rounded-xl hover:bg-[#ffffff] hover:text-black transition-all duration-300 ease-in">
              <FaCartArrowDown className="text-[2rem] mr-1" />
              <Link to={"/cart"}>
                <span>Cart ({cartItems.length})</span>
              </Link>
            </span>
          </li>
          <li className="h-full">
            <button
              className="h-full block p-2 rounded-xl hover:bg-[#ffffff] hover:text-black transition-all duration-300 ease-in"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
        {/* <Link to={"/"} className='list-none mr-[1rem]'>
          <RxHamburgerMenu className=' w-10 h-10' />
        </Link>
        <Link to={"/"} className='list-none mr-[1rem]'>
          <AiOutlineClose className='w-10 h-10' />
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
