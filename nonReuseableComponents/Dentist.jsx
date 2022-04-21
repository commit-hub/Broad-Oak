import React from "react";
import Image from "next/image";
import { MdPhoneInTalk } from "react-icons/md";
export default function Dentist({ Src }) {
  return (
    <div className="md:w-[360px] background-app rounded-3xl mt-20 mx-4 py-3 hover:-translate-y-1 transition-all delay-75">
      {/* <img className="-mt-32" src='../public/Assets/nextButton.png'/> */}
      <div className="relative">
        <div className="w-full absolute -top-20">
          <img
            className="mx-auto w-28 h-28 border-8 border-white rounded-full"
            src={Src}
          />
        </div>
      </div>
      <div className="pt-12 pb-5 mx-auto w-fit text-white text-center">
        <h1 className="text-xl font-bold">Dentists</h1>
        <div className="flex items-center">
          <p className="text-lg pr-2">
            <MdPhoneInTalk />
          </p>
          <p>9955-1122</p>
        </div>
      </div>
      <div className="w-[95%] h-fit mx-auto pt-3 bg-white rounded-3xl">
        <p className="flex items-center font-semibold py-1 text-theme px-5">
          Opening hours
        </p>
        {/* <div className="flex justify-between space-x-2 py-1"> */}
        <div className="flex flex-col space-y-2 px-7 text-sm">
          <p className="flex justify-between space-x-2">
            <span>Monday</span>

            <span className="font-bold">07:00 am - 08:00 pm</span>
          </p>
          <div
            style={{
              border: "0px",
              padding: ".5px",
              backgroundImage:
                "linear-gradient(to right, transparent, #91a2d3, transparent)",
            }}
          ></div>
          <p className="flex justify-between space-x-2">
            <span>Tuesday</span>

            <span className="font-bold">07:00 am - 08:00 pm</span>
          </p>
          <hr
            style={{
              border: "0px",
              padding: ".5px",
              backgroundImage:
                "linear-gradient(to right, transparent, #91a2d3, transparent)",
            }}
          />
          <p className="flex justify-between space-x-2">
            <span>wednesday</span>

            <span className="font-bold">07:00 am - 08:00 pm</span>
          </p>
          <hr
            style={{
              border: "0px",
              padding: ".5px",
              backgroundImage:
                "linear-gradient(to right, transparent, #91a2d3, transparent)",
            }}
          />
          <p className="flex justify-between space-x-2">
            <span>thursday</span>

            <span className="font-bold">07:00 am - 08:00 pm</span>
          </p>
          <hr
            style={{
              border: "0px",
              padding: ".5px",
              backgroundImage:
                "linear-gradient(to right, transparent, #91a2d3, transparent)",
            }}
          />
          <p className="flex justify-between space-x-2">
            <span>friday</span>

            <span className="font-bold">07:00 am - 08:00 pm</span>
          </p>
          <hr
            style={{
              border: "0px",
              padding: ".5px",
              backgroundImage:
                "linear-gradient(to right, transparent, #91a2d3, transparent)",
            }}
          />
          <p className="flex justify-between space-x-2">
            <span>saturday</span>

            <span className="font-bold">07:00 am - 08:00 pm</span>
          </p>
        </div>
        <div className="flex justify-end">
          <button className="m-2 py-1 px-10  background-app text-white rounded-full">
            More
          </button>
        </div>
      </div>
    </div>
  );
}
