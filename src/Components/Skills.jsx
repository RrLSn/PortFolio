import React from 'react'
import Skill from './Skill'
import Image from 'next/image'
import styles from '../styles/Skills.module.css'

const Skills = () => {
  return (
    <div className={styles.wrapper} id='skills'>
      <p className={styles.heading}>Skills</p>

      <span className={styles.span}>
        <div>
          <p>I have a vast experience in the following web technologies:</p>

          <aside className={styles.skills}>
            <Skill imgUrl='/Svg/html5.svg'/>
            <Skill imgUrl='/Svg/css.svg'/>
            <Skill imgUrl='/Svg/js.svg'/>
            <Skill imgUrl='/Svg/react.svg'/>
            <Skill imgUrl='/Svg/tailwind.svg'/>
            <Skill imgUrl='/Svg/redux.svg'/>
            <Skill imgUrl='/Svg/next.svg'/>
          </aside>
        </div>

          <Image src={"/Svg/skill.svg"} width={350} height={350} className='lg:flex hidden' />
      </span>
    </div>
  )
}

export default Skills