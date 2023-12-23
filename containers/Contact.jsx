import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div id='contact' className='flex gap-7 mt-32 flex-col justify-center text-center'>
        <h1 className="font-bold text-xl headers">
          <span className="text-indigo-500">03. </span>
          Contact me
        </h1>
        <h3 className='text-gray-600 text-4xl font-bold'>Get In Touch</h3>
        <p className='text-gray-500 call-to-action'>
            I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className='flex justify-center'>
        <Link href="https://wa.link/eegps9" className='sm:text-lg w-40 text-base blue_color text-white px-5 py-2 rounded-lg hover:bg-gray-700 duration-300'>Say hello</Link>
        </div>
    </div>
  )
}

export default Contact