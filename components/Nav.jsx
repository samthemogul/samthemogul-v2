"use client"


import React, { useState } from 'react'
import Link from 'next/link'

const Nav = () => {

  const [toggleDropDown, setToggleDropDown] = useState(false)

  const handleDropdown = () => {
    setToggleDropDown(!toggleDropDown)
  }

  return (
    <nav className='flex sm:mt-8 mt-6 w-full sm:gap-40 gap-10 justify-between items-center relative'>
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
        <button className='sm:text-lg hidden sm:flex w-40 text-base blue_color text-white px-5 py-2 rounded-lg hover:bg-black duration-300'>Download CV</button>
      

        {/* Mobile Navigation */}
        {toggleDropDown && (
          <div className='dropdown'>
            <ul className='flex flex-col flex-between gap-20 py-20'>
            <li className='hover:text-indigo-500 duration-300'><Link href="#about">About</Link></li>
            <li className='hover:text-indigo-500 duration-300'><Link href="#projects">Projects</Link></li>
            <li className='hover:text-indigo-500 duration-300'><Link href="#contact">Contact</Link></li>
            <button className='sm:text-lg w-40 text-base blue_color text-white px-5 py-2 rounded-lg hover:bg-black duration-300'>Download CV</button>
        </ul>
          </div>
        )}
        

    <button className='font-bold sm:hidden'
    onClick={handleDropdown}
    ><span className="material-symbols-outlined text-4xl">
menu
</span></button>
    </nav>
  )
}

export default Nav