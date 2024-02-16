import React from "react";
import style from "./index.module.css";
import Project from "./Project";

const ProjectList = ({ projects }) => {
  return (
    <div className={style.portfolio__projects}>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
