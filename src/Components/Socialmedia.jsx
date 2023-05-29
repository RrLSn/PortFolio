import React from 'react'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const socialmedia = (props) => {
    const {socialIcon, link} = props
    return (
      <div>
          <a href={link} target='_blank'>
            <Image src={socialIcon} className={styles.social} width={100} height={100} />
          </a>
      </div>
    )
}

export default socialmedia