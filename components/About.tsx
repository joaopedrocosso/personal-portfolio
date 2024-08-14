import { ABOUT_TEXT, ABOUT_TEXT_2, ABOUT_TEXT_3 } from '@/constants'
import React from 'react'

const About = () => {
  return (
    <div id="about" className='pb-4'>
        <div className='flex flex-wrap justify-center p-4 lg:pt-28'>
            <div className='w-full'>
                <div className='flex flex-col justify-center lg:justify-start text-black'>
                <p className='my-2 max-w-xl leading-relaxed text-[#AAAAC4]'>
                    {ABOUT_TEXT}
                </p>
                <p className='my-2 max-w-xl leading-relaxed text-[#AAAAC4]'>
                    {ABOUT_TEXT_2}
                </p>
                <p className='my-2 max-w-xl leading-relaxed text-[#AAAAC4]'>
                    {ABOUT_TEXT_3}
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About