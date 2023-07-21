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
                        <h2>{project.desc}</h2>
                        <h2>TECH/FRAMEWORK USED: {project.projectDesc}</h2>
                        <div className='flex w-[max-context] h-[max-content] py-[1rem] px-[0.5rem] lg:gap-x-5 gap-x-3'>
                            <button><a href={project.projectUrl} target='_blank'>VIEW PROJECT</a></button>
                            <a href='https://github.com/RrLSn?tab=repositories' target='_blank' className='flex justify-center items-center'>
                                <Image src='/Svg/github.svg' className='opacity-[0.5]' width={20} height={20} alt='Social' />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </section>
  )
}

export default PopUp