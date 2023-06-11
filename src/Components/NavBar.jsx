import React, { useState } from 'react'
import styles from "../styles/NavBar.module.css"
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  
  return (
    <nav className={styles.wrapper}>
      <div></div>
      <div className={styles.navText}>
        <a href="#About">About</a>
        <a href="#skills">Skills</a>
        <a href="" className='flex gap-2'><Image src={'/Svg/settingsIcon.svg'} width={20} height={20} />Project</a>
        <a href="#contact">Contact Me</a>
        <Link href='/Resume'><button>Resume</button></Link>
      </div>
    </nav>
  )
}

export default NavBar