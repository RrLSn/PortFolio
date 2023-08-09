import React from 'react'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'
import 'aos/dist/aos.css'

const LearnMore = (props) => {
  
    const {src,name,desc,togglePop} = props

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