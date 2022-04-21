import React from "react";
import { FiMapPin, FiMail, FiPhone, FiPrinter, FiZap } from "react-icons/fi";
import SectionHeader from "../reusableComponents/SectionHeader";
export default function OurLocation() {
  return (
    <div>
        <SectionHeader p1={'Our'} p2={'Location'} />
      
      <div className="md:flex w-[86%] justify-between mx-auto my-10">
        <div className="md:w-2/5">
          <svg width="0" height="0">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#4fcffd" offset="0%" />
              <stop stopColor="#7b61ff" offset="100%" />
            </linearGradient>
          </svg>
          <div className="md:flex flex-wrap text-base">
            <div className="md:w-1/2 py-2">
              <div className="flex items-center font-bold text-xl">
                <FiMapPin
                  className="w-[15px] h-[15px]"
                  style={{ stroke: "url(#blue-gradient)" }}
                />
                <p className="px-1 text-theme">Address</p>
              </div>
              <p className="text-sm px-5">
                14 Broad Oak Drive, Cranbourne East, 3977
              </p>
            </div>
            <div className="w-1/2 py-2">
              <div className="flex items-center font-bold text-xl">
                <FiMail
                  className="w-[15px] h-[15px]"
                  style={{ stroke: "url(#blue-gradient)" }}
                />
                <p className="px-1 text-theme">Email</p>
              </div>
              <p className="text-sm px-5">Reception@broadoakmd.com.au</p>
            </div>
            <div className="w-1/2 py-2">
              <div className="flex items-center font-bold text-xl">
                <FiPhone
                  className="w-[15px] h-[15px]"
                  style={{ stroke: "url(#blue-gradient)" }}
                />
                <p className="px-1 text-theme">Phone</p>
              </div>
              <p className="text-sm px-5">5995-1000</p>
            </div>
            <div className="w-1/2 py-2">
              <div className="flex items-center font-bold text-xl">
                <FiPrinter
                  className="w-[15px] h-[15px]"
                  style={{ stroke: "url(#blue-gradient)" }}
                />
                <p className="px-1 text-theme">Fax</p>
              </div>
              <p className="text-sm px-5">5995-5136</p>
            </div>
            <div className="py-2">
              <div className="flex items-center font-bold text-xl">
                <FiZap
                  className="w-[15px] h-[15px]"
                  style={{ stroke: "url(#blue-gradient)" }}
                />
                <p className="px-1 text-theme">A/H Locum Services</p>
              </div>
              <p className="text-sm px-5">13-26-60</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 my-5 md:my-0 md:h-[350px]">
          <iframe
            className="w-full h-full Box-Shadow rounded-2xl hover:-translate-y-1 transition-all delay-75"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.6600073489285!2d145.300367615109!3d-38.101576979701285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad60fe4c591f4f7%3A0x940276861be2eb3c!2s14%20Broad%20Oak%20Dr%2C%20Cranbourne%20East%20VIC%203977%2C%20Australia!5e0!3m2!1sen!2s!4v1650006424593!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
