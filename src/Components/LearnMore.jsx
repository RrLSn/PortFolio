import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const LearnMore = (props) => {
  
    const {src,name,desc,togglePop} = props
    useEffect(() => {
      AOS.init({duration: 2000})
    },[])

  return (
    <div className={styles.eachProject} data-aos='fade-up'>
      <div className='h-[13rem] overflow-hidden m-auto'>
        <Image src={src} width={400} height={100} className={styles.img} alt='project' />
      </div>
      <p>{name}</p>
      <h1 onClick={togglePop}>{desc} <span></span></h1>
    </div>
  )
}

export default LearnMore