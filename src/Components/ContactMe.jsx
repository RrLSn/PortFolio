import React from 'react'
import Image from 'next/image'
import styles from '../styles/ContactMe.module.css'
import Footer from './Footer'

const ContactMe = () => {
  return (
    <main className={styles.parentWrapper} id='contact'>
      <div className={styles.heading}>
        <h1>CONTACT ME</h1>
        <p>Get in touch</p>
      </div>

      <span className={styles.contactsection}>
          <div></div>
          <div></div>
        </span>
    </main>
  )
}

export default ContactMe