import React from "react";
import PropTypes from "prop-types";
import { LiaStarSolid } from "react-icons/lia";
import { FaLeaf } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { useState } from "react";

const SearchBar = (props) => {
  const { listRes, setListRes } = props;
  const { listOfRestaurant, setListOfRestaurant } = props;
  const [searchText, setSearchText] = useState("");

  return (
    <div className="bg-[#0077B6] flex justify-between items-center flex-wrap border-[4px] border-white border-t-0 border-l-0 border-r-0 font-[poppins]">
      <div className="flex justify-center items-center gap-2 p-2 font-semibold">
        <input
          className="w-[20rem] h-[2.5rem] flex items-center text-md p-3 bg-[#ffffff] rounded-[10px] outline-none"
          placeholder="Explore Restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="h-[2.5rem] flex items-center gap-1 text-md p-3 bg-[#ffffff] rounded-[10px] hover:scale-95 transition all duration-100 ease-in"
          onClick={() => {
            const searchList = listOfRestaurant.filter((restau) =>
              restau.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListRes(searchList);
          }}
        >
          <IoIosSearch className="text-2xl text-sky-800 text-ellipsis" />
          <span>Search</span>
        </button>
      </div>
      <div className="flex justify-center items-center gap-2 p-2 font-semibold">
        <button
          className="h-[2.5rem] flex items-center gap-1 text-md p-3 bg-[#ffffff] rounded-[10px] hover:scale-95 transition all duration-100 ease-in"
          onClick={() => {
            const newList = listRes.filter(
              (restau) => restau.info.avgRating > 4.2
            );
            setListRes(newList);
          }}
        >
          <LiaStarSolid className="text-2xl text-yellow-400 text-ellipsis" />
          <span className="">Top Rated</span>
        </button>
        <button className="h-[2.5rem] flex items-center gap-1 text-md p-3 bg-[#ffffff] rounded-[10px] hover:scale-95 transition all duration-100 ease-in">
          <MdDeliveryDining className="text-3xl text-zinc-800 text-ellipsis" />
          <span>Delivery Time</span>
        </button>
        <button className="h-[2.5rem] flex items-center gap-1 text-md p-3 bg-[#ffffff] rounded-[10px] hover:scale-95 transition all duration-100 ease-in">
          <FaLeaf className="text-2xl text-green-500 text-ellipsis" />
          <span>Veg</span>
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  listRes: PropTypes.array.isRequired,
  setListRes: PropTypes.func.isRequired,
  listOfRestaurant: PropTypes.array.isRequired,
  setListOfRestaurant: PropTypes.func.isRequired,
};

export default SearchBar;
