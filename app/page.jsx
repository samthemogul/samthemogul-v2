import React from 'react'
import About from '@components/About'

const Home = () => {
  return (
    <>
    <section className='mt-32 flex flex-col gap-5'>
        <p className='text-black text-base font-bold'>Hi, I'm Samuel Emeka</p>
        <h1 className='font-bold text-5xl text-indigo-500'>Frontend <br />Engineer</h1>
        <h3 className='text-gray-700 font-bold text-4xl'>I build stuff for <br />the web</h3>
        <p className='text-gray-500'>I'm a passionate Frontend Engineer with 2 years' experience crafting visually captivating and intuitive web experiences. Let's embark on an innovative journey together where every click tells a story!</p>
        <button className='sm:text-lg w-40 text-base blue_color text-white px-5 py-2 rounded-lg hover:bg-black duration-300'>Download CV</button>
    </section>
    <About />
    </>
  )
}

export default Home