import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const colours = ["#323232", "#17139c", "#452b45", "#89c4ff", "#6db193"];
function App() {
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
    <div className="App">
      <div
        className="content"
        style={{ background: colours[colour] }}
        onClick={colourChange}
      >
        <h1>Divyanshu Srivastava</h1>
        <h2>Senior Software Engineer</h2>
        <h3>Paytm Payments Bank</h3>
      </div>
    </div>
  );
}

export default App;
