import React from 'react'
import styles from "../styles/About.module.css"
import { motion } from 'framer-motion'

const About = () => {

  const infoVariants = {
    hidden: {
      opacity: 0,
      x: "50vw",
    },
    visible: {
      opacity: 1,
      x: 0
    },
    transition: {
      duration: 0.5,
      stiffness: 150
    }
  }
  return (
    <main className={styles.container} >
       <motion.div 
        variants={infoVariants}
        initial="hidden"
        animate="visible"
        className={styles.info}
       >
          <h2>WELCOME TO MY WORLD.</h2>
          <h1>Hello, I&apos;m <b>Afolabi Sodiq</b>
          <br />
          a Software Developer.</h1>
          <p>I am a proficient and passionate Front-End developer with basic knowledge in using HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS to create visually appealing and interactive web interfaces. I can build end-to-end web applications that are efficient, scalable, and provide seamless user experiences.</p>
       </motion.div>
    </main>
  )
}

export default About