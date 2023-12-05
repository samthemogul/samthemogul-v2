import React from "react";
import { projects } from "@constants/values";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects" className=" w-full flex gap-5 mt-32 flex-col">
      <h1 className="font-bold text-xl">
        <span className="text-indigo-500">02. </span>
        Projects I've built
      </h1>
      {projects.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          description={project.description}
          links={project.links}
          techs={project.techs}
        />
      ))}
    </div>
  );
};

export default Projects;
