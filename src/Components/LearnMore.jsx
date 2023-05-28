import React from 'react'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'

const LearnMore = (props) => {
    const {projectUrl,desc,pics,height,width} = props
    
  return (
    <div className={styles.eachProject}>
      <div className='w-[100%] h-[100%] bg-[#262c4c] flex flex-col items-center'>
      <Image src={pics} width={width} height={height} />
      <p className='my-[1rem]'>{desc}</p>
      
      <a href={projectUrl} target='_blank'><button className={styles.button}>Learn More <img src="/Svg/rightarrow.svg" alt="" /></button></a>
      </div>
    </div>
  )
}

export default LearnMore