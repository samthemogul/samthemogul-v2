import React from 'react'
import { skills } from '@constants/values'

const Skills = () => {
  return (
    
      <div className='flex flex-wrap gap-3'>
        {skills.map((skill) => (
          <div key={skill.id} className='bg-gray-200 px-5 py-2 rounded-lg'>
            <p className='text-gray-800 text-sm'>{skill.name}</p>
          </div>
        ))}
      </div>
  )
}

export default Skills