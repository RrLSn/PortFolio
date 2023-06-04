import React from 'react'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'

const LearnMore = (props) => {
    const {projectUrl,desc,name,pics,height,width} = props

  return (
    <div className={styles.eachProject}>
      <div className={styles.projectWrapper}>
      <Image src={pics} width={width} height={height} />
      <p className={styles.appname}>{name}</p>
      <div className='p-[0.5rem] text-center'>
        <p>{desc}</p>
      </div>
      
      <a href={projectUrl} target='_blank'><button className={styles.button}>View <img src="/Svg/rightarrow.svg" alt="" /></button></a>
      </div>
    </div>
  )
}

export default LearnMore