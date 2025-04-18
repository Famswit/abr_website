"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Share2, Gift, ChevronLeft, ChevronRight } from "lucide-react";
import { useGetLatestEpisode } from "@/API/LatestEpisodeAPI";

const NewlyAddedEpisodes = () => {
  const [page, setPage] = useState(0);
  const [isMinLoading, setIsMinLoading] = useState(true);
  const EPISODES_PER_PAGE = 5;

  const fallbackEpisodes = [
    {
      title: "Relationship Button - Starting Afresh as a Widow",
      date: "AUG 29, 2023",
      duration: "45 MINS",
      image: "/images/latest1.png",
    },
    {
      title: "Employee Well-being: Prioritising Mental Health in the Workplace",
      date: "AUG 29, 2023",
      duration: "45 MINS",
      image: "/images/latest3.png",
    },
    {
      title: "Tech for Good: Using Innovation to Drive Social Change",
      date: "AUG 30, 2023",
      duration: "42 MINS",
      image: "/images/latest4.png",
    },
    {
      title: "Youth & Innovation: Bridging Gaps through Technology",
      date: "AUG 31, 2023",
      duration: "38 MINS",
      image: "/images/latest5.png",
    },
    {
      title: "Breaking Barriers: Women in Leadership and Change",
      date: "SEP 1, 2023",
      duration: "50 MINS",
      image: "/images/latest6.png",
    },
    {
      title: "Breaking Barriers: Women in Leadership and Change",
      date: "SEP 1, 2023",
      duration: "50 MINS",
      image: "/images/latest6.png",
    },
    {
      title: "Breaking Barriers: Women in Leadership and Change",
      date: "SEP 1, 2023",
      duration: "50 MINS",
      image: "/images/latest6.png",
    },
  ];

  const { data, isLoading, isError } = useGetLatestEpisode();
  const episodes = data?.data || [];

  const displayEpisodes =
    !isLoading && !isError && episodes.length > 0
      ? episodes.map((episode) => ({
          id: episode.id,
          title: episode.title,
          date: new Date(episode.created_at)
            .toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
            .toUpperCase(),
          duration: episode.duration
            ? `${Math.round(episode.duration / 60)} MINS`
            : "N/A",
          image: episode.image_url,
        }))
      : fallbackEpisodes;

  const totalPages = Math.ceil(displayEpisodes.length / EPISODES_PER_PAGE);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMinLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handlePrev = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const startIndex = page * EPISODES_PER_PAGE;
  const currentEpisodes = displayEpisodes.slice(
    startIndex,
    startIndex + EPISODES_PER_PAGE
  );

  return (
    <div className="px-20 py-10 bg-white">
      <h2 className="text-2xl font-bold mb-6">Newly added episodes</h2>

      <div className="relative overflow-hidden">
        {isMinLoading || isLoading ? (
          <div className="flex justify-center items-center h-[187px] text-gray-600 text-lg font-medium">
            Loading episodes...
          </div>
        ) : (
          <>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {currentEpisodes.map((episode, index) => (
                <div
                  key={episode.id || index}
                  className="w-[220px] shrink-0 mr-6 transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="relative w-full h-[187px] bg-gray-200 rounded-[3px] overflow-hidden">
                    <Image
                      src={episode.image || "/images/fallback.png"}
                      alt={episode.title}
                      width={223}
                      height={187}
                      className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.src = "/images/fallback.png";
                        console.warn(
                          `Failed to load image for "${episode.title}": ${episode.image}`
                        );
                      }}
                    />
                  </div>
                  <div className="mt-2 text-[13px] text-[#828282] flex items-center gap-1">
                    <span>{episode.date}</span>
                    <span className="mx-1">•</span>
                    <span>{episode.duration}</span>
                  </div>
                  <h4 className="text-[16px] font-semibold text-black leading-snug mt-[10px]">
                    {episode.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-[13px] font-[500] text-gray-500">
                      More Episodes
                    </span>
                    <Share2 className="w-[16.5px] h-[16.5px] text-gray-500 bg-[#E1E1E1] rounded-full p-1" />
                    <Gift className="w-[18px] h-[18px] text-gray-500 bg-[#E1E1E1] rounded-full p-1" />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-6 gap-4">
              <button
                onClick={handlePrev}
                disabled={page === 0}
                className={`p-2 rounded-full ${
                  page === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-black text-white"
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                disabled={page === totalPages - 1}
                className={`p-2 rounded-full ${
                  page === totalPages - 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-black text-white"
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewlyAddedEpisodes;
