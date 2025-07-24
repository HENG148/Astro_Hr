"use client"

import Link from "next/link";
import MediaCard, { MediaCardProps } from "./MediaCard";
import { FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

interface MediaListProps {
  title?: string;
  viewAllLink?: string;
  items?: MediaCardProps[];
  onCardClick?: (id: number) => void;
}

const MediaList: React.FC<MediaListProps> = ({
  title = "Media",
  viewAllLink = '/media',
  items = [],
  onCardClick
}) => {
  return (
    <section className="font-accent">
      <div className="flex items-center justify-between">
        <p className="text-[1.6rem] mb-6 font-bold">{title}</p>
        {viewAllLink && (
          <div className="flex items-center gap-1 transition-all duration-400 hover:gap-[0.6rem]">
            <Link className="text-[17px]" href={viewAllLink}>See more</Link>
            <FaAngleRight className="text-[17px]" />
          </div>
        )}
      </div>

      <Swiper
        spaceBetween={4}
        slidesPerView={30}
        pagination={{ clickable: true, dynamicBullets: true, type: "bullets" }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="shadow-sm border rounded-3xl mb-8">
            <MediaCard {...item} showDate={item.showDate} onClick={onCardClick} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default MediaList;