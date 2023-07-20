import React from 'react'
import styles from '../styles/PopUp.module.css'
import projectDatas from '@/data'

const PopUp = (props) => {
    const {selectedDiv, closePop} = props
const project = projectDatas.find(el => el.id == selectedDiv)
const {projectUrl,projectName,projectDesc,projectImage} = project
  return (
    <section className={styles.wrapper}>
        <nav>
            <div className={styles.close} onClick={closePop}>
                <p></p>
                <p></p>
            </div>

            <div className={styles.projectInfo}>
                <div>{projectImage}</div>

                <div>
                    <h1>{projectName}</h1>
                    <p>{projectDesc}</p>
                    <button><a href={projectUrl}>VIEWED PROJECT</a></button>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default PopUp