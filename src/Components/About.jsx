import React from 'react'
import styles from "../styles/About.module.css"
import Skills from "./Skills"
import Image from 'next/image'

const About = () => {
  return (
    <main className={styles.container} id='About'>

        <section className={styles.section}>
          <div className={styles.desc}>
            <h1>Hi👋, I&apos;m a <strong>Software Developer</strong></h1>
            <p>I&apos;m <strong>Sodiq Afolabi</strong>, a skilled frontend developer who is specialize in creating user-friendly interfaces for web applications.</p>
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
              {/* <img src="" alt="" /> */}
            </div>
          </span>

        </section>

        <Skills />
    </main>
  )
}

export default About