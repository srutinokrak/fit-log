import Image from "next/image";
import React from "react";
import BannerImg from "@/assets/banner.png";

const Banner = () => {
  return (

    <section  className="py-10 md:py-16 flex items-center justify-center w-full sm:w-auto">

    <div className=" container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-4 items-center
    border border-gray-800 rounded-xl p-15 bg-[#0A0A0A]">
      <div className="space-y-4">
        <p className="text-[#C2F800]">WORKOUT LIBRARY</p>
        <h2 className="text-4xl font-bold">
          TRAIN WITH INTENT. LOG
          <br /> EVERY SET.
        </h2>
        <p className="text-gray-400">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into<br />
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
       <a
  href="#library"
  className="btn btn-primary bg-lime-400 text-black"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M12 5l7 7-7 7"
    />
  </svg>
  BROWSE WORKOUTS
</a>
      </div>
      <div className="flex justify-center md:justify-end">
        <Image src={BannerImg}
        alt="Fit log"
        className="`w-87.5` `md:w-105`"/>
      </div>
    </div>
        </section>
  );
};

export default Banner;
