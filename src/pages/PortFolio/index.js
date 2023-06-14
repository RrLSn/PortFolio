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
  const togglePop = () => {
    setShowPopup(true)
    console.log(showPopup)
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
            <Projects propValue={showPopup} togglePop={togglePop} />
            <ContactMe />
          </main>
          
        </div>
      }
    </div>
  )
}

export default index

{/* <div>
      {
        showPopup ? 
        <div><PopUp closePop={closePop} /></div> 
        : 
        <div className={styles.wrapper} id='About'>
          <main className={styles.main}>
              <NavBar />
              <About />
          </main>
          <Skills />
          <Projects propValue={showPopup} togglePop={togglePop} />
          <ContactMe />
        </div>
      }
    </div> */}