import React from "react";
import style from "./index.module.css";
import ProjectList from "./ProjectList";

const projects = [
  {
    id: 1,
    category: "social-networking",
    image:
      "https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2018/08/The-homepage-of-Life-in-Vogue.png",
    title: "Project Title One",
    desc: "Lorem Ipsum Polegole",
    demo: "https://devhub-v1-9439ad306046.herokuapp.com/dashboard",
    github: "https://github.com/devlogan/devHub",
  },
  {
    id: 2,
    category: "social-networking",
    image:
      "https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2018/08/The-homepage-of-Life-in-Vogue.png",
    title: "Project Title One",
    desc: "Lorem Ipsum Polegole",
    demo: "https://devhub-v1-9439ad306046.herokuapp.com/dashboard",
    github: "https://github.com/devlogan/devHub",
  },
  {
    id: 3,
    category: "social-networking",
    image:
      "https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2018/08/The-homepage-of-Life-in-Vogue.png",
    title: "Project Title One",
    desc: "Lorem Ipsum Polegole",
    demo: "https://devhub-v1-9439ad306046.herokuapp.com/dashboard",
    github: "https://github.com/devlogan/devHub",
  },
  {
    id: 4,
    category: "social-networking",
    image:
      "https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2018/08/The-homepage-of-Life-in-Vogue.png",
    title: "Project Title One",
    desc: "Lorem Ipsum Polegole",
    demo: "https://devhub-v1-9439ad306046.herokuapp.com/dashboard",
    github: "https://github.com/devlogan/devHub",
  },
  {
    id: 5,
    category: "social-networking",
    image:
      "https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2018/08/The-homepage-of-Life-in-Vogue.png",
    title: "Project Title One",
    desc: "Lorem Ipsum Polegole",
    demo: "https://devhub-v1-9439ad306046.herokuapp.com/dashboard",
    github: "https://github.com/devlogan/devHub",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>
        Check out some of the projects I worked on. Use the button to toggle the
        different categories
      </p>
      <div className={`container ${style.portfolio__container}`}>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
