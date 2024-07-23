import React from 'react'
import { useState, useEffect } from "react";

const useBodyCards = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [listRes, setListRes] = useState([]);
  // console.log(listOfRestaurant)

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
      console.log(json);
      setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      setListRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return [listRes,listOfRestaurant, setListRes, setListOfRestaurant];
}

export default useBodyCards;