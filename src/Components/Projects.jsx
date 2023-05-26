import React from 'react'

const Projects = () => {
  return (
    <div className='w-[100%] h-[70vh] bg-[#b0b8e4] py-[2rem]'>
      <div className='flex flex-col items-center text-white mb-[1.5rem]'>
        <p className='flex gap-2'><img src="setting.svg" alt="" />Projects</p>
        <p>A selected numbers of Projects</p>
      </div>
      <span className='flex justify-between mx-[20rem]'>
        <div>
          <img src="" alt="" />
          <p></p>
          <button className='flex'>Learn More <img src="rightarrow.svg" alt="" /></button>
        </div>
        <div>
          <img src="" alt="" />
          <p></p>
          <button className='flex'>Learn More <img src="rightarrow.svg" alt="" /></button>
        </div>
        <div>
          <img src="" alt="" />
          <p></p>
          <button className='flex'>Learn More <img src="rightarrow.svg" alt="" /></button>
        </div>
      </span>
    </div>
  )
}

export default Projects