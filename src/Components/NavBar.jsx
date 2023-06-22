import React, { useState } from 'react'
import styles from "../styles/NavBar.module.css"
import Image from 'next/image'

const NavBar = () => {
  
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <nav className={styles.wrapper}>
        <div></div>
        <div className={`${styles.menu} ${!toggle && styles.activeMenu}`} onClick={()=>setToggle(!toggle)}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className={styles.navText}>
            <a href="#About">About</a>
            <a href="#skills">Skills</a>
            <a href="#project" className='flex gap-2'><Image src={'/Svg/settingsIcon.svg'} width={20} height={20} />Project</a>
            <a href="#contact">Contact Me</a>
            <a href='https://resume.io/r/PKaMzuXNP' target='_blank'><button>Resume</button></a>
          </div>
          
      </nav>
      <div className={`${styles.activesideNav} ${toggle && styles.sideNav} bg-transparent`} onClick={() => setToggle(!toggle)}>
        <nav>
          <a href="#About">About</a>
          <a href="#skills">Skills</a>
          <a href="#project" className='flex gap-2'><Image src={'/Svg/settingsIcon.svg'} width={20} height={20} />Project</a>
          <a href="#contact">Contact Me</a>
          <a href='https://resume.io/r/PKaMzuXNP' target='_blank'><button>Resume</button></a>
        </nav>
      </div>
    </div>
  )
}

export default NavBar