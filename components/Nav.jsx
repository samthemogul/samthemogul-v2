"use client"


import React, { useState } from 'react'
import Link from 'next/link'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

  const [toggleDropDown, setToggleDropDown] = useState(false)

  const handleDropdown = () => {
    setToggleDropDown(!toggleDropDown)
  }

  return (
    <section className='fixed z-20 top-0 w-full sm:w-11/12 sm:top-8 flex item-center justify-center glassmorphism'>
      <nav className='flex w-full sm:gap-40 gap-10 justify-between items-center relative'>
        <div>
            <Link href="/">
            <h1 className='font-bold sm:text-2xl text-lg'>samthemogul<span className='blue_gradient'>.</span></h1>
            </Link>
        </div>

        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>
            <ul className='sm:flex hidden flex-between gap-10'>
            <li className='hover:text-indigo-500 duration-300'><Link href="#about"><span className='text-indigo-500  font-bold'>01. </span>About</Link></li>
            <li className='hover:text-indigo-500 duration-300'><Link href="#projects"><span className='text-indigo-500  font-bold'>02. </span>Projects</Link></li>
            <li className='hover:text-indigo-500 duration-300'><Link href="#contact"><span className='text-indigo-500  font-bold'>03. </span>Contact</Link></li>
            
        </ul>
        </div>
        <button className='sm:text-lg hidden sm:flex w-40 text-base blue_color text-white px-5 py-2 rounded-lg hover:bg-gray-700 duration-300'>Download CV</button>
      

        {/* Mobile Navigation */}
        {toggleDropDown && (
          <div className='dropdown'>
            <ul className='flex flex-col flex-between gap-20 py-20'>
            <li onClick={handleDropdown} className='hover:text-indigo-500 duration-300'><Link href="#about">About</Link></li>
            <li onClick={handleDropdown} className='hover:text-indigo-500 duration-300'><Link href="#projects">Projects</Link></li>
            <li onClick={handleDropdown} className='hover:text-indigo-500 duration-300'><Link href="#contact">Contact</Link></li>
            <button className='sm:text-lg w-40 text-base blue_color text-white px-5 py-2 rounded-lg hover:bg-gray-700 duration-300'>Download CV</button>
        </ul>
          </div>
        )}
        

    <button className='font-bold text-xl sm:hidden'
    onClick={handleDropdown}
    ><FontAwesomeIcon icon={toggleDropDown ? faXmark : faBarsStaggered} /></button>
    </nav>
    </section>
  )
}

export default Nav