import React, { useState } from "react";
import { useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setMenu(json.data);
      console.log(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return menu;
};

export default useRestaurantMenu;
