import React from "react";
import Image from "next/image";
export default function OurDoctor({ Src, Name, Designation }) {
  return (
    <div className="w-fit my-3 md:mx-3 hover:-translate-y-1 transition-all delay-75 cursor-pointer">
      <div className="rounded-2xl md:w-[250px]">
        <img className="rounded-t-2xl" src={Src} />
      </div>
      <div className="Box-Shadow rounded-b-2xl p-4 text-center">
        <h1>{Name}</h1>
        <p className="text-slate-400 text-sm">{Designation}</p>
      </div>
    </div>
  );
}
