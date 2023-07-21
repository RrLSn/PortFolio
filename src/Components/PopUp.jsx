import React from 'react'
import styles from '../styles/PopUp.module.css'
import projectDatas from '@/data'
import Image from 'next/image'

const PopUp = (props) => {
    const {selectedDiv, closePop} = props
    const project = projectDatas.find(el => el.id == selectedDiv)
  return (
    <section>
        <div className={styles.wrapper}>
        <nav>
            <div className={styles.close} onClick={closePop}>
                <p></p>
                <p></p>
            </div>

            <div className={styles.projectInfo}>
                <div>
                 <Image width={400} height={200} src={project.ImageUrl} alt='Project Image' className='rounded-md' />
                </div>

                <div>
                    <h1>{project.projectName}</h1>
                    <h2>TECH/FRAMEWORK USED: {project.projectDesc}</h2>
                    <button><a href={project.projectUrl} target='_blank'>VIEW PROJECT</a></button>
                </div>
            </div>
        </nav>
        </div>
    </section>
  )
}

export default PopUp