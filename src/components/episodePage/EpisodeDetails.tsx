"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

import { ShareEpisodeIcon } from "../../../public/icons/shareEpisodeIcon";
import { ReloadIcon } from "../../../public/icons/ReloadIcon1";
import { GroupEpisodeIcon } from "../../../public/icons/GroupEpisodeIcon";

const EpisodeDetails = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleReadMore = () => setIsReadMore(!isReadMore);
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="h-auto relative bg-gradient-to-r from-[#2B3221] to-[rgba(43,50,33,0.5)] px-6 lg:px-20 py-10 flex flex-col lg:flex-row">
      <Link
        href="/podcasts"
        className="absolute top-6 left-6 flex items-center text-[#fff] text-[14px] uppercase"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="white"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Podcast
      </Link>

      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-[157px] h-[129px] flex-shrink-0 mt-10 mx-auto lg:mx-0"
      >
        <Image
          src="/images/podcastPage/podcastPics1.png"
          alt="Hope For The Widow"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      {/* Right Side */}
      <div className="flex-1 pl-0 lg:pl-8 flex flex-col mt-10">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-[#BFBFBF] text-[12px] uppercase">
            Sept 3, 2023
          </span>
          <span className="text-[#BFBFBF] text-[12px] uppercase">
            • 28 mins
          </span>
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white text-[28px] font-bold"
        >
          The Funeral Experience – the Good, the Bad, and the Ugly
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-full lg:w-[921px] text-white text-[15px] leading-[26px] font-[500] mt-4"
        >
          {isReadMore ? (
            <>
              The struggles of a widow begin immediately when her husband dies;
              she is immediately made to go through various traditional rites,
              disregarding her pain and process of grieving. Most people in
              Africa, argue that those rituals are intended to protect widows
              and not to harm them. This doesn’t appear to be the case as some
              of these practices and beliefs tend to dehumanise the very essence
              of their womanhood. In this episode, we will talk about these
              rites and possible solutions to the bad sides and even how to
              manage the ugly sides. The guest on this episode is Ms Grace
              Udodong.
            </>
          ) : (
            <>
              The struggles of a widow begin immediately when her husband dies;
              she is immediately made to go through various traditional rites,
              disregarding her pain and process of grieving...{" "}
            </>
          )}
          <span
            className="text-[#BCFFB6] text-[15px] font-[700] cursor-pointer"
            onClick={toggleReadMore}
          >
            {isReadMore ? " SHOW LESS" : " READ MORE"}
          </span>
        </motion.p>

        {/* Audio Player */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center space-x-4"
        >
          <div className="flex items-center w-full lg:w-[921px]">
            <span className="text-white text-[12px] mr-2">00:15</span>
            <div className="relative flex-1 h-1 bg-gray-400 rounded-full">
              <div
                className="absolute h-1 bg-white rounded-full"
                style={{ width: "1%" }}
              ></div>
              <div
                className="absolute w-4 h-4 bg-green-500 rounded-full -mt-1.5"
                style={{ left: "1%" }}
              ></div>
            </div>
            <span className="text-white text-[12px] ml-2">28:04</span>
            <button className="ml-4">
              <Volume2
                className="w-6 h-6 text-[#CDCDCD] transition-transform duration-300 hover:scale-110"
                onClick={() => alert("Volume control clicked!")}
              />
            </button>
          </div>
        </motion.div>

        {/* Player Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-between items-center space-x-4 mt-10"
        >
          <div className="flex gap-[20px]">
            <ReloadIcon />
            <div
              onClick={togglePlay}
              className="bg-red-500 rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
            >
              <Play className="w-[26px] h-[26px] text-white" fill="white" />
            </div>
            <ReloadIcon />
          </div>

          <div className="flex gap-5 mr-0 lg:mr-[250px]">
            <div
              onClick={() => alert("Episode shared!")}
              className="bg-[#E1E1E1] rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            >
              <ShareEpisodeIcon />
            </div>
            <div
              onClick={() => alert("Group icon clicked!")}
              className="bg-[#E1E1E1] rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            >
              <GroupEpisodeIcon />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EpisodeDetails;
