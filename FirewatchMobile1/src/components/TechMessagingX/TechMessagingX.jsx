/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TechMessagingX = ({
  className,
  overlapGroupClassName,
  dictationClassName,
  divClassName,
  text = "Placeholder",
}) => {
  return (
    <div className={`tech-messaging-x ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <img className={`dictation ${dictationClassName}`} alt="Dictation" src="/img/dictation-1.svg" />
        <div className={`placeholder ${divClassName}`}>{text}</div>
      </div>
    </div>
  );
};

TechMessagingX.propTypes = {
  text: PropTypes.string,
};
