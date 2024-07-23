import React from "react";
import { LiaStarSolid } from "react-icons/lia";
import { CDN_URL } from "../utils/constants";

// md:w-[270px] md:h-[200px]

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    cuisines,
    sla,
    avgRating,
    name,
    costForTwo,
    locality,
  } = resData?.info;
  return (
    <div>
      <div className="cards w-[27rem] h-[24.4rem] p-2.5 rounded-[10px] bg-[#ffffff] hover:scale-95 transition-all duration-200 ease-in overflow-hidden cursor-pointer flex flex-col gap-1">
        <div className="w-full h-[55%] text-ellipsis">
          {" "}
          <img
            src={`${CDN_URL}${cloudinaryImageId}`}
            className="size-full object-cover rounded-[20px]"
          />
        </div>
        <div className="w-full h-[45%] p-2 rounded-xl truncate">
          <div className="text-[1.6rem] flex gap-4 text-sky-900 font-extrabold">
            <span className="w-[80%] truncate">{name}</span>
            <span className="flex items-center gap-1 font-semibold">
              <LiaStarSolid className="inline text-yellow-400 text-ellipsis text-[2.1rem]" />
              <span className="">{avgRating}</span>
            </span>
          </div>
          <div className="truncate text-[#666666] text-[1.4rem] font-sans font-bold">
            <span className="text-cyan-600">{cuisines.join(", ")}</span>
          </div>
          <div className=" text-[1.4rem] font-sans font-medium flex justify-between text-sky-700">
            <span className="truncate">{locality}</span>
            <span className="">{sla.deliveryTime} mins</span>
          </div>
            <div className="text-[1.5rem] font-sans font-medium text-sky-700">
              <span>{costForTwo}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

const withAvgRatingLabel = (RestaurantCard) => {
  const WithAvgRatingLabel = (props) => {
    return (
      <div className="relative">
        <div className="absolute top-3 left-1 text-2xl transform -translate-x-0 -translate-y-1/2 z-10 bg-black text-white py-3 px-6 p-2 rounded-full font-semibold">
          Promoted
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };

  // Set the display name for the returned component
  WithAvgRatingLabel.displayName = `withAvgRatingLabel(${getDisplayName(
    RestaurantCard
  )})`;

  return WithAvgRatingLabel;
};

// Helper function to get the display name of a component
const getDisplayName = (Component) => {
  return Component.displayName || Component.name || "Component";
};

export { RestaurantCard, withAvgRatingLabel };
