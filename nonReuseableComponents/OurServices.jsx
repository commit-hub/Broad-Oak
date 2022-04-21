import React from "react";
import SectionHeader from "../reusableComponents/SectionHeader";
import Dentist from "./Dentist";

export default function OurServices() {
  return (
    <div className="my-10">
      <div className="w-[95%] mx-auto md:w-full flex justify-between items-center ">
        <SectionHeader p1={"Our"} p2={"Services"} />
        <div>
          <button className="text-theme border-theme rounded-full px-7 py-1 md:mx-20">
            View All
          </button>
        </div>
      </div>
      <div className="md:flex flex-wrap justify-center mx-auto">
        {[...Array(8)].map((_, i) => (
          <>
            <Dentist Src={`https://picsum.photos/200/${200 + i}`} />
            {i == 3 ? "" : ""}
          </>
        ))}
      </div>
    </div>
  );
}
