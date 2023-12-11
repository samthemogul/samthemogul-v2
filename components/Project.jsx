import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


const Project = ({ name, image, description, links, techs }) => {
  return (
    <div className="flex project sm:flex-row flex-col gap-5">
      <div className="image w-full h-40 rounded-lg overflow-hidden relative">
        <Link href={links.site}><div className="absolute w-full h-full z-10 bg-indigo-300 opacity-50 hover:opacity-0 duration-300 cursor-pointer"></div></Link>
        <Image src={image} alt={name} width={10000} height={4000}
        className="object-cover h-full w-full" />
      </div>
      <div className="desc flex flex-col gap-5 bg-gray-700 rounded-lg p-5">
        <span className="text-indigo-500 font-bold bg-white p-1 rounded-3xl inline-block w-1/2 text-center text-sm">Featured project</span>
        <h3 className="text-white font-bold text-lg">{name}</h3>
        <p className="text-white text-md">{description}</p>
        <ul className="flex flex-wrap gap-3">
        {techs.map((tech) => (
          <li key={tech} className="text-white hover:text-indigo-500">{tech}</li>
        ))}
        </ul>
        <ul className="flex gap-5">
          <li><Link href={links.github} className="text-white text-xl hover:text-indigo-500 duration-300"><FontAwesomeIcon icon={faGithub} /></Link></li>
          <li><Link href={links.site} className="text-white text-xl hover:text-indigo-500 duration-300"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
