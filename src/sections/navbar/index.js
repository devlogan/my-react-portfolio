import React from "react";
import style from "./index.module.css";
import logo from "../../assets/logo.png";
import colorPallete from "../../assets/color-palette.png";

const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "About",
    link: "#about",
  },
  {
    id: 3,
    title: "Projects",
    link: "#projects",
  },
  {
    id: 4,
    title: "Contact",
    link: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav className="">
      <div className={`container ${style.nav__container}`}>
        <a href="">
          <img src={logo} alt="Logo" className={style.nav__logo} />
        </a>
        <ul className={style.nav__menu}>
          {navLinks.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <span>
          <img src={colorPallete} className={style.nav__color_palette}></img>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
