'use client'

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, useMemo } from "react";

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

interface BreadcrumbConfig {
  [key: string]: {
    hide?: boolean;
    dynamicTitle?: boolean;
    customTitle?: string;
    category?: string;
    alwaysShowCategory?: boolean;
  };
}

interface BreadcrumbItem {
  path: string;
  name: string;
  isLast: boolean;
}

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const breadcrumbConfig: BreadcrumbConfig = useMemo(() => ({
    'job': { hide: true },
    'jobs': { 
      category: 'IT Related', // Add parent category here
      alwaysShowCategory: true,
    },
    'media': {
      category: "Multimedia",
      alwaysShowCategory: true,
      dynamicTitle: true
    }
  }), []);

  const breadcrumbs = useMemo(() => {
    if (!pathname) return [];

    const paths = pathname.split('/').filter(Boolean).filter(x => x !== 'en');
    let currentPath = '';
    const result: BreadcrumbItem[] = [];
    
    for (let i = 0; i < paths.length; i++) {
      const segment = paths[i];
      currentPath += `/${segment}`;
      const decodedSegment = decodeURIComponent(segment);
      const config = breadcrumbConfig[segment] || {};

      if (config.hide) continue;

      let displayName = decodedSegment;
      let isLast = i === paths.length - 1;

      // if (config.category && config.alwaysShowCategory) {
      //   displayName = `${decodedSegment} (${config.category})`;
      // }

      if (config.category && config.alwaysShowCategory) {
        displayName = `${capitalizeFirstLetter(segment)} (${config.category})`;
      } else if (config.customTitle) {
        displayName = config.customTitle;
      }

      //Override with dynamic title (ex: form url query)
      if (config.dynamicTitle && searchParams?.get('title')) {
        displayName = searchParams?.get('title')!
      }

      if (config.customTitle) {
        displayName = config.customTitle;
      }

      result.push({
        path: currentPath,
        name: displayName,
        isLast
      });

      if (i < paths.length - 1 && (config.dynamicTitle || config.alwaysShowCategory)) {
        const childTitle = searchParams?.get('title') || 'Details';
        result.push({
          path: `${currentPath}/${paths[i + 1]}`,
          name: childTitle,
          isLast: true,
        });
        break;
      }

      // if (segment === 'jobs' && i < paths.length - 1) {
      //   const jobId = paths[i + 1];
      //   if (jobId) {
      //     const jobTitle = searchParams?.get('title') || "Job Details";
      //     result.push({
      //       path: `${currentPath}/${jobId}`,
      //       name: jobTitle,
      //       isLast: true,
      //     });
      //     break;
      //   }
      // }
    }
    return result;
  }, [pathname, searchParams, breadcrumbConfig]);

  if (!pathname || breadcrumbs.length === 0) return null;

  return (
    <div className="breadcrumbs flex items-center flex-wrap gap-1 text-sm">
      <Link className="text-primary font-semibold hover:underline" href="/">
        Home
      </Link>
      
      {breadcrumbs.map((crumb) => (
        <Fragment key={crumb.path}>
          <span className="text-gray-500">/</span>
          
          {crumb.isLast ? (
            <span className="text-gray-700">{crumb.name}</span>
          ) : (
            <Link 
              className="text-primary font-semibold hover:underline" 
              href={crumb.path}
            >
              {crumb.name}
            </Link>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;