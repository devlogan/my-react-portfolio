import React from "react";
import style from "./index.module.css";

const Card = ({ children, className, onClick }) => {
  return (
    <article
      className={`${style.card} ${style.about__card} ${className}`}
      onClick={onClick}
    >
      {children}
    </article>
  );
};

export default Card;
