import React from "react";
import PropTypes from "prop-types";
import { useThemeContext } from "../context/themeContext";

const PrimaryColor = ({ className }) => {
  const { themeHandler } = useThemeContext();
  return (
    <button
      className={className}
      onClick={() => themeHandler(className)}
    ></button>
  );
};

PrimaryColor.propTypes = {};

export default PrimaryColor;
