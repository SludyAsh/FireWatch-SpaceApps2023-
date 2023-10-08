/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TechMessagingXWrapper = ({ className, techMessagingX = "/img/tech-messaging-x-avatar-person.svg" }) => {
  return <img className={`tech-messaging-x-wrapper ${className}`} alt="Tech messaging x" src={techMessagingX} />;
};

TechMessagingXWrapper.propTypes = {
  techMessagingX: PropTypes.string,
};
