import React from 'react'
import styles from "../styles/About.module.css"

const About = () => {
  return (
    <main className={styles.container}>
       <div className={styles.info}>
          <h2>WELCOME TO MY WORLD.</h2>
          <h1>Hello, I&apos;m <b>Afolabi Sodiq</b>
          <br />
          a Software Developer.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit, et necessitatibus adipisci labore sit veritatis vero tempore sequi at sed facere dolore. Quae obcaecati eius quasi doloribus illum minus fugit.

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit,</p>
       </div>
       {/* <div className='w-[20rem] h-[30rem] border'></div> */}
    </main>
  )
}

export default About