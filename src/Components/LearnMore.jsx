import React from 'react'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'

const LearnMore = (props) => {
    const {projectUrl,desc,name,src,height,width} = props

  return (
    <div className={styles.eachProject}>
      <div className='h-[13rem] overflow-hidden'>
        <Image src={src} width={400} height={100} className='rounded-md h-[100%]' />
      </div>
      <p>{name}</p>
      <h1>{desc} <span></span></h1>
    </div>
  )
}

export default LearnMore