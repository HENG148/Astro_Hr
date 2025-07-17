import { Job } from "@/data/types/job";
import Image from "next/image";
import image from "../../../public/workplace_default.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineQrCode, MdShoppingBag } from "react-icons/md";
import { IoLocationSharp, IoPeople } from "react-icons/io5";
import Link from "next/link";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="py-4 w-full h-[21.5rem] grid justify-items-center border rounded-3xl shadow-md hover:shadow-lg transition-shadow">
      <Image 
        src={image}
        alt={job.title}
        className="w-[15.5rem] h-36 rounded-2xl object-cover"
      />
      <div>
        {job.skills && (
          <div className="mt-4 relative top-[-47px] space-x-1 flex-wrap ml-[-2rem]">
            {job.skills.slice(0, 3).map(skill => (
              <span 
                key={skill}
                className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                {skill}
              </span>
            ))}
            <h2 className="text-md text-[#1a5276] font-bold mt-2">{job.title}</h2>
            <div className="grid text-gray-600 mt-1">
              <span className="text-sm">{job.jobCode}</span>
              <span className="text-sm font-bold text-[#1A5276]">{job.salary}</span>
            </div>

            <div className="mt-2 space-y-1 font-accent">
              <div className='flex items-center gap-2'>
                <FaRegCalendarAlt className='text-[#757575] text-sm' />
                <p className="text-xs text-[#1A5276]">
                  {job.postedDate || 'Recently posted'}
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <MdShoppingBag className='text-[#757575] text-sm' />
                <p className="text-xs text-[#1A5276]">{job.type}</p>
              </div>
              <div className='flex items-center gap-2'>
                <IoLocationSharp className='text-[#757575] text-sm' />
                <p className="text-xs text-[#1A5276]">{job.location}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center text-[#757575] gap-2">
                <MdOutlineQrCode className="text-[14px]" />
                <div className="w-[1px] h-4 bg-[#1a5276]"></div>
                <div className="flex items-center gap-1">
                  <IoPeople className="text-[14px]" />
                  <p className="text-xs">1 pax</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs font-medium text-[#000] bg-gray-100 rounded-xl hover:bg-gray-200 transition">
                  <Link 
                    href={`/jobs/${job.id}`}
                  >Details</Link>
                </button>
                <button className="px-3 py-1 text-xs font-medium text-white bg-[#1a5276] rounded-xl hover:bg-blue-700 transition">
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default JobCard