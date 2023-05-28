import React from 'react'
import Socialmedia from './socialmedia'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className='w-[100%] h-[20vh] bg-[#343D68] text-white flex justify-between items-center px-[10rem]'>
      <div className='font-[500]'>
        <p>My social media links:</p>
        <div className='flex gap-[2rem] py-8'>
          <Socialmedia socialIcon='/Svg/linkedin.svg' link="https://www.linkedin.com/in/sodiq-afolabi-b91555270/" />
          <Socialmedia socialIcon="/Svg/whatsapp.svg" link="" />
          <Socialmedia socialIcon="/Svg/gmail.svg" link="" />
          <Socialmedia socialIcon="/Svg/twitter.svg" link="https://twitter.com/Afolabi_Sq" />
        </div>
      </div>

      <div>
        <p className='font-[500] G'>More projects I’ve worked on</p>
        <div className='flex gap-2 py-8 items-center'>
          <img src="/Svg/github.svg" className='w-[1.5rem]' alt="" />
          <p>@<a href="https://github.com/RrLSn?tab=repositories" target='_blank' className='text-[#0ACBBF]'>RrLSn</a> on github</p>
        </div>
      </div>
    </section>
  )
}

export default Footer