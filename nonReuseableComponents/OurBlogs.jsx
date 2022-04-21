import React from "react";
import SectionHeader from "../reusableComponents/SectionHeader";
import OurBlog from "./OurBlog";

export default function OurBlogs() {
  return (
    <div className="my-10">
        <SectionHeader p1={'Our'} p2={'Blogs'} />
      
      <div className="md:flex md:space-x-5 justify-center mx-auto w-[89%]">
        {[...Array(3)].map((_, i) => (
          <OurBlog Src={`https://picsum.photos/300/${300 + i}`} />
        ))}
      </div>
    </div>
  );
}
