import React, { useState } from 'react'
import styles from "../styles/NavBar.module.css"
import Image from 'next/image'

const NavBar = () => {
  
  const [toggle, setToggle] = useState(true)
  // const activeToggle = () => {
  //   setToggle(!toggle)
  //   console.log(toggle)
  // }

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
            <a href=''><button>Resume</button></a>
          </div>
          
      </nav>
      <div className={`${styles.activeSideBar} ${toggle && styles.sideBar} bg-transparent`} onClick={() => setToggle(!toggle)}></div>
    </div>
  )
}

export default NavBar