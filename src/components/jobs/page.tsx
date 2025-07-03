'use client'

import React, { useCallback, useState } from 'react';
import JobButton from './JobButton';
import SearchBar from './JobSearchBar';
import { Job } from '@/data/types/job';
import JobSelection from './JobSelection';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import image from "../../../public/workplace_default.jpg"
import { allJobs } from '@/data/types/job';
import Image from 'next/image';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdOutlineQrCode2, MdShoppingBag } from 'react-icons/md';
// import CountdownDate from '../CountdownDate';
import { IoLocationSharp, IoPeople } from 'react-icons/io5';
import Link from 'next/link';

export default function PageJob() {
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>(allJobs);
  const [filteredByTypeAndLevel, setFilteredByTypeAndLevel] = useState<Job[]>(allJobs);
  
  const applyAllFilters = useCallback((searchedJobs: Job[]) => {
    const typeAndLevelFiltered = filteredByTypeAndLevel;
    if (typeAndLevelFiltered === allJobs) {
      setDisplayedJobs(searchedJobs);
    } else {
      const searchJobIds = new Set(searchedJobs.map(job => job.id));
      const combinedResults = typeAndLevelFiltered.filter(job => searchJobIds.has(job.id));
      setDisplayedJobs(combinedResults);
    }
  }, [filteredByTypeAndLevel, allJobs]);

  return (
    <>
      <main className='font-accent'>
        <div className='container font-accent mx-auto w-[75rem] py-4 h-auto border rounded-md shadow-sm space-y-4'>
          <JobButton
            jobs={allJobs}
            onFilterChange={(filteredJobs) => {
              setFilteredByTypeAndLevel(filteredJobs);
              setDisplayedJobs(filteredJobs)
            }}
          />
          
          <SearchBar
            jobs={allJobs}
            onSearch={applyAllFilters}
            className='max-w-[73.5rem] mx-auto'
          />

          <div className='flex justify-center'> 
            <JobSelection />
          </div>
        </div>
        
        <div className="mt-8 mx-[2.5rem]">
          <p className='text-2xl font-semibold mb-6'>Job</p>
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            scrollbar={{ draggable: true }}
            loop={false}
            modules={[Pagination, Navigation]}
            className='mySwiper'
          >
            <div className="">
              {displayedJobs.length > 0 ? (
                displayedJobs.map(job => (
                  <SwiperSlide>
                    <div key={job.id} className="py-4 h-[21rem] grid justify-center border rounded-3xl shadow-md"> {/* h-21rem */}
                      <Image src={image} alt='' className='w-[15.5rem] h-36 rounded-2xl object-cover'/>
                      <div className='relative top-[-47px]'>
                        {job.skills && (
                          <div className="mt-3 flex gap-2 object-cover ml-2 mb-3">
                            {job.skills.map(skill => (
                              <span key={skill} className="inline-block px-2 py-1 text-[0.9rem] text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                        <h2 className="text-md text-[#1A5276] font-bold">{job.title}</h2>
                        <div className=" grid text-gray-600">
                          <span className="text-sm">{job.jobCode}</span>
                          <span className="text-sm font-bold text-[#1A5276]">{job.salary}</span>
                        </div>
                        <div className=''>
                          <div className='flex items-center gap-2'>
                            <FaRegCalendarAlt className='text-[#757575]' />
                            <p className="text-[0.8rem] text-[#1A5276]">4 days ago</p>
                          </div>
                          <div className='flex items-center gap-2 '>
                            <MdShoppingBag className='text-[#757575] ' />
                            <p className="text-[0.8rem] text-[#1A5276]">{job.type}</p>
                          </div>
                          <div className='flex items-center gap-2'>
                            <IoLocationSharp className='text-[#757575]' />
                            <p className="text-[0.8rem] text-[#1A5276]">{job.location}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className='flex items-center text-[#757575] gap-2'>
                            <MdOutlineQrCode2 className="text-[17px]" />
                            <div className="w-[1px] h-4 bg-[#1A5276]"></div>
                            <div className='flex items-center gap-1'>
                              <IoPeople className="text-[17[px]" />
                              <p className="text-[14px]">1 pax</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="px-3 py-1 text-[13px] font-medium text-[#000] bg-gray-100 rounded-xl hover:bg-gray-200 transition">
                              <Link href='/'>
                                Details
                              </Link>
                            </button>
                            <button className="px-3 py-1 text-[13px] font-medium text-white bg-[#1a5276] rounded-xl hover:bg-blue-700 transition">
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                  <div className='h-[20rem] grid items-center w-full border border-[#757575] rounded-xl'>
                    <p className="text-center py-8 text-gray-500">No Results Found</p>
                  </div>
              )}
            </div>
          </Swiper>
        </div>
      </main>
    </>
  )
}