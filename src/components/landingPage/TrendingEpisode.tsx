"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGetTrendingEpisode } from "@/API/TrendingEpisodesAPI";

interface ApiPodcast {
  id: string;
  title: string;
  picture_url: string;
  episode_count: number;
}

interface PodcastCard {
  id?: string;
  src: string;
  alt: string;
  episodes: string;
  title: string;
  href: string;
}

const TrendingPodcasts = () => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isMinLoading, setIsMinLoading] = useState<boolean>(true);
  const cardsToShow = 4;
  const cardWidth = 288 + 16;

  const fallbackCards: PodcastCard[] = [
    {
      src: "/images/trending/trending1.png",
      alt: "Hope For The Widow",
      episodes: "8 EPISODES",
      title: "Hope For The Widow",
      href: "#",
    },
    {
      src: "/images/trending/trending2.png",
      alt: "Policy Sphere by Agora",
      episodes: "22 EPISODES",
      title: "Policy Sphere by Agora",
      href: "#",
    },
    {
      src: "/images/trending/trending3.png",
      alt: "The Harmonised Life",
      episodes: "18 EPISODES",
      title: "The Harmonised Life",
      href: "#",
    },
    {
      src: "/images/trending/trending4.png",
      alt: "Lifestyle Central",
      episodes: "12 EPISODES",
      title: "Lifestyle Central",
      href: "#",
    },
    {
      src: "/images/trending/trending4.png",
      alt: "Lifestyle Central",
      episodes: "12 EPISODES",
      title: "Lifestyle Central",
      href: "#",
    },
    {
      src: "/images/trending/trending4.png",
      alt: "Lifestyle Central",
      episodes: "12 EPISODES",
      title: "Lifestyle Central",
      href: "#",
    },
    {
      src: "/images/trending/trending5.png",
      alt: "Wellness Hub",
      episodes: "35 EPISODES",
      title: "Wellness Hub",
      href: "#",
    },
  ];

  const { data, isLoading, isError } = useGetTrendingEpisode();
  const podcasts: ApiPodcast[] = data?.data || [];

  const displayCards: PodcastCard[] =
    !isLoading && !isError && podcasts.length > 0
      ? podcasts.map((podcast: ApiPodcast) => ({
          id: podcast.id,
          src: podcast.picture_url,
          alt: podcast.title,
          episodes: podcast.episode_count
            ? `${podcast.episode_count} EPISODES`
            : "EPISODE",
          title: podcast.title,
          href: `/podcasts/${podcast.id}`,
        }))
      : fallbackCards;

  const totalCards = displayCards.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMinLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + cardsToShow < totalCards) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="px-20 py-10 bg-white">
      <h2 className="text-[24px] font-[700] mb-2">Trending this week</h2>
      <div className="flex items-center mb-4">
        <div className="w-1 h-3 bg-red-600 mr-1"></div>
        <span className="text-gray-600 font-medium">Featured Podcasts</span>
      </div>

      <div className="relative overflow-hidden">
        {isMinLoading || isLoading ? (
          <div className="flex justify-center items-center h-[424px] text-gray-600 text-lg font-medium">
            Loading podcasts...
          </div>
        ) : (
          <>
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${startIndex * cardWidth}px)` }}
            >
              {displayCards.map((card: PodcastCard, idx: number) => (
                <Link
                  key={card.id || idx}
                  href={card.href}
                  className="relative w-[288px] h-[424px] flex-shrink-0 animate-fadeIn hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <Image
                    src={card.src || "/images/trending/fallback.png"}
                    alt={card.alt}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-80 rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/images/trending/fallback.png";
                      console.warn(
                        `Failed to load image for "${card.title}": ${card.src}`
                      );
                    }}
                  />
                  <div className="absolute bottom-0 w-full text-white bg-gradient-to-t from-black to-transparent p-2 rounded-b-lg">
                    <p className="text-sm font-medium">{card.episodes}</p>
                    <h4 className="text-lg font-semibold">{card.title}</h4>
                  </div>
                </Link>
              ))}
            </div>

            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              disabled={startIndex === 0}
              className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-black rounded-full p-2 transition-opacity ${
                startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={startIndex + cardsToShow >= totalCards}
              className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-black rounded-full p-2 transition-opacity ${
                startIndex + cardsToShow >= totalCards
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}
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
          animation: fadeIn 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TrendingPodcasts;
