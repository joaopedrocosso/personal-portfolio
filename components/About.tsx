import { ABOUT_TEXT, ABOUT_TEXT_2, ABOUT_TEXT_3 } from '@/constants'
import React from 'react'

const About = () => {
  return (
    <div id="about" className='pb-4'>
        <div className='flex flex-wrap justify-center p-4 pt-12 lg:pt-20'>
            <div className='w-full'>
                <div className='flex flex-col justify-center lg:justify-start text-black'>

                    <h1 className="lg:hidden mb-8 text-start font-bold text-xl text-white-1">
                        About
                    </h1>

                    <p className='my-2 max-w-xl leading-relaxed text-white-2'>
                        {ABOUT_TEXT}
                    </p>
                    <p className='my-2 max-w-xl leading-relaxed text-white-2'>
                        {ABOUT_TEXT_2}
                    </p>
                    <p className='my-2 max-w-xl leading-relaxed text-white-2'>
                        {ABOUT_TEXT_3}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About