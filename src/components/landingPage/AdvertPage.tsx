import React from 'react';
import Image from 'next/image';

const images = [
  '/images/advert1.png',
  '/images/advert2.png',
  '/images/advert3.png',
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
              src={src}
              alt={`Advert ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertPage;
