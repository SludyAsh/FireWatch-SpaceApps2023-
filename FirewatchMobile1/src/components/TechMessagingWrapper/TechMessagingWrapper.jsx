/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TechMessagingWrapper = ({
  className,
  overlapGroupClassName,
  tailClassName,
  divClassName,
  text = "Message",
}) => {
  return (
    <div className={`tech-messaging-wrapper ${className}`}>
      <div className={`div ${overlapGroupClassName}`}>
        <div className={`tail ${tailClassName}`} />
        <div className={`message ${divClassName}`}>{text}</div>
      </div>
    </div>
  );
};

TechMessagingWrapper.propTypes = {
  text: PropTypes.string,
};
