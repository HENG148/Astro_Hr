'use client'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { seekerData, Testimonial } from '@/data/SeekVoice';
import Image from 'next/image';
import seeker from '../../public/ohho.jpg'

interface SeekerVoiceProps {
  testimonials?: Testimonial[];
  className?: string;
}
const SeekerVoice: React.FC<SeekerVoiceProps> = ({
  testimonials = seekerData,
  className = ""
}) => {
  return (
    <section className={`container mx-auto font-accent mt-6 2xl:px-[10.5rem] ${className}`}>
      <p className='text-[1.6rem] font-bold mb-6'>Seeker's Voices</p>
      <Swiper 
        spaceBetween={30}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          type: "bullets"
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 1
          }
        }}
      >
        {testimonials.map((test, idx) => (
          <SwiperSlide key={`${test.name}-${idx}`}>
            <div className='bg-[#f0f2f4] w-full py-6 px-6 rounded-[1rem] mb-8'>
              <div className='flex items-center gap-6'>
                <Image className='w-[5rem] rounded-full h-[5rem] object-cover'
                  src={test.image || seeker}
                  alt={`${test.name}'s profile`}
                  width={80}
                  height={80}
                />
                <div>
                  <p className='text-[1.3rem] font-semibold'>{test.name}</p>
                  <p>{test.title}</p>
                </div>
              </div>
              <p className='w-auto pt-3'>{test.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default SeekerVoice;