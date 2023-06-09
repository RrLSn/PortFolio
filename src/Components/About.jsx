import React, { useEffect } from 'react'
import styles from "../styles/About.module.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init({duration: 1500})
  },[])
  return (
    <main className={styles.container} >
       <div className={styles.info} data-aos='zoom-out'>
          <h2>WELCOME TO MY WORLD.</h2>
          <h1>Hello, I&apos;m <b>Afolabi Sodiq</b>
          <br />
          a Software Developer.</h1>
          <p>I am a proficient and passionate Front-End developer with basic knowledge in using HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS to create visually appealing and interactive web interfaces. I can build end-to-end web applications that are efficient, scalable, and provide seamless user experiences.</p>
       </div>
    </main>
  )
}

export default About