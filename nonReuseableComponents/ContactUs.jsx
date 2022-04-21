import React, { useState } from "react";
import Image from "next/image";
import { MdLocationPin, MdWatchLater } from "react-icons/Md";
import { FaTooth } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import MyLoader from "./MyLoader";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Doctors from "./Doctors";
import { Doc, Strethoscope } from "../public/Assets/images";

export default function ContactUs() {
  const array = [
    "Dr Alter",
    "Dr Reckless",
    "Dr Bjerk",
    "Dr Brain",
    "Dr Strange",
    "Dr Savage",
    "Dr Wisdom",
  ];
  const [loader, setLoader] = useState(false);

  setTimeout(() => {
    setLoader(true);
  }, 10000);
  return (
    // flex
    <>
      {loader ? (
        <div className="my-5 md:flex w-11/12 mx-auto md:space-x-16">
          <div className="md:w-4/12">
            {/* w-[429px] h-[311px] */}
            <div
              style={{ boxShadow: "0 0 10px   rgba(0, 0, 0, 0.4)" }}
              className=" background-app text-white p-3 rounded-xl"
            >
              <div className="flex items-center font-medium justify-between">
                <p className="flex">
                  <MdLocationPin size="20px" />
                  Street Address Of Clinic
                </p>
                <p className="bg-white px-2 py-1 rounded-full">
                  <button
                    style={{ whiteSpace: "nowrap" }}
                    className="text-theme font-semibold"
                  >
                    Contact Us
                  </button>
                </p>
              </div>
              <p className="flex items-center font-semibold py-1">
                <MdWatchLater size="20px" />
                Opening Hours
              </p>
              <div className="text-[14px] px-5">
                <div className="flex justify-between py-1 ">
                  <p>
                    Monday
                    <br />
                    07:00 am - 08:00 pm
                  </p>
                  <div
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, transparent, #CCC, transparent)",
                    }}
                    className="w-[1.5px] h-7"
                  ></div>
                  <p>
                    Tuesday
                    <br />
                    07:00 am - 08:00 pm
                  </p>
                </div>
                <hr
                  style={{
                    border: "0px",
                    height: "2px",
                    backgroundImage:
                      "linear-gradient(to right, transparent, #CCC, transparent)",
                  }}
                />
                <div className="flex justify-between py-1">
                  <p>
                    Thursday
                    <br />
                    07:00 am - 08:00 pm
                  </p>
                  <div
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, transparent, #CCC, transparent)",
                    }}
                    className="w-[1.5px] h-7"
                  ></div>
                  <p>
                    Friday
                    <br />
                    07:00 am - 08:00 pm
                  </p>
                </div>
                <hr
                  style={{
                    border: "0px",
                    height: "2px",
                    backgroundImage:
                      "linear-gradient(to right, transparent, #CCC, transparent)",
                  }}
                />
                <div className="flex justify-between py-1">
                  <p>
                    Saturday
                    <br />
                    07:00 am - 08:00 pm
                  </p>
                  <div
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, transparent, #CCC, transparent)",
                    }}
                    className="w-[1.5px] h-7"
                  ></div>
                  <p>
                    Sunday
                    <br />
                    07:00 am - 08:00 pm
                  </p>
                </div>
                <div>
                  <hr
                    style={{
                      border: "0px",
                      height: "2px",
                      backgroundImage:
                        "linear-gradient(to right, transparent, #CCC, transparent)",
                    }}
                  />
                  <p className="py-1">Public Holiday</p>
                </div>
              </div>
            </div>
            {/* w-[429px] h-[225px] */}
            <div
              style={{ boxShadow: "0 0 10px   rgba(0, 0, 0, 0.4)" }}
              className=" background-app text-white p-3 rounded-xl my-3"
            >
              <p className="flex items-center font-semibold py-1">
                <FaTooth size="20px" />
                Dentist
              </p>
              <div className="text-[14px] px-5">
                <div className="flex justify-between py-1">
                  <p>
                    Monday
                    <br />
                    07:00 am - 08:00 pm
                  </p>
                  <div
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, transparent, #CCC, transparent)",
                    }}
                    className="w-[1.5px] h-7"
                  ></div>
                  <p>
                    Tuesday
                    <br />
                    07:00 am - 08:00 pm
                  </p>
                </div>
                <hr
                  style={{
                    border: "0px",
                    height: "2px",
                    backgroundImage:
                      "linear-gradient(to right, transparent, #CCC, transparent)",
                  }}
                />
                <div className="flex justify-between py-1">
                  <p>
                    Thursday
                    <br />
                    07:00 am - 08:00 pm
                  </p>
                  <div
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, transparent, #CCC, transparent)",
                    }}
                    className="w-[1.5px] h-7"
                  ></div>

                  <p>
                    Friday
                    <br />
                    07:00 am - 08:00 pm
                  </p>
                </div>
                {/* <hr
                  style={{
                    border: "0px",
                    height: "2px",
                    backgroundImage:
                      "linear-gradient(to right, transparent, #CCC, transparent)",
                  }}
                /> */}
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, transparent, #CCC, transparent)",
                  }}
                  className="w-full h-[2px]"
                ></div>

                <div className="flex justify-between py-1">
                  <p>
                    Saturday
                    <br />
                    07:00 am - 08:00 pm
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="self-center relative w-11/12 md:w-3/5 mx-auto">
            <Swiper
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
              navigation={true}
              autoplay={{
                delay: 2000,
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper"
            >
              {[...Array(8)].map((_, i) => (
                <SwiperSlide>
                  <Doctors Src={Doc} Name={"Dr. Zack"} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <div className="w-full h-full">
          <MyLoader />
        </div>
      )}
    </>
  );
}
