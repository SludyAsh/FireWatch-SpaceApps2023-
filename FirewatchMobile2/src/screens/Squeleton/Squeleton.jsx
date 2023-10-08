import React from "react";
import { BarsStatusBars } from "../../components/BarsStatusBars";
import { Safari } from "../../components/Safari";
import { IconsSafariBook4 } from "../../icons/IconsSafariBook4";
import { IconsSafariChevronBackward3 } from "../../icons/IconsSafariChevronBackward3";
import { IconsSafariChevronForward3 } from "../../icons/IconsSafariChevronForward3";
import { IconsSafariShare3 } from "../../icons/IconsSafariShare3";
import { IconsSafariWindows3 } from "../../icons/IconsSafariWindows3";
import { MenuHamburgerMd } from "../../icons/MenuHamburgerMd";
import "./style.css";

export const Squeleton = () => {
  return (
    <div className="squeleton">
      <div className="div-2">
        <div className="overlap">
          <div className="safari-bottom">
            <div className="safari-icons-wrapper">
              <div className="safari-icons-2">
                <IconsSafariChevronBackward3 className="icon-instance-node" />
                <IconsSafariChevronForward3 className="icon-instance-node" />
                <IconsSafariShare3 className="icon-instance-node" />
                <IconsSafariBook4 className="icon-instance-node" />
                <IconsSafariWindows3 className="icon-instance-node" />
              </div>
            </div>
          </div>
          <div className="rectangle" />
        </div>
        <div className="pop-up-permiso-wrapper">
          <img className="pop-up-permiso" alt="Pop up permiso" src="/img/pop-up-permiso.png" />
        </div>
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="rectangle-4" />
        <div className="rectangle-5" />
        <div className="rectangle-6" />
        <div className="nav-bar">
          <MenuHamburgerMd className="icon-instance-node" />
          <div className="logo">
            <img className="subtract" alt="Subtract" src="/img/subtract.svg" />
            <img className="FIRE-WATCH" alt="Fire WATCH" src="/img/fire-watch.png" />
          </div>
        </div>
        <div className="status-bar">
          <div className="battery">
            <div className="capacity-wrapper">
              <div className="capacity" />
            </div>
            <img className="cap" alt="Cap" src="/img/cap.svg" />
          </div>
          <img className="wifi" alt="Wifi" src="/img/wifi.svg" />
          <img className="cellular-connection" alt="Cellular connection" src="/img/cellular-connection.svg" />
          <BarsStatusBars className="time-style" text="9:41" timeClassName="bars-status-bars-iphone-x-time-light" />
          <Safari
            addressClassName="safari-top-2"
            className="safari-top"
            divClassName="safari-top-3"
            iconsSafariRefresh3StyleOverrideClassName="design-component-instance-node"
            orientation="portrait"
            position="top"
            safariAddressBarClassName="safari-instance"
            scrolled={false}
            text="firewatch.gov"
            type="address-bar"
          />
        </div>
        <div className="home" />
      </div>
    </div>
  );
};
