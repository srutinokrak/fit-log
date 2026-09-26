'use client'
import {WorkoutsContext} from "@/context/Workoutscontext"
import { IWorkout } from '@/types/workout.types';
import React, { useContext } from 'react';
import { toast } from "react-toastify";

const PlanButton = ({workout}:{workout:IWorkout}) => {


  const { todaysPlan,setTodaysPlan} = useContext(WorkoutsContext);

const handlePlanButton = () => {
  
  console.log('plans triggered',workout);
  setTodaysPlan([...todaysPlan,workout])
  toast.success( "Added to today's plan")
}

    return (
         <button className="btn btn-primary bg-lime-400 text-black " onClick={()=>handlePlanButton()}>
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
        
        Add to today&apos;s plan</button>
    );
};

export default PlanButton;