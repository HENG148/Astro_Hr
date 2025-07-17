const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

async function fetchAPI<T = any>(
  endpoint: string,
  method: HttpMethod = 'GET',
  body: unknown = null,
  token: string | null = null
): Promise<T> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'Request failed');
  }

  return response.json() as Promise<T>;
}

export default fetchAPI;


// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// interface FetchAPIOptions {
//   method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
//   body?: Record<string, unknown> | null;
//   token?: string | null;
// }

// // Helper function for API requests
// async function fetchAPI(
//   endpoint: string,
//   method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET',
//   body: Record<string, unknown> | null = null,
//   token: string | null = null
// ): Promise<any> {
//   const headers: Record<string, string> = {
//     'Content-Type': 'application/json',
//   };

//   if (token) {
//     headers['Authorization'] = `Bearer ${token}`;
//   }

//   const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//     method,
//     headers,
//     body: body ? JSON.stringify(body) : null,
//   });

//   if (!response.ok) {
//     throw new Error(await response.text());
//   }

//   return await response.json();
// }

// export default fetchAPI;

// // import { JobSearchParams } from '@/data/types/job';

// // const defaultHeaders = {
// //   'Content-Type': 'application/json',
// //   Accept: 'application/json',
// // };

// // export class ApiClient {
// //   private baseUrl: string;

// //   constructor() {
// //     this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
// //   }

// //   async get(endpoint: string, params?: Record<string, any>): Promise<Response> {
// //     const url = new URL(endpoint, this.baseUrl);
    
// //     if (params) {
// //       Object.entries(params).forEach(([key, value]) => {
// //         if (value !== undefined) {
// //           url.searchParams.append(key, String(value));
// //         }
// //       });
// //     }

// //     return fetch(url.toString(), {
// //       method: 'GET',
// //       headers: defaultHeaders,
// //       cache: 'no-store',
// //     });
// //   }

// //   // Add post, put, delete methods as needed
// // }

// // export const apiClient = new ApiClient();