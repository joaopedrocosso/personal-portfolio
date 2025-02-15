import Link from 'next/link'
import React, { ReactNode } from 'react'

interface ButtonProps {
    href: string;
    text: string;
    icon: ReactNode;
  }

const Button = ({ href, text, icon }: ButtonProps) => {
  return (
    <Link href={href} legacyBehavior>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105 border rounded-full text-center w-fit bg-blue-2 border-blue-1 text-blue-1 font-semibold transition-all text-md flex flex-row gap-2 items-center px-3 py-2"
      >
        <p>{text}</p>
        {icon}
      </a>
    </Link>
  )
}

export default Button