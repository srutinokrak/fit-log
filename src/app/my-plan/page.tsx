"use client";




import MyplanCard from "@/components/shared/MyplanCard";
import SavedCard from "@/components/shared/SavedCard";
import { WorkoutsContext } from "@/context/Workoutscontext";
import { IWorkout } from "@/types/workout.types";

import Link from "next/link";
import React, { useContext } from "react";

const MyPlane = () => {
  const { todaysPlan, saved } = useContext(WorkoutsContext);

  console.log(todaysPlan, saved, "todaysPlan", "saved");
  return (
    <div className="container mx-auto  px-3 py-16">
      <h2 className=" mb-2 font-bold text-3xl"> My Plan</h2>
      <p className="text-sm text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

    
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label=" Today&apos;s Plan"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
         {todaysPlan.length > 0?(
            todaysPlan.map((workout:IWorkout)=> {
                 return (
                <MyplanCard key={workout.id} workout={workout}/>
   ) })): <div className="text-center items-center mb-4 px-4 py-16">
                <h2 className="font-semibold text-xl ">NOTHING HERE YET</h2>
                <p className="text-sm text-gray-400 mb-4">Browse the library and add a lift to get today moving.</p>
                <button  className="btn btn-primary bg-lime-400 rounded-3xl text-black">Go to workouts</button>
            </div>
         }
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
            {saved.length > 0?(
            saved.map((workout:IWorkout)=> {
                 return <SavedCard key={workout.id} workout={workout}/>
            })): <div className="text-center items-center mb-4 px-4 py-16">
                <h2 className="font-semibold text-xl ">NOTHING HERE YET</h2>
                <p className="text-sm text-gray-400 mb-4">Browse the library and add a lift to get today moving.</p>
                
            <Link href="/workouts" className="btn btn-primary bg-lime-400 rounded-3xl text-black">
                <button  >Go to workouts</button>
            </Link>
            </div>
         }
        </div>

      </div>
    </div>
  );
};

export default MyPlane;
