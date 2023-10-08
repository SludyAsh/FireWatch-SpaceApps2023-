import React from "react";
import { BarsStatusBarsWrapper } from "../../components/BarsStatusBarsWrapper";
import { DivWrapper } from "../../components/DivWrapper";
import { SystemKeyboards } from "../../components/SystemKeyboards";
import { TechMessaging } from "../../components/TechMessaging";
import { TechMessagingWrapper } from "../../components/TechMessagingWrapper";
import { TechMessagingX } from "../../components/TechMessagingX";
import { TechMessagingXWrapper } from "../../components/TechMessagingXWrapper";
import "./style.css";

export const Sms = () => {
  return (
    <div className="SMS">
      <div className="div-2">
        <div className="overlap">
          <div className="message-bar">
            <TechMessagingX
              className="input"
              dictationClassName="tech-messaging-x-instance"
              divClassName="tech-messaging-x-light-message-bar-input-placeholder-instance"
              overlapGroupClassName="tech-messaging-x-light-message-bar-input-placeholder"
              text="iMessage"
            />
            <img className="app-store" alt="App store" src="/img/app-store.svg" />
            <img className="camera" alt="Camera" src="/img/camera-1.svg" />
          </div>
          <div className="app-bar">
            <SystemKeyboards
              backgroundClassName="system-keyboards-instance"
              className="system-keyboards-iphone-x-light-background"
            />
            <div className="separator" />
          </div>
          <div className="home" />
          <img className="image" alt="Image" src="/img/image-5.png" />
          <img className="img" alt="Image" src="/img/image-7.png" />
          <img className="image-2" alt="Image" src="/img/image-8.png" />
          <img className="image-3" alt="Image" src="/img/image-9.png" />
          <img className="image-4" alt="Image" src="/img/image-11.png" />
          <img className="image-5" alt="Image" src="/img/image-12.png" />
          <img className="image-6" alt="Image" src="/img/image-10.png" />
        </div>
        <div className="overlap-2">
          <div className="navigation-bar">
            <div className="overlap-3">
              <div className="overlap-4">
                <div className="back-button">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-3">
                      <div className="chevron-2">􀆉</div>
                      <div className="parent-title">20</div>
                    </div>
                  </div>
                </div>
                <TechMessagingXWrapper className="avatar" techMessagingX="/img/avatar.svg" />
                <img className="vector" alt="Vector" src="/img/vector-12.svg" />
              </div>
              <TechMessaging
                chevronClassName="tech-messaging-instance"
                className="name"
                navigationBarNameClassName="tech-messaging-navigation-bar-x-name-light"
                text="Fire Watch"
              />
            </div>
          </div>
          <BarsStatusBarsWrapper
            barsStatusBarsTimeClassName="design-component-instance-node"
            batteryClassName="bars-status-bars-iphone-light"
            cellularConnection="/img/cellular-connection.svg"
            cellularConnectionClassName="bars-status-bars-iphone-light-instance"
            className="status-bar"
            wifi="/img/wifi.svg"
            wifiClassName="bars-status-bars-instance"
          />
          <div className="frame">
            <div className="text-wrapper-2">20</div>
          </div>
          <div className="group">
            <div className="logo">
              <img className="subtract" alt="Subtract" src="/img/subtract.svg" />
              <img className="FIRE-WATCH" alt="Fire WATCH" src="/img/fire-watch.png" />
            </div>
          </div>
        </div>
        <TechMessagingWrapper
          className="bubble-friend"
          divClassName="bubble-friend-2"
          overlapGroupClassName="tech-messaging-bubbles-light-friend-message"
          tailClassName="tech-messaging-bubbles-light-friend-message-instance"
          text={
            <>
              ALERT!
              <br />
              Thermal anomalies have been detected near you. You may be in danger. Do you see signs of danger (fire,
              smoke or some other threat)?
            </>
          }
        />
        <TechMessagingWrapper
          className="bubble-friend-3"
          divClassName="bubble-friend-2"
          overlapGroupClassName="bubble-friend-4"
          tailClassName="bubble-friend-5"
          text={
            <>
              Keep calm
              <br />
              Evacuate the area if possible.
              <br />
              If you cannot evacuate, find a safe place to take shelter.
              <br />
              Protect your skin and your breathing.
              <br />
              Do not try to put out the fire yourself.
            </>
          }
        />
        <div className="overlap-5">
          <div className="bubble-friend-6">
            <div className="tail-3" />
            <p className="p">
              Click the following link to file a report in your location to alert the corresponding authorities
            </p>
          </div>
          <div className="message-2">www.firewatch.gov/9384y5949uhth94y579t974</div>
        </div>
        <DivWrapper
          className="bubble-person"
          divClassName="bubble-person-2"
          overlapGroupClassName="tech-messaging-bubbles-light-user-message"
          tailClassName="tech-messaging-bubbles-light-user-message-instance"
          text="Yes"
        />
      </div>
    </div>
  );
};
