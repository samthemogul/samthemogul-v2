import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

const SideProject = ({ name, image, description, links, techs }) => {
  return (
    <div className='bg-gray-700 p-7 rounded-lg flex flex-col flex-30 gap-7 duration-300 hover:-translate-y-2 cursor-pointer'>
        <div className='flex justify-between items-center'>
        <span className='text-indigo-500 text-4xl font-light'><FontAwesomeIcon icon={faFolder} /></span>
        <ul className="flex gap-5">
          <li><Link href={links.github} className="text-white text-xl hover:text-indigo-500 duration-300"><FontAwesomeIcon icon={faGithub} /></Link></li>
          <li><Link href={links.site} className="text-white text-xl hover:text-indigo-500 duration-300"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link></li>
        </ul>
        </div>
        <h3 className='font-bold text-lg text-white hover:text-indigo-500 cursor-pointer'>{name}</h3>
        <p className="text-white">{description}</p>
        <ul className="flex flex-wrap gap-3">
        {techs.map((tech) => (
          <li key={tech} className="text-white hover:text-indigo-500">{tech}</li>
        ))}
        </ul>
    </div>
  )
}

export default SideProject