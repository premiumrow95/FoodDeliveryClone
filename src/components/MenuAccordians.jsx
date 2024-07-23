import React, { useState } from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import ItemLists from "./ItemLists";

const MenuAccordians = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    if (showItems === false) {
      setShowItems(true);
    } else {
      setShowItems(false);
    }
  };

  return (
    <div
      className="m-4 bg-[#ffffff] text-black border-2 border-black rounded-md shadow-lg text-zinc-700"
      onClick={handleClick}
    >
      <div className="flex justify-between items-center text-2xl p-6">
        <li>
          {data.title} ({data.itemCards.length})
        </li>
        <li className=" text-[3rem] flex justify-between items-center mr-5 gap-4">
          <FaArrowCircleDown />
        </li>
      </div>
      <div className="">
        {showItems && <ItemLists items={data.itemCards} />}
      </div>
    </div>
  );
};

export default MenuAccordians;
