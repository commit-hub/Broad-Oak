import React from "react";
import Image from "next/image";
import { logoBOak } from "../public/Assets/images";
export default function Doctors({ Src, Name }) {
  return (
    <div className="relative mx-1 h-[413px] w-full rounded-xl md:rounded-2xl overflow-hidden">
      <Image className="w-full h-full" src={Src} layout='fill'/>
      <div className="absolute bottom-0 card-text-background w-full h-1/6 flex items-center justify-center text-white text-lg font-semibold">
        <p>{Name}</p>
      </div>
    </div>
  );
}
