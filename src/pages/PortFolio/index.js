import NavBar from '@/Components/NavBar'
import React, { useState } from 'react'
import styles from '../../styles/PortFolio.module.css'
import About from '@/Components/About'
import Projects from '@/Components/Projects'
import Skills from '@/Components/Skills'
import ContactMe from '@/Components/ContactMe'
import PopUp from '@/Components/PopUp'

const index = () => {

  const [showPopup, setShowPopup] = useState(false)
  const [selectedDiv, setSelectedDiv] = useState(null)

  const togglePop = (index) => {
    setSelectedDiv(index)
    console.log(selectedDiv)
    setShowPopup(true)
    
  }

  const closePop = () => {
    setShowPopup(false)
  }
  
  return (
    <div>
      {
        showPopup ? 
        <div><PopUp closePop={closePop} /></div> 
        : 
        <div className={styles.wrapper} id='About'>
          <NavBar />
          <main className={styles.main}>
            <About />
            <Skills />
            <Projects propValue={showPopup} togglePop={togglePop} selectedDiv={selectedDiv} />
            <ContactMe />
          </main>
        </div>
      }
    </div>
  )
}

export default index