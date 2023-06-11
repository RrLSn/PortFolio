import NavBar from '@/Components/NavBar'
import React from 'react'
import styles from '../../styles/PortFolio.module.css'
import About from '@/Components/About'
import Projects from '@/Components/Projects'
import Skills from '@/Components/Skills'
import ContactMe from '@/Components/ContactMe'

const index = () => {
  return (
    <div className={styles.wrapper} id='About'>
        <main className={styles.main}>
            <NavBar />
            <About />
        </main>
        <Skills />
        {/* <Projects /> */}
        <ContactMe />
    </div>
  )
}

export default index