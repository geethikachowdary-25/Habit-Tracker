import Image from 'next/image'
import React from 'react'

const Footera = () => {
  return (
    <div className='h-[122px] w-full flex items-center justify-around bg-[#263238]'>
      <h1 className='font-outfit font-semibold text-2xl text-[#A0FFBA]'>Copyright © 2025. All rights are reserved</h1>
      <div className="flex gap-2">
        <Image src={"/icons/code-circle.svg"} alt='Mail Logo' draggable={false} width={29} height={26}/>
        <p className='font-outfit text-xl text-white'>Developed By <a className='underline font-medium' href="https://github.com/partha-999/" target='_blank' >Sadanala Parthasarathi</a></p>
      </div>
    </div>
  )
}

export default Footera
