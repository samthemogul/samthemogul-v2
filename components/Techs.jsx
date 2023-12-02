import React from 'react'
import { technologies } from '@constants/values'

const Techs = () => {
  return (
    <div className='flex flex-wrap gap-3'>
      {technologies.map((tech) => (
        <div key={tech.id} className='bg-gray-200 px-5 py-2 rounded-lg'>
          <p className='text-gray-800 text-sm'>{tech.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Techs