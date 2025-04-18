"use client";

import React from "react";
import Image from "next/image";

const GlobalPartners = () => {
  return (
    <div className="py-10 px-4 md:px-20 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Our Global Partners
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
        {[
          { src: "/images/partners/partner1.png", alt: "The World Bank" },
          { src: "/images/partners/partner17.png", alt: "Nieman Foundation" },
          { src: "/images/partners/partner2.png", alt: "NEDBANK" },
          { src: "/images/partners/partner3.png", alt: "Fledge" },
          {
            src: "/images/partners/partner4.png",
            alt: "Pan-African Parliament",
          },
          { src: "/images/partners/partner5.png", alt: "Business Day" },
          { src: "/images/partners/partner6.png", alt: "Impact Hub Lagos" },
          {
            src: "/images/partners/partner7.png",
            alt: "Africa Development Group",
          },
          { src: "/images/partners/partner8.png", alt: "MIC" },
          {
            src: "/images/partner9.png",
            alt: "Embassy of the United Arab Emirates",
          },
          { src: "/images/partner10.png", alt: "989 Workspaces" },
          { src: "/images/partner11.png", alt: "GE" },
          {
            src: "/images/partner12.png",
            alt: "South African Institute of Professional Accountants",
          },
          { src: "/images/partner13.png", alt: "ABSA" },
          { src: "/images/partner14.png", alt: "SAPN" },
        ].map((partner, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={partner.src || "/images/listen/partner.png"}
              alt={partner.alt}
              width={120}
              height={80}
              className="object-contain filter grayscale transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalPartners;
