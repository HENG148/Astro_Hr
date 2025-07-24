'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function MetadataHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Update metadata on client-side navigation
    const updateMetadata = async () => {
      const response = await fetch(`/api/metadata?path=${encodeURIComponent(pathname)}`);
      const metadata = await response.json();
      
      document.title = metadata.title;
      
      const descriptionMeta = document.querySelector('meta[name="description"]');
      if (descriptionMeta) {
        descriptionMeta.setAttribute('content', metadata.description);
      }
      
      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        favicon.setAttribute('href', metadata.favicon);
      }
    };

    updateMetadata();
  }, [pathname]);

  return null;
}