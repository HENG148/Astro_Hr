'use client'

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { InfoSlide } from "@/data/SlideData";

interface SlideItem {
  image: string | StaticImageData;
  alt: string;
}

interface SliderProps {
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
  className?: string;
}

export const InfoSlider: React.FC<SliderProps> = ({
  autoplayDelay = 7000,
  showPagination = true,
  showNavigation = true,
  className = "",

}) => {
  return (
    <div className={`w-full max-w-[1150px] mx-auto px-4 ${className}`}>
      <Swiper 
        modules={[Autoplay, ...(showPagination ? [Pagination] : []), ...(showNavigation ? [Navigation] : [])]}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={showPagination ? {
          clickable: true,
          dynamicBullets: true,
          el: ".info-slider-pagination",
        } : false}
        navigation={showNavigation}
        breakpoints={{
          640: {
          spaceBetween: 20,
          },
          1024: {
            spaceBetween: 30,
          }
        }}
        className="relative"
      >
        {InfoSlide.map((slide, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
              <Image 
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1150px"
                priority={idx === 0}
              />
            </div>
          </SwiperSlide>
        ))}

        {showPagination && (
          <div className="info-slider-pagination !relative flex mt-[-1rem] justify-center" />
        )}
      </Swiper>
    </div>
  )
}