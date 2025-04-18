"use client";

import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import SearchButton from "./components/search";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setShowDropdown(false);
  };

  return (
    <header className="w-full h-[72px] bg-white text-[15px] shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/ABR_logo.png"
            alt="Africa Business Radio"
            width={108}
            height={51}
            className="object-contain"
          />
        </Link>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <nav className="hidden md:flex items-center space-x-6 font-semibold text-black">
          <Link
            href="/"
            className="relative hover:text-[#C85633] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#C85633] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
          >
            Home
          </Link>

          <div
            className="relative flex items-center space-x-1 cursor-pointer hover:text-[#C85633] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#C85633] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <span>Company</span>
            <ChevronDown className="w-4 h-4" />
            {showDropdown && (
              <div className="absolute top-full mt-2 w-40 bg-white border rounded shadow-md z-50">
                <Link
                  href="/about"
                  className="block px-4 py-2 hover:bg-gray-100 relative after:content-[''] after:absolute after:bottom-[2px] after:left-4 after:right-4 after:h-[2px] after:bg-[#C85633] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
                >
                  About Us
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 hover:bg-gray-100 relative after:content-[''] after:absolute after:bottom-[2px] after:left-4 after:right-4 after:h-[2px] after:bg-[#C85633] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
                >
                  Our Team
                </Link>
                <Link
                  href="/careers"
                  className="block px-4 py-2 hover:bg-gray-100 relative after:content-[''] after:absolute after:bottom-[2px] after:left-4 after:right-4 after:h-[2px] after:bg-[#C85633] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
                >
                  Careers
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/news-categories"
            className="relative hover:text-[#C85633] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#C85633] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
          >
            Resources
          </Link>
          <Link
            href="#footer"
            className="relative hover:text-[#C85633] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#C85633] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
          >
            Contact us
          </Link>
          <Link
            href="/never-stop-listening"
            className="relative hover:text-[#C85633] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#C85633] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
          >
            Advertise
          </Link>
        </nav>

        <div className="hidden md:block">
          <SearchButton />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 text-black font-semibold text-[18px]">
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            <X className="w-8 h-8" />
          </button>
          <Link href="/" onClick={toggleMenu} className="hover:text-[#C85633]">
            Home
          </Link>
          <div className="relative">
            <div
              className="flex items-center space-x-1 cursor-pointer hover:text-[#C85633]"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <span>Company</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            {showDropdown && (
              <div className="mt-2 w-40 bg-white border rounded shadow-md">
                <Link
                  href="/about"
                  onClick={toggleMenu}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#C85633]"
                >
                  About Us
                </Link>
                <Link
                  href="/team"
                  onClick={toggleMenu}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#C85633]"
                >
                  Our Team
                </Link>
                <Link
                  href="/careers"
                  onClick={toggleMenu}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#C85633]"
                >
                  Careers
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/podcasts"
            onClick={toggleMenu}
            className="hover:text-[#C85633]"
          >
            Resources
          </Link>
          <Link
            href="#footer"
            onClick={toggleMenu}
            className="hover:text-[#C85633]"
          >
            Contact us
          </Link>
          <Link
            href="/categories"
            onClick={toggleMenu}
            className="hover:text-[#C85633]"
          >
            Advertise
          </Link>
          <div className="mt-4">
            <SearchButton />
          </div>
        </div>
      )}
    </header>
  );
}
