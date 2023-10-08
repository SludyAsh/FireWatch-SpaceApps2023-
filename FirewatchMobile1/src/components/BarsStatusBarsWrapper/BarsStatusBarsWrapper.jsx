/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BarsStatusBars } from "../BarsStatusBars";
import "./style.css";

export const BarsStatusBarsWrapper = ({
  className,
  batteryClassName,
  wifiClassName,
  wifi = "/img/wifi-1.svg",
  cellularConnectionClassName,
  cellularConnection = "/img/cellular-connection-1.svg",
  barsStatusBarsTimeClassName,
}) => {
  return (
    <div className={`bars-status-bars-wrapper ${className}`}>
      <div className={`battery ${batteryClassName}`}>
        <div className="capacity-wrapper">
          <div className="capacity" />
        </div>
        <img className="cap" alt="Cap" src="/img/cap-1.svg" />
      </div>
      <img className={`wifi ${wifiClassName}`} alt="Wifi" src={wifi} />
      <img
        className={`cellular-connection ${cellularConnectionClassName}`}
        alt="Cellular connection"
        src={cellularConnection}
      />
      <BarsStatusBars className="time-style" text="9:41" timeClassName={barsStatusBarsTimeClassName} />
    </div>
  );
};

BarsStatusBarsWrapper.propTypes = {
  wifi: PropTypes.string,
  cellularConnection: PropTypes.string,
};
