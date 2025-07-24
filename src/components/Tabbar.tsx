'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabSets = {
  main: [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'events', label: 'Events', href: '/events' },
    { id: 'members', label: 'Members', href: '/members' },
    { id: 'gallery', label: 'Gallery', href: '/gallery' },
  ],
  search: [
    { id: 'all', label: 'All', href: '/search' },
    { id: 'players', label: 'Players', href: '/search/players' },
    { id: 'teams', label: 'Teams', href: '/search/teams' },
    { id: 'events', label: 'Events', href: '/search/events' },
  ]
};

export default function PBAStyleTabBar() {
  const pathname = usePathname();
  
  const currentTabSet = pathname.startsWith('/search') ? tabSets.search : tabSets.main;
  const activeTab = currentTabSet.find(tab => pathname.startsWith(tab.href))?.id || 'home';

  return (
    <div className="flex border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 overflow-x-auto">
        <div className="flex space-x-8">
          {currentTabSet.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={`whitespace-nowrap py-3 px-1 border-b-2 ${
                activeTab === tab.id
                  ? 'border-red-500 text-red-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}