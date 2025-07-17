'use client'

import { Job } from '@/data/types/job'
import React, { useState } from 'react'
import JobListingSearchbar from './JobListingSearchbar';
import JobList from '../jobs/JobListing';

interface JobListingClientProps {
  jobs: Job[];
  searchQuery: string;
  initialSearchParams?: Partial<Job> & {
    q?: string;
  }
}

export default function JobListingClient({
  jobs, 
  searchQuery,
  // initialSearchParams = {}
}: JobListingClientProps) {
  // const [searchParams, setSearchParams] = useState<JobSearchParams>(initialSearchParams);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  return (
    <div className='container mt-20 mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto mb-8'>
        <JobListingSearchbar
          initialQuery={searchQuery}     
        />
      </div>
      
      <JobList
        jobs={filteredJobs.length > 0 ? filteredJobs : jobs}
        searchQuery={searchQuery}
        className='max-w-4xl mx-auto'
      />
    </div>
  )
}
