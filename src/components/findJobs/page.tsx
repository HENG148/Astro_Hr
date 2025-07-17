'use client'

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import FindJobSearchbar from "./FindJobSearchbar";
import Link from "next/link";

interface JobCategory{
  name: string;
  href: string;
}

interface PopularKeyword {
  name: string;
  href: string;
}

interface FindJobProps {
  jobCategories?: JobCategory[];
  popularKeyword?: PopularKeyword[];
  title?: string;
  itemClassName?: string;
  hoverClassName?: string;
  initialSearchQuery?: string;
}

const FindJob: React.FC<FindJobProps> = ({
  jobCategories = [],
  popularKeyword = [],
  title = "Find your dream jobs",
  itemClassName = "border border-[#dedfe0] h-[60px] grid items-center pl-[1.3rem]",
  hoverClassName = "hover:bg-[#dedfe0] transition-all duration-100",
  initialSearchQuery = "",
}) => {
  // const router = useRouter();
  // const [searchQuery, setSearchQuery] = useState(initialSearchQuery)

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (searchQuery.trim()) {
  //     router.push(`/jobs?q=${encodeURIComponent(searchQuery)}`);
  //   }
  // }

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     handleSearch(e);
  //   }
  // };

  return (
    <section className="grid grid-cols-2 gap-5 mt-4">
      <div className="w-full">
        <p className="font-bold pb-3">{title}</p>
        <FindJobSearchbar basePath="/jobs" />
        <div className="mt-9">
          <p className="font-bold pb-[21.5px]">Search by Category</p>
          <div className="grid grid-cols-2">
            {jobCategories.map((cate, idx) => (
              <Link key={`category-${idx}`} href={cate.href}>
                <p className={`${itemClassName} ${hoverClassName}`}>
                  {cate.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="font-bold mb-3">Popular Keywords</p>
        <div className="grid grid-cols-2">
          {popularKeyword.map((popular, idx) => (
            <Link key={`keyword-${idx}`} href={popular.href}>
              <p className={`${itemClassName} ${hoverClassName}`}>
                {popular.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FindJob



// 'use client'

// import Link from "next/link";
// import FindJobSearchbar from "./FindJobSearchbar";

// interface JobCategory {
//   name: string;
//   href: string;
// }

// interface PopularKeyword {
//   name: string;
//   href: string;
// }

// interface FindJobProps {
//   jobCategories: JobCategory[];
//   popularKeywords: PopularKeyword[];
//   title: string;
//   sectionClassName?: string;
//   itemClassName?: string;
//   hoverClassName?: string;
// }

// const FindJob: React.FC<FindJobProps> = ({
//   jobCategories = [],
//   popularKeywords = [],
//   title = "Find your dream jobs",
//   // sectionClassName = "container mx-auto px-[10.5rem] grid grid-cols-2 gap-5 mt-4",
//   itemClassName = "border border-[#dedfe0] h-[60px] grid items-center pl-[1.3rem]",
//   hoverClassName = "hover:bg-[#dedfe0] transition-all duration-100",
// }) => {
//   return (
//     <section className='grid grid-cols-2 gap-5 mt-4'>
//       <div className="w-full">
//         <p className="font-bold pb-3">{title}</p>
//         <FindJobSearchbar basePath="/jobs" />
//         <div className="mt-9">
//           <p className="font-bold pb-[21.5px]">Search by Category</p>
//           <div className="grid grid-cols-2">
//             {jobCategories.map((cate, idx) => (
//               <Link key={`category-${idx}`} href={cate.href}>
//                 <p className={`${itemClassName} ${hoverClassName}`}>
//                   {cate.name}
//                 </p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div>
//         <p className="font-bold mb-3">Popular Keywords</p>
//         <div className="grid grid-cols-2">
//           {popularKeywords.map((keyword, idx) => (
//             <Link key={`keyword-${idx}`} href={keyword.href}>
//               <p className={`${itemClassName} ${hoverClassName}`}>
//                 {keyword.name}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FindJob;