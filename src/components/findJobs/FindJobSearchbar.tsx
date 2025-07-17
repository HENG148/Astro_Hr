"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

interface FindJobSearchbarProps {
  basePath: string,
  initialQuery?: string;
}

const FindJobSearchbar: React.FC<FindJobSearchbarProps> = ({
  basePath = "/jobs",
  initialQuery = "",
}) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`${basePath}?=${encodeURIComponent(searchQuery)}`);
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  }
  return (
    <form onSubmit={handleSearch} className="flex">
      <LuSearch className="absolute m-3" />
      <input 
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search For Jobs..."
        className="flex-grow p-2 border px-10 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  )
}

export default FindJobSearchbar;




// 'use client'

// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { LuSearch } from "react-icons/lu";

// export default function FindJobSearchbar() {
//   const router = useRouter();
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSeach = (e: React.FormEvent | React.KeyboardEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       const encodeQuery = encodeURIComponent(searchQuery);
//       router.push(`/jobs?q=${encodeQuery}`);
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       handleSeach(e);
//     }
//   }

//   return (
//     <div>
//       <LuSearch />
//     </div>
//   )
// }


// // import { useRouter, useSearchParams } from "next/navigation";
// // import { KeyboardEvent, useEffect, useState } from "react";
// // import { LuSearch } from "react-icons/lu";

// // interface SearchbarProps {
// //   placeholder?: string;
// //   className?: string;
// //   inputClassName?: string;
// //   iconClassName?: string;
// //   basePath?: string;
// //   initialValue?: string;
// // }

// // export default function FindJobSearchbar({
// //   placeholder = "Job title, industry, type...",
// //   className = "w-full relative",
// //   inputClassName = "w-full py-3 pl-10 pr-4 rounded-lg border border-[#dedfe0] focus:outline-none focus:ring-2 focus:ring-blue-500",
// //   iconClassName = "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
// //   basePath = "/jobs",
// // }: SearchbarProps) {
// //   const [query, setQuery] = useState('');
// //   const router = useRouter();
// //   const searchParams = useSearchParams();

// //   useEffect(() => {
// //     const urlQuery = searchParams.get('q') || '';
// //     setQuery(urlQuery);
// //   }, [searchParams])

// //   const handleSearch = () => {
// //     const newParams = new URLSearchParams(searchParams.toString());
// //     if (query.trim()) {
// //       newParams.set('q', query.trim());
// //     } else {
// //       newParams.delete('q')
// //     }

// //     newParams.delete('page');
// //     router.push(`/jobs?${newParams.toString()}`);
// //   };

// //   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
// //     if (e.key === "Enter") {
// //       e.preventDefault();
// //       handleSearch();
// //     }
// //   }
// //   return (
// //     <div className={className}>
// //       <LuSearch className={iconClassName} />
// //       <input
// //         type="text"
// //         value={query}
// //         onChange={(e) => setQuery(e.target.value)}
// //         onKeyDown={handleKeyDown}
// //         placeholder={placeholder}
// //         className={inputClassName}
// //       />
// //       {query && (
// //         <button onClick={() => {
// //           setQuery('');
// //           const newParams = new URLSearchParams(searchParams.toString());
// //           newParams.delete('q')
// //           router.push(`/jobs?${newParams.toString()}`);
// //         }}
// //           className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
// //           aria-label="Clear search"
// //         >
// //           <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //           </svg>
// //         </button>
// //       )}
// //     </div>
// //   )
// // }



// // // 'use client'

// // // import { useRouter } from "next/router";
// // // import { KeyboardEvent, useState } from "react";
// // // import { Job } from "@/data/types/job";

// // // interface JobSearchBarProps {
// // //   jobs: Job[];
// // //   onSearch: (filteredJobs: Job[]) => void  // callback when search is performed
// // //   className?: string;
// // // }

// // // const FindJobSearchbar = ({jobs, onSearch, className}: JobSearchBarProps) => {
// // //   const [searchTerm, setSearchTerm] = useState("");

// // //   const handleSearch = () => {
// // //     if (!searchTerm.trim()) {
// // //       onSearch(jobs);
// // //       return;
// // //     }
// // //     const term = searchTerm.toLowerCase().trim();
// // //     const filtered = jobs.filter(job => {
// // //       return (
// // //         job.title.toLowerCase().includes(term) ||
// // //         job.jobCode.toLowerCase().includes(term) ||
// // //         job.skills?.some(skill => skill.toLowerCase().includes(term)) ||
// // //         (job.company && job.company?.toLowerCase().includes(term)) ||
// // //         (job.description && job.description.toLowerCase().includes(term))
// // //       )
// // //     })
// // //     onSearch(filtered)
// // //   };
// // //   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
// // //     if (e.key === 'Enter') {
// // //       handleSearch();
// // //     }
// // //   }

// // //   return (
// // //     <div className={`relative ${className}`}>
// // //       <input
// // //         type="text"
// // //         value={searchTerm}
// // //         onChange={(e) => setSearchTerm(e.target.value)}
// // //         onKeyDown={handleKeyDown}
// // //         placeholder="Search for Jobs..."
// // //         className="w-full text-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //       />
// // //       <button
// // //         onClick={handleSearch}
// // //         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">
// // //         Search
// // //       </button>
// // //     </div>
// // //   )
// // // }

// // // export default FindJobSearchbar;