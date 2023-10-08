/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DivWrapper = ({ className, overlapGroupClassName, tailClassName, divClassName, text = "Message" }) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className={`overlap-group-2 ${overlapGroupClassName}`}>
        <div className={`tail-2 ${tailClassName}`} />
        <div className={`text-wrapper ${divClassName}`}>{text}</div>
      </div>
    </div>
  );
};

DivWrapper.propTypes = {
  text: PropTypes.string,
};
