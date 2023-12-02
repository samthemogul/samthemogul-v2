"use client"


import React, { useState } from 'react'
import Link from 'next/link'

const Nav = () => {

  const [toggleDropDown, setToggleDropDown] = useState(false)

  const handleDropdown = () => {
    setToggleDropDown(!toggleDropDown)
  }

  return (
    <nav className='flex sm:mt-8 mt-6 sm:gap-40 gap-20 justify-between items-center relative'>
        <div>
            <Link href="/">
            <h1 className='font-bold sm:text-2xl text-lg'>samthemogul<span className='blue_gradient'>.</span></h1>
            </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className='sm:flex flex-between gap-10 hidden'>
            <li className='hover:text-indigo-500 duration-300'><Link href="/">Home</Link></li>
            <li className='hover:text-indigo-500 duration-300'><Link href="#about">About</Link></li>
            <li className='hover:text-indigo-500 duration-300'><Link href="#experiences">Experience</Link></li>
            <li className='hover:text-indigo-500 duration-300'><Link href="#projects">Projects</Link></li>
            <li className='hover:text-indigo-500 duration-300'><Link href="#contact">Contact</Link></li>
            <button className='sm:text-lg w-40 text-base blue_color text-white px-5 py-2 rounded-lg hover:bg-black duration-300'>Download CV</button>
        </ul>

        {/* Mobile Navigation */}
        {toggleDropDown && (
          <div className='dropdown'>
            <ul className='flex flex-col flex-between gap-10'>
            <li className='hover:text-indigo-500 duration-300'><Link href="/">Home</Link></li>
            <li className='hover:text-indigo-500 duration-300'><Link href="#about">About</Link></li>
            <li className='hover:text-indigo-500 duration-300'><Link href="#experiences">Experience</Link></li>
            <li className='hover:text-indigo-500 duration-300'><Link href="#projects">Projects</Link></li>
            <li className='hover:text-indigo-500 duration-300'><Link href="#contact">Contact</Link></li>
            <button className='sm:text-lg w-40 text-base blue_color text-white px-5 py-2 rounded-lg hover:bg-black duration-300'>Download CV</button>
        </ul>
          </div>
        )}
        

    <button className='font-bold sm:hidden'
    onClick={handleDropdown}
    ><span class="material-symbols-outlined text-4xl">
menu
</span></button>
    </nav>
  )
}

export default Nav