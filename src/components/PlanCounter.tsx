'use client'

import { WorkoutsContext } from '@/context/Workoutscontext';
import Link from 'next/link';
import React, { useContext } from 'react';

const PlanCounter = () => {

    const { todaysPlan, saved } = useContext(WorkoutsContext);
    return (
        <div  className="navbar-end flex-wrap gap-2 ">
              <Link
          href="/my-plan"
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-white"
        >
          <span>Plan</span>
          <span className="rounded-full  bg-[#ccff00] px-2 py-0.5 text-xs text-black">
            {todaysPlan.length}
          </span>
        </Link>   

         <Link
          href="/my-plan"
          className="inline-flex items-center gap-2  px-3 py-1.5 text-sm text-white"
        >
          <span>Saved</span>
          <span className="rounded-full border border-gray-600 px-2 py-0.5 text-xs">
            {saved.length}
          </span>
        </Link>    
        </div>
    );
};

export default PlanCounter;