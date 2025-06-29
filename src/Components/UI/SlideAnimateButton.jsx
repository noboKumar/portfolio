import React from "react";

const SlideAnimateButton = ({ text, icon }) => {
  return (
    <button className="group/btn btn btn-primary relative flex justify-center overflow-hidden rounded-md">
      <span className="text-center transition duration-500 group-hover/btn:translate-x-40">
        {text}
      </span>
      <div className="absolute inset-0 z-20 flex -translate-x-40 items-center justify-center transition duration-500 group-hover/btn:translate-x-0">
        {icon}
      </div>
    </button>
  );
};

export default SlideAnimateButton;
