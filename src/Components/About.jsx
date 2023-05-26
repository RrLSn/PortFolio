import React from 'react'
import Skills from "@/Components/Skills"

const About = () => {
  return (
    <main className='w-[100vw] h-[max-content] bg-blue-300'>

        <section className='flex p-[4rem] justify-between'>
          <div className='p-[4rem]'>
            <h1 className='text-4xl font-[500] w-[21rem] leading-[3rem]'>Hi👋, I’m a <strong>Software Developer</strong></h1>
            <p className='w-[30rem] py-[1.5rem] font-[400]'>I’m <strong>Sodiq Afolabi</strong>, a developer dedicated to making the world a better place with one line of code at a time.</p>
            <button className='h-[4vh] w-[6vw] bg-red-500 text-white rounded-lg'>Hire Me</button>
          </div>

          <img src="dottedicon.svg" className='w-[5rem]' alt="" />

          <span>
            <div className='flex'>
              <img src="crossicon.svg" className='w-[1rem]' alt="" />
              <img src="cubeicon.svg" className='w-[1rem]' alt="" />
            </div>

            <div>
              <img src="zigicon.svg" className='w-[1.7rem]' alt="" />
            </div>
          </span>

        </section>

        <Skills />
        
    </main>
  )
}

export default About