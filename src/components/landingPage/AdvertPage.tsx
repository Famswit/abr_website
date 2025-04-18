import React from "react";
import Image from "next/image";

const images = [
  "/images/advert/advert1.png",
  "/images/advert/advert2.png",
  "/images/advert/advert3.png",
];

const AdvertPage = () => {
  return (
    <div className="px-20 py-10 bg-white">
      <div className="flex justify-center items-center gap-16 flex-wrap">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-[285px] h-[255px] bg-gray-200 rounded-md overflow-hidden relative"
          >
            <Image
              src={src || "/images/advert/fallback.png"}
              alt={`Advert ${index + 1}`}
              width={285}
              height={255}
              className="rounded-sm object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertPage;
