import React, { useMemo, useState } from 'react'
import { Job, JobPositions } from '@/data/types/job'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type JobFilterButtonProps = {
  jobs: Job[];
  onFilterChange: (filteredJob: Job[]) => void;
}

export default function JobButton({jobs, onFilterChange}: JobFilterButtonProps) {
  const [activeTypeFilter, setActiveTypeFilter] = useState<Job['type'] | null>(null);
  const [activeLevelFilter, setActiveLevelFilter] = useState<Job['level'] | null>(null);

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

  const handleLevelFilter = (level: Job['level']) => {
    filterJobs(activeTypeFilter, level === activeLevelFilter ? null : level)
  }
  return (
    <div className='container mx-auto px-4'> {/* container mx-auto px-4 py-6 */}
      <div className='job-filter-slider'>
        <Swiper
          spaceBetween={16}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 12
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 16
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          modules={[Navigation]}
          className='px-2'
        >
          {JobPositions.map((level) => (
            <SwiperSlide key={level.id}> {/* !w-auto min-w-[160px] */}
              <button onClick={() => handleLevelFilter(level.name as Job['level'])}
                className={`flex flex-col items-center justify-center w-full h-32 p-4 rounded-xl border-4 border-[#8ca8ba] bg-white transition-colors duration-200 
                  ${activeLevelFilter === level.name
                    ? 'bg-[#1a5276] text-white'
                    : 'hover:bg-primary-light/20 text-primary-dark'}`}
                aria-label={`Filter by ${level.displayName}`}
              > {/* flex flex-col items-center justify-center w-full h-32 p-4 rounded-xl border-4 border-primary-light bg-white transition-colors duration-200 */}
                <p className='font-khmer text-md text-[#1a5276]'>{level.khmerName}</p>
                <p className='font-accent text-lg text-[#1a5276]'>{level.displayName}</p>
                <p className='text-2xl font-bold text-current'>
                  {levelCount[level.name] ?? 0}
                </p>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
