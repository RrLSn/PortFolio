import React, { useState } from 'react'
import styles from "../styles/NavBar.module.css"
import Image from 'next/image'

const NavBar = () => {
  
  return (
    <nav className={styles.wrapper}>
      <div></div>
      <div className={styles.navText}>
        <a href="">About</a>
        <a href="">Skills</a>
        <a href="" className='flex gap-2'><Image src={'/Svg/settingsIcon.svg'} width={20} height={20} />Project</a>
        <a href="">Contact Me</a>
        <button>Resume</button>
      </div>
    </nav>
  )
}

export default NavBar