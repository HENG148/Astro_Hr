import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef, useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti';

type NavLink = {
  label: string;
  path: string;
  subLinks?: {
    label: string;
    path: string;
    query?: Record<string, string>
  }[];
};

type NavProps = {
  mobile?: boolean;
}

const Nav: React.FC<NavProps> = ({
  mobile = false
}) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropDown] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const links: NavLink[] = [
    { label: 'home', path: '/' },
    { 
      label: 'job', 
      path: '/job',
      subLinks: [
        { label: 'IT related', path: '/jobListing', query: { page: '1' } },
        { label: 'Other', path: '/' }
      ]
    },
    { 
      label: 'media', 
      path: '/media',
      subLinks: [
        { label: 'All', path: '/media' },
        { label: 'General Knowledge', path: '/' },
        { label: 'IT Knowledge', path: '/' },
        { label: 'Seekers Review', path: '/' }
      ]
    },
    { label: 'about', path: '/abouts' },
    { label: 'contact', path: '/contacts' }
  ]

  const handleMouseEnter = (label: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenDropDown(label)
  }

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenDropDown(null)
    }, 200);
  }

  React.useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current)
      }
    }
  }, []);

  return (
    <nav className={`${mobile ? "flex flex-col space-y-4" : "flex items-center gap-8"} font-primary text-[1.1rem]`}>
      {links.map((link) => {
        const hasSubLinks = link.subLinks && link.subLinks.length > 0;
        const isDropdownOpen = openDropdown === link.label;
        const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));

        return (
          <div
            key={link.label}
            className={`relative ${mobile ? 'w-full' : ''}`}
            onMouseEnter={!mobile ? () => handleMouseEnter(link.label) : undefined}
          >
            {hasSubLinks ? (
              <>
                <button 
                  className={`flex items-center justify-between w-full capitalize ${isActive ? "text-[#149ac5]" : "text-gray-700 hover:text-[#149ac5]"} transition-all ${mobile ? 'py-2' : ''}`}
                  onClick={mobile ? () => setOpenDropDown(isDropdownOpen ? null : link.label) : undefined}
                  >
                  {link.label}
                  <TiArrowSortedDown className={`text-[#1a5276] transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    className={`text-[16px] bg-white border border-gray-200 shadow-lg rounded-[7xl] p-2 z-10 ${mobile ? 'w-full border-none shadow-none' : 'absolute w-[12rem] left-[-1rem]'}`}
                    onMouseEnter={!mobile ? () => handleMouseEnter(link.label) : undefined}
                    onMouseLeave={!mobile ? handleMouseLeave : undefined}
                  >
                    {link.subLinks?.map((subLink, idx) => (
                      <Link
                        key={idx}
                        href={{
                          pathname: subLink.path,
                          query: subLink.query || {}
                        }}
                        className='block px-4 py-2 hover:bg-gray-100 transition-colors'
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={link.path}
                className={`block capitalize ${
                  isActive ? 'text-[#149ac5] border-b-2 border-[#149ac5]' : 'text-gray-700 hover:text-[#149ac5]'
                } transition-all ${mobile ? 'py-2' : ''}`}
              >
                {link.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default Nav;
