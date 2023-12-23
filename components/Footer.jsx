import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='mt-32 mb-10'>
      <ul className='flex gap-5 justify-center items-center m-5'>
        <li className='text-2xl text-gray-700 hover:text-indigo-500 duration-300'><Link href={`https://github.com/samthemogul`}><FontAwesomeIcon icon={faGithub} /></Link></li>
        <li className='text-2xl text-gray-700 hover:text-indigo-500 duration-300'><Link href={`https://linkedin.com/in/samthemogul`}><FontAwesomeIcon icon={faLinkedin} /></Link></li>
        <li className='text-2xl text-gray-700 hover:text-indigo-500 duration-300'><Link href={`https://x.com/samthemogul`}><FontAwesomeIcon icon={faXTwitter} /></Link></li>
        <li className='text-2xl text-gray-700 hover:text-indigo-500 duration-300'><Link href={`https://wa.link/eegps9`}><FontAwesomeIcon icon={faWhatsapp} /></Link></li>
        <li className='text-2xl text-gray-700 hover:text-indigo-500 duration-300'><Link href={`https://instagram.com/sam_themogul`}><FontAwesomeIcon icon={faInstagram} /></Link></li>
      </ul>
      <p>Designed and built by <span className='text-indigo-500'>Samuel Emeka</span></p>
      <p>Design inspired by <span className='text-indigo-500'>Brittany Chiang</span></p>
    </footer>
  )
}

export default Footer