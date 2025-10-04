import React from "react";
import replan from "../design/replan.jpg";
import "../design/image.css"; // <-- ito lang idagdag para makuha animations

const ImageBox = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Spinning gradient ring */}
      <div className="absolute h-44 w-44 rounded-full bg-gradient-to-tr from-pink-500 via-orange-500 to-blue-500  p-[3px] spin-ring">
        <div className="h-full w-full rounded-full bg-transparent"></div>
      </div>
      {/* Profile Image */}
      <img src={replan} alt="Profile" className="h-40 w-40 rounded-full object-cover animated-profile"/>
    </div>
  );
};

export default ImageBox;
