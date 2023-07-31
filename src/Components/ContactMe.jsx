import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/ContactMe.module.css'
import Socialmedia from './Socialmedia'
import ContactInputField from './ContactInputField'
import { iconLinks } from '@/data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './Footer'

const ContactMe = () => {

  useEffect(()=> {
    AOS.init({duration: 1000})
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
        <Footer />
    </main>
  )
}

export default ContactMe