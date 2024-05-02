import React from "react";
import { useRouteError } from "react-router-dom";
import Error1 from "../Images/Error1.jpg";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-screen bg-gray-900 text-white grid grid-cols-2 items-center justify-center md:grid-cols-1 lg:grid-cols-1">
      <img
        src={Error1}
        alt="Animated Restaurant Chefs"
        className="w-full h-full mr-8"
      />
      <div className="h-screen flex flex-col justify-center items-center overflow-hidden">
        {" "}
        {/* Limit height and hide overflow */}
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          That's All Folks !!
        </h1>
        <div className="w-[28rem] text-center bg-red-500 text-lg lg:text-xl font-semibold py-2 px-8 rounded-md mb-4">
          {err.status} {err.statusText}
        </div>
        <a
          href="/"
          className="text-lg lg:text-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md inline-block transition duration-300"
        >
          Go back to homepage
        </a>
      </div>
    </div>
  );
};

export default Error;
