import React, { JSX } from 'react'
import { Select, SelectGroup, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../components/ui/select';
// import { Option } from '@/data/types/category';
import { Industries, categories, time, locations } from '@/data/types/category';
import { IoLocationSharp } from 'react-icons/io5'

type Option = {
  value: string;
  label: string;
}

const renderSelection = (
  placeholder: string,
  label: string,
  options: Option[],
  icon?: JSX.Element
) => (
  <Select>
    <SelectTrigger className="w-[17.1rem] text-[15px] py-4 border-[1px] border-[#adacac] ">
      <div className="flex items-center gap-3">
        {icon}
        <SelectValue placeholder={placeholder} />
      </div>
    </SelectTrigger>
    <SelectContent>
      <SelectGroup className="max-h-screen overflow-y-scroll-[#000]">
        <SelectLabel>{label}</SelectLabel>
        {options.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
)

const JobSelection = () => {
  return (
    <div className='flex gap-[1.5rem]'>
      {renderSelection('Industry', 'Industry Unlimited', Industries, <IoLocationSharp className="text-[17px]" />)}
      {renderSelection('Category Unlimited', 'Category Unlimited', categories)}
      {renderSelection('Type Unlimited', 'Types Unlimited', time)}
      {renderSelection('Location Unlimited', 'Location Unlimited', locations, <IoLocationSharp className="text-[17px]" />)}
    </div>
  )
}

export default JobSelection