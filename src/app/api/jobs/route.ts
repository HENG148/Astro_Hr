import { safeSearch } from '@/lib/search';
import { allJobs } from '@/data/types/job';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  
  const results = safeSearch(allJobs, query);
  return NextResponse.json(results);
}