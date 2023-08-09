import React from 'react'
import styles from '../styles/Intro.module.css'
import Link from 'next/link'
import Socialmedia from './Socialmedia'
import { iconLinks } from '@/data'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'

const Intro = () => {

  const variants = {
    hidden: {
      opacity : 0,
      y: "100vh"
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        stiffness: 150,
        duration: 0.5,
        when: "beforeChildren"
      }
    }
  }

  const buttonVariants ={
    hidden: {
      opacity: 0,
      y: "10vw"
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {stiffness: 150, duration: 0.6}
    }
  }
  
  return (
    <div className={styles.mainWrapper}>
        <motion.div
        beforeChildren
        variants={variants}
        initial="hidden"
        animate="visible"
        className={styles.introText}>
          <p>HELLO TO YOU.</p>
          <h1>I&apos;m AFOLABI SODIQ.</h1>
          <h4>FRONTEND-DEVELOPER</h4>
          <Link href="/PortFolio" className='overflow-hidden'>
            <motion.button
            variants={buttonVariants}
            >View PortFolio</motion.button>
          </Link>
        </motion.div>

        <div className={styles.introIcon}>
            <div className={styles.icons}>
              {iconLinks.map((iconLink,index) => {
                return(
                  <Socialmedia socialIcon={iconLink.src} link={iconLink.link} key={index} />
                )
              })}
            </div>
        </div>
    </div>
  )
}

export default Intro