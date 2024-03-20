import React from "react";
import PropTypes from "prop-types";
import { useThemeContext } from "../context/themeContext";

const BackgroundColor = ({ className }) => {
  const { themeHandler } = useThemeContext();
  return (
    <button
      className={className}
      onClick={() => themeHandler(className)}
    ></button>
  );
};

BackgroundColor.propTypes = {};

export default BackgroundColor;
