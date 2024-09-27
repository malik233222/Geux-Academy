import Image from 'next/image'
import React from 'react'

const OurCareerLogos = ({photo}) => {
  return (
    // burda alqoritm yazacam
    <div className='border-gray-300 border p-10 w-[380px] flex justify-center items-center rounded-md '> 
        <Image src={photo} width={75} height={75} alt='sample-logo'/>
    </div>
  )
}

export default OurCareerLogos