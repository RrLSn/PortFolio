import React, { useState } from 'react'
import styles from '../styles/Intro.module.css'
import Socialmedia from './Socialmedia'

const Intro = () => {
  const [view, setView] = useState(false)
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.introText}>
          <p>HELLO TO YOU.</p>
          <h1>I&apos;m AFOLABI SODIQ.</h1>
          <h4>FRONTEND-DEVELOPER</h4>
          <button>View PortFolio</button>
        </div>

        <div className={styles.introIcon}>
            <div className={styles.icons}>
              <Socialmedia socialIcon='/Svg/linkedin.svg' link="https://www.linkedin.com/in/sodiq-afolabi-b91555270/" />
              <Socialmedia socialIcon="/Svg/whatsapp.svg" link="" />
              <Socialmedia socialIcon="/Svg/gmail.svg" link="" />
              <Socialmedia socialIcon="/Svg/twitter.svg" link="https://twitter.com/Afolabi_Sq" />
            </div>
        </div>
    </div>
  )
}

export default Intro