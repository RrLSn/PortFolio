import React, { useState } from 'react'
import LearnMore from './LearnMore'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'
import projectDatas from '@/data'

const Projects = ({propValue,togglePop,selectedDiv}) => {
  
  return (
    <div className={styles.wrapper} id='project'>
      <div className={styles.heading}>
        <h1>
          <Image src={'/Svg/setting.svg'} width={50} height={50} alt='' />
          Projects</h1>
        <p>A selected numbers of Projects I have worked on</p>
      </div>
      <section>
        {projectDatas.map((projectData) => {
          return (
            <LearnMore key={projectData.id} togglePop={()=>togglePop(projectData.id)} src={projectData.ImageUrl} name={projectData.projectName} desc={projectData.projectDesc} propValue={propValue} />
          )
        })}
      </section>
    </div>
  )
}

export default Projects