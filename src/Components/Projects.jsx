import React, { useState } from 'react'
import LearnMore from './LearnMore'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'
import projectDatas from '@/data'
import PopUp from './PopUp'

const Projects = ({}) => {

  const [showPopup, setShowPopup] = useState(false)
  const [selectedDiv, setSelectedDiv] = useState(null)

  const closePop = () => {
    setShowPopup(false)
  }
  
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
            <LearnMore key={projectData.id} togglePop={() => {
              setSelectedDiv(projectData.id)
              setShowPopup(true)
            }} src={projectData.ImageUrl} name={projectData.projectName} desc={projectData.projectDesc} />
          )
        })}
      </section>
      {
        showPopup && 
        
          <PopUp closePop={closePop} selectedDiv={selectedDiv} />
      }
    </div>
  )
}

export default Projects