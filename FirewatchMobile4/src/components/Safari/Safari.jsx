/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsSafariBook1 } from "../../icons/IconsSafariBook1";
import { IconsSafariChevronBackward1 } from "../../icons/IconsSafariChevronBackward1";
import { IconsSafariChevronForward1 } from "../../icons/IconsSafariChevronForward1";
import { IconsSafariLock } from "../../icons/IconsSafariLock";
import { IconsSafariLock3 } from "../../icons/IconsSafariLock3";
import { IconsSafariNewTab } from "../../icons/IconsSafariNewTab";
import { IconsSafariRefresh2 } from "../../icons/IconsSafariRefresh2";
import { IconsSafariShare1 } from "../../icons/IconsSafariShare1";
import { IconsSafariTextSize1 } from "../../icons/IconsSafariTextSize1";
import { IconsSafariWindows1 } from "../../icons/IconsSafariWindows1";
import "./style.css";

export const Safari = ({
  type,
  position,
  orientation,
  scrolled,
  className,
  safariAddressBarClassName,
  iconsSafariRefresh2StyleOverrideClassName,
  addressClassName,
  divClassName,
  text = "apple.com",
}) => {
  return (
    <div className={`safari ${orientation} scrolled-${scrolled} ${type} ${position} ${className}`}>
      {orientation === "portrait" && (!scrolled || type === "address-bar") && (
        <div className={`safari-address-bar ${safariAddressBarClassName}`}>
          {position === "top" && !scrolled && (
            <>
              <IconsSafariRefresh2 className={iconsSafariRefresh2StyleOverrideClassName} />
              <IconsSafariTextSize1 className="icons-safari-text" />
              <div className={`address ${addressClassName}`}>
                <IconsSafariLock className="icons-safari-lock" color="black" />
                <div className={`apple-com ${divClassName}`}>{text}</div>
              </div>
            </>
          )}

          {scrolled && (
            <div className="div">
              <IconsSafariLock3 className="icons-safari-lock-3" color={position === "bottom" ? "#676769" : "black"} />
              <div className="text-wrapper">{text}</div>
            </div>
          )}

          {position === "bottom" && type === "address-bar" && !scrolled && (
            <>
              <div className="safari-icons">
                <IconsSafariChevronBackward1 className="instance-node" />
                <IconsSafariChevronForward1 className="instance-node" />
                <IconsSafariShare1 className="instance-node" />
                <IconsSafariBook1 className="instance-node" />
                <IconsSafariWindows1 className="instance-node" />
              </div>
              <div className="safari-address-bar-2">
                <IconsSafariRefresh2 className="icons-safari-refresh" />
                <div className="address-2">
                  <IconsSafariLock className="icons-safari-lock" color="#676769" />
                  <div className="apple-com">{text}</div>
                </div>
                <IconsSafariTextSize1 className="icons-safari-text-size-1" />
              </div>
            </>
          )}

          {type === "tab-bar" && (
            <>
              <IconsSafariChevronBackward1 className="instance-node" />
              <IconsSafariChevronForward1 className="instance-node" />
              <IconsSafariShare1 className="instance-node" />
              <IconsSafariBook1 className="instance-node" />
              <IconsSafariWindows1 className="instance-node" />
            </>
          )}
        </div>
      )}

      {orientation === "landscape" && !scrolled && (
        <>
          <div className="overlap-group">
            <div className="safari-address-bar-3">
              <IconsSafariTextSize1 className="icons-safari-text-size-1-instance" />
              <div className="address-3">
                <div className="apple-com">{text}</div>
                <IconsSafariLock className="icons-safari-lock" color="#676769" />
              </div>
            </div>
            <IconsSafariRefresh2 className="icons-safari-refresh-2" />
          </div>
          <div className="right-icons">
            <IconsSafariShare1 className="instance-node" />
            <IconsSafariNewTab className="instance-node" />
            <IconsSafariWindows1 className="instance-node" />
          </div>
          <div className="left-icons">
            <IconsSafariChevronBackward1 className="instance-node" />
            <IconsSafariChevronForward1 className="instance-node" />
            <IconsSafariBook1 className="instance-node" />
          </div>
        </>
      )}
    </div>
  );
};

Safari.propTypes = {
  type: PropTypes.oneOf(["tab-bar", "address-bar"]),
  position: PropTypes.oneOf(["top", "bottom"]),
  orientation: PropTypes.oneOf(["landscape", "portrait"]),
  scrolled: PropTypes.bool,
  text: PropTypes.string,
};
