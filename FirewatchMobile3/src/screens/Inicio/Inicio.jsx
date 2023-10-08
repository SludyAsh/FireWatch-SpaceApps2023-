import React from "react";
import { BarsStatusBars } from "../../components/BarsStatusBars";
import { Mapa } from "../../components/Mapa";
import { Safari } from "../../components/Safari";
import { ArrowArrowCircleRight } from "../../icons/ArrowArrowCircleRight";
import { IconsSafariBook4 } from "../../icons/IconsSafariBook4";
import { IconsSafariChevronBackward3 } from "../../icons/IconsSafariChevronBackward3";
import { IconsSafariChevronForward3 } from "../../icons/IconsSafariChevronForward3";
import { IconsSafariShare3 } from "../../icons/IconsSafariShare3";
import { IconsSafariWindows3 } from "../../icons/IconsSafariWindows3";
import { InterfaceSearchMagnifyingGlass } from "../../icons/InterfaceSearchMagnifyingGlass";
import { MenuHamburgerMd1 } from "../../icons/MenuHamburgerMd1";
import "./style.css";

export const Inicio = () => {
  return (
    <div className="inicio">
      <div className="div-2">
        <div className="content">
          <div className="primary-content">
            <div className="overlap-7">
              <div className="mapa-fires">
                <div className="overlap-group-4">
                  <Mapa className="mapa-instance" property1="frame-3" />
                  <div className="rectangle" />
                  <div className="text-wrapper-2">Saturday, October 7</div>
                  <div className="text-wrapper-3">UV Radiation Index</div>
                  <div className="text-wrapper-4">Humidity</div>
                  <div className="text-wrapper-5">Wind</div>
                  <div className="text-wrapper-6">miliwatts</div>
                  <div className="text-wrapper-7">%</div>
                  <div className="text-wrapper-8">mi/h</div>
                  <div className="text-wrapper-9">6.4</div>
                  <div className="text-wrapper-10">50</div>
                  <div className="text-wrapper-11">5</div>
                  <div className="text-wrapper-12">Los Angeles, CA</div>
                  <img className="line" alt="Line" src="/img/line-2.svg" />
                  <img className="line-2" alt="Line" src="/img/line-2.svg" />
                </div>
              </div>
              <div className="link-a-NASA">
                <div className="overlap-8">
                  <a
                    href="https://firms.modaps.eosdis.nasa.gov/map/#d:today;@-119.4,37.0,8.4z"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <p className="p">Visit NASA Fire Information for Resource management system</p>
                  </a>
                  <ArrowArrowCircleRight className="arrow-arrow-circle" />
                </div>
              </div>
            </div>
          </div>
          <div className="incident-record">
            <div className="text-wrapper-13">Fire Incident Record</div>
            <div className="group">
              <div className="overlap-group-5">
                <InterfaceSearchMagnifyingGlass className="interface-search" />
                <div className="text-wrapper-14">Search any city</div>
              </div>
            </div>
            <div className="frame">
              <div className="overlap-9">
                <img className="group-2" alt="Group" src="/img/group-2.png" />
                <img className="group-3" alt="Group" src="/img/group-12.png" />
                <img className="group-4" alt="Group" src="/img/group-12.png" />
                <img className="group-5" alt="Group" src="/img/group-12.png" />
                <img className="group-6" alt="Group" src="/img/group-12.png" />
                <img className="group-7" alt="Group" src="/img/group-12.png" />
                <img className="group-8" alt="Group" src="/img/group-12.png" />
                <img className="group-9" alt="Group" src="/img/group-12.png" />
                <img className="group-10" alt="Group" src="/img/group-12.png" />
                <img className="group-11" alt="Group" src="/img/group-12.png" />
                <img className="group-12" alt="Group" src="/img/group-12.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="nav-bar">
          <MenuHamburgerMd1 className="icon-instance-node" />
          <img className="logo" alt="Logo" src="/img/logo.svg" />
        </div>
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
        <div className="home" />
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
      </div>
    </div>
  );
};
