import React from "react";
import PropTypes from "prop-types";
import Modal from "../components/Modal";
import { backgroundColors, primaryColors } from "./data";
import PrimaryColor from "./PrimaryColor";
import BackgroundColor from "./BackgroundColor";
import "./index.css";

const Theme = () => {
  return (
    <Modal className="theme__modal">
      <h3>Customize Your Theme</h3>
      <small>Change your primary and background color to your preference</small>
      <div className="theme__primary-wrapper">
        <h4>Primary Color</h4>
        <div className="theme__primary-colors">
          {primaryColors.map((pColor) => (
            <PrimaryColor key={pColor} className={pColor} />
          ))}
        </div>
      </div>
      <div className="theme__background-wrapper">
        <h4>Background Color</h4>
        <div className="theme__background-colors">
          {backgroundColors.map((bColor) => (
            <BackgroundColor key={bColor} className={bColor} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

Theme.propTypes = {};

export default Theme;
