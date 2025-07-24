import { Job } from "@/data/types/job";

interface JobListProps {
  jobs: Job[];
  searchQuery?: string;
  className?: string;
}

export default function JobList({
  jobs,
  searchQuery,
  className = ''
}: JobListProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {jobs.length > 0 ? (
        <>
          {searchQuery && (
            <div className="text-sm text-gray-500 mb-2">
              Showing {jobs.length} results for "{searchQuery}"
            </div>
          )}
          {jobs.map((job, idx) => (
            <div key={idx} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <div className="flex items-center mt-1 text-gray-600">
                <span>{job.company}</span>
                <span className="mx-2">•</span>
                <span>{job.location}</span>
                {job.isRemote && (
                  <>
                    <span className="mx-2">•</span>
                    <span>Remote</span>
                  </>
                )}
              </div>
              {job.skills && job.skills.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">
            No jobs found{searchQuery ? ` for "${searchQuery}"` : ''}
          </h3>
          <p className="mt-2 text-gray-500">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
}