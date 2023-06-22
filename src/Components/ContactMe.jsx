import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/ContactMe.module.css'
import Socialmedia from './Socialmedia'
import ContactInputField from './ContactInputField'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ContactMe = () => {
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

  useEffect(()=> {
    AOS.init({duration: 2000})
  },[])

  return (
    <main className={styles.parentWrapper} id='contact'>
      <div className={styles.heading}>
        <h1>CONTACT ME</h1>
        <p>Get in touch</p>
      </div>

      <span className={styles.contactsection}>
          <div className={styles.sideFooter} data-aos='flip-left'>
            <div className={styles.image}>
              <Image src={'/Media/contact.png'} width={400} height={100} layout='contain' className={styles.img} data-aos='fade-down' />
            </div>

            <h1>AFOLABI SODIQ</h1>
            <p>FRONTEND DEVELOPER</p>
            <p>Email: <a href='' className='hover:text-[#cc005f] hover:underline cursor-pointer'>afolabisodiqtemitope@yahoo.com</a></p>

            <div>
              <h4 className='text-[#c2c2c2]'>FIND ME ON:</h4>
              <section className='p-[1rem] flex flex-wrap justify-between'>
                {iconLinks.map((iconlink,index) => {
                  return (
                    <div className={styles.eachIcon}>
                      <Socialmedia socialIcon={iconlink.src} link={iconlink.link} key={index} />
                    </div>
                  )
                })}
              </section>
            </div>
          </div>
          
          <ContactInputField />
        </span>
    </main>
  )
}

export default ContactMe