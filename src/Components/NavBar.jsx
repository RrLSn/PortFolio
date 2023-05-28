import React from 'react'
import styles from "../styles/NavBar.module.css"
import Image from 'next/image'

const NavBar = () => {
  return (
    <main className={styles.wrapper}>
      <span className={styles.logo}>
        S
        <div className='font-[500] text-[1rem] py-[0.6rem]'>
          SODIQ AFOLABI
          <p className='text-[0.5rem]'>ALWAYS FOR YOU</p>
        </div>
      </span>
      <div className={styles.main}>
        <a href="#skills" className='focus:text-red-500'>Skills</a>
        <a href="#project" className='flex text-red-500 gap-2 focus:text-black'><img src="/Svg/settingsicon.svg" alt="" /> Projects</a>
        <a href="#contact" className='focus:text-red-500'>Contact Me</a>
      </div>
    </main>
  )
}

export default NavBar