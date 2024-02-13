import About from "./sections/about";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Navbar from "./sections/navbar";
import Projects from "./sections/projects";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
