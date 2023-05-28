import React from 'react'
import Image from 'next/image'

const Skill = (props) => {
    const {imgUrl} = props
  return (
    <div className='flex justify-center'>
        <Image src={imgUrl} alt='skills' width={70} height={70} />
    </div>
  )
}

export default Skill