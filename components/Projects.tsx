import { PROJECTS } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import Button from './Button';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';

const safeLink = (link?: string) => link ?? "#";

const Projects = () => {
  return (
    <div id="projects" className="pb-4">
        <div className="mt-20 mb-8 flex flex-row justify-between items-center w-full p-4">
            <h1 className="text-start font-bold text-xl text-white-1">
                Projects
            </h1>

            <Button 
                href=''
                text='View all the Projects'
                icon={<LiaExternalLinkAltSolid />}
            />
        </div>
        <div>
            {PROJECTS.map((project, index) => (
                <Link href={safeLink(project.link)} legacyBehavior>
                    <a target="_blank">
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center p-4 hover:bg-[#302f4634] rounded transition-all cursor-pointer">
                            <div className="w-full lg:w-1/4">
                                <Image src={project.image} width={115} height={115} className="mb-6 rounded border border-[#3A3A3A]" alt={project.title} />
                            </div>

                            <div className="w-full max-w-xl lg:w-3/4 text-[#E6E5F3] hover:text-[#4d4af9] transition-all">
                                <h6 className="mb-2 font-semibold">
                                    {project.title}
                                </h6>

                                <p className="mb-4 text-sm text-[#AAAAC4] leading-relaxed">
                                    {project.description}
                                </p>

                                {project.technologies.map((tech, index) => (
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

export default Projects