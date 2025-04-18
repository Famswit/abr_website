"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Info } from "lucide-react";
import { motion } from "framer-motion";

const NeverStopListening = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonHover = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const imageHover = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-[10px] py-[40px] bg-white flex justify-center">
      <div className="bg-[#F6E8E8] w-full max-w-[1418px] h-auto lg:h-[486px] flex justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto w-full gap-12 lg:gap-20 px-4 py-8">
          <motion.div
            className="w-full lg:w-[50%]"
            {...fadeIn}
            animate={{
              ...fadeIn.animate,
              transition: { ...fadeIn.animate.transition, delay: 0.2 },
            }}
          >
            <h2 className="text-[24px] sm:text-[28px] lg:text-4xl font-[800] mb-3">
              Never stop listening!
            </h2>
            <p className="w-full max-w-[362px] text-[18px] sm:text-[20px] lg:text-[24px] font-[500] mb-4">
              Every episodes is a journey you don’t wanna miss out on.
            </p>
            <p className="w-full max-w-[487px] text-[#282828] text-[14px] sm:text-[15px] lg:text-[16px] font-[500] mt-8 lg:mt-16">
              Get the latest headlines and unique ABR stories, sent every
              weekday.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-3 flex items-center gap-2 flex-wrap"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#D9D9D9] px-4 py-3 rounded-[3px] w-[280px] sm:w-[300px] lg:w-[336px] h-[40px] sm:h-[45px] lg:h-[49px] text-sm placeholder:text-[#666]"
                required
              />
              <motion.button
                type="submit"
                className="w-[100px] sm:w-[110px] lg:w-[127px] h-[40px] sm:h-[45px] lg:h-[49px] bg-[#C62B1E] text-white text-sm font-semibold px-5 py-1 rounded-[3px] hover:bg-[#a72519] transition"
                whileHover="hover"
                variants={buttonHover}
              >
                Get me in
              </motion.button>
              <Info className="w-4 sm:w-5 h-4 sm:h-5 text-gray-700" />
            </form>
          </motion.div>

          {/* Right image group */}
          <motion.div
            className="relative w-full lg:w-[50%] flex justify-center items-center"
            {...fadeIn}
            animate={{
              ...fadeIn.animate,
              transition: { ...fadeIn.animate.transition, delay: 0.4 },
            }}
          >
            <div className="relative w-[320px] sm:w-[360px] lg:w-[380px] h-[320px] sm:h-[360px] lg:h-[380px]">
              <motion.div
                className="absolute top-0 left-0 w-[320px] sm:w-[260px] lg:w-[404px] h-[320px] sm:h-[260px] lg:h-[404px] rounded-full overflow-hidden"
                whileHover="hover"
                variants={imageHover}
              >
                <Image
                  src="/images/listen/listen2.png"
                  alt="Girl Listening"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>

              <motion.div
                className="absolute bottom-[-24px] sm:bottom-[90px] lg:bottom-[-30px] right-[200px] sm:right-[300px] lg:right-[250px] w-[180px] sm:w-[100px] lg:w-[218px] h-[180px] sm:h-[100px] lg:h-[218px] rounded-full overflow-hidden shadow-md"
                whileHover="hover"
                variants={imageHover}
              >
                <Image
                  src="/images/listen/listen1.png"
                  alt="Guy with laptop"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>

              <div className="absolute left-[-80px] sm:left-[-90px] lg:left-[-100px] bottom-[60px] sm:bottom-[70px] lg:bottom-[80px] w-[50px] sm:w-[60px] lg:w-[68.81px] h-[50px] sm:h-[60px] lg:h-[68.81px]">
                <Image
                  src="/images/listen/listen3.png"
                  alt="Wave icon"
                  width={30}
                  height={30}
                />
              </div>

              <div className="absolute top-[20px] sm:top-[25px] lg:top-[30px] right-[-20px] sm:right-[-22px] lg:right-[-25px] w-[40px] sm:w-[45px] lg:w-[50px] h-[40px] sm:h-[45px] lg:h-[50px]">
                <Image
                  src="/images/listen/listen4.png"
                  alt="Logo badge"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NeverStopListening;
