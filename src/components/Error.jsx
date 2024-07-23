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
        <h1 className="text-[5.3rem] font-bold mb-2">
        That&#39;s All Folks !!

        </h1>
        <div className="w-[38rem] text-center bg-red-500 text-4xl font-semibold py-4 px-8 rounded-xl mb-6">
          {err.status} {err.statusText}
        </div>
        <a
          href="/"
          className="text-3xl bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl inline-block transition duration-300"
        >
          Go back to homepage
        </a>
      </div>
    </div>
  );
};

export default Error;
