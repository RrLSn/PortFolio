import React from 'react'
import '@/styles/Home.module.css'


const NavBar = () => {
  return (
    <main className='w-[100%] h-[5rem] py-[1rem] px-[5rem] flex justify-between items-center border-b-[0.17rem] border-b-gray-400'>
      <div className=''></div>
      <div className='w-[18rem] flex justify-between text-center'>
        <a href="">Skills</a>
        <a href="">Project</a>
        <a href="">Contact Me</a>
      </div>
    </main>
  )
}

export default NavBar