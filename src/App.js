import Modal from "./components/Modal";
import { useModalContext } from "./context/modalContext";
import { useThemeContext } from "./context/themeContext";
import About from "./sections/about";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Navbar from "./sections/navbar";
import Projects from "./sections/projects";
import Theme from "./theme";

function App() {
  const { showModal, showModalHandler, closeModalHandler } = useModalContext();
  const { themeState } = useThemeContext();
  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
      <Navbar showModalHandler={showModalHandler} />
      <Header />
      <About />
      <Contact />
      <Projects />
      <Contact />
      <Footer />
      <Theme />
    </main>
  );
}

export default App;
