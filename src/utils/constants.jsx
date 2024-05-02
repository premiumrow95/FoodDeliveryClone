const CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;
const CAROUSEL_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
const MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=";
const UPDATE = "https://www.swiggy.com/dapi/restaurants/list/update";

export { CDN_URL, CAROUSEL_URL, MENU_API };

// MENU_API IS FROM EPISDOE 7 FOR RESTAURANT CARD MENU

// URL FROM WHICH AKSHAY DELETED SOMETHINGS
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=43836&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER

// MAIN CARD IS CARD 4 AS AKSHAY DID IN VIDEO
// json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []

// HOW EVERYONE IS GETTING 20 CARDS
// json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
