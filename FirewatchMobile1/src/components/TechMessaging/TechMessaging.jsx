/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TechMessaging = ({ className, navigationBarNameClassName, text = "Name", chevronClassName }) => {
  return (
    <div className={`tech-messaging ${className}`}>
      <div className={`navigation-bar-name ${navigationBarNameClassName}`}>{text}</div>
      <div className={`chevron ${chevronClassName}`}>􀆊</div>
    </div>
  );
};

TechMessaging.propTypes = {
  text: PropTypes.string,
};
