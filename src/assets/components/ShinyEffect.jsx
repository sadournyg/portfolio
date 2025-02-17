import React from "react";

const ShinyEffect = ({ left, right, top, size = 500 }) => {
  const positionStyles = {
    top: `${top}px`,
    width: `${size}px`,
    heigth: `${size}px`,
    zIndex: -1,
  };

  if (left !== undefined) {
    positionStyles.left = `${left}px`;
  }
  if (right !== undefined) {
    positionStyles.left = `${right}px`;
  }
};

const ShinyEffect = () => {
  return <div className="shiny-effect" style={positionStyles}></div>;
};

export default ShinyEffect;
