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
        <>
            <div>
                <Heading />

                <PortfolioNav activeSection={activeSection} handleScroll={handleScroll} />
            </div>

            <div className='flex mb-10 lg:mb-0 lg:flex-col items-start  gap-4 text-white-2'>
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
        </>
    )
}

export default SideProfile