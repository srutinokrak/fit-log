'use client'
import { IWorkout } from '@/types/workout.types';
import React, { createContext, ReactNode, useState } from 'react';



interface IWorkoutContext {
        todaysPlan: IWorkout[]
        setTodaysPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>
        saved: IWorkout[]
        setSaved:React.Dispatch<React.SetStateAction<IWorkout[]>>;
        removePlan : (id : number) => void;
        removeSaved: (id: number) => void;
}

export const WorkoutsContext = createContext<IWorkoutContext>({
      todaysPlan : [],
     setTodaysPlan: () => {},
     saved: [],
     setSaved: () => {},
     removePlan: () => {},
     removeSaved: () => {}
})


const WorkoutProvider = ({children}:{children: ReactNode}) => {

    const removePlan = (id:number) =>{
        setTodaysPlan((previousPlan) =>
    previousPlan.filter((workout) => workout.id !== id)
  );
    }
    const removeSaved = (id: number) => {
  setSaved((previousSaved) =>
    previousSaved.filter((workout) => workout.id !== id)
  );
};


    const [todaysPlan, setTodaysPlan] =useState<IWorkout[]>([])
    const [saved,setSaved] = useState<IWorkout[]>([])

    const sharedData = {
        todaysPlan,
        setTodaysPlan,
        saved,
        setSaved,
        removePlan
    }

    return (
        <WorkoutsContext.Provider value={sharedData} >{children}</WorkoutsContext.Provider>
    );
};

export default WorkoutProvider;