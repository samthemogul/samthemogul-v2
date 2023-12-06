"use client"

import React, { useState } from "react";
import { projects, otherProjects } from "@constants/values";
import Project from "../components/Project";
import SideProject from "../components/SideProject";

const Projects = () => {

  const maxShow = 6
  const [visibleProjects, setVisibleProjects] = useState(maxShow)
  const [abridged, setAbridged] = useState(true)

  const handleShowProjects = () => {
    if(abridged) {
      setVisibleProjects(otherProjects.length)
      setAbridged(false)
    }else {
      setVisibleProjects(maxShow)
      setAbridged(true)
    }
  }
  return (
    <div id="projects" className=" w-full flex gap-5 mt-32 flex-col">
      <h1 className="font-bold text-xl">
        <span className="text-indigo-500">02. </span>
        Projects I've built
      </h1>
      {/* Featured Projects */}
      <div className="flex flex-wrap flex-col gap-10">
      {projects.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          image={project.image}
          description={project.description}
          links={project.links}
          techs={project.techs}
        />
      ))}
      </div>

      {/* Other Noteworthy Projects */}
      <h1 className="font-bold text-xl mt-10">
        Other noteworthy projects
      </h1>
      <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-5">
        {otherProjects.slice(0, visibleProjects).map((project) => (
          <SideProject
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            links={project.links}
            techs={project.techs}
          />
        ))}
      </div>
      {otherProjects.length > maxShow && (
        <div className="flex justify-center p-5">
          <button className='sm:text-lg w-40 text-base blue_color text-white px-5 py-2 rounded-lg hover:bg-gray-700 duration-300' onClick={handleShowProjects}>{abridged ? "Show more" : "Show less"}</button>
        </div>
      )}
    </div>
  );
};

export default Projects;
