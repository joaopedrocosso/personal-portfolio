import { EXPERIENCES } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Button from './Button';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';

const safeLink = (link?: string) => link ?? "#";

const Experience = () => {
  return (
    <div id="experience" className="pb-4">
        <div className="mt-20 mb-8 flex flex-row justify-between items-center w-full p-4">
            <h1 className="text-start font-bold text-xl text-white-1">
                Experience
            </h1>

            <Button 
                href=''
                text='View Full Resume'
                icon={<LiaExternalLinkAltSolid />}
            />
        </div>

        <div>
            {EXPERIENCES.map((experience, index) => (
                <Link href={safeLink(experience.link)} legacyBehavior>
                    <a target="_blank" >
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center p-4 hover:bg-[#302f4634] rounded transition-all cursor-pointer">
                            <div className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-[#AAAAC4]">{experience.year}</p>
                            </div>

                            <div className="w-full max-w-xl lg:w-3/4 text-[#E6E5F3] hover:text-[#4d4af9] transition-all">
                                <h6 className="mb-2 font-semibold">
                                    {experience.role} - {" "} {experience.company}
                                </h6>

                                <p className="mb-4 text-[#AAAAC4] text-sm leading-relaxed">
                                    {experience.description}
                                </p>

                                {experience.technologies.map((tech, index) => (
                                    <span key={index} className="mr-2 rounded bg-[#12113b] px-2 py-1 text-sm font-semibold text-[#4d4af9]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                </Link>
            ))}
        </div> 
    </div> 
  )
}

export default Experience