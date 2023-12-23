import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Socials = () => {
    return (
        <div className='hidden fixed top-1/3 right-20 gap-10 glassmorphism sm:flex flex-col z-20'>
                <span className='text-2xl text-gray-700 hover:text-indigo-500 duration-300'><Link href={`https://github.com/samthemogul`}><FontAwesomeIcon icon={faGithub} /></Link></span>
                <span className='text-2xl text-gray-700 hover:text-indigo-500 duration-300'><Link href={`https://linkedin.com/in/samthemogul`}><FontAwesomeIcon icon={faLinkedin} /></Link></span>
                <span className='text-2xl text-gray-700 hover:text-indigo-500 duration-300'><Link href={`https://x.com/samthemogul`}><FontAwesomeIcon icon={faXTwitter} /></Link></span>
                <span className='text-2xl text-gray-700 hover:text-indigo-500 duration-300'><Link href={`https://wa.link/eegps9`}><FontAwesomeIcon icon={faWhatsapp} /></Link></span>
                <span className='text-2xl text-gray-700 hover:text-indigo-500 duration-300'><Link href={`https://instagram.com/sam_themogul`}><FontAwesomeIcon icon={faInstagram} /></Link></span>
        </div>
    );
}

export default Socials