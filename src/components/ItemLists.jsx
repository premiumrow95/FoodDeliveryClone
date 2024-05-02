import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemLists = ({ items, dummy }) => {
  // console.log(items)
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className=" bg-red-500">
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 bg-[#e9e9e9] text-black flex flex-wrap border-b-2 border-black">
          <div className="rounded-lg flex-1 h-[8rem]">
            <div className="w-full p-2 flex justify-start items-center gap-4 text-zinc-700 text-lg bg-sky-300 ">
              <div className="">
                {item.card.info.name}
              </div>
              <div className="">
                <span> &mdash; </span>
                Rs -{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
            </div>
            <p className="p-2 text-sm text-zinc-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="relative rounded-lg w-[9.5rem] h-[8rem]">
              <img src= {CDN_URL + item.card.info.imageId} className='object-cover rounded-lg w-full h-full'></img>
            <button
              className="absolute left-4 bottom-0 bg-black text-white rounded-md p-1 w-32"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemLists;
