import React, { useEffect, useState } from 'react'
import styles from "../styles/NavBar.module.css"
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

const NavBar = () => {
  useEffect(()=> {
    AOS.init({duration: 2500})
  },[])
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <nav className={styles.wrapper}>
        <div className={styles.logo} data-aos='zoom-in'>&lt;Afolabi/&gt;</div>

        <div className={`${styles.menu} ${!toggle && styles.activeMenu}`} onClick={()=>setToggle(!toggle)}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className={styles.navText}>
            <a href="#About" data-aos='zoom-in'>About</a>
            <a href="#skills" data-aos='zoom-in'>Skills</a>
            <a href="#project" className='flex gap-2' data-aos='zoom-in'><Image src={'/Svg/settingsIcon.svg'} width={20} height={20} />Project</a>
            <a href="#contact" data-aos='zoom-in'>Contact Me</a>
            <a href='https://resume.io/r/PKaMzuXNP' target='_blank' data-aos='zoom-in'><button>Resume</button></a>
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