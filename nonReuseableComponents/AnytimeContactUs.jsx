import React from "react";

export default function AnytimeContactUs() {
  return (
    <div className="">
      <div className="flex">
        <div className="background-app md:w-[103px] md:h-[33px] mt-2"></div>
        <p className="font-extrabold text-[32px] md:text-3xl ml-3">
          Anytime
          <br />
          <span className="text-theme text-[36px]">Contact Us</span>
        </p>
      </div>
      <div className="Contact-Us-BG py-5 my-10">
        <div className="BG-Transparent-Black w-[96%] mx-auto md:w-8/12 rounded-2xl p-5 my-5 md:flex text-center md:text-left md:space-x-28 md:ml-auto md:mr-14">
          <div className="md:w-1/2">
            <h1 className="text-theme text-2xl font-bold">Contact Us</h1>
            <p className="text-white">
              At Cranbourne Medical & Dental Centre, we have highly trained
              dentists & Doctors who are invested in providing you with the best
              Dental & Medical care. We strive to offer you a range of dental
              services that will suit your needs. The treatments that our
              professional team carries out include dental check-ups and
              cleaning, dental x-rays, extractions,
            </p>
          </div>
          <div className="md:w-4/5">
            <h1 className="text-theme text-2xl font-bold">
              Book An Appointment
            </h1>
            <form className="flex flex-col space-y-3 py-2 items-center md:items-start">
              <input
                className="w-full rounded-full px-5 py-2"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-full rounded-full px-5 py-2"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full rounded-full px-5 py-2"
                type="text"
                placeholder="Department"
              />
              <input
                className="w-full rounded-full px-5 py-2"
                type="text"
                placeholder="Doctor's available"
              />
              <input
                className="w-full rounded-full px-5 py-2"
                type="text"
                placeholder="Timing's available"
              />
              <div className="pt-4 w-full">
                <button
                  className="w-full rounded-full px-5 py-1 text-white background-app"
                  type="submit"
                >
                  Submit <span className="text-xl">&rarr;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
