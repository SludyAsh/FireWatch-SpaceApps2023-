/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsSafariLock2 = ({ color = "black", className }) => {
  return (
    <svg
      className={`icons-safari-lock-2 ${className}`}
      fill="none"
      height="13"
      viewBox="0 0 13 13"
      width="13"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4.07657 11.5H8.35202C8.93136 11.5 9.21429 11.2048 9.21429 10.5589V7.17299C9.21429 6.59175 8.98076 6.2919 8.50022 6.24116V5.07868C8.50022 3.33957 7.39094 2.5 6.21429 2.5C5.03765 2.5 3.92837 3.33957 3.92837 5.07868V6.26422C3.48825 6.33342 3.21429 6.62865 3.21429 7.17299V10.5589C3.21429 11.2048 3.49723 11.5 4.07657 11.5ZM4.65142 4.9818C4.65142 3.82394 5.37447 3.2104 6.21429 3.2104C7.05411 3.2104 7.77717 3.82394 7.77717 4.9818V6.23655L4.65142 6.24116V4.9818Z"
        fill={color}
      />
    </svg>
  );
};

IconsSafariLock2.propTypes = {
  color: PropTypes.string,
};
