import React from 'react'
import '@/styles/Home.module.css'


const NavBar = () => {
  return (
    <main className='w-[100%] h-[5rem] py-[1rem] px-[5rem] flex justify-between items-center border-b-[0.17rem] border-b-gray-400'>
      <span className='flex gap-1 text-[2.5rem] font-[700] text-blue-900'>
        S
        <div className='font-[500] text-[1rem] py-[0.6rem]'>
          SODIQ AFOLABI
          <p className='text-[0.5rem]'>ALWAYS FOR YOU</p>
        </div>
      </span>
      <div className='w-[18rem] flex justify-between text-center'>
        <a href="">Skills</a>
        <a href="" className='flex text-red-500 gap-2'><img src="settingsicon.svg" alt="" /> Projects</a>
        <a href="">Contact Me</a>
      </div>
    </main>
  )
}

export default NavBar