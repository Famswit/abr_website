"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { ShareEpisodeIcon } from "../../../public/icons/shareEpisodeIcon";
import { ScheduleEpisodeIcon } from "../../../public/icons/scheduleEpisodeIcon";
import { GroupEpisodeIcon } from "../../../public/icons/GroupEpisodeIcon";
import { motion } from "framer-motion";

const episodes = [
  {
    id: 1,
    title: "The FUNERAL EXPERIENCE – the Good, the Bad, and the UGLY",
    date: "Sept 3, 2023",
    duration: "28 mins",
    description:
      "The struggles of a widow begin immediately when her husband dies; she is in pain and process of grieving through various traditional rites, disregarding her pain.",
    image: "/images/podcastPage/episode1.png",
  },
  {
    id: 2,
    title: "Relationship Button - Starting Afresh as a Widow",
    date: "Aug 29, 2023",
    duration: "45 mins",
    description:
      "We respect and appreciate peoples’ decisions regarding relationships and love life. A widow has the right to fall in love and remarry if she so desires.",
    image: "/images/podcastPage/episode2.png",
  },
  {
    id: 3,
    title: "Coping with Grief (Survival Tips)",
    date: "Aug 7, 2023",
    duration: "35 mins",
    description:
      "The challenges widows go through especially the less privileged ones can be daunting. Widowhood can be a lonely journey.",
    image: "/images/podcastPage/episode3.png",
  },
];

const PodcastEpisodes = () => {
  const handlePlay = (title: string) => alert(`Playing: ${title}`);
  const handleSchedule = () => alert("Scheduled episode");
  const handleShare = () => alert("Shared episode");
  const handleGroup = () => alert("Grouped episode");

  return (
    <div className="bg-white py-10 px-5 lg:px-20 flex flex-col lg:flex-row gap-10">
      {/* Left Box */}
      <div className="flex-1">
        <h2 className="text-[#6B7280] text-[16px] font-bold uppercase mb-2">
          All Episodes (3 Available)
        </h2>
        <div className="h-[1px] bg-[#DCDCDC] mb-6"></div>

        {episodes.map((episode, idx) => (
          <motion.div
            key={episode.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            className="mb-10"
          >
            <div className="flex flex-col md:flex-row gap-5">
              <Image
                src={episode.image}
                alt={episode.title}
                width={157}
                height={129}
                className="rounded-sm object-cover"
              />
              <div>
                <div className="flex items-center text-[12px] text-[#6B7280] space-x-2 uppercase mb-2">
                  <span>{episode.date}</span>
                  <span>• {episode.duration}</span>
                </div>
                <h3 className="text-[20px] font-bold">{episode.title}</h3>
                <p className="text-[#6B7280] text-[15px] font-medium mt-2 max-w-full lg:max-w-[607px]">
                  {episode.description}
                </p>

                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handlePlay(episode.title)}
                    className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center"
                  >
                    <Play
                      className="w-[26px] h-[26px] text-white"
                      fill="white"
                    />
                  </button>
                  <button
                    onClick={handleSchedule}
                    className="bg-[#E1E1E1] rounded-full w-10 h-10 flex items-center justify-center"
                  >
                    <ScheduleEpisodeIcon />
                  </button>
                  <button
                    onClick={handleShare}
                    className="bg-[#E1E1E1] rounded-full w-10 h-10 flex items-center justify-center"
                  >
                    <ShareEpisodeIcon />
                  </button>
                  <button
                    onClick={handleGroup}
                    className="bg-[#E1E1E1] rounded-full w-10 h-10 flex items-center justify-center"
                  >
                    <GroupEpisodeIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-[#DCDCDC] my-6"></div>
          </motion.div>
        ))}

        {/* Pagination */}
        <div className="flex items-center justify-start space-x-2 mt-6">
          <button className="w-6 h-6 rounded flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
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
          </button>
          {[1, 2, 3, 4, 5, "...", 8].map((page, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded flex items-center justify-center ${
                page === 1 ? "bg-black text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-6 h-6 rounded flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Box */}
      <div className="w-full lg:w-[344px] relative flex flex-col items-center gap-6">
        <div className="relative w-full h-[489px]">
          <Image
            src="/images/podcastPage/mtnAdvert.png"
            alt="MTN Advert"
            width={344}
            height={489}
            className="w-full object-cover"
          />
        </div>
        <div className="relative w-full h-[330px]">
          <Image
            src="/images/podcastPage/DominoAdvert.png"
            alt="Domino's Pizza"
            width={340}
            height={330}
            className="w-full object-cover"
          />
        </div>
        <span className="absolute top-[-20px] right-0 text-[#6B7280] text-[12px] uppercase">
          Advertisement
        </span>
      </div>
    </div>
  );
};

export default PodcastEpisodes;
