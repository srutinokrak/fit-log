'use client'
import {WorkoutsContext} from "@/context/Workoutscontext"
import { IWorkout } from '@/types/workout.types';
import React, { useContext } from 'react';
import { toast } from "react-toastify";

const SavedButton = ({workout}:{workout:IWorkout}) => {


  const { saved,setSaved} = useContext(WorkoutsContext);

const handleSavedButton = () => {
  
  if(saved.some((item) => item.id === workout.id)){
    return
  }
  setSaved([...saved,workout])
  toast.success( "Saved for later")
}

    return (
              <button className="btn btn-outline "onClick={()=>handleSavedButton()}>
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
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
        
        Save for later</button>
    );
};

export default SavedButton;