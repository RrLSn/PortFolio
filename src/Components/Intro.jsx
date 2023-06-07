import React, { useState } from 'react'
import styles from '../styles/Intro.module.css'
import Socialmedia from './Socialmedia'
import Link from 'next/link'

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
              <Socialmedia socialIcon='/Svg/linkedin.svg' link="https://www.linkedin.com/in/sodiq-afolabi-b91555270/" />
              <Socialmedia socialIcon="/Svg/whatsapp.svg" link="" />
              <Socialmedia socialIcon="/Svg/gmail.svg" link="" />
              <Socialmedia socialIcon="/Svg/twitter.svg" link="https://twitter.com/Afolabi_Sq" />
              <Socialmedia socialIcon="/Svg/github.svg" link="https://github.com/RrLSn?tab=repositories" />
            </div>
        </div>
    </div>
  )
}

export default Intro