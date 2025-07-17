'use client'

import { defaultMediaData } from "@/data/media"
import MediaList from "./MediaList"

export default function Media() {
  const handleCardClick = (id: number) => {
    console.log("Card clicked:", id)
  }

  return (
    <div className="container mx-auto px-[10.5rem] mt-3">
      <MediaList
        title="Media"
        items={defaultMediaData}
        onCardClick={handleCardClick}
      />
    </div>
  )
}

// import { MediaItem } from '@/data/media';
// import React from 'react'
// import { defaultMediaData } from '@/data/media';
// import Link from 'next/link';
// import { FaAngleRight, FaRegCalendarAlt } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import Image from 'next/image';

// interface MediaListProps {
//   title?: string;
//   viewAllLink?: string;
//   items?: MediaItem[];
//   showDate?: boolean;
//   imageClassName?: string;
//   dateClassName?: string;
//   titleClassName?: string;
// }

// export const Media: React.FC<MediaListProps> = ({
//   title = "Media",
//   viewAllLink = "/media",
//   items = defaultMediaData,
//   showDate = true,
// }) => {
//   return (
//     <section className='font-accent container mx-auto px-[10.5rem]'>
//       <div className='flex items-center justify-between'>
//         <p className='text-[1.6rem] font-bold'>{title}</p>
//         {viewAllLink && (
//           <div className='flex items-center gap-1 transition-all duration-300 hover:gap-[0.6rem]'>
//             <Link className='text-[17px]' href={viewAllLink}>See more</Link>
//             <FaAngleRight className='text-[17px]' />
//           </div>
//         )}
//       </div>

//       <Swiper
//         spaceBetween={4}
//         slidesPerView={30}
//         pagination={{ clickable: true, dynamicBullets: true, type: "bullets" }}
//         modules={[Pagination, Navigation]}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           1024: {
//             // slidesPerView: typeof 30 === 'number' ? Math.min(30, 3) : 3,
//             slidesPerView: 3,
//             spaceBetween: 30
//           },
//           1280: {
//             // slidesPerView: typeof 30 === "number" ? 30 : 4,
//             slidesPerView: 4,
//             spaceBetween: 40
//           }
//         }}
//       >
//         {items.map((media) => (
//           <SwiperSlide key={media.id} className='shadow-sm border rounded-3xl mb-8'> {/*  */}
//             <Link className='grid justify-center' href={`/media/${media.id}?title=${encodeURIComponent(media.title)}`}>
//               <Image
//                 className='h-[178.75px] w-[300px] object-cover rounded-[20px]'
//                 src={media.image}
//                 alt={media.title}
//                 // width={250}
//                 // height={150}
//               />
//               {showDate && (
//                 <div className='mx-3 pb-4 font-accent h-[8rem]'> {/* remove height for if U want to use auto height */}
//                   <div className='flex items-center gap-2 mt-1'>
//                     <FaRegCalendarAlt className='text-[#757575] text-[1.3rem]' />
//                     <p className="text-[0.95rem] text-[#212121] font-semibold pt-2">{media.date}</p>
//                   </div>
//                   <p className='mt-1 font-medium'>{media.title}</p>
//                 </div>
//               )}
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   )
// }
