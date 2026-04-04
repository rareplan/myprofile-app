import React from "react";
import replan from "../design/replan.jpg";
import "../design/image.css";

const ImageBox = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative flex items-center justify-center mb-3">
        {/* Gradient spinning ring */}
        <div className="absolute h-44 w-44 rounded-full bg-gradient-to-tr from-pink-500 via-orange-500 to-blue-500 p-[3px] spin-ring">
          <div className="h-full w-full rounded-full bg-transparent"></div>
        </div>

        {/* Profile image */}
        <img
          src={replan}
          alt="Profile"
          className="h-40 w-40 rounded-full object-cover animated-profile"
        />
      </div>
    </div>
  );
};

export default ImageBox;
