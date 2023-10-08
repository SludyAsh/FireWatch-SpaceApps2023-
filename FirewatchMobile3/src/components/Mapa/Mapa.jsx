/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsPin } from "../../icons/IconsPin";
import "./style.css";

export const Mapa = ({ property1, className }) => {
  return (
    <div className={`mapa ${property1} ${className}`}>
      {property1 === "frame-4" && (
        <>
          <div className="overlap">
            <IconsPin className="icons-pin" />
            <div className="ellipse" />
            <div className="div" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <img className="vector" alt="Vector" src="/img/vector-9.svg" />
          </div>
          <div className="overlap-group">
            <div className="ellipse-5" />
            <div className="ellipse-6" />
            <div className="ellipse-7" />
            <img className="img" alt="Vector" src="/img/vector-8.svg" />
          </div>
          <div className="overlap-2">
            <div className="ellipse-8" />
            <div className="ellipse-9" />
            <div className="ellipse-10" />
            <div className="ellipse-11" />
            <img className="vector-2" alt="Vector" src="/img/vector-11.svg" />
          </div>
          <div className="overlap-3">
            <div className="ellipse-12" />
            <div className="ellipse-13" />
            <div className="ellipse-14" />
            <div className="ellipse-15" />
          </div>
          <div className="overlap-4">
            <div className="ellipse-16" />
            <div className="ellipse-17" />
          </div>
          <div className="overlap-5">
            <div className="ellipse-18" />
            <div className="ellipse-19" />
            <div className="ellipse-20" />
          </div>
          <div className="overlap-group-2">
            <div className="ellipse-21" />
            <div className="ellipse-22" />
            <img className="vector-3" alt="Vector" src="/img/vector-10.svg" />
          </div>
          <div className="ellipse-23" />
          <div className="overlap-6">
            <div className="ellipse-24" />
            <img className="vector-4" alt="Vector" src="/img/vector-11-1.svg" />
          </div>
          <div className="ellipse-25" />
          <div className="ellipse-26" />
          <div className="ellipse-27" />
          <div className="ellipse-28" />
          <div className="ellipse-29" />
          <div className="ellipse-30" />
          <div className="ellipse-31" />
        </>
      )}
    </div>
  );
};

Mapa.propTypes = {
  property1: PropTypes.oneOf(["frame-3", "frame-4"]),
};
