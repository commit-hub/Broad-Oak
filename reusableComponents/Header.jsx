import { MdMenu } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Logo } from "../public/Assets/images";
export default function Header() {
  const router = useRouter();
  const [Menu, setMenu] = useState(false);
  return (
    <header className="header-shadow flex items-center">
      <div className=" flex items-center justify-between w-11/12 mx-auto">
        <div className="px-5">
          <Image loading="lazy" src={Logo} quality="100" />
        </div>
        <ul className="sm:flex text-base font-bold hidden pl-5 py-2">
          <Link href="/services">
            <a>
              <li
                className={`mx-4 ${
                  router.asPath === "/services" ? "text-theme" : " "
                }`}
              >
                Services
              </li>
            </a>
          </Link>
          <Link href="/AboutUs">
            <a>
              <li
                className={`mx-4 ${
                  router.asPath === "/AboutUs" ? "text-theme" : " "
                }`}
              >
                About Us
              </li>
            </a>
          </Link>
          <Link href={"/findDoctor"}>
            <a>
              <li
                className={`ml-2 mr-3 ${
                  router.asPath === "/findDoctor" ? "text-theme" : " "
                }`}
              >
                Find Doctor
              </li>
            </a>
          </Link>
          <Link href={"/appointment"}>
            <li>
              <button className="background-app px-3 text-base h-9 font-bold -mt-2 rounded-full text-white">
                Book Appointment
              </button>
            </li>
          </Link>
        </ul>

        <button className="sm:hidden">
          <MdMenu
            className="hover:text-theme cursor-pointer"
            // color="blue"
            pointer="pointer"
            size="30px"
            onClick={() => setMenu(!Menu)}
          />
        </button>
        {/* <div className="w-7 h-7 Box-Shadow"></div> */}
        <ul
          className={`${
            Menu ? "" : "translate-x-44 hidden"
          }  text-xl font-bold absolute z-50 transition-all delay-500 right-0 top-0 pb-10 px-5 bg-white Box-Shadow`}
        >
          <MdMenu
            className="ml-auto mt-5 hover:text-theme cursor-pointer"
            // color="blue"
            pointer="pointer"
            size="20px"
            onClick={() => setMenu(!Menu)}
          />
          <li className="hover:text-theme pb-2 mt-10">
            <a href="#">Services</a>
          </li>
          <li className="hover:text-theme py-2">
            <a href="#">About Us</a>
          </li>
          <li className="hover:text-theme py-2">
            <a href="#">Find Doctor</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
