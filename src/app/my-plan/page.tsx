"use client";

import MyplanCard from "@/components/shared/MyplanCard";
import SavedCard from "@/components/shared/SavedCard";
import { WorkoutsContext } from "@/context/Workoutscontext";
import { IWorkout } from "@/types/workout.types";

import Link from "next/link";
import React, { useContext, useState } from "react";

const MyPlane = () => {
  const { todaysPlan, saved } = useContext(WorkoutsContext);
  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">(
    "Duration",
  );

  const sortedTodaysPlan = [...todaysPlan].sort((a, b) => {
    if (sortBy === "Duration") return b.duration - a.duration;
    if (sortBy === "Calories") return b.caloriesBurned - a.caloriesBurned;
    return b.rating - a.rating;
  });

  const sortedSaved = [...saved].sort((a, b) => {
    if (sortBy === "Duration") return b.duration - a.duration;
    if (sortBy === "Calories") return b.caloriesBurned - a.caloriesBurned;
    return b.rating - a.rating;
  });

  const totalExcercises = todaysPlan.length;

  const totalMinutes = todaysPlan.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0,
  );
  const totalCalories = todaysPlan.reduce(
    (total, workout) => total + Number(workout.caloriesBurned || 0),
    0,
  );

  console.log(todaysPlan, saved, "todaysPlan", "saved");
  return (
    <div className="container mx-auto  px-3 py-16">
      <h2 className=" mb-2 font-bold text-3xl"> My Plan</h2>
      <p className="text-sm text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mb-8 mt-4 grid grid-cols-1 rounded-2xl border border-gray-800 bg-[#12151b] md:grid-cols-3">
        <div className="border-b border-gray-800 p-6 md:border-b-0 md:border-r">
          <p className="text-sm text-gray-500">Exercises</p>

          <p className="mt-1 text-4xl font-bold text-lime-400">
            {totalExcercises}
          </p>
        </div>

        {/* Minutes */}
        <div className="border-b border-gray-800 p-6 md:border-b-0 md:border-r">
          <p className="text-sm text-gray-500">Minutes</p>

          <p className="mt-1 text-4xl font-bold">{totalMinutes}</p>
        </div>

        {/* Calories */}
        <div className="p-6">
          <p className="text-sm text-gray-500">Calories</p>

          <p className="mt-1 text-4xl font-bold">{totalCalories}</p>
        </div>
      </div>

      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label=" Today's Plan"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedTodaysPlan.length > 0 ? (
            sortedTodaysPlan.map((workout: IWorkout) => {
              return <MyplanCard key={workout.id} workout={workout} />;
            })
          ) : (
            <div className="text-center items-center mb-4 px-4 py-16">
              <h2 className="font-semibold text-xl ">NOTHING HERE YET</h2>
              <p className="text-sm text-gray-400 mb-4">
                Browse the library and add a lift to get today moving.
              </p>
              <Link
                href="/workouts"
                className="btn btn-primary bg-lime-400 rounded-3xl text-black"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedSaved.length > 0 ? (
            sortedSaved.map((workout: IWorkout) => {
              return <SavedCard key={workout.id} workout={workout} />;
            })
          ) : (
            <div className="text-center items-center mb-4 px-4 py-16">
              <h2 className="font-semibold text-xl ">NOTHING HERE YET</h2>
              <p className="text-sm text-gray-400 mb-4">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/workouts"
                className="btn btn-primary bg-lime-400 rounded-3xl text-black"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>

        <div className="ml-300 justify-end flex items-center  gap-2 text-sm text-gray-400">
          <span className="whitespace-nowrap">Sort By</span>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "Duration" | "Calories" | "Rating")
            }
            className="select select-sm rounded-lg border border-gray-700 bg-[#12151b]"
          >
            <option>Duration</option>
            <option>Calories</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MyPlane;
