import Link from 'next/link'
import React, { ReactNode } from 'react'

interface SocialProps {
    href: string,
    text: string,
    icon: ReactNode;
}

const Social = ({ href, text, icon }: SocialProps) => {
  return (
    <Link href={href} legacyBehavior>
        <a target="_blank" className="flex flex-row items-center gap-2 hover:text-white-1 transition-all">
            {icon}
            <span className="text-sm">
                {text}
            </span>
        </a>
    </Link>
  )
}

export default Social