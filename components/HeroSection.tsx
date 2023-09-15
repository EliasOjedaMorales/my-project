'use client'
import React from 'react'
import Image from 'next/image'
import DownloadButton from './DownloadButton'

export default function HeroSection () {
  return (
    <section id='home'>
      <div className='flex flex-col text-center items-center justify-center my-10 py-32 md:flex-row md:space-x-4 md:text-left md:py-52 sm:py-32'>
        <div className='md:w-1/2 md:mt-2'>
          <Image className='rounded-full shadow-2xl w-auto h-auto' priority src='/YoXD.jpg' alt='Es un robot to fachero' width={300} height={200} />
        </div>
        <div className='md:mt-2 md:w-3/5'>
          <h1 className='font-bold text-3xl mt-6 md:text-7xl'>¡Hola!, Soy <span className='font-semibold dark:text-[#efcd30] text-amber-500'>Elias Gabriel</span></h1>
          <p className='text-lg mt-4 mb-6 md:text-2xl'>Mi travesía como programador está impulsada por el deseo de simplificar y tecnificar la vida cotidiana.</p>
          <p className='text-lg mt-4 mb-6 md:text-2xl'><span className='dark:text-[#efcd30] text-amber-500 font-bold'>¿Listos para explorar juntos el emocionante mundo de la tecnología?</span></p>
          <DownloadButton />
        </div>
      </div>
    </section>
  )
}
