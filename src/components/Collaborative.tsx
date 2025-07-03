'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CollaborativeData } from '@/data/SlideData';
import Image from 'next/image';

export const Collaborative: React.FC = () => {
  return (
    <div className='w-full xl:w-[65%] md:w-full'>
      <Swiper 
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={5}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 25
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 35
          }
        }}
        className='px-4 md:px-0'
      >
        {CollaborativeData.map((img, idx) => (
          <SwiperSlide key={idx} className='flex justify-center items-center'>
            <div className='relative w-full h-[80px] md:h-[100px] lg:h-[120px]'>
              <Image
                src={img.img}
                alt={img.alt}
                fill
                className='object-contain'
                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, (max-width: 1024px) 150px, 180px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}