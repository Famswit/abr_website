"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ExploreCategory = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-10 bg-white">
      <h2 className="text-[20px] sm:text-[24px] font-[800] text-[#5A5A5A] text-center sm:text-left">
        Explore other categories
      </h2>

      <div className="relative overflow-hidden mt-6">
        <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-center sm:justify-start transition-transform duration-500 ease-in-out mb-20">
          {/* Category Card 1 */}
          <Link
            href="#"
            className="relative w-full sm:w-[306px] h-[180px] sm:h-[177px] flex-shrink-0 animate-fadeIn hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Image
              src="/images/categories/explore1.png"
              alt="Hope For The Widow"
              layout="fill"
              objectFit="cover"
              className="opacity-80 rounded-md"
            />
            <div className="absolute bottom-0 w-full text-white bg-gradient-to-t from-black to-transparent p-2 rounded-b-lg">
              <h4 className="text-[16px] sm:text-[18px] font-[700]">
                News & Storytelling
              </h4>
            </div>
          </Link>

          {/* Category Card 2 */}
          <Link
            href="#"
            className="relative w-full sm:w-[306px] h-[180px] sm:h-[177px] flex-shrink-0 animate-fadeIn hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Image
              src="/images/categories/explore2.png"
              alt="Policy Sphere by Agora"
              layout="fill"
              objectFit="cover"
              className="opacity-80 rounded-md"
            />
            <div className="absolute bottom-0 w-full text-white bg-gradient-to-t from-black to-transparent p-2 rounded-b-lg">
              <h4 className="text-[16px] sm:text-[18px] font-[700]">
                Entertainment & Lifestyle
              </h4>
            </div>
          </Link>

          {/* Category Card 3 */}
          <Link
            href="#"
            className="relative w-full sm:w-[306px] h-[180px] sm:h-[177px] flex-shrink-0 animate-fadeIn hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Image
              src="/images/categories/explore3.png"
              alt="The Harmonised Life"
              layout="fill"
              objectFit="cover"
              className="opacity-80 rounded-md"
            />
            <div className="absolute bottom-0 w-full text-white bg-gradient-to-t from-black to-transparent p-2 rounded-b-lg">
              <h4 className="text-[16px] sm:text-[18px] font-[700]">
                Tech, Sport & Business
              </h4>
            </div>
          </Link>

          {/* Category Card 4 */}
          <Link
            href="#"
            className="relative w-full sm:w-[306px] h-[180px] sm:h-[177px] flex-shrink-0 animate-fadeIn hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Image
              src="/images/categories/explore4.png"
              alt="Lifestyle Central"
              layout="fill"
              objectFit="cover"
              className="opacity-80 rounded-md"
            />
            <div className="absolute bottom-0 w-full text-white bg-gradient-to-t from-black to-transparent p-2 rounded-b-lg">
              <h4 className="text-[16px] sm:text-[18px] font-[700]">
                Other podcasts
              </h4>
            </div>
          </Link>
        </div>
      </div>

      {/* Custom animation style */}
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
          animation: fadeIn 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ExploreCategory;
