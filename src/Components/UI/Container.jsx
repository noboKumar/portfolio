import React from "react";

const Container = ({ children, className = "", id }) => {
  return <div id={id} className={`mx-auto w-10/12 ${className}`}>{children}</div>;
};

export default Container;
