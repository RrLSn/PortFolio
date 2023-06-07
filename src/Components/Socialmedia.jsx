import React from 'react'
import Image from 'next/image'
import styles from '../styles/Intro.module.css'

const Socialmedia = (props) => {
    const {socialIcon, link} = props
    return (
      <div>
          <a href={link} target='_blank'>
            <Image src={socialIcon} className={styles.social} width={100} height={100} />
          </a>
      </div>
    )
}

export default Socialmedia