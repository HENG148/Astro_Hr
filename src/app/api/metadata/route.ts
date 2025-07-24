import { getPageMetadata } from '@/app/[locale]/metadata-config';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path') || '/';
  
  const metadata = getPageMetadata(path);
  
  return NextResponse.json({
    title: metadata.title,
    description: metadata.description,
    // favicon: metadata.icons?.icon,
  });
}