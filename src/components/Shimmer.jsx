import React from "react";

const Shimmer = () => {
  const shimmerElements = [];

  // Using a for loop to generate repeated shimmer elements
  for (let i = 0; i < 20; i++) {
    shimmerElements.push(
      <div
        key={i}
        className="cards w-[26rem] h-[28rem] p-2.5 rounded-[20px] bg-[#ffffff] hover:scale-95 transition-all duration-200 ease-in overflow-hidden cursor-pointer flex flex-col gap-1"
      >
        <div className="h-[60%] bg-zinc-500 rounded-[20px] animate-shimmer"></div>
        <div className="h-[40%] p-2 rounded-xl flex flex-col gap-4">
          <div className="w-[100%] h-[2rem] bg-zinc-500 animate-shimmer"></div>
          <div className="w-[80%] h-[2rem] bg-zinc-500 animate-shimmer"></div>
          <div className="w-[50%] h-[2rem] bg-zinc-500 animate-shimmer"></div>
          <div className="w-[30%] h-[2rem] bg-zinc-500 animate-shimmer"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-5 justify-items-center mt-2 gap-10 bg-[#ffbe0b] sm:grid-cols-1 md:grid-cols-2">
      {shimmerElements}
    </div>
  );
};

export default Shimmer;
