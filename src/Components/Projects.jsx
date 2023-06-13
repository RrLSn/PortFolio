import React from 'react'
import LearnMore from './LearnMore'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'

const Projects = () => {
  const projectDatas = [
    {
      ImageUrl: '/Media/TodoList.png',
      projectName: 'TODOLIST APP',
      projectDesc: 'React-vite, Redux, TailwindCSS with Mobile Responsive',
    },
    {
      ImageUrl: '/Media/TranslatorApp.png',
      projectName: 'TRANSLATOR APP',
      projectDesc: 'React-vite, API Fetching, TailwindCSS with Mobile Responsive',
    },
    {
      ImageUrl: '/Media/WeatherApp.png',
      projectName: 'WEATHER FORECAST APP',
      projectDesc: 'React-vite, Chartjs, API Fetching, TailwindCSS with mobile Responsive',
    },
    {
      ImageUrl: '/Media/CodeVillageClone.png',
      projectName: 'CODEVILLAGE CLONE',
      projectDesc: 'React, TailwindCSS with Mobile Responsive',
    },
    {
      ImageUrl: '/Media/MakeupApp.png',
      projectName: 'MAKE-UP WEBSITE',
      projectDesc: 'React, TailwindCSS, API Fetching with mobile Responsive',
    },
    {
      ImageUrl: '/Media/TemperatureConverter.png',
      projectName: 'TEMPERATURE CONVERTER',
      projectDesc: 'React-vite, TailwindCSS with Mobile Responsive',
    },
  ]
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
            <LearnMore key={index} src={projectData.ImageUrl} name={projectData.projectName} desc={projectData.projectDesc} />
          )
        })}
      </section>
    </div>
  )
}

export default Projects