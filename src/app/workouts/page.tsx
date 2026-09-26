


import WorkoutCard from '@/components/shared/WorkoutCard';
import { IWorkout } from '@/types/workout.types';



const getWorkouts = async() => {
    
    try{

        const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
        const data = await res.json()
        return data;
    }catch(error){
        console.error('Error fetching lifts:', error);
        return [];
    }

}


const Workouts = async() => {
    const workoutsData = await getWorkouts();
    return (
        <section className= "container mx-auto px-4 py-16">

       <div className="mb-8">
        <h2 className="text-3xl font-black tracking-tight text-white">
          THE LIBRARY
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
         
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {workoutsData.map((workout:IWorkout,ind:number)=>{
                return  (
                   <WorkoutCard key={ind} workout={workout} />
                )
            } )}
        </div>
    
        </section>
    );
};

export default Workouts;