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
    <div className="border-2 border-black bg-[#1793c4]">
      <div className=" h-[6rem] flex justify-between items-center overflow-hidden">
        <div className="flex justify-center items-center pl-[3.15rem] pr-[3.15rem] text-[#fdfdfd] text-[1.4rem] gap-4">
          <div className="w-[5rem] h-full">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="size-full" />
            </Link>
          </div>
          <div className="headerFont">
            <Link to={"/"} className="text-[3.4rem]">
            Ratatouille
            </Link>
          </div>
        </div>
        <ul className="ul_list flex justify-center items-center gap-4 p-1 h-full font-extrabold font-[Inter] text-[#fdfdfd] text-[1.6rem] z-20 transition-all duration-300 sm:text-[1.2rem] ">
          <li className="">
            <Link
              to={"/"}
              className=" flex justify-center items-center gap-2 p-2 rounded-xl bg-[#ffffff] text-black"
            >
              <FaHome className="text-[3.3rem]" />
              <span>Home</span>
            </Link>
          </li>
          {/* <li>
            <span className='flex justify-center items-center p-2 rounded-xl hover:bg-[#ffffff] hover:text-black transition-all duration-300 ease-in'>
              Online: {onlineStatus ? '💚' : '💔'}
            </span>
          </li> */}
          <li className="">
            <Link
              to={"/about"}
              className=" flex justify-center items-center gap-2 p-2 rounded-xl hover:bg-[#ffffff] hover:text-black transition-all duration-300 ease-in"
            >
              <IoRestaurantSharp className="text-[3rem]" />
              <span>About Us</span>
            </Link>
          </li>
          <li className="">
            <span className="h-full flex justify-center items-center p-2 rounded-xl hover:bg-[#ffffff] hover:text-black transition-all duration-300 ease-in">
              <FaBookBookmark className="text-[3rem] mr-1" />
              <span>Portfolio</span>
            </span>
          </li>
          <li className="">
            <span className=" flex justify-center items-center p-2 rounded-xl hover:bg-[#ffffff] hover:text-black transition-all duration-300 ease-in">
              <FaCartArrowDown className="text-[3rem] mr-1" />
              <Link to={"/cart"}>
                <span>Cart ({cartItems.length})</span>
              </Link>
            </span>
          </li>
          <li className="">
            <button
              className="block p-2 rounded-xl hover:bg-[#ffffff] hover:text-black transition-all duration-300 ease-in"
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
