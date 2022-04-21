import React from "react";

export default function SectionHeader(props) {
  return (
    <div>
      <div className="flex">
        <div className="background-app md:w-[103px] md:h-[33px] mt-2"></div>
        <div className="font-extrabold text-[32px] md:text-3xl ml-3">
          {props.p1}
          <br />
          <span className="text-theme text-[36px]">{props.p2}</span>
        </div>
      </div>
    </div>
  );
}
