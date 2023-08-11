import React, { useState } from 'react'
import styles from "../styles/NavBar.module.css"
import Image from 'next/image'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'

const NavBar = () => {

  const [toggle, setToggle] = useState(true)
  const anchorVariants = {
    hidden: {
      y:-50, opacity: 0
    },
    visible: {
      y:0, opacity: 1, transition: {duration: 0.5, type: "spring", stiffness: 150}
    },
  }

  // const navVariants = {
  //   hidden:{opacity : 0, x: "-200vh"},
  //   visible: {opacity: !toggle ? 1 : "", x: !toggle ? 0 : "", transition: {stiffness: 150, duration: 5}}
  // }

  return (
    <div>
      <nav className={styles.wrapper}>
        <motion.div
        variants={anchorVariants} 
        initial="hidden"
        animate="visible"
        className={styles.logo}>&lt;Afolabi/&gt;</motion.div>

        <motion.div
        variants={anchorVariants} 
        initial="hidden"
        animate="visible" 
        className={`${styles.menu} ${!toggle && styles.activeMenu}`} onClick={()=>setToggle(!toggle)}>
            <p></p>
            <p></p>
            <p></p>
          </motion.div>
          <motion.div 
          variants={anchorVariants} 
          initial="hidden"
          animate="visible"
          className={styles.navText}>
            <a href="#About" data-aos='zoom-in'>About</a>
            <a href="#skills" data-aos='zoom-in'>Skills</a>
            <a href="#project" className='flex gap-2' data-aos='zoom-in'><Image src={'/Svg/settingsIcon.svg'} width={20} height={20} alt='icon' />Project</a>
            <a href="#contact" data-aos='zoom-in'>Contact Me</a>
            <a href='https://resume.io/r/PKaMzuXNP' target='_blank' data-aos='zoom-in'><button>Resume</button></a>
          </motion.div>
          
      </nav>
      <div className={`${styles.activesideNav} ${toggle && styles.sideNav} bg-transparent`} onClick={() => setToggle(!toggle)}>
        <nav>
          <a href="#About">About</a>
          <a href="#skills">Skills</a>
          <a href="#project" className='flex gap-2'><Image src={'/Svg/settingsIcon.svg'} width={20} height={20} alt='icon' />Project</a>
          <a href="#contact">Contact Me</a>
          <a href='https://resume.io/r/PKaMzuXNP' target='_blank'><button>Resume</button></a>
        </nav>
      </div>
    </div>
  )
}

export default NavBar