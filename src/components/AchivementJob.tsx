'use client'

import Image from "next/image"
import backgroundImage from "../../public/state.jpg"
import React, { ReactElement } from "react"
import { IoBagOutline } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import CountUp from "react-countup";

interface StatItem {
  num: number;
  text: string;
  icon: ReactElement;
}

const defaultStat: StatItem[] = [
  { num: 850, text: 'Job Titles', icon: <IoBagOutline className='text-[3.3rem]' /> },
  { num: 850, text: 'Seekers', icon: <BsFillPeopleFill className='text-[3.3rem]' /> },
  { num: 164, text: 'Companies', icon: <FaRegBuilding className='text-[3.3rem]' /> },
]

export const AchievementJob: React.FC = () => {
  return (
    <section className="custom-bg">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        <p className="text-[1.5rem] font-primary font-extrabold mb-[2.5rem] text-white">Achievement</p>
        <div className="flex justify-center gap-40 text-white">
          {defaultStat.map((stat, idx) => (
            <div key={idx} className="grid justify-items-center">
              {stat.icon}
              <CountUp 
                end={stat.num}
                duration={4}
                delay={2}
                className="text-3xl mt-3"
              />
              <div className="text-[1.15rem] font-bold">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <section className="relative mx-auto font-accent">
    //   <div className="w-full">
    //     <Image
    //       className="w-full h-[23rem] object-cover"
    //       src={backgroundImage} 
    //       alt="Achivement Background"
    //       priority
    //     />
    //     <div className="relative text-center pt-20">
    //       <p className="text-[1.5rem] font-extrabold mb-10">Achivement</p>
    //       <div className="flex justify-center gap-x-[10rem]">
    //         {defaultStat.map((stat, idx) => (
    //           <div key={`stat-${idx}`} className="grid justify-items-center">
    //             {stat.icon}
    //             <CountUp end={stat.num} duration={4} delay={2} className="text-3xl mt-2 xl:text-4xl" />
    //             <div className="text-[1.15rem] font-extrabold">{stat.text}</div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}