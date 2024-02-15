import React from "react";
import style from "./index.module.css";
import portfolioImage from "../../assets/portfolio_img.jpg";

const socialMediaLinks = [
  { id: 1, link: "instagram.com", icon: "I" },
  { id: 1, link: "twitter.com", icon: "T" },
  { id: 1, link: "dribbble.com", icon: "D" },
  { id: 1, link: "github.com", icon: "G" },
];

const Header = () => {
  return (
    <header id="header">
      <div className={`container ${style.header__container}`}>
        <div className={style.header__profile}>
          <img src={portfolioImage} alt="Potrait" />
        </div>
        <h3>Divyanshu Srivastava</h3>
        <p>
          As a Senior Frontend Developer, I bring over a decade of expertise in
          creating user-centric, responsive designs with HTML5, CSS3, and
          JavaScript, alongside frameworks like React and Vue.js.
        </p>
        <div className={style.header__cta}>
          <a href="#contact" className="btn primary">
            Get in touch!
          </a>
          <a href="#projects" className="btn light">
            My projects
          </a>
        </div>
        <div className={style.header__socials}>
          {socialMediaLinks.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
