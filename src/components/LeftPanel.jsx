import React from "react";
import ImageBox from "./ImageBox";
import ContactEducation from "./ContactEducation";

const LeftPanel = () => {
  return (
    <div className="flex flex-col gap-6 w-1/4">
      <ImageBox />
      <ContactEducation />
    </div>
  );
};

export default LeftPanel;
