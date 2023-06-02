import React from 'react'
import styles from "../styles/About.module.css"
import Skills from "./Skills"
import Image from 'next/image'

const About = () => {
  return (
    <main className={styles.container} id='About'>
        {/* <div className={styles.menu}>
          <a href="#skills" className='focus:text-red-500'>Skills</a>
          <a href="#project" className='flex text-red-500 gap-2 focus:text-black'><img src="/Svg/settingsicon.svg" alt="" /> Projects</a>
          <a href="#contact" className='focus:text-red-500'>Contact Me</a>
        </div> */}

        <section className={styles.section}>
          <div className={styles.desc}>
            <h1>Hi👋, I&apos;m a <strong>Software Developer</strong></h1>
            <p>I&apos;m <strong>Sodiq Afolabi</strong>, a skilled frontend developer who is specialize in creating user-friendly interfaces for web applications. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className={styles.button}>Hire Me</button>
          </div>

          <Image src={"/Svg/dottedicon.svg"} width={50} height={50} className={styles.icons} />

          <span className='w-[40rem]'>
            <div className='flex w-[100%] pl-[16rem] gap-[7rem]'>
              <Image src={"/Svg/crossicon.svg"} width={15} height={15} className={styles.icons} />
              <Image src={"/Svg/cubeicon.svg"} width={15} height={15} className={styles.icons} />
            </div>

            <div className='flex'>
              <Image src={"/Svg/zigicon.svg"} width={15} height={15} className={`${styles.icons} mt-[12rem]`} />
              
              <div>
                {/* <img src="" alt="" /> */}
              </div>
            </div>
          </span>

        </section>

        <Skills />
    </main>
  )
}

export default About