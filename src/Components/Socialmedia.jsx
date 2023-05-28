import React from 'react'
import Image from 'next/image'

const socialmedia = (props) => {
    const {socialIcon, link} = props
    return (
      <div>
          <a href={link} target='_blank'><img src={socialIcon} className='w-[1.7rem] cursor-pointer' alt="" /></a>
      </div>
    )
}

export default socialmedia