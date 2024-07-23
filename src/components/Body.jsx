import React from 'react';
import { RestaurantCard, withAvgRatingLabel } from './RestaurantCard';
import SearchBar from './SearchBar';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import useBodyCards from '../utils/useBodyCards';

const Body = () => {
  const [listRes, listOfRestaurant, setListRes, setListOfRestaurant] = useBodyCards();

  const RestaurantCardPromoted = withAvgRatingLabel(RestaurantCard);
  
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-yellow-400 to-yellow-600 mt-3 border-[5px] border-black">
        <div className="cards bg-white max-w-md rounded-lg overflow-hidden mx-4 text-shadow">
          <div className="px-6 py-8">
            <div className="text-center">
              <div className="h-24 w-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center animate-bounce mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75V7h-1.5V3.75A.75.75 0 0110 3zM7 8.5h6a.5.5 0 01.5.5v7a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5zm1.5 7V9h3v6h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h1 className="text-4xl font-extrabold text-[#ffbe0b] mb-4">Oops! You're Offline</h1>
              <p className="text-gray-800 mb-4">Looks like you're not connected to the internet.</p>
              <p className="text-gray-800 mb-6">Please check your connection and try again.</p>
              <button onClick={() => window.location.reload()} className="bg-[#ffbe0b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#ffbe0b]">Refresh</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen mt-[0.65rem] border-2 border-black bg-[#ffbe0b]'>
      <div>
        <SearchBar listRes={listRes} setListRes={setListRes} listOfRestaurant={listOfRestaurant} setListOfRestaurant={setListOfRestaurant} />
      </div>
      {listOfRestaurant.length === 0 ? <Shimmer /> : null}
      <div className="p-4 grid grid-cols-5 justify-items-center mt-2 gap-10 sm:grid-cols-2 md:grid-cols-2">
        {listRes.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.avgRating > 4.3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
