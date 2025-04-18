"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import PodcastList from "./components/PodcastList";
import Pagination from "./components/Pagination";

interface Podcast {
  title: string;
  episode: string;
  date: string;
  duration: string;
  image: string;
  popularity: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const menuVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
};

const AllPodcasts = () => {
  const initialPodcasts: Podcast[] = [
    {
      title: "FITNESS FOCUS",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 29, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast1.png",
      popularity: 95,
    },
    {
      title: "AUNTIE SHAZ",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 29, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast2.png",
      popularity: 80,
    },
    {
      title: "FITNESS FOCUS",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 28, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast3.png",
      popularity: 90,
    },
    {
      title: "FITNESS FOCUS",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 27, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast4.png",
      popularity: 85,
    },
    {
      title: "FITNESS FOCUS",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 26, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast5.png",
      popularity: 88,
    },
    {
      title: "FITNESS FOCUS",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 25, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast6.png",
      popularity: 92,
    },
    {
      title: "FITNESS FOCUS",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 24, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast7.png",
      popularity: 87,
    },
    {
      title: "FITNESS FOCUS",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 23, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast8.png",
      popularity: 89,
    },
    {
      title: "FITNESS FOCUS",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 22, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast9.png",
      popularity: 91,
    },
    {
      title: "FITNESS FOCUS",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 21, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast10.png",
      popularity: 86,
    },
    {
      title: "FITNESS FOCUS",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 20, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast1.png",
      popularity: 93,
    },
    {
      title: "FITNESS FOCUS",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 19, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast2.png",
      popularity: 84,
    },
    {
      title: "FITNESS FOCUS",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 18, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast3.png",
      popularity: 94,
    },
    {
      title: "FITNESS FOCUS",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 17, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast4.png",
      popularity: 83,
    },
    {
      title: "FITNESS FOCUS",
      episode: "EPT12: Cardio Vascular Exercise Part 3",
      date: "AUG 16, 2023",
      duration: "45 MINS",
      image: "/images/categories/allPodcast5.png",
      popularity: 96,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<"Most Popular" | "Recent">(
    "Most Popular"
  );
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [categoryOption, setCategoryOption] = useState<string>("All");
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const podcastsPerPage = 10;
  const categories = ["All", "Fitness Focus", "Auntie Shaz"];

  // Sorting and filtering function
  const processPodcasts = (
    podcasts: Podcast[],
    sortOption: "Most Popular" | "Recent",
    categoryOption: string
  ): Podcast[] => {
    let filtered = [...podcasts];
    if (categoryOption !== "All") {
      filtered = podcasts.filter((podcast) => podcast.title === categoryOption);
    }
    if (sortOption === "Most Popular") {
      return filtered.sort((a, b) => b.popularity - a.popularity);
    } else if (sortOption === "Recent") {
      return filtered.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
    }
    return filtered;
  };

  const processedPodcasts = processPodcasts(
    initialPodcasts,
    sortOption,
    categoryOption
  );
  const totalPages = Math.ceil(processedPodcasts.length / podcastsPerPage);
  const indexOfLastPodcast = currentPage * podcastsPerPage;
  const indexOfFirstPodcast = indexOfLastPodcast - podcastsPerPage;
  const currentPodcasts = processedPodcasts.slice(
    indexOfFirstPodcast,
    indexOfLastPodcast
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const toggleSortMenu = () => setIsSortMenuOpen(!isSortMenuOpen);
  const handleSortSelect = (option: "Most Popular" | "Recent") => {
    setSortOption(option);
    setIsSortMenuOpen(false);
    setCurrentPage(1);
  };

  const toggleCategoryMenu = () => setIsCategoryMenuOpen(!isCategoryMenuOpen);
  const handleCategorySelect = (option: string) => {
    setCategoryOption(option);
    setIsCategoryMenuOpen(false);
    setCurrentPage(1);
  };

  return (
    <motion.div
      className="bg-white py-6 sm:py-10 px-4 sm:px-8 md:px-12 lg:px-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Heading and Filters */}
      <motion.div className="mb-6" variants={cardVariants}>
        <h2 className="text-[#5A5A5A] text-[28px] font-[800] uppercase mb-3">
          All Podcasts
        </h2>
        <div className="h-[1px] w-[1400px] bg-[#DCDCDC] mb-6"></div>

        <div className="flex flex-wrap space-x-4">
          <div className="flex items-center relative">
            <span className="text-[#6B7280] text-[14px] mr-2">Sort by:</span>
            <motion.div
              className="flex items-center text-[#6B7280] text-[14px] cursor-pointer"
              onClick={toggleSortMenu}
              whileHover={{ color: "#374151" }}
            >
              {sortOption}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
            {isSortMenuOpen && (
              <motion.div
                className="absolute top-8 left-0 bg-white shadow-md rounded-md z-10"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
              >
                <div
                  className="px-4 py-2 text-[#6B7280] text-[14px] hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortSelect("Most Popular")}
                >
                  Most Popular
                </div>
                <div
                  className="px-4 py-2 text-[#6B7280] text-[14px] hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortSelect("Recent")}
                >
                  Recent
                </div>
              </motion.div>
            )}
            <div className="w-[1px] h-[14px] bg-[#979797] ml-5"></div>
          </div>
          <div className="flex items-center relative">
            <span className="text-[#6B7280] text-[14px] mr-2">
              Sort by category:
            </span>
            <motion.div
              className="flex items-center text-[#6B7280] text-[14px] cursor-pointer"
              onClick={toggleCategoryMenu}
              whileHover={{ color: "#374151" }}
            >
              {categoryOption}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
            {isCategoryMenuOpen && (
              <motion.div
                className="absolute top-8 left-0 bg-white shadow-md rounded-md z-10"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
              >
                {categories.map((category) => (
                  <div
                    key={category}
                    className="px-4 py-2 text-[#6B7280] text-[14px] hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      <PodcastList podcasts={currentPodcasts} />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        onPageClick={handlePageClick}
      />

      <motion.div
        className="h-[1px] w-[1400px] bg-[#DCDCDC] mt-6"
        variants={cardVariants}
      />
    </motion.div>
  );
};

export default AllPodcasts;
