import { Link } from "react-router-dom";
import style from "./index.module.scss";
import Slider from "../slider";

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className={style.navbarContainer}>
      <ul className={style.navbar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/github-projects">Github Projects</Link>
        </li>
        <li>
          <Link to="/live-projects">Live Projects</Link>
        </li>

        {/* more links here */}
      </ul>
      <Slider toggleTheme={toggleTheme} />
    </nav>
  );
};

export default Navbar;
