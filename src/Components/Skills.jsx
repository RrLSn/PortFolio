import React, { useEffect } from 'react'
import Skill from './Skill'
import styles from '../styles/Skills.module.css'

const Skills = () => {

  const skills = [
    {url: '/Svg/html5.svg'},
    {url: '/Svg/css.svg'},
    {url: '/Svg/js.svg'},
    {url: '/Svg/react.png'},
    {url: '/Svg/tailwind.svg'},
    {url: '/Svg/redux.svg'},
    {url: '/Svg/next.svg'},
  ]

  return (
    <div className={styles.wrapper} id='skills'>
      <span className={styles.heading}>
        <h1>My Skills</h1>
        <p>I dedicates time to explore the following web technologies  and understands their importance in building the structure, design, and interactivity of websites:</p>
      </span>

      <div className={styles.skills}>
        {skills.map((skill,index) => {
          return(
            <Skill key={index} imgUrl={skill.url} />
          )
        })}
      </div>
    </div>
  )
}

export default Skills

{/* <p className={styles.heading}>Skills</p>

<span className={styles.span}>
  <div>
    <p>I dedicates time to explore the following web technologies  and understands their importance in building the structure, design, and interactivity of websites:</p>

    <div className={styles.skills}>
      <Skill imgUrl='/Svg/html5.svg'/>
      <Skill imgUrl='/Svg/css.svg'/>
      <Skill imgUrl='/Svg/js.svg'/>
      <Skill imgUrl='/Svg/react.svg'/>
      <Skill imgUrl='/Svg/tailwind.svg'/>
      <Skill imgUrl='/Svg/redux.svg'/>
      <Skill imgUrl='/Svg/next.svg'/>
    </div>
  </div>

    <Image src={"/Svg/skill.svg"} width={350} height={350} className='lg:flex hidden' />
</span> */}