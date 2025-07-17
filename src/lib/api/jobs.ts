import { Job, JobSearchParams } from "@/data/types/job";
// import { apiClient } from "../api";

export async function searchJobs(params?: JobSearchParams): Promise<Job[]>{
  try {
    const url = new URL('/api/jobs', process.env.NEXT_PUBLIC_API_BASE_URL);
    if (params) {
      const serializableParams: Record<string, string> = {};
      if (params.q) serializableParams.q = String(params.q);
      if (params.location) serializableParams.location = String(params.location);
      if (params.remoteOnly) serializableParams.remoteOnly = 'true';
      if (params.minSalary) serializableParams.minSalary = String(params.minSalary);

      Object.entries(serializableParams).forEach(([key, value]) => {
        url.searchParams.append(key, value)
      })
    }
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error(`Error fetching jobs:`, err);
    throw err;
  }
}