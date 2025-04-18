"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, Gift } from "lucide-react";
import { motion } from "framer-motion";

const categoryCards = [
  { image: "/images/news/news.png", title: "Fitness Focus" },
  { image: "/images/news/new2.png", title: "Fitness Focus" },
  { image: "/images/news/new3.png", title: "Fitness Focus" },
  { image: "/images/news/new4.png", title: "Fitness Focus" },
  { image: "/images/news/news5.png", title: "Fitness Focus" },
];

const TechCategory = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardHover = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-[50px] py-[40px] bg-white">
      <div className="flex items-center justify-between mt-10 mb-4">
        <motion.h3
          className="text-[18px] sm:text-[20px] font-semibold text-[#333] flex items-center"
          {...fadeIn}
          animate={{
            ...fadeIn.animate,
            transition: { ...fadeIn.animate.transition, delay: 0.2 },
          }}
        >
          <span className="inline-block w-[5px] h-[22px] bg-[#EF3E23] rounded-sm mr-2"></span>
          Tech, Sport & Business
        </motion.h3>

        <motion.div
          {...fadeIn}
          animate={{
            ...fadeIn.animate,
            transition: { ...fadeIn.animate.transition, delay: 0.4 },
          }}
        >
          <Link href="/categories">
            <button
              className="w-[100px] sm:w-[110px] h-[30px] sm:h-[33px] flex items-center gap-1 text-[#7A27FB] text-[14px] sm:text-[15px] font-medium 
              border border-[#7A27FB] rounded-full px-4 py-2 hover:bg-[#f3e9ff] transition-colors mr-2 sm:mr-4 md:mr-[120px]"
            >
              View all <span className="text-[14px] sm:text-[15px]">{">"}</span>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-5 justify-center sm:justify-start">
        {categoryCards.map((card, idx) => (
          <motion.div
            key={idx}
            className="w-full sm:w-[240px] bg-white rounded-lg shadow-sm p-[12px] hover:shadow-md"
            {...fadeIn}
            animate={{
              ...fadeIn.animate,
              transition: {
                ...fadeIn.animate.transition,
                delay: 0.6 + idx * 0.2,
              },
            }}
            whileHover="hover"
            variants={cardHover}
          >
            <div className="w-full h-[200px] sm:h-[234px] bg-gray-200 rounded overflow-hidden">
              <Image
                src={card.image || "/images/news/categoryCards.png"}
                alt={card.title}
                width={223}
                height={234}
                className="object-cover"
              />
            </div>
            <h4 className="mt-3 text-[16px] sm:text-[18px] font-semibold text-[#2C2C2C]">
              {card.title}
            </h4>
            <div className="flex gap-3 mt-3">
              <Share2 className="w-[22px] h-[22px] p-[5px] bg-[#E4E4E4] rounded-full text-[#595959]" />
              <Gift className="w-[22px] h-[22px] p-[5px] bg-[#E4E4E4] rounded-full text-[#595959]" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechCategory;
