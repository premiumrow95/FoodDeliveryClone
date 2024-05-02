import React from "react";
import { CAROUSEL_URL } from "../utils/constants";

const CarouselCard = (props) => {
  const { resData } = props;
  const { imageId, text } = resData;

  return (
    <div className="transition hover:scale-[1.2] ease-out duration-400 w-32 h-32">
      <img
        src={`${CAROUSEL_URL}${imageId}`}
        className="w-full h-full object-cover"
      ></img>
    </div>
  );
};

export default CarouselCard;
