import React, { useState } from "react";
import Image from "next/image";
export default function OurBlog({ Src }) {
  const readMoreText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release";
  const defaultText =
    "Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do      eiusmod tem por incididunt ut labore et dolore magn a aliqua. Utenim ad minim veniam...";
  const [readText, setReadText] = useState("Read More");
  const [defText, setDefText] = useState(defaultText);
  function readingText() {
    if (readText == "Read More") {
      setReadText("Read Less");
      setDefText(readMoreText);
    } else {
      setReadText("Read More");
      setDefText(defaultText);
    }
  }
  return (
    <div className="mt-20 Box-Shadow rounded-lg hover:-translate-y-1 transition-all delay-75">
      <div className="relative py-3">
        <div className="absolute -top-12 w-full text-center">
          <Image
            className="rounded-lg mx-auto"
            src={Src}
            width="320px"
            height="100px"
          />
        </div>
        <div className="pt-12 w-10/12 mx-auto px-1">
          <p className="text-xs text-slate-400">Aug 03, 2021</p>
          <h1 className="font-bold">Lorem ipsum dolor sit</h1>
          <p className="text-sm text-slate-400">{defText}</p>
        </div>
        <div className="flex justify-end px-5 md:w-[380px] ">
          <button className=" text-theme" onClick={() => readingText()}>
            {readText}
          </button>
        </div>
      </div>
    </div>
  );
}
