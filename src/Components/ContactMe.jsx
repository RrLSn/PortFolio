import React from 'react'
import Image from 'next/image'
import styles from '../styles/ContactMe.module.css'

const ContactMe = () => {
  return (
    <main className='w-[100%] h-[80vh] py-[3rem]' id='contact'>
      <p className={styles.heading}>Contact me</p>
      <aside className={styles.main}>
          <Image src={"/Svg/contact.svg"} width={400} height={400} />

          <div className={styles.msgWrapper}>
            <input type="email" className={styles.inputMsg} placeholder='Enter email address' />
            
            <textarea name="" id="" cols="60" rows="10" className={styles.textarea} placeholder='Enter message...'></textarea>

            <button className={styles.button}>Send Message
            <Image src={"/Svg/sendicon.svg"} width={17} height={17} />
            </button>
          </div>
      </aside>
    </main>
  )
}

export default ContactMe