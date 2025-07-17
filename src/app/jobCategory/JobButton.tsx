'use client'

import React, { useMemo, useRef, useState } from 'react'
import { Job, JobPositions } from '@/data/types/job'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper'

type JobFilterButtonProps = {
  jobs: Job[];
  onFilterChange: (filteredJob: Job[]) => void;
}

export default function JobButton({jobs, onFilterChange}: JobFilterButtonProps) {
  const [activeTypeFilter, setActiveTypeFilter] = useState<Job['type'] | null>(null);
  const [activeLevelFilter, setActiveLevelFilter] = useState<Job['level'] | null>(null);
  const [hideNavigation, setHideNavigation] = useState<boolean>(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false)
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false)
  const swiperRef = useRef<SwiperCore | null>(null);

  const levelCount = useMemo(() => {
    const counts: Record<string, number> = {};
    JobPositions.forEach(level => {
      counts[level.name] = jobs.filter(job => job.level === level.name).length;
    });
    return counts
  }, [jobs]);

  const filterJobs = (type: Job['type'] | null, level: Job['level'] | null) => {
    let filtered = jobs.filter(job =>
      (type === null || job.type === type) &&
      (level === null || job.level === level)
    );
    onFilterChange(filtered);
    setActiveTypeFilter(type);
    setActiveLevelFilter(level)
  }

  const resetFilter = () => {
    onFilterChange(jobs);
    setActiveTypeFilter(null)
    setActiveLevelFilter(null)
  }

  const hideNavTemporarily = () => {
    setHideNavigation(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setHideNavigation(false);
    }, 3000)
  }

  const handleLevelFilter = (level: Job['level']) => {
    filterJobs(activeTypeFilter, level === activeLevelFilter ? null : level);
    hideNavTemporarily();
  }

  const handleLeftNavClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
      setShowLeftArrow(false);
      setShowRightArrow(true);
    }
  }
  const handleRightNavClick = () => {
    if (swiperRef.current) {
      const lastSlideIndex = swiperRef.current.slides.length - 1;
      swiperRef.current.slideTo(lastSlideIndex);
      setShowRightArrow(false);
      setShowLeftArrow(true);
    }
  }
  return (
    <div className='mx-auto'>
      <div className='w-auto job-filter-slider'>
        <Swiper
          spaceBetween={16}
          slidesPerView={4}
          scrollbar={{draggable: true}}
          modules={[Navigation, Pagination]}
          loop={false}
          onSwiper={(swiper) => swiperRef.current = swiper}
          onSlideChange={(swiper) => {
            setShowLeftArrow(!swiper.isBeginning);
            setShowRightArrow(!swiper.isEnd)
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 12
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20
            }

          }}
          // navigation={{
          //   nextEl: '.job-swiper-button-next',
          //   prevEl: '.job-swiper-button-prev'
          // }}
          className=''
        >
          {JobPositions.map((level, idx) => (
            <SwiperSlide key={idx}> {/* !w-auto min-w-[160px] level.id */}
              <button onClick={() => handleLevelFilter(level.name as Job['level'])}
                className={`flex flex-col items-center justify-center w-full h-32 p-4 rounded-xl border-3 border-[#8ca8ba] bg-white transition-colors duration-200 
                  ${activeLevelFilter === level.name
                    ? 'bg-primary text-white'
                    : 'hover:bg-primary-light/20 text-primary-dark'}`}
                aria-label={`Filter by ${level.displayName}`}
              > {/* flex flex-col items-center justify-center w-full h-32 p-4 rounded-xl border-4 border-primary-light bg-white transition-colors duration-200 */}
                <p className='font-khmer text-md text-primary'>{level.khmerName}</p>
                <p className='font-default font-medium text-lg text-primary'>{level.displayName}</p>
                <p className='text-2xl font-bold text-primary'>
                  {levelCount[level.name] ?? 0}
                </p>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div>
          {showLeftArrow && (
            <div className='job-swiper-button-prev absolute left-[22.3rem] top-[48rem] -translate-y-1/2 z-10 cursor-pointer bg-white px-3 py-14 transition-opacity duration-300'
              onClick={handleLeftNavClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a5276]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </div>
          )}

          {showRightArrow && (
              <div
                className="job-swiper-button-next absolute right-[22.3rem] top-[48rem] -translate-y-1/2 z-10 cursor-pointer bg-white px-3 py-14 items-center transition-opacity duration-300"
                onClick={handleRightNavClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a5276]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
        </div> */}
      </div>
    </div>  
  )
}
