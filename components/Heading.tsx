import { HERO_CONTENT } from '@/constants'
import React from 'react'

const Heading = () => {
  return (
    <section>
        <h1
            className='text-4xl lg:text-5xl text-white-1 py-2 font-bold tracking-tight'
        >
            João Pedro Cosso
        </h1>

        <span
            className="text-xl lg:text-2xl bg-gradient-to-r from-[#3735ca] to-[#4d4af9] bg-clip-text tracking-tight text-transparent font-semibold"
        >
            Full Stack Developer
        </span>

        <p
            className='text-base lg:text-base mt-4 max-w-xs lg:max-w-80 text-white-2'
        >
            {HERO_CONTENT}
        </p>
    </section>
  )
}

export default Heading