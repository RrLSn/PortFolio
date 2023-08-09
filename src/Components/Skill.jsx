import React from 'react'
import Image from 'next/image'
import styles from '../styles/Skills.module.css' 
import 'aos/dist/aos.css'

const Skill = (props) => {
    const {imgUrl} = props
    
  return (
    <div className={styles.Skill} data-aos='fade-right'>
        <Image src={imgUrl} alt='skills' width={80} height={80} />
    </div>
  )
}

export default Skill