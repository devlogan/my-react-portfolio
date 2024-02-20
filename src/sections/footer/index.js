import React from "react";
import style from "./index.module.css";
import { pageLinks, socialMediaLinks } from "./constants";

const Footer = () => {
  return (
    <footer id="footer">
      <div className={` ${style.footer__container}`}>
        <ul className={style.nav__menu}>
          {pageLinks.map((plink) => (
            <li key={plink.id}>
              <a href={plink.link}>{plink.title}</a>
            </li>
          ))}
        </ul>
        <div className={style.footer__socials}>
          {socialMediaLinks.map((sLink) => (
            <a
              key={sLink.id}
              href={sLink.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {sLink.icon}
            </a>
          ))}
        </div>
        <div className={style.footer__copyright}>
          <small>2024 hardcoder.in &copy; All right reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
