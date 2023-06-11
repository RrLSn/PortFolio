import React, { useState } from 'react'
import styles from '../styles/Intro.module.css'
import Link from 'next/link'
import Footer from './Footer'
import Socialmedia from './Socialmedia'

const Intro = () => {

  const iconLinks = [
    {
      src: '/Svg/linkedin.svg',
      link: 'https://www.linkedin.com/in/sodiq-afolabi-b91555270/'
    },
    {
      src: '/Svg/whatsapp.svg',
      link: 'https://wa.me/+2349039757928?text=urlencodedtext'
    },
    {
      src: '/Svg/gmail.svg',
      link: ''
    },
    {
      src: '/Svg/twitter.svg',
      link: 'https://twitter.com/Afolabi_Sq'
    },
    {
      src: '/Svg/github.svg',
      link: 'https://github.com/RrLSn?tab=repositories'
    },
  ]
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