import Image from "next/image";
import React from "react";
import BannerImg from "@/assets/banner.png";

const Banner = () => {
  return (

    <section className="py-10 md:py-16 flex items-center justify-center">

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
        <button className="bg-[#C2F800] rounded-2xl py-2 px-6 text-black font-bold">BROWSE WORKOUTS</button>
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
