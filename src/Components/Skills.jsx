import React from 'react'

const Skills = () => {
  return (
    <div className='w-screen h-[30rem] p-[2rem]'>
      <p className='text-red-500 flex justify-center mb-[2rem]'>Skills</p>

      <span className='flex justify-between px-[8rem]'>
        <div>
          <p>I have a vast experience in the following web technologies:</p>
        </div>
        
        <div>
          <img src="skill.svg" className='w-[30rem]' alt="" />
        </div>
      </span>
    </div>
  )
}

export default Skills