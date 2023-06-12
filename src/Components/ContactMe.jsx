import React from 'react'
import Image from 'next/image'
import styles from '../styles/ContactMe.module.css'
import Socialmedia from './Socialmedia'

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
  return (
    <main className={styles.parentWrapper} id='contact'>
      <div className={styles.heading}>
        <h1>CONTACT ME</h1>
        <p>Get in touch</p>
      </div>

      <span className={styles.contactsection}>
          <div className={styles.sideFooter}>
            <div className={styles.image}>
              <Image src={'/Media/contact.png'} width={400} height={100} />
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
          
          <div className={styles.contact}>
            <div>
              <p>NAME:</p>
              <input type="text" required />
            </div>

            <div>
              <p>Email</p>
              <input type="email" required />
            </div>

            <div>
              <p>YOUR MESSAGE:</p>
              <textarea type="text" required />
            </div>

            <button type="submit">SEND MESSAGE</button>
            
            {/* <span>ggg</span> */}
          </div>
        </span>
    </main>
  )
}

export default ContactMe