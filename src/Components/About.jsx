import React from 'react'
import styles from "../styles/About.module.css"
import Skills from "@/Components/Skills"
import Image from 'next/image'

const About = () => {
  return (
    <main className={styles.container}>

        <section className={styles.section}>
          <div className='p-[4rem]'>
            <h1 className={styles.desc}>Hi👋, I’m a <strong>Software Developer</strong></h1>
            <p className={styles.description}>I am <strong>Sodiq Afolabi</strong>, a skilled frontend developer who excels at creating engaging and user-friendly interfaces for web applications.</p>
            <button className={styles.button}>Hire Me</button>
          </div>

          <Image src={"/Svg/dottedicon.svg"} width={50} height={50} />

          <span className='w-[40rem]'>
            <div className='flex w-[100%] pl-[16rem] gap-[7rem]'>
              <Image src={"/Svg/crossicon.svg"} width={15} height={15} />
              <Image src={"/Svg/cubeicon.svg"} width={15} height={15} />
            </div>

            <div className='flex'>
              <Image src={"/Svg/zigicon.svg"} width={15} height={15} className='mt-[12rem]' />
              {/* <img src="" alt="" /> */}
            </div>
          </span>

        </section>

        <Skills />
        
    </main>
  )
}

export default About