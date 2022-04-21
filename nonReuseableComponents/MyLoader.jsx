import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader  className="w-[95%]  mx-auto mt-5"
    speed={593}
    viewBox="0 0 500 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect className="w-40 h-24" x="0" y="0" rx="3" ry="3"  /> 
    <rect className="w-40 h-14" x="0" y="100" rx="3" ry="3" /> 
    <rect className="w-20 h-36" x="190" y="7" rx="6" ry="6"/> 
    <rect className="w-20 h-36" x="280" y="7" rx="6" ry="6"/> 
    <rect className="w-20 h-36" x="370" y="7" rx="6" ry="6"/> 
    <circle cx="310" cy="155" r="3" />
    <circle cx="322" cy="155" r="3" />
    <circle cx="334" cy="155" r="3" />
  </ContentLoader>
)

export default MyLoader