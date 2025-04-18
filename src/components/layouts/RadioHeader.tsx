"use client";

import Image from "next/image";
import { ScheduleIcon } from "../../../public/icons/ScheduleIcon";
import { LatestNewsIcon } from "../../../public/icons/LatestNewsIcon";
import { NewEpisodeIcon } from "../../../public/icons/NewEpisodeIcon";
import { ServicesIcon } from "../../../public/icons/ServicesIcon";
import { PodcastIcon } from "../../../public/icons/PodcastIcon";

const RadioHeader = () => {
  return (
    <header className="relative w-full h-16 flex items-center text-white">
      {/* Left Side */}
      <div className="relative flex-1 md:w-[40%] h-full max-w-full">
        <Image
          src="/background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-72"></div>

        <div className="relative z-20 flex items-center justify-between px-2 sm:px-4 md:px-6 h-full">
          <div className="flex flex-col items-start">
            <div className="flex gap-4 md:gap-[30px]">
              <button className="w-[46px] h-[46px] flex items-center bg-[#F24343] hover:bg-red-700 rounded-full px-2">
                <svg
                  className="w-[26px] h-[26px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="hidden md:flex flex-col">
                <span className="font-[700]">Listen to ABR Live Radio</span>
                <span className="text-[13px] font-[700] mt-1 text-[#9CCC65]">
                  ON AIR
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-[5px] items-center">
            <ScheduleIcon />
            <span className="text-[13px]">View Schedules</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-[80%] md:w-[60%] h-full bg-black items-center justify-end px-2 sm:px-4 md:px-6">
        <nav className="flex items-center space-x-4 sm:space-x-5 md:space-x-8">
          <div className="flex items-center">
            <div className="hidden md:block w-[2px] h-[20px] bg-[#fff] mx-9"></div>
            <div className="flex gap-2 md:gap-[8px]">
              <LatestNewsIcon />
              <a
                href="/podcasts"
                className="relative text-[13px] sm:text-[14px] md:text-[15px] font-[700] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
              >
                Latest News
              </a>
            </div>
          </div>
          <a
            href="/episodes"
            className="flex gap-2 md:gap-[8px] items-center relative text-[13px] sm:text-[14px] md:text-[15px] font-[700] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
          >
            <NewEpisodeIcon />
            <span>New Episodes</span>
          </a>
          <a
            href="/episodes"
            className="flex gap-2 md:gap-[8px] items-center relative text-[13px] sm:text-[14px] md:text-[15px] font-[700] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
          >
            <ServicesIcon />
            <span>Our Services</span>
          </a>
          <a
            href="/categories"
            className="flex gap-2 md:gap-[8px] items-center relative text-[13px] sm:text-[14px] md:text-[15px] font-[700] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
          >
            <PodcastIcon />
            <span>All Podcasts</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default RadioHeader;
