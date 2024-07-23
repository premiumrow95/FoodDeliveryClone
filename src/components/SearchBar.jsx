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
    <div className="mb-4 flex justify-between items-center flex-wrap  font-[poppins] font-bold text-[1.4rem]">
      <div className="flex justify-center items-center gap-2 p-2">
        <input
          className="w-[30rem] h-[3.2rem] flex items-center text-[1.4rem] pl-6 p-3 text-[#666666] bg-[#e9e9e9] rounded-[0.8rem] outline-none"
          placeholder="Explore Restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="h-[3.5rem] flex items-center gap-1 text-[1.4rem] p-3 bg-[#e9e9e9] text-black rounded-[0.8rem] hover:scale-95 transition all duration-100 ease-in"
          onClick={() => {
            const searchList = listOfRestaurant.filter((restau) =>
              restau.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListRes(searchList);
          }}
        >
          <IoIosSearch className="text-4xl text-sky-400 text-ellipsis" />
          <span>Search</span>
        </button>
      </div>
      <div className="flex justify-center items-center gap-2 p-2">
        <button
          className="h-[3.5rem] flex items-center gap-1 text-[1.4rem] p-3 bg-[#e9e9e9] text-black rounded-[0.8rem] hover:scale-95 transition all duration-100 ease-in"
          onClick={() => {
            const newList = listRes.filter(
              (restau) => restau.info.avgRating > 4.2
            );
            setListRes(newList);
          }}
        >
          <LiaStarSolid className="text-4xl text-yellow-400 text-ellipsis" />
          <span className="">Top Rated</span>
        </button>
        <button className="h-[3.5rem] flex items-center gap-1 text-[1.4rem] p-3 bg-[#e9e9e9] text-black rounded-[0.8rem] hover:scale-95 transition all duration-100 ease-in">
          <MdDeliveryDining className="text-5xl text-zinc-800 text-ellipsis" />
          <span>Delivery Time</span>
        </button>
        <button className="h-[3.5rem] flex items-center gap-1 text-[1.4rem] p-3 bg-[#e9e9e9] text-black rounded-[0.8rem] hover:scale-95 transition all duration-100 ease-in">
          <FaLeaf className="text-4xl text-green-500 text-ellipsis" />
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
