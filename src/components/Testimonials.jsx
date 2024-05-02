import React from "react";

const Testimonials = () => {
  return (
    <div className="max-w-4xl mx-auto flex items-center justify-center h-full font-semibold">
      <div className="w-[70rem] mx-auto p-8 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-700 text-white shadow-lg">
        <div className="text-2xl md:text-3xl lg:text-4xl mb-8">
          "You are not dealing with an average coder anymore. He has risen above
          and realized the legend. He has become a Super Coder !!"
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-16 h-16 rounded-full mr-4 border-2 border-white"
              src="https://via.placeholder.com/50"
              alt="Author"
            />
            <div>
              <div className="font-bold text-lg">
                Vegeta - The Prince Of All Saiyans
              </div>
              <div className="text-sm">
                Software Engineer at Saiyans Corporation
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-white text-purple-700 px-4 py-2 rounded-lg font-medium hover:bg-purple-700 hover:text-white transition duration-300 ease-in-out">
              Previous
            </button>
            <button className="bg-white text-purple-700 px-4 py-2 rounded-lg font-medium hover:bg-purple-700 hover:text-white transition duration-300 ease-in-out">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
