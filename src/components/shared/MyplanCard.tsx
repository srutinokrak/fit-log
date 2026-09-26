import { WorkoutsContext } from '@/context/Workoutscontext';
import { IWorkout } from '@/types/workout.types';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';



interface IWorkoutProps {
    workout : IWorkout
}
const MyplanCard = ({workout}:IWorkoutProps) => {

  const {removePlan} = useContext(WorkoutsContext)
  const { todaysPlan, setTodaysPlan } = useContext(WorkoutsContext);

  const handleMarkDone = () => {
  setTodaysPlan(todaysPlan.filter((item) => item.id !== workout.id));
  toast.success('Workout marked as done');
};



    return (
    <div   className="flex items-center gap-4 rounded-2xl border border-gray-800 bg-[#12151b] p-4">

  {/* Image */}
  <div className="h-20 w-32 shrink-0 overflow-hidden rounded-xl">
    <Image
      src={workout.image}
      alt={workout.name}
      width={130}
      height={80}
      className="h-full w-full object-cover"
    />
  </div>

  {/* Information */}
  <div className="flex-1">
    <h3 className="font-bold uppercase">
      {workout.name}
    </h3>

    <p className="text-sm text-gray-400">
      {workout.equipment}
    </p>

    <div className="mt-2 flex gap-4 text-xs text-gray-400">
      <span>◷ {workout.duration} min</span>
      <span>🔥 {workout.caloriesBurned} kcal</span>
      <span>☆ {workout.rating}</span>
    </div>
  </div>

  {/* Buttons */}
  <div className="flex items-center gap-3">
    <Link href={`/workouts/${workout.id}`}>
    <button className="rounded-full border border-gray-700 px-5 py-2 text-sm">
      View Details
    </button>
    </Link>

    <button
  onClick={handleMarkDone}
  className="flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2 text-sm text-black"
>
  <Check className="h-4 w-4" />
  <span>Mark as Done</span>
</button>
     <button
         onClick={() => {
           removePlan(workout.id);
           toast.success('Removed from Plan');
         }}
         className="text-gray-500"
       >
         ×
       </button>
  </div>

</div>
        
    );
};

export default MyplanCard;