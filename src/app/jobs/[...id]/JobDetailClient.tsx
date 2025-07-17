// 'use client'

// import { Job } from "@/data/types/job";
// import { useSearchParams } from "next/navigation"
// import { useMemo } from "react";
// import JobDetail from "./JobDetail";

// interface JobDetailClientProps {
//   params: { id: string },
//   searchParams: {
//     [key: string]: string | string[] | undefined
//   }
// }

// export default function JobDetailClient({ params, searchParams }: JobDetailClientProps) {
//   const routerSearchParams = useSearchParams();
//   const job: Job = useMemo(() => {
//     const effectiveParams = searchParams || Object.fromEntries(routerSearchParams.entries());
//     const parseStringParam = (param: unknown): string | undefined => {
//       if (Array.isArray(param)) return param[0];
//       return param as string | undefined;
//     }

//     const parseNumberParam = (param: unknown): number | undefined => {
//       const str = parseStringParam(param)
//       return str ? parseInt(str, 10) : undefined;
//     }

//     const parseBooleanParam = (param: unknown): boolean => {
//       const str = parseStringParam(param);
//       return str === "true"
//     }

//     const parseArrayParam = (param: unknown): string[] | undefined => {
//       const str = parseStringParam(param);
//       return str ? str.split(',') : undefined;
//     };

//     return {
//       id: parseNumberParam(params.id) || 0,
//       title: parseStringParam(effectiveParams.title) || '',
//       jobCode: parseStringParam(effectiveParams.jobCode),
//       type: parseStringParam(effectiveParams.type),
//       level: parseStringParam(effectiveParams.level),
//       company: parseStringParam(effectiveParams.company),
//       openings: parseNumberParam(effectiveParams.openings),
//       location: parseStringParam(effectiveParams.location),
//       salary: parseStringParam(effectiveParams.salary),
//       skills: parseArrayParam(effectiveParams.skills),
//       description: parseStringParam(effectiveParams.description),
//       postedDate: parseNumberParam(effectiveParams.postedDate),
//       isRemote: parseBooleanParam(effectiveParams.isRemote),
//       postedTime: parseStringParam(effectiveParams.postedTime),
//     };
//   }, [params.id, searchParams, routerSearchParams])

//   return (
//     <main className="min-h-screen py-12 bg-gray-50">
//       <JobDetail job={job} />
//     </main>
//   )
// }