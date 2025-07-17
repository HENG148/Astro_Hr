'use client'

import { footerData } from '@/data/footer'
import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup'
import { SocialLinks } from './SocialLink'
import Link from 'next/link'
import { IconComponent } from './IconComponent'
import { useInView } from 'react-intersection-observer'

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  })

  const currentYear = new Date().getFullYear();

  return (
    // <div>Hello Footer</div>
    <footer className='w-full bg-[#2d394b] bg-opacity-90 font-accent'>
      <div
        className="abosolute inset-0 -z-10 bg-[url('/background-image.png')] bg-cover bg-center bg-no-repeat bg-fixed"
        aria-hidden="true" />
      <div className='container mx-auto px-4 sm:px-8 lg:px-16 xl:px-44 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 relative'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            <Image
              src={footerData.companyInfo.logo}
              alt=''
              width={80}
              height={80}
              className='object-cover'
              priority
            />
            <p className='text-white/90 max-w-xs'>
              {footerData.companyInfo.description}
            </p>
          </div>

          <div className='bg-white w-fit rounded overflow-hidden'>
            <div className='flex items-center'>
              <div className='bg-[#0078b6] px-2 py-1 flex items-center gap-1'>
                <span className='text-white text-sm'>Follow</span>
              </div>
              <CountUp
                className='px-3 text-gray-800'
                end={footerData.companyInfo.followCount}
                duration={4}
                delay={2}
              />
            </div>
          </div>

          <SocialLinks links={footerData.companyInfo.socialLinks} />

          <div className='pt-6'>
            <Link href={footerData.links.privacyPolicy} className='text-white underline'>
              Privacy Policy
            </Link>
            <p className='text-white mt-4 flex items-center gap-2'>
              <IconComponent icon='copyright' />
              {footerData.companyInfo.copyright}
            </p>
          </div>
        </div>

        <div className='text-white flex flex-col gap-6'>
          <h3 className='text-xl font-bold'>{footerData.contactInfo.title}</h3>
          {footerData.contactInfo.items.map((item, idx) => (
            <div key={idx} className='flex gap-4'>
              <IconComponent icon={item.icon} />
              {Array.isArray(item.content) ? (
                <div>
                  {item.content.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              ) : (
                  <p>{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
