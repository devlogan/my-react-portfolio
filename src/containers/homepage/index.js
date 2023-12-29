import { useState } from "react";
import style from "./index.module.scss";

const colours = ["#323232", "#17139c", "#452b45", "#89c4ff", "#6db193"];

const HomePage = () => {
  const [colour, setColour] = useState(0);

  const colourChange = () => {
    setColour((colour) => {
      console.log(colour);
      console.log(colour === colours.length - 1);
      if (colour === colours.length - 1) {
        return 0;
      } else {
        return colour + 1;
      }
    });
  };
  return (
    <div className={style.content} onClick={colourChange}>
      <h1>Divyanshu Srivastava</h1>
      <h2>Senior Software Engineer</h2>
      <h3>Paytm Payments Bank</h3>
    </div>
  );
};

export default HomePage;
