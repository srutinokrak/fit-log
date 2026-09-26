import Custom404 from '@/app/not-found';
import PlanButton from '@/components/workoutDetails/PlanButton';
import SavedButton from '@/components/workoutDetails/SavedButton';
import { IWorkout } from '@/types/workout.types';
import Image from 'next/image';


interface IWorkoutDetailsPage {
    params : Promise<{id:string}>
}

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



const WorkoutDetailesPage = async({params}:IWorkoutDetailsPage) => {
  const {id} = await params;

  const workoutsData:IWorkout[] = await getWorkouts()

  const workout = workoutsData.find((workout:IWorkout)=> String(workout.id)===String(id)) as IWorkout
  console.log(workout);

  if(!workout){
    return <Custom404/>
  }
  
  const details = [
    { label: 'EQUIPMENT', value: workout.equipment },
    { label: 'DIFFICULTY', value: workout.difficulty },
    { label: 'SETS', value: workout.sets },
    { label: 'REPS', value: workout.reps },
    { label: 'DURATION', value: workout.duration },
    { label: 'CALORIES', value: workout.caloriesBurned },
    { label: 'RATING', value: workout.rating },
  ];
  
  return (
  
<div className="container mx-auto bg-[#0f1117] text-left text-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
 <div className="relative aspect-square  object-cover w-full rounded-3xl overflow-hidden shadow-2xl mt-8">
          <Image
            src={workout.image}
            alt={workout.name}
            width={588}
            height={773}
          />
        </div>
  <div className="card-body text-left">
    <h2 className="card-title font-bold text-4xl">{workout?.name}</h2>
    <p className='text-gray-500 text-sm'>{workout?.description}</p>
    
     <div className="p-5">
    
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

  <div className="bg-[#161922] rounded-2xl p-5 border border-gray-800/60 divide-y divide-gray-800/40">
            {details.map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center py-2.5 text-xs sm:text-sm font-medium"
              >
                <span className="text-gray-400 tracking-wider uppercase">
                  {item.label}
                </span>
                <span className="text-gray-200 font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
  
    <div>

        <h2 className="font-bold text-2xl mb-4">Instructions</h2>
     <ol className='list-decimal pl-5 text-sm text-gray-400 mb-6 list-inside space-y-2'>
        {workout?.instructions.map((instruction, index)=>
        (
            <li key={index}>{instruction}</li>
        )
        
        )}
      </ol>

    </div>



    <div className="card-actions ">
        <PlanButton workout={workout}/>
        <SavedButton workout={workout}/>
    </div>
  </div>
</div>
 </div>
  </div>
  )
}

export default WorkoutDetailesPage;