import React from 'react'
import About from '@containers/About'
import Projects from '@containers/Projects'
import Contact from '@containers/Contact'

const Home = () => {
  return (
    <>
    <section className='mt-60 flex flex-col gap-2 w-full'>
        <p className='text-gray-600 text-4xl font-bold'>Hi, I'm Samuel.</p>
        <h1 className='font-bold text-7xl sm:text-8xl text-indigo-500 mb-4'>Fullstack <br className='sm:hidden' />Engineer</h1>
        <h3 className='text-gray-600 font-bold text-4xl sm:text-7xl'>I build stuff for <br className='sm:hidden' />the web</h3>
        <p className='text-gray-500 sm:text-lg my-4'>I'm a passionate Frontend Engineer with 2 years' experience crafting visually captivating and intuitive web <br className='hidden sm:block' /> experiences. Let's embark on an innovative journey together where every click tells a story!</p>
        <button className='sm:text-lg w-40 text-base blue_color text-white px-5 py-2 rounded-lg hover:bg-gray-700 duration-300'>Download CV</button>
    </section>
    <About />
    <Projects />
    <Contact />
    </>
  )
}

export default Home