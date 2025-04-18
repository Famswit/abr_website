"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    "Home",
    "About Us",
    "Contact Us",
    "All Podcast",
    "Advertise",
    "Resources",
  ];

  return (
    <footer className="bg-[#282828] w-full h-auto border-none text-[#E7E7E7] animate-fadeIn">
      <div className="flex flex-col h-full">
        <div className="pt-8 px-4 sm:px-6 md:px-10 lg:px-[60px]">
          <Image
            src="/images/footerLogo.png"
            alt="Africa Business Radio"
            width={150}
            height={50}
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex-grow flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 sm:px-6 sm:mt-10 md:px-10 lg:px-[60px] py-4 gap-6 lg:gap-0">
          <div className="flex flex-wrap items-start lg:items-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {navLinks.map((link, index) => (
                <React.Fragment key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-[#E7E7E7] text-[12px] sm:text-[13px] md:text-[14px] font-normal uppercase tracking-wider transition-all duration-300 hover:text-white hover:scale-110"
                  >
                    {link}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <div className="hidden lg:block h-[20px] w-[1px] bg-[#E7E7E7]"></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-0 sm:pl-6 sm:ml-6 border-t sm:border-t-0 sm:border-l border-[#E7E7E7]">
              <span className="text-[#E7E7E7] text-[12px] sm:text-[13px] md:text-[14px] font-normal uppercase tracking-wider">
                Connect with ABR
              </span>
              <div className="flex space-x-[10px]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/social/instagram.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="transition-all duration-300 hover:scale-125 hover:brightness-125"
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/social/facebook.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="transition-all duration-300 hover:scale-125 hover:brightness-125"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/social/twitter.png"
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="transition-all duration-300 hover:scale-125 hover:brightness-125"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/social/ping.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="transition-all duration-300 hover:scale-125 hover:brightness-125"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/social/linkedin.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="transition-all duration-300 hover:scale-125 hover:brightness-125"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 md:px-10 lg:px-[60px] py-5 text-[11px] sm:text-[12px] font-normal">
          <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[20px] items-start sm:items-center">
            <span>© Copyright 2021. All Rights Reserved.</span>
            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4">
              <Link
                href="/terms-and-condition"
                className="text-[#E7E7E7] transition-all duration-300 hover:text-white hover:scale-110"
              >
                Terms & Condition
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[#E7E7E7] transition-all duration-300 hover:text-white hover:scale-110"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
