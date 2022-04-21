import React from "react";
import Image from "next/image";
import { vector1, vector2 } from "../public/Assets/images";
export default function Welcome() {
  return (
    <div className="w-11/12 md:w-[89%] mx-auto my-12">
      <h1 className="text-xl md:text-[32px] font-bold w-fit mx-auto text-center">
        Welcome to the{" "}
        <span className="text-theme font-extrabold">Medical and Dental</span>{" "}
        Centre.
        <br /> Quality heathcare when you need us most
      </h1>
      <div className="flex justify-between relative mt-5">
        <div className="absolute right-0">
          <Image src={vector1} width={"70px"} height={"70px"} />
        </div>
        <div className="absolute left-0 -bottom-3 ">
          <Image src={vector2} width={"70px"} height={"70px"} />
        </div>
        {[...Array(3)].map((_, i) => (
          <div className="aboutBox welcome-card-size-lg m-2 rounded-xl hover:background-hover-theme relative overflow-hidden">
            <Image src={`https://picsum.photos/410/${248+i}`} layout="fill" />
            <div
              className="absolute top-0 left-0 w-full h-full flex flex-col justify-end background-theme transition-all text-white"
              style={{
                background:
                  "linear-gradient(90deg, rgba(123, 97, 255, 0.7) 0%, rgba(79, 207, 253, 0.7) 100%)",
              }}
            >
              <p className="question transition-all delay-100 mx-5 my-2">
                Have you had
                <span className="text-lg font-bold block question2 transition-all delay-500">
                  YOUR SKIN CHECKED?
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
