import React from 'react'
import styles from '../styles/Intro.module.css'
import Link from 'next/link'
import Socialmedia from './Socialmedia'
import { iconLinks } from '@/data'
import 'aos/dist/aos.css'

const Intro = () => {
  
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.introText}>
          <p>HELLO TO YOU.</p>
          <h1>I&apos;m AFOLABI SODIQ.</h1>
          <h4>FRONTEND-DEVELOPER</h4>
          <Link href="/PortFolio"><button>View PortFolio</button></Link>
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