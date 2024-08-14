import React from 'react'
import { TECHSTACK } from '@/constants'
import Image from 'next/image'

const Knowledge = () => {
  return (
    <div id="tech-stack" className="mb-20">
        <h1 className="mt-20 mb-8 w-full p-4 text-start font-bold text-xl text-white-1">
            Tech Stack
        </h1> 

        <div>
            {TECHSTACK.map((techstack, index) => (
              <div key={index} className="mb-8 flex flex-wrap lg:justify-start p-4 hover:bg-[#302f4634] rounded transition-all cursor-pointer">
                  <div className="w-full max-w-xl lg:w-4/4 text-white-1 hover:text-blue-1 transition-all">
                      <h6 className="mb-2 font-semibold">
                          {techstack.title}
                      </h6>

                      <p className="mb-4 text-sm text-white-2 leading-relaxed">
                          {techstack.description}
                      </p>

                      {techstack.technologies.map((tech, index) => (
                          <span key={index} className="mr-2 rounded bg-blue-2 px-2 py-1 text-sm font-semibold text-blue-1">
                              {tech}
                          </span>
                      ))}
                  </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Knowledge