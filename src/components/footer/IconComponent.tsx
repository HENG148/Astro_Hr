'use client'

import { FaRegCopyright, FaRegClock, FaPhoneAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IconComponentProps } from "@/data/footer"
import { IoIosMail } from "react-icons/io"

export const IconComponent = ({ icon, className = "" }: IconComponentProps) => {
  switch (icon) {
    case 'location':
      return <FaLocationDot className={`text-2xl mt-1 ${className}`} />
    case 'phone':
      return <FaPhoneAlt className={`text-xl ${className}`} />
    case 'email':
      return <IoIosMail className={`text-2xl ${className}`} />
    case 'hours':
      return <FaRegClock className={`mt-1 text-2xl ${className}`} />;
    case 'copyright':
      return <FaRegCopyright className={className} />
    default:
      return null;
  }
}