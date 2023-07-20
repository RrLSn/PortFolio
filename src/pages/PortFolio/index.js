import NavBar from '@/Components/NavBar'
import React, { useState } from 'react'
import styles from '../../styles/PortFolio.module.css'
import About from '@/Components/About'
import Projects from '@/Components/Projects'
import Skills from '@/Components/Skills'
import ContactMe from '@/Components/ContactMe'
import PopUp from '@/Components/PopUp'

const index = () => {

  
  
  return (
    <div>
       
        <div className={styles.wrapper} id='About'>
          <NavBar />
          <main className={styles.main}>
            <About />
            <Skills />
            <Projects  />
            <ContactMe />
          </main>
        </div>
  
    </div>
  )
}

export default index