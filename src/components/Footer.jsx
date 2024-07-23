import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../Images/restaurant.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black mt-3 border-2 border-black">
      <div className="md:grid-cols-4 grid grid-cols-4 gap-10 place-content-center mt-2 bg-black text-white justify-items-center">
        <div className="flex flex-col justify-center items-center p-2 ">
          <div className="flex justify-center items-center flex-col">
            <div className="w-[8rem] h-[8rem] ">
              <Link to={"/"}>
                <img src={logo} alt="Logo" className="size-full" />
              </Link>
            </div>
            <p className="font-[cookie] font-extrabold text-[5rem] ">
              Ratatouille
            </p>
          </div>
          <div className="text-[3.5rem] flex justify-between items-center gap-3">
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaGithubSquare />
            </Link>
            <Link>
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="p-2 text-2xl flex justify-start flex-col gap-6">
          <p className="font-extrabold text-4xl mb-4">Company</p>
          <p className="cursor-pointer">Careers</p>
          <p className="cursor-pointer">Team</p>
          <p className="cursor-pointer">Rataouille Instamart</p>
          <p className="cursor-pointer">Ratatouille App</p>
        </div>
        <div className="p-2 text-2xl flex justify-start flex-col gap-6">
          <p className="font-extrabold text-4xl mb-4">Contact Us</p>
          <p className="cursor-pointer">Help & Support</p>
          <p className="cursor-pointer">Partner With Us</p>
          <p className="cursor-pointer">Ride With Us</p>
          <p className="cursor-pointer">Privacy Policy</p>
        </div>
        <div className="p-2 text-2xl flex justify-start flex-col gap-6">
          <p className="font-extrabold text-4xl mb-4">We Deliver to:</p>
          <p className="cursor-pointer">Bhopal</p>
          <p className="cursor-pointer">Bangalore</p>
          <p className="cursor-pointer">Delhi</p>
          <p className="cursor-pointer">Mumbai</p>
        </div>
      </div>
      <div className="bg-black border-t-2 border-white h-[3.5rem] overflow-hidden text-white flex justify-center items-center gap-2">
        <p className="text-[3rem] h-full flex items-center">&copy;</p>
        <p className="text-[1.8rem] h-full  flex items-center gap-3">
          <span>2024 All Rights Reserved </span>
          <span>&mdash;</span>
          <span>Pramesh Saini</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
