'use client'

import { useState } from "react";
import Link from "next/link";
import { FaLongArrowAltRight, FaUserCheck, FaDollarSign } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineComputer } from "react-icons/md";
import { jobCard } from "@/data/quickJob";

type JobCard = {
  id: string;
  title: string;
  description: string;
}

type QuickJobProps = {
  jobCards: JobCard[];
}

const icons = [
  <MdOutlineComputer key="1" className="text-primary text-[3.5rem] pla" />,
  <IoDocumentTextSharp key="2" className="text-primary text-[3.5rem] pl-1 pla" />,
  <FaDollarSign key="3" className="text-primary text-[3rem] pl-2 pla" />,
  <GiGraduateCap key="4" className="text-primary text-[3.5rem] pla" />,
  <FaUserCheck key="5" className="text-primary text-[3.5rem] pl-3 pla" />,
]

export const QuickJob = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="container mx-auto font-accent py-7 grid 2xl:grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-y-6 gap-x-8 2xl:px-[10.5rem]">
      {jobCard.map((job, idx) => (
        <div
          key={job.id}
          className="bg-[#fff] w-full flex px-7 py-7 gap-9 rounded-[10px] md:w-full"
        >
          <div className="qin mt-3">{icons[idx]}</div>
          <div className="2xl:w-[14rem] pb-2">
            <p className="font-bold pb-3">{job.title}</p>
            <p className="text-[14px]">{job.description}</p>
          </div>
        </div>
      ))}
      <div className="w-full grid items-center">
        <Link href='/'
          className="text-primary flex items-center gap-1 underline decoration-transparent hover:decoration-current transition-all"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Browse our job now!
          <FaLongArrowAltRight className={`transition-transform ${open ? "translate-x-1" : 'translate-x-0'}`} />
        </Link>
      </div>
    </section>
  )
}