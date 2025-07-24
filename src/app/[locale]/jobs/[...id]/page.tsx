// import JobDetailClient from "./JobDetailClient";

// interface JobDetailPageProps {
//   params: { id: string };
//   searchParams: {
//     [key: string]: string | string[] | undefined
//   }
// }

// export default async function JobDetailPage({ params, searchParams }: JobDetailPageProps) {
//   return <JobDetailClient params={params} searchParams={searchParams} />
// }

import { notFound } from 'next/navigation';
import { allJobs } from '@/data/types/job';

interface PageProps {
  params: { id: string };
}

export default async function JobDetailPage({ params }: PageProps) {
  // const job = allJobs.find((job) => job.id === Number(params.id));
  // const jobId = typeof params.id === "string" ? Number(params.id) : NaN;
  // const job = allJobs.find((job) => job.id === jobId)

  const jobId = Array.isArray(params.id)
    ? Number(params.id[0])
    : Number(params.id);
  const job = allJobs.find((job) => job.id === jobId)

  if (!job) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 mt-40 py-8 max-w-4xl">
      <header className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold mb-2">
          {job.title} <span className="text-gray-500">({job.jobCode})</span>
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <JobDetailItem label="Salary" value={job.salary} />
          <JobDetailItem label="Job Type" value={job.type} />
          <JobDetailItem label="Level" value={job.level} />
          <JobDetailItem label="Location" value={job.location} />
          <JobDetailItem label="Experience" value={job.experience} />
          <JobDetailItem 
            label="Openings" 
            value={`${job.openings} position(s)`} 
          />
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>Posted: {job.postedDate}</span>
          <span>Closing: {job.closingDate}</span>
        </div>
      </header>

      <div className="mb-8">
        <Section title="Job Description">
          <p className="mb-6">{job.description}</p>
        </Section>

        <Section title="Job Requirements">
          <ul className="list-disc pl-5 mb-6 space-y-2">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </Section>

        <Section title="Job Responsibilities">
          <ul className="list-disc pl-5 mb-6 space-y-2">
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </Section>

        <Section title="Required Skills">
          <div className="flex flex-wrap gap-2 mb-6">
            {job.skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
        <div className="space-y-2">
          <p>📍 {job.contact.address}</p>
          <p>📞 {job.contact.phone}</p>
          <p>✉️ {job.contact.email}</p>
          <p>⏰ {job.contact.workingHours}</p>
        </div>

        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Apply Now
        </button>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-gray-500">Share:</span>
          <button className="text-xl">💬</button>
          <button className="text-xl">💭</button>
          <button className="text-xl">💮</button>
        </div>
      </div>
    </div>
  );
}

function JobDetailItem({ label, value }: { label: string; value: string | undefined }) {
  return (
    <div>
      <h3 className="text-gray-500">{label}</h3>
      <p>{value}</p>
    </div>
  );
}

function Section({ 
  title, 
  children 
}: { 
  title: string; 
  children: React.ReactNode 
}) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      {children}
    </section>
  );
}




// import JobDetail from '../JobDetail';
// import { Job } from '@/data/types/job';

// interface JobDetailPageProps {
//   params: { id: string };
//   searchParams: {
//     [key: string]: string | string[] | undefined;
//   }
// }

// export default async function JobDetailPage({ params, searchParams }: JobDetailPageProps) {
//   // Convert searchParams to Job object
//   const job: Job = {
//     id: parseInt(params.id),
//     title: searchParams.title as string,
//     jobCode: searchParams.jobCode as string | undefined,
//     type: searchParams.type as string | undefined,
//     level: searchParams.level as string | undefined,
//     company: searchParams.company as string | undefined,
//     openings: searchParams.openings ? parseInt(searchParams.openings as string) : undefined,
//     location: searchParams.location as string | undefined,
//     salary: searchParams.salary as string | undefined,
//     skills: searchParams.skills ? (searchParams.skills as string).split(',') : undefined,
//     description: searchParams.description as string | undefined,
//     postedDate: searchParams.postedDate ? parseInt(searchParams.postedDate as string) : undefined,
//     isRemote: searchParams.isRemote === 'true',
//     postedTime: searchParams.postedTime as string | undefined
//   };

//   return (
//     <main className="min-h-screen py-12 bg-gray-50">
//       <JobDetail job={job} />
//     </main>
//   );
// }

// interface JobDetailPageProps {
//   params: { id: string };
//   searchParams: {
//     title?: string;
//     salaryRange?: string;
//     postedTime?: string;
//     employmentType?: string;
//     location?: string;
//     company?: string;
//     skills?: string;
//   };
// }