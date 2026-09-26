import Banner from '@/components/homepage/Banner';
import Lifts from '@/components/homepage/Workouts';
import { Suspense } from 'react';
import GlobalLoading from './loading';



const page = () => {
  return (
    <div>
   
      <Suspense fallback={<GlobalLoading/> }>
           <Banner/>
      <Lifts/>

      </Suspense>
    </div>
  );
};

export default page;
