"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { allJobs, Job } from '@/data/types/job';
import SearchBarMe from './SearchMe';
import Pagination from './Pagination';
import Link from 'next/link';

const ITEMS_PER_PAGE = 5;

const JobsPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(allJobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const page = Number(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  // Filter jobs based on search term
  useEffect(() => {
    const lowerCaseTerm = searchTerm.toLowerCase().trim();
    const results = !lowerCaseTerm 
      ? allJobs 
      : allJobs.filter(job => {
          const searchFields = [
            job.title,
            job.company,
            job.location,
            job.type,
            job.level,
            job.skills?.join(' '),
            job.description
          ].filter(Boolean).join(' ').toLowerCase();
          return searchFields.includes(lowerCaseTerm);
        });
    setFilteredJobs(results);
    setCurrentPage(1); // Reset to page 1 when search changes
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    router.replace(`${pathname}?page=${newPage}`);
  };

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-48">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Job Search</h1>
      
      <div className="mb-8">
        <SearchBarMe
          onSearch={handleSearch}
          initialValue={searchTerm} />
      </div>

      <div className="mb-4 text-gray-600">
        {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
      </div>

      {paginatedJobs.length > 0 ? (
        <div className="space-y-6">
          {paginatedJobs.map((job) => (
            <div key={job.id} className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                {job.company && (
                  <p className="text-gray-700">
                    <span className="font-medium">Company:</span> {job.company}
                  </p>
                )}
                {job.location && (
                  <p className="text-gray-700">
                    <span className="font-medium">Location:</span> {job.location}
                  </p>
                )}
                {job.salary && (
                  <p className="text-gray-700">
                    <span className="font-medium">Salary:</span> {job.salary}
                  </p>
                )}
                {job.type && (
                  <p className="text-gray-700">
                    <span className="font-medium">Type:</span> {job.type}
                  </p>
                )}
              </div>
              
              {job.skills && (
                <div className="mt-3">
                  <span className="font-medium text-gray-700">Skills:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              // onPageChange={setCurrentPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      ) : (
        <div className="p-8 text-center bg-white rounded-lg shadow">
          <p className="text-gray-600">
              No jobs found matching "<span className="font-medium">{searchTerm}</span>"
              <Link href={"/jobs"}> Reset</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default JobsPage;





// 'use client';

// import JobCard from '@/components/jobCategory/JobCards';
// import { allJobs, Job } from '@/data/types/job';
// import { useSearchParams, useRouter } from 'next/navigation';
// import { useState, useEffect, useMemo } from 'react';
// import CombinedSearchBar from './Combine';
// import SearchBarMe from './SearchMe';

// const ITEMS_PER_PAGE = 4;

// export default function JobPage() {
//   const searchParams = useSearchParams()
//   const router = useRouter();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const query = searchParams.get("q") || "";
//     const page = searchParams.get('page') || "1"

//     setSearchQuery(decodeURIComponent(query));
//     setCurrentPage(parseInt(page))
//   }, [searchParams]);

//   const filteredJob = useMemo(() => {
//     if (!searchQuery.trim()) return allJobs;

//     const query = searchQuery.toLowerCase();
//     return allJobs.filter(job =>
//       job.title.toLowerCase().includes(query) ||
//       job.location?.toLowerCase().includes(query) ||
//       (job.skills && job.skills.some(skill => 
//         skill.toLowerCase().includes(query)
//       ))
//     )
//   }, [searchQuery]);

//   const totalPages = Math.ceil(filteredJob.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const paginatedJobs = filteredJob.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     const params = new URLSearchParams(searchParams.toString());
//     params.set('page', page.toString());
//     router.push(`/jobs?${params.toString()}`);
//   }

//   const handleSeach = (query: string) => {
//     setSearchQuery(query)
//     setCurrentPage(1);

//     const params = new URLSearchParams();
//     if (query.trim()) params.set("q", query);
//     router.push(`/jobs?${params.toString()}`);
//   }

//   return (
//     <div className='container mx-auto p-4 mt-40 '>
//       {/* <CombinedSearchBar
//         mode='both'
//         initialQuery={searchQuery}
//         onSearch={(results) => {
//           setSearchQuery(searchParams.get('q') || "");
//         }}
//         jobs={allJobs}
//         searchPath='/jobs'
//       /> */}
//       <SearchBarMe onSearch={handleSeach} initialValue=""/> 
//       <div className='mt-28'>
//         {searchQuery && (
//           <p className='mb-4 text-gray-600'>
//             Showing {filteredJob.length} results for <span className='font-semibold'>"{searchQuery}"</span>
//             {filteredJob.length > ITEMS_PER_PAGE && (
//               <span className='ml-2'>(Page {currentPage} of {totalPages})</span>
//             )}
//           </p>
//         )}
//         {paginatedJobs.length > 0 ? (
//           <>
//             <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
//               {paginatedJobs.map((job) => (
//                 <div key={job.id} className='border rounded-lg p-4 hover:shadow-md transition'>
//                   <h3 className='font-bold'>{job.title}</h3>
//                   <p className='text-gray-600'>{job.location}</p>
//                   {job.skills?.map(skill => (
//                     <span key={skill} className='bg-gray-100 px-2 py-1 text-xs rounded'>
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               ))}
//             </div>

//             {totalPages > 1 && (
//               <div className='flex justify-center mt-8'>
//                 <div className='flex gap-2'>
//                   {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
//                     <button key={page}
//                       onClick={() => handlePageChange(page)}
//                       className={`px-3 py-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//                     >
//                       {page}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </>
//         ) : (
//             <div className='text-center py-8'>
//               <p className='text-gray-500'>No jobs found matching your search.</p>
//               <button
//                 onClick={() => router.push('/jobs?page=1')}
//                 className='mt-2 text-blue-500 hover:underline'
//               >
//                 Show all jobs
//               </button>
//             </div>
//         )}
//       </div>
//     </div>
//   )
// }