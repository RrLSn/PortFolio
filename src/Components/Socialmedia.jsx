import React from 'react'
import Image from 'next/image'
import styles from '../styles/Intro.module.css'
import { motion } from 'framer-motion'

const Socialmedia = (props) => {
    const {socialIcon, link} = props
    return (
      <motion.div whileHover={{rotateZ: 360}}>
          <a href={link} target='_blank'>
            <Image src={socialIcon} className={styles.social} width={100} height={100} alt='Social' />
          </a>
      </motion.div>
    )
}

export default Socialmedia