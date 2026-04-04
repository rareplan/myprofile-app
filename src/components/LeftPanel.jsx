import React from "react";
import ImageBox from "./ImageBox";

const LeftPanel = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Profile picture */}
      <div className="w-full flex justify-center mb-4">
        <ImageBox />
      </div>
    </div>
  );
};

export default LeftPanel;
