import NavBar from '@/Components/NavBar'
import React from 'react'
import styles from '../../styles/PortFolio.module.css'

const index = () => {
  return (
    <div className={styles.wrapper}>
        <main className={styles.main}>
            <NavBar />
        </main>
    </div>
  )
}

export default index