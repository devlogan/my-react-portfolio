import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./containers/homepage";
import GithubProjects from "./containers/github_projects";
import Navbar from "./components/navbar";
import LiveProjects from "./containers/live_projects";
import "./App.scss";
import { useState } from "react";
import Slider from "./components/slider";

function App() {
  const [theme, setTheme] = useState("light"); // Default theme

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`App ${theme}-theme`}>
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      <Router>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/github-projects" element={<GithubProjects />} />
          <Route path="/live-projects" element={<LiveProjects />} />
        </Routes>
        {/* < Route path="/projects">
          <AboutPage />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
