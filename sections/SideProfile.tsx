'use client'
import Heading from '@/components/Heading'
import PortfolioNav from '@/components/PortfolioNav'
import Social from '@/components/Social'
import { CONTACT } from '@/constants'
import { useScroll } from '@/providers/ScrollProvider'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const SideProfile = () => {
    const { handleScroll, activeSection } = useScroll();

    return (
        <section
            className='flex flex-wrap'
        >
            <div
                className='w-full lg:w-1/8'
            >
                <div
                    className='flex flex-col items-start'
                >
                    <Heading />

                    <PortfolioNav activeSection={activeSection} handleScroll={handleScroll} />

                    <div
                        className='flex flex-col items-start justify-start gap-4 text-xl text-white-2'
                    >
                        <Social 
                            href={`mailto:${CONTACT.email}`}
                            text={CONTACT.email}
                            icon={<MdEmail />}
                        />

                        <Social 
                            href='https://github.com/joaopedrocosso/'
                            text='github.com/joaopedrocosso/'
                            icon={<FaGithub />}
                        />

                        <Social 
                            href='https://www.linkedin.com/in/joaopedrocosso/'
                            text='/in/joaopedrocosso/'
                            icon={<FaLinkedin />}
                        />
                    </div>

                </div>
            </div>
        </section>  
  )
}

export default SideProfile