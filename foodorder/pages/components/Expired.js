import React from 'react'
import Image from 'next/image'
import style from '../../styles/Home.module.css'

export default function Expired() {
  return (
    <div className={`${style.expired}`}>
      <div className='flex w-full justify-center items-center'>
        <Image src={'/finish.png'} width={500} height={300} />
      </div>
    </div>
  )
}
