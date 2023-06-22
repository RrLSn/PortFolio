import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Skills.module.css' 
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skill = (props) => {
    const {imgUrl} = props
    useEffect(()=> {
      AOS.init({duration: 1000})
    },[])
  return (
    <div className={styles.Skill} data-aos='fade-right'>
        <Image src={imgUrl} alt='skills' width={80} height={80} />
    </div>
  )
}

export default Skill