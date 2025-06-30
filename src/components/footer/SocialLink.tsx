'use client'

import { SocialLink } from "@/data/footer"
import Image from "next/image"
import Link from "next/link";

interface SocialLinkProps {
  links: SocialLink[];
}

export const SocialLinks = ({ links }: SocialLinkProps) => (
  <div className="flex items-center gap-4">
    {links.map((social) => (
      <Link
        key={social.name}
        href={social.url}
        target="_blank"
        rel='noopener noreferrer'
        className="bg-[#505967] hover:bg-[#3e4653] transition-colors rounded-full flex items-center justify-center"
        style={{
          width: '3rem',
          height: '3rem',
          padding: '0.85rem'      
        }}>
        <Image 
          src={social.icon}
          alt={`${social.name} icon`}
          width={24}
          height={24}
          className="object-contain"
        />
      </Link>
    ))}
  </div>
)