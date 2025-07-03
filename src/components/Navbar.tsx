import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"
import { FaBars, FaTimes, FaUser, FaUserPlus } from "react-icons/fa";
import logo from '../../public/10.png'
import Nav from "./Nav";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed w-full top-3 bg-white border-2 border-[#cde6ff] rounded-3xl backdrop-blur-sm z-50 py-3 px-4 sm:px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Mobile Menu */}
        {/* <div className="xl:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div> */}

        <div className="flex items-center gap-4 md:gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
            <Image
              src={logo}
              width={160}
              alt="Company Logo"
              priority
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden xl:flex">
            <Nav />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="xl:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Auth Buttons - Hidden on mobile */}
        <div className="hidden xl:flex items-center gap-4 mr-10 sm:gap-6">
          <div className="flex items-center gap-2 pr-4 sm:gap-3">
            <Link href="/register" className="border border-[#1a5276] px-6 py-[10px] rounded-[30px] text-sm sm:text-[15px] hover:bg-[#edf2f4] transition-colors whitespace-nowrap">
              Register
            </Link>
            <Link href="/login" className="px-7 py-[10px] rounded-[30px] text-sm sm:text-[15px] bg-[#1a5276] text-white hover:bg-[#2c6081] transition-colors whitespace-nowrap">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white shadow-lg rounded-b-2xl overflow-hidden transition-all duration-300 ease-in-out">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {/* Mobile Navigation */}
            <Nav mobile />
            
            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <Link href="/register" className="border border-[#1a5276] px-6 py-3 rounded-[30px] text-center hover:bg-[#edf2f4] transition-colors">
                Register
              </Link>
              <Link href="/login" className="px-6 py-3 rounded-[30px] text-center bg-[#1a5276] text-white hover:bg-[#2c6081] transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
export default Navbar;