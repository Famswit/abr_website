"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const EditorsPicks = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideUp = {
    initial: { opacity: 0, y: 20 },
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
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10">
      <motion.h2 className="text-[24px] font-[700] mb-2" {...fadeIn}>
        EDITOR&#39;S PICKS
      </motion.h2>
      <motion.div
        className="flex items-center mb-4"
        {...fadeIn}
        animate={{
          ...fadeIn.animate,
          transition: { ...fadeIn.animate.transition, delay: 0.2 },
        }}
      >
        <div className="w-1 h-3 bg-red-600 mr-1"></div>
        <span className="text-gray-600 font-medium text-[14px] sm:text-[16px]">
          Featured Episodes
        </span>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        <motion.div className="relative w-full md:w-1/2" {...slideUp}>
          <motion.div whileHover="hover" variants={cardHover}>
            <Link href="#" className="relative block">
              <div>
                <Image
                  src="/images/Editor1.png"
                  alt="Bridging the Financing Gap in Nigeria’s off-grid sector"
                  className="opacity-80 object-cover"
                  width={670}
                  height={561}
                />
              </div>

              <div className="absolute bottom-0 w-full text-white bg-black/50 p-2">
                <div className="flex gap-[10px] items-center mb-2">
                  <div className="bg-red-500 rounded-full w-[46px] h-[46px] flex items-center justify-center ml-3">
                    <Play
                      className="w-[26px] h-[26px] text-white"
                      fill="white"
                    />
                  </div>
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold">
                    Bridging the Financing Gap in Nigeria’s off-grid sector
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              className="w-full sm:w-[317px] h-auto sm:h-[424px]"
              {...fadeIn}
              animate={{
                ...fadeIn.animate,
                transition: { ...fadeIn.animate.transition, delay: 0.4 },
              }}
            >
              <motion.div whileHover="hover" variants={cardHover}>
                <div className="relative w-full sm:w-[300px] h-[200px] sm:h-[288px] mx-auto sm:ml-4.5">
                  <Link
                    href="#"
                    className="bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <Image
                      src="/images/RemotePics.png"
                      alt="The Future of Work: Embracing Remote and Hybrid Workforces"
                      className="opacity-90"
                      width={300}
                      height={288}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                  <div className="bg-white w-full sm:w-[300px] h-[136px]">
                    <div className="flex gap-[10px] items-center pt-5">
                      <div className="bg-red-500 rounded-full w-[96px] h-[46px] flex items-center justify-center ml-[-18px]">
                        <Play
                          className="w-[26px] h-[26px] text-white"
                          fill="white"
                        />
                      </div>
                      <h4 className="text-[16px] sm:text-[18px] text-black font-semibold">
                        The Future of Work: Embracing Remote and Hybrid
                        Workforces
                      </h4>
                    </div>
                    <div className="flex flex-row gap-[10px] ml-10">
                      <p className="text-[12px] sm:text-[13px] font-[500] text-black">
                        Sept 7, 2023
                      </p>
                      <div className="w-[1px] h-[12px] bg-[#000] mt-1.5"></div>
                      <p className="text-[12px] sm:text-[13px] font-[500] text-black">
                        35 mins
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Episode 2: Compatibility in Relationship */}
            <motion.div
              className="w-full sm:w-[317px] h-auto sm:h-[424px]"
              {...fadeIn}
              animate={{
                ...fadeIn.animate,
                transition: { ...fadeIn.animate.transition, delay: 0.6 },
              }}
            >
              <motion.div whileHover="hover" variants={cardHover}>
                <div className="relative w-full sm:w-[300px] h-[200px] sm:h-[288px] mx-auto sm:ml-4.5">
                  <Link
                    href="#"
                    className="bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <Image
                      src="/images/Rectangle 40.png"
                      alt="Compatibility in Relationship"
                      className="opacity-90"
                      width={300}
                      height={288}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                  <div className="bg-white w-full sm:w-[300px] h-[136px]">
                    <div className="flex gap-[10px] items-center pt-8">
                      <div className="bg-red-500 rounded-full w-[46px] h-[46px] flex items-center justify-center ml-[-18px]">
                        <Play
                          className="w-[26px] h-[26px] text-white"
                          fill="white"
                        />
                      </div>
                      <h4 className="text-[16px] sm:text-[18px] text-black font-semibold">
                        Compatibility in Relationship
                      </h4>
                    </div>
                    <div className="flex flex-row gap-[10px] ml-10">
                      <p className="text-[12px] sm:text-[13px] font-[500] text-black">
                        Sept 5, 2023
                      </p>
                      <div className="w-[1px] h-[12px] bg-[#000] mt-1.5"></div>
                      <p className="text-[12px] sm:text-[13px] font-[500] text-black">
                        55 mins
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Advertisement */}
          <div className="w-full relative flex flex-col gap-[10px] justify-center items-center py-0">
            <motion.span
              className="absolute top-1 right-4 text-[11px]"
              {...fadeIn}
            >
              ADVERTISEMENT
            </motion.span>
            <Link href="/">
              <motion.div>
                <Image
                  src="/images/advert/advertPics.PNG"
                  alt="Africa Business Radio"
                  className="opacity-80 object-cover mt-[18px]"
                  width={635}
                  height={99}
                  {...slideUp}
                />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPicks;
