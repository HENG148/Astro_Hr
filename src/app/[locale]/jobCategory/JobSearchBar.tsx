'use client'

import { Job } from "@/data/types/job"
import { useEffect, useState } from "react";

type SearchBarProps = {
  jobs: Job[];
  onSearch: (filteredJob: Job[]) => void;
  className?: string;
  placeholder?: string;
  searchFields?: (keyof Job)[];
  debounceTime?: number;
}

export default function SearchBar({
  jobs,
  onSearch,
  className = '',
  placeholder = 'Search jobs by title, location, or skills...',
  searchFields = ['title', 'location', 'skills'],
  debounceTime = 300
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() === '') {
        onSearch(jobs);
        setIsSearching(false);
        return;
      }
      setIsSearching(true);

      try {
        const lowerTerm = searchTerm.toLowerCase();
        const results = jobs.filter(job => {
          return searchFields.some(field => {
            if (field === 'skills') {
              return job.skills?.some(skill => skill.toLowerCase().includes(lowerTerm));
            }
            const value = job[field];
            return typeof value === 'string' && value.toLowerCase().includes(lowerTerm);
          });
        })
        onSearch(results)
      } catch (err) {
        console.error('Search error:', err);
        onSearch(jobs);
      } finally {
        setIsSearching(false)
      }
    }, debounceTime);

    return () => clearTimeout(timer);
  }, [searchTerm, jobs, onSearch, searchFields, debounceTime]);

  const handleClearSearch = () => {
    setSearchTerm('');
  }

  return (
    <div className={`relative ${className}`}>
      <div className="absolute w-auto inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg 
          className={`h-5 w-5 ${isSearching ? 'text-blue-500 animate-pulse' : 'text-gray-400'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fillRule="evenodd" 
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>

      <input type="text"
        placeholder={placeholder}
        className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all duration-200"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label='Search jobs'
      />
      {searchTerm && (
        <button
          onClick={handleClearSearch}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          aria-label="Clear search"
        >
          <svg 
            className="h-5 w-5 text-gray-400 hover:text-gray-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      )}

      {isSearching && (
        <div className="absolute inset-y-0 right-0 pr-8 flex items-center pointer-events-none">
          <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      )}
    </div>
  )
}