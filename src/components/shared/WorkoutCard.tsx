
import { IWorkout } from '@/types/workout.types';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

interface IWorkoutPops{
    workout : IWorkout
}

const WorkoutCard = ({workout} : IWorkoutPops) => {
    return (

      <Link href={`/workouts/${workout.id}`}>
        <div
  key={workout.id}
  className="group overflow-hidden rounded-xl border border-gray-800 bg-[#17181d] transition duration-300 hover:-translate-y-1 hover:border-lime-400/50"
>
  {/* Image */}
  <div className="relative h-52 overflow-hidden">
    <Image
      src={workout.image}
      alt={workout.name}
      height={200} width={200} 
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />

    
  </div>

  {/* Card Content */}
  <div className="p-5">
    {/* Muscle Groups */}
    <div className="mb-3 flex flex-wrap gap-2">
      {workout.muscleGroups.map((muscle: string) => (
        <span
          key={muscle}
          className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-black uppercase text-black"
        >
          {muscle}
        </span>
      ))}
    </div>

    {/* Workout Name */}
    <h3 className="text-xl font-extrabold uppercase text-white">
      {workout.name}
    </h3>

    {/* Equipment */}
    <p className="mt-1 text-sm text-gray-500">
      {workout.equipment}
    </p>

   
   

    {/* Stats */}
    <div className="mt-5 grid grid-cols-3 border-t border-gray-800 pt-4">
      <div>
        <p className="text-xs text-gray-500">Duration</p>
        <p className="mt-1 text-sm font-bold text-white">
          {workout.duration} min
        </p>
      </div>

      <div>
        <p className="text-xs text-gray-500">Calories</p>
        <p className="mt-1 text-sm font-bold text-white">
          {workout.caloriesBurned} kcal
        </p>
      </div>

      <div>
        <p className="text-xs text-gray-500">Rating</p>
        <p className="mt-1 text-sm font-bold text-white">
          ★ {workout.rating}
        </p>
      </div>
    </div>


  

    

     
    </div>
  </div>
   </Link>
    );
};

export default WorkoutCard;