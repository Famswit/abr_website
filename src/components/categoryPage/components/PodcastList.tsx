import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Define TypeScript interface for a single podcast
interface Podcast {
  title: string;
  episode: string;
  date: string;
  duration: string;
  image: string;
  popularity: number;
}

// Define props type for PodcastList
interface PodcastListProps {
  podcasts: Podcast[];
}

// Shared utilities (icons and animation variants)
const Play = ({ className, fill }: { className?: string; fill?: string }) => (
  <svg className={className} fill={fill} viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ShareEpisodeIcon = () => (
  <svg
    className="w-5 h-5 text-gray-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
    />
  </svg>
);

const GroupEpisodeIcon = () => (
  <svg
    className="w-5 h-5 text-gray-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

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
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.98 },
};

const iconVariants = {
  hover: { scale: 1.2, rotate: 10 },
  tap: { scale: 0.9 },
};

// PodcastList Component
const PodcastList = ({ podcasts }: PodcastListProps) => (
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-8 lg:gap-15 justify-items-center"
    variants={containerVariants}
  >
    {podcasts.map((podcast, index) => (
      <motion.div
        key={index}
        className="flex flex-col items-center"
        variants={cardVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <motion.div
          className="relative w-[223px] h-[187px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Image
            src={podcast.image}
            alt={podcast.title}
            width={223}
            height={346}
            className="rounded-sm"
            onError={(e) => {
              e.currentTarget.src = "/images/fallback.png";
              console.warn(
                `Failed to load image for "${podcast.title}": ${podcast.image}`
              );
            }}
          />
        </motion.div>
        <motion.h3
          className="text-black text-[18px] font-[700] mt-3 text-center"
          variants={cardVariants}
        >
          {podcast.title}
        </motion.h3>
        <motion.p
          className="w-[229px] h-[49px] text-[#282828] text-[15px] font-[500] mt-4 text-center"
          variants={cardVariants}
        >
          {podcast.episode}
        </motion.p>
        <motion.div
          className="flex items-center space-x-2 mt-2"
          variants={cardVariants}
        >
          <span className="text-[#6B7280] text-[12px] uppercase">
            {podcast.date}
          </span>
          <span className="text-[#6B7280] text-[12px] uppercase">
            • {podcast.duration}
          </span>
        </motion.div>
        <motion.div
          className="flex items-center space-x-[10px] mt-4"
          variants={containerVariants}
        >
          <motion.div
            className="bg-red-500 rounded-full w-[30px] h-[30px] flex items-center justify-center"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Play className="w-[26px] h-[26px] text-white" fill="white" />
          </motion.div>
          <motion.div
            className="bg-[#E1E1E1] rounded-full w-[30px] h-[30px] flex items-center justify-center"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <ShareEpisodeIcon />
          </motion.div>
          <motion.div
            className="bg-[#E1E1E1] rounded-full w-[30px] h-[30px] flex items-center justify-center"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <GroupEpisodeIcon />
          </motion.div>
        </motion.div>
      </motion.div>
    ))}
  </motion.div>
);

export default PodcastList;
