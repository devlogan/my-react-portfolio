import React from "react";
import Card from "../../components/Card";
import style from "./index.module.css";

const Project = ({ project }) => {
  return (
    <Card className={style.portfolio__project}>
      <div className={style.portfolio__project_image}>
        <img
          className={style.project__project_image}
          src={project.image}
          alt="Portfolio project image"
        />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className={style.portfolio__project_cta}>
        <a
          href={project.demo}
          className="btn sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          href={project.demo}
          className="btn sm primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </Card>
  );
};

export default Project;
