"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const NextEpisode = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white py-10 px-6 sm:px-10 lg:px-20"
    >
      <span className="text-[14px] font-[800]">NEXT EPISODES IN QUEUE</span>
      <div className="h-[1px] w-full lg:w-[846px] bg-[#DCDCDC] mt-6"></div>

      <div className="flex flex-wrap justify-start gap-6 mt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-full sm:w-[317px] h-[424px]"
        >
          <div className="relative w-full h-[288px] mx-auto">
            <Link href="#" className=" rounded-lg overflow-hidden block">
              <Image
                src="/images/nextEpisode/nextEpisode1.png"
                alt="The Future of Work: Embracing Remote and Hybrid Workforces"
                className="opacity-90"
                width={300}
                height={288}
                style={{ alignContent: "end" }}
              />
            </Link>
            <div className="bg-white w-full h-[136px]">
              <div className="flex gap-[10px] items-center pt-5">
                <div className="bg-red-500 rounded-full w-[46px] h-[46px] flex items-center justify-center ml-[-18px]">
                  <Play className="w-[26px] h-[26px] text-white" fill="white" />
                </div>
                <h4 className="w-[240px] text-[18px] font-[600] text-black">
                  Relationship Button - Starting Afresh as a Widow
                </h4>
              </div>
              <div className="flex flex-row gap-[10px] ml-10 mt-5">
                <p className="text-[13px] font-[500] text-[#979797] ">
                  Sept 7, 2023
                </p>
                <div className="w-[1px] h-[12px] bg-[#000] mt-1.5"></div>
                <p className="text-[13px] font-[500] text-[#979797]">
                  {" "}
                  35 mins
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Episode 2: Compatibility in Relationship */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full sm:w-[317px] h-[424px]"
        >
          <div className="relative w-full h-[288px] mx-auto">
            <Link href="#" className="rounded-lg overflow-hidden block">
              <Image
                src="/images/nextEpisode/nextEpisode2.png"
                alt="The Future of Work: Embracing Remote and Hybrid Workforces"
                className="opacity-90"
                width={300}
                height={288}
                style={{ alignContent: "end" }}
              />
            </Link>
            <div className="bg-white w-full h-[136px]">
              <div className="flex gap-[10px] items-center pt-8">
                <div className="bg-red-500 rounded-full w-[46px] h-[46px] flex items-center justify-center ml-[-18px]">
                  <Play className="w-[26px] h-[26px] text-white" fill="white" />
                </div>
                <h4 className="w-[240px] text-[18px] font-[600] text-black">
                  Coping with Grief (Survival Tips)
                </h4>
              </div>
              <div className="flex flex-row gap-[10px] ml-10 mt-5">
                <p className="text-[13px] font-[500] text-[#979797] ">
                  Sept 5, 2023
                </p>
                <div className="w-[1px] h-[12px] bg-[#000] mt-1.5"></div>
                <p className="text-[13px] font-[500] text-[#979797]">
                  {" "}
                  55 mins
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NextEpisode;
