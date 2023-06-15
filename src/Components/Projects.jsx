import React, { useState } from 'react'
import LearnMore from './LearnMore'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'
import projectDatas from '@/data'

const Projects = ({propValue,togglePop}) => {
  
  return (
    <div className={styles.wrapper} id='project'>
      <div className={styles.heading}>
        <h1>
          <Image src={'/Svg/setting.svg'} width={50} height={50} />
          Projects</h1>
        <p>A selected numbers of Projects I have worked on</p>
      </div>
      <section>
        {projectDatas.map((projectData,index) => {
          return (
            <LearnMore key={index} src={projectData.ImageUrl} name={projectData.projectName} desc={projectData.projectDesc} propValue={propValue} togglePop={togglePop} />
          )
        })}
      </section>
    </div>
  )
}

export default Projects