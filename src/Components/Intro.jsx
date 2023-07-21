import React, { useEffect } from 'react'
import styles from '../styles/Intro.module.css'
import Link from 'next/link'
import Socialmedia from './Socialmedia'
import { iconLinks } from '@/data'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Intro = () => {
  useEffect(() => {
    AOS.init({duration: 1500})
  },[])
  
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.introText}>
          <p data-aos='slide-down'>HELLO TO YOU.</p>
          <h1 data-aos='zoom-out'>I&apos;m AFOLABI SODIQ.</h1>
          <h4 data-aos='zoom-in'>FRONTEND-DEVELOPER</h4>
          <Link href="/PortFolio"><button data-aos='fade-out'>View PortFolio</button></Link>
        </div>

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