/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsSafariBook3 } from "../../icons/IconsSafariBook3";
import { IconsSafariChevronBackward3 } from "../../icons/IconsSafariChevronBackward3";
import { IconsSafariChevronForward3 } from "../../icons/IconsSafariChevronForward3";
import { IconsSafariLock2 } from "../../icons/IconsSafariLock2";
import { IconsSafariLock5 } from "../../icons/IconsSafariLock5";
import { IconsSafariNewTab } from "../../icons/IconsSafariNewTab";
import { IconsSafariRefresh3 } from "../../icons/IconsSafariRefresh3";
import { IconsSafariShare3 } from "../../icons/IconsSafariShare3";
import { IconsSafariTextSize3 } from "../../icons/IconsSafariTextSize3";
import { IconsSafariWindows3 } from "../../icons/IconsSafariWindows3";
import "./style.css";

export const Safari = ({
  type,
  position,
  orientation,
  scrolled,
  className,
  safariAddressBarClassName,
  iconsSafariRefresh3StyleOverrideClassName,
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
              <IconsSafariRefresh3 className={iconsSafariRefresh3StyleOverrideClassName} />
              <IconsSafariTextSize3 className="icons-safari-text" />
              <div className={`address ${addressClassName}`}>
                <IconsSafariLock5 className="icons-safari-lock" color="black" />
                <div className={`apple-com ${divClassName}`}>{text}</div>
              </div>
            </>
          )}

          {scrolled && (
            <div className="address-2">
              <IconsSafariLock2 className="icons-safari-lock-2" color={position === "bottom" ? "#676769" : "black"} />
              <div className="text-wrapper">{text}</div>
            </div>
          )}

          {position === "bottom" && type === "address-bar" && !scrolled && (
            <>
              <div className="safari-icons">
                <IconsSafariChevronBackward3 className="instance-node" />
                <IconsSafariChevronForward3 className="instance-node" />
                <IconsSafariShare3 className="instance-node" />
                <IconsSafariBook3 className="instance-node" />
                <IconsSafariWindows3 className="instance-node" />
              </div>
              <div className="safari-address-bar-2">
                <IconsSafariRefresh3 className="icons-safari-refresh" />
                <div className="address-3">
                  <IconsSafariLock5 className="icons-safari-lock" color="#676769" />
                  <div className="apple-com">{text}</div>
                </div>
                <IconsSafariTextSize3 className="icons-safari-text-size-3" />
              </div>
            </>
          )}

          {type === "tab-bar" && (
            <>
              <IconsSafariChevronBackward3 className="instance-node" />
              <IconsSafariChevronForward3 className="instance-node" />
              <IconsSafariShare3 className="instance-node" />
              <IconsSafariBook3 className="instance-node" />
              <IconsSafariWindows3 className="instance-node" />
            </>
          )}
        </div>
      )}

      {orientation === "landscape" && !scrolled && (
        <>
          <div className="overlap-group-3">
            <div className="safari-address-bar-3">
              <IconsSafariTextSize3 className="icons-safari-text-size-3-instance" />
              <div className="address-4">
                <div className="apple-com">{text}</div>
                <IconsSafariLock5 className="icons-safari-lock" color="#676769" />
              </div>
            </div>
            <IconsSafariRefresh3 className="icons-safari-refresh-3" />
          </div>
          <div className="right-icons">
            <IconsSafariShare3 className="instance-node" />
            <IconsSafariNewTab className="instance-node" />
            <IconsSafariWindows3 className="instance-node" />
          </div>
          <div className="left-icons">
            <IconsSafariChevronBackward3 className="instance-node" />
            <IconsSafariChevronForward3 className="instance-node" />
            <IconsSafariBook3 className="instance-node" />
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
