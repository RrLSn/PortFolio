import React from 'react'
import Image from 'next/image'

const ContactMe = () => {
  return (
    <main className='w-[100%] h-[80vh] py-[3rem]' id='contact'>
      <p className='text-red-500 flex justify-center mb-[2rem] font-[500]'>Contact me</p>
      <aside className='w-[70vw] m-auto flex justify-between my-[4rem]'>
        <div>
          <img src="/Svg/contact.svg" className='w-[35rem]' alt="" />
        </div>

        <div className='flex flex-col justify-evenly items-center'>
          <input type="email" className='w-[100%] focus:outline-none py-[0.5rem] px-[1rem] rounded-lg shadow-lg' placeholder='Enter email address' />
          <textarea name="" id="" cols="60" rows="10" className='focus:outline-none resize-none py-[0.5rem] px-[1rem] rounded-lg shadow-lg' placeholder='Enter message...'></textarea>
          <button className='w-[max-content] py-[0.5rem] px-[1rem] flex items-center gap-3 bg-[#343D68] rounded-md text-white'>Send Message <img src="/Svg/sendicon.svg" alt="" /></button>
        </div>
      </aside>
    </main>
  )
}

export default ContactMe