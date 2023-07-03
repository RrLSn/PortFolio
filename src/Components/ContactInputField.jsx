import React, { useEffect } from 'react'
import styles from '../styles/ContactMe.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ContactInputField = () => {
  useEffect(() => {
    AOS.init({duration: 1500})
  },[])
  return (
    <div className={styles.contact} data-aos='fade-left'>
            <div data-aos='slide-right'>
              <p>NAME:</p>
              <input type="text" required />
            </div>

            <div data-aos='slide-left'>
              <p>Email</p>
              <input type="email" required />
            </div>

            <div data-aos='slide-right'>
              <p>YOUR MESSAGE:</p>
              <textarea type="text" required />
            </div>

            <button type="submit" data-aos='slide-up'>SEND MESSAGE</button>
            
            {/* <span>ggg</span> */}
          </div>
  )
}

export default ContactInputField