import { Job } from "@/data/types/job";

type SearchableField = string | string[] | undefined | null;

export function safeSearch(jobs: Job[], query: string): Job[] {
  if (!query.trim()) return jobs;
  
  const lowerQuery = query.toLowerCase();

  return jobs.filter(job => {
    // Define all searchable fields with proper null checks
    const searchableFields = [
      job.title,
      job.jobCode,
      job.company,
      job.location,
      job.skills ? job.skills.join(' ') : undefined
    ];

    return searchableFields.some(field => {
      if (!field) return false;
      
      // Handle both string and array cases
      const textToSearch = Array.isArray(field) 
        ? field.join(' ').toLowerCase()
        : field.toLowerCase();

      return textToSearch.includes(lowerQuery);
    });
  });
}