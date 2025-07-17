'use client';

import { useEffect, useState } from 'react';
import { Job, JobSearchParams } from '@/data/types/job';
import { searchJobs } from '@/lib/api/jobs';

export function useJobs(initialParams?: JobSearchParams) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [params, setParams] = useState<JobSearchParams>(initialParams || {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const search = async (searchParams: JobSearchParams) => {
    setParams(prev => ({ ...prev, ...searchParams }));
  };

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await searchJobs(params);
        setJobs(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Search failed'));
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchJobs();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [params]);

  return { 
    jobs, 
    loading, 
    error, 
    search, 
    searchParams: params,
    refetch: () => search(params) 
  };
}