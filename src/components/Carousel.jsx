import React, { useState, useEffect, useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Carousel = () => {
  const CARD_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
  const carousel = useRef(null);
  const [what, setWhat] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const moveNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    setMaxIndex(Math.floor(carousel.current.scrollWidth / carousel.current.offsetWidth) - 1);
  }, [what]);

  const fetchData = async () => {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await response.json();
    setWhat(json?.data?.cards[0]?.card?.card?.imageGridCards?.info || []);
  };

  return (
    <div className="h-64 flex justify-center items-start flex-col bg-red-500">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-5xl text-white font-[cookie] pl-4 p-5">What's on your mind?</h3>
        <div className="text-5xl flex gap-4 text-white">
          <FaArrowCircleLeft onClick={movePrev} disabled={currentIndex === 0}/>
          <FaArrowCircleRight onClick={moveNext} disabled={currentIndex >= maxIndex}/>
        </div>
      </div>
      <div className="w-full h-52 relative">
        <div ref={carousel} className="h-full pl-5 flex gap-8 overflow-hidden">
          {what.map((carouselCard) => (
            <img
              key={carouselCard.id}
              className="object-center h-40 w-52 transition-transform hover:scale-110 duration-200 cursor-pointer"
              src={CARD_URL + carouselCard.imageId}
              alt="card img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
