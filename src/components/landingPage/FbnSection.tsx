"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const FbnSection = () => {
  return (
    <div className="w-full bg-white relative flex flex-col gap-[10px] justify-center items-center py-2">
      <span className="absolute top-4 right-43 text-[11px] animate-fade-in">
        ADVERTISEMENT
      </span>

      <Link href="/">
        <Image
          src="/images/FBN-ADVERT.PNG"
          alt="Africa Business Radio"
          width={1176}
          height={206}
          className="object-contain animate-slide-up mt-[30px]"
        />
      </Link>
    </div>
  );
};

export default FbnSection;
