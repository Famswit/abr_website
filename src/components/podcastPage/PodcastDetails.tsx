"use client";

import React from "react";
import Image from "next/image";
import { ShareIcon } from "../../../public/icons/ShareIcon";
import { motion } from "framer-motion";

const PodcastDetails = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Hope For The Widow",
          text: "Check out this inspiring podcast episode: Hope For The Widow!",
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative bg-gradient-to-r from-[#2B3221] to-[rgba(43,50,33,0.5)] py-10 px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
    >
      {/* Share Icon */}
      <div
        className="absolute top-4 right-4 flex space-x-1 cursor-pointer"
        onClick={handleShare}
      >
        <ShareIcon />
      </div>

      {/* Left Side: Image with Overlay */}
      <div className="relative w-full max-w-[390px] h-[300px] sm:h-[350px] flex-shrink-0">
        <Image
          src="/images/podcastPage/podcastPics1.png"
          alt="Hope For The Widow"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Right Side: Title, Description, and Platforms */}
      <div className="flex-1 pl-0 lg:pl-8">
        <h4 className="text-[#BFBFBF] text-[13px] sm:text-[14px] font-bold">
          Hope For The Widow
        </h4>
        <h2 className="text-white text-[22px] sm:text-[24px] lg:text-[28px] font-bold">
          Hope For The Widow
        </h2>
        <p className="w-full max-w-[578px] text-white text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] font-[500] mt-4">
          The show aims to shed light on the challenges faced by less privileged
          widows, providing support and a platform to promote a better life.
          Join us in making a difference. #EmpoweringWidows #SupportingWidows.
        </p>
        <div className="mt-10 sm:mt-14 lg:mt-16">
          <span className="text-[#BFBFBF] text-[15px] sm:text-[16px] font-[600]">
            Available on
          </span>
          <div className="flex flex-wrap items-center space-x-[10px] mt-2">
            <a
              href="https://www.apple.com/app-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/podcastPage/spotify.png"
                alt="App Store"
                width={32}
                height={32}
                className="transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/podcastPage/platform1.png"
                alt="Spotify"
                width={32}
                height={32}
                className="transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/podcastPage/platform2.png"
                alt="Apple Podcasts"
                width={32}
                height={32}
                className="transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a
              href="https://wokpa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/podcastPage/WokpaLogo.png"
                alt="Wokpa"
                width={95}
                height={30}
                className="transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PodcastDetails;
