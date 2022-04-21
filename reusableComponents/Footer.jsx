import React from "react";
import Image from "next/image";
import { logoBOak } from "../public/Assets/images";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="">
      <div className="background-app text-white py-7">
        <div className="md:flex w-11/12 mx-auto">
          <div className="md:flex md:space-x-16">
            <div className="md:w-fit text-center">
              <Image src={logoBOak} />
              <h1 className="text-2xl font-bold">BroadOak</h1>
              <p className="text-[9px]">MEDICAL DENTAL & SPECIALIST CENTER</p>
              <div className="flex text-2xl justify-center space-x-3 pt-4">
                <FaFacebookSquare />
                <AiFillInstagram />
                <FaLinkedin />
              </div>
            </div>
            <div className="flex flex-col md:justify-end items-center md:items-start">
              <p className="font-bold">Quick Links</p>
              <ul className="text-xs flex space-x-3">
                <li className="hover:underline hover:font-bold">
                  <a href="#">Services</a>
                </li>
                <li className="hover:underline hover:font-bold">
                  <a href="#">About Us</a>
                </li>
                <li className="hover:underline hover:font-bold">
                  <a href="#">Find Doctor</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-auto flex items-end justify-center md:justify-start">
            <p className="text-xs">All Rights Reserved © TODDs Group 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
