import React from 'react'
import Image from 'next/image'
import styles from '../styles/ContactMe.module.css'
import Footer from './Footer'

const ContactMe = () => {
  return (
    <main className={styles.parentWrapper} id='contact'>
      <h1>Contact me</h1>
      <div className={styles.main}>
          <Image src={"/Svg/contact.svg"} width={400} height={400} className={styles.contact} />

          <div className={styles.msgWrapper}>
            <input type="email" placeholder='Enter email address' />
            
            <textarea name="" id="" placeholder='Enter message...'></textarea>

            <button>Send Message
            <Image src={"/Svg/sendicon.svg"} width={17} height={17} />
            </button>
          </div>
      </div>

      <Footer />
    </main>
  )
}

export default ContactMe