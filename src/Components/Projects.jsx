import React from 'react'
import LearnMore from '@/Components/LearnMore'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className={styles.wrapper} id='project'>
      <div className={styles.heading}>
        <p className='flex gap-2 font-[500] mb-2'>
          <Image src={'/Svg/setting.svg'} width={30} height={30} />
          Projects</p>
        <p>A selected numbers of Projects</p>
      </div>
      <span className='w-[60vw] flex gap-[2rem] m-auto'>
        <LearnMore pics='/Media/TodoList.png' name="TODO LIST" desc='Made a Todo List website that allows user to add and delete list with ReactJS, TailwindCSS, Redux' projectUrl="https://polite-jalebi-c21795.netlify.app/" height='100' width='240' />

        <LearnMore  pics='/Media/WeatherApp.png' name="WEATHER APP" desc='Weather app that shows weather information of input location and shows the next 6days weather forecast' projectUrl="https://creative-clafoutis-d84b91.netlify.app/" height='100' width='240' />
        
        <LearnMore  pics='/Media/TranslatorApp.png' name="TRANSLATOR APP" desc='Made a simple translator app that translate any language to your preferred Language' projectUrl="https://aesthetic-moonbeam-a8a658.netlify.app/" height='100' width='240' />
      </span>
    </div>
  )
}

export default Projects