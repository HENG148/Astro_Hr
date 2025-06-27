import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"
import { FaUser, FaUserPlus } from "react-icons/fa";
import logo from '../../public/10.png'
import Nav from "./Nav";
// import Nav from './Nav';

interface NavLink {
  href: string;
  label: string;
  varaint?: string;
  icon?: React.ReactNode;
}

const Navbar = ({ navLinks = [], authLinks = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('');

  const defaultNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const defaultAuthLinks = [
    {
      href: "/register",
      label: "Register",
      varaint: "outline",
      icon: <FaUserPlus className="mr-1" />
    },
    {
      href: '/login',
      label: 'Login',
      variant: "solid",
      icon: <FaUser className="mr-1" />
    }
  ];

  const linksToUse = navLinks.length ? navLinks : defaultNavLinks;
  const authToUse = authLinks.length ? authLinks : defaultAuthLinks;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  }

  const handleLinkClick = (href: NavLink['href']) => {
    setActiveLink(href);
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleEscape = (_e: KeyboardEvent) => {
      if (_e.key === 'escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen]);


  return (
    <header className={`fixed w-full top-0 bg-whtie transition-all duration-300 ease-in-out z-50 ${scrolled ? 'shadow-md py-2 broder-b border-gray-100' : 'py-4 border-2 border[#cd26ff] rounded-3xl backdrop-blur-sm mx-2 mt-2'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6">
        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href='/'
            className="flex-shrink-0 hover:opacity-90 transition-opacity"
          >
            <Image
              src={logo}
              alt=""
              width={scrolled ? 140 : 160}
              height={scrolled ? 40 : 50}
              priority
            />
          </Link>
          <div className="hidden xl:flex">
            <Nav links={linksToUse} activeLink={activeLink} on/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;




// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react'
// import logo from '../../public/10.png'
// import Nav from './Nav';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   }
//   return (
//     <header className='fixed w-full top-2 bg-white border-2 border-[#cde6ff] rounded-3xl backdrop-blur-sm z-50 py-3 px-4 sm:px-6'>
//       <div className='max-w-7xl mx-auto flex justify-between items-center'>
//         <div className='flex items-center gap-4 md:gap-8'>
//           <Link href='/' className='flex-shrink-0'>
//             <Image
//               src={logo}
//               width={160}
//               alt='logo'
//             />
//           </Link>
//           <div className='hidden xl:flex'>
//             <Nav />
//           </div>

//           <div className='xl:hidden flex items-center'>
//             <button
//               onClick={toggleMenu}
//               className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none'>
//               {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//             </button>
//           </div>
//         </div>
//         <div className='items-center gap-4 mr-10 sm:gap-6 hidden xl:flex'>
//           <div className='flex items-center gap-2 pr-4 sm:gap-3'>
//             <Link href='/'
//               className='border border-[#1a5276] px-6 py-[10px] rounded-[30px] text-sm sm:text-[15px] hover:bg-[#edf2f4] transition-colors whitespace-nowrap'>
//               Register
//             </Link>
//             <Link href='/'
//               className='px-7 py-[10px] rounded-[30px] text-sm sm:text-[15px] bg-[#1a5276] text-white hover:bg-[#2c6081] transition-colors whitespace-nowrap'>
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Navbar
