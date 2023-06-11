import React from 'react'
import Image from 'next/image'
import styles from '../styles/Skills.module.css' 

const Skill = (props) => {
    const {imgUrl} = props
  return (
    <div className={styles.Skill}>
        <Image src={imgUrl} alt='skills' width={80} height={80} />
    </div>
  )
}

export default Skill