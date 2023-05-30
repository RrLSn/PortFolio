import React from 'react'
import Socialmedia from '@/Components/socialmedia'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className={styles.wrapper}>
      <div className='font-[500]'>
        <p>My social media links:</p>
        <div className={styles.socials}>
          <Socialmedia socialIcon='/Svg/linkedin.svg' link="https://www.linkedin.com/in/sodiq-afolabi-b91555270/" />
          <Socialmedia socialIcon="/Svg/whatsapp.svg" link="" />
          <Socialmedia socialIcon="/Svg/gmail.svg" link="" />
          <Socialmedia socialIcon="/Svg/twitter.svg" link="https://twitter.com/Afolabi_Sq" />
        </div>
      </div>

      <div>
        <p className='font-[500]'>More projects I’ve worked on</p>
        
        <div className={styles.gitProfile}>
          <Image src={"/Svg/github.svg"} width={20} height={20} className={styles.git} />
          <p>@<a href="https://github.com/RrLSn?tab=repositories" target='_blank' className='text-[#0ACBBF] active:text-[#35837e]'>RrLSn</a> on github</p>
        </div>
      </div>
    </section>
  )
}

export default Footer