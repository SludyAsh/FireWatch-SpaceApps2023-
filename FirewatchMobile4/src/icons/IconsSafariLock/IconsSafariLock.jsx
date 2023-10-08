/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsSafariLock = ({ color = "black", className }) => {
  return (
    <svg
      className={`icons-safari-lock ${className}`}
      fill="none"
      height="17"
      viewBox="0 0 17 17"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5.79341 15.5H12.2066C13.0756 15.5 13.5 15.0736 13.5 14.1407V9.24987C13.5 8.4103 13.1497 7.97719 12.4289 7.9039V6.22476C12.4289 3.71271 10.765 2.5 9 2.5C7.23503 2.5 5.57111 3.71271 5.57111 6.22476V7.93721C4.91093 8.03716 4.5 8.46361 4.5 9.24987V14.1407C4.5 15.0736 4.9244 15.5 5.79341 15.5ZM6.65569 6.08483C6.65569 4.41235 7.74027 3.52614 9 3.52614C10.2597 3.52614 11.3443 4.41235 11.3443 6.08483V7.89723L6.65569 7.9039V6.08483Z"
        fill={color}
      />
    </svg>
  );
};

IconsSafariLock.propTypes = {
  color: PropTypes.string,
};
