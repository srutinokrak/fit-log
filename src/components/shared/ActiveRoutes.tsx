"use client"
import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ActiveRoutes = () => {
    const pathname= usePathname()
    return (
        <div>
             <ul className="menu menu-horizontal px-1">
              <li><Link href="/workouts" className={`${pathname==="/workouts"? "   bg-[#1A2312] text-[#C2F800]  rounded-full hover:border border-[#C2F800]":""}rounded-full`}>Workouts</Link></li>
       <li><Link href="/my-plan"  className={`${pathname==="/my-plan"? "   bg-[#1A2312] text-[#C2F800]  rounded-full hover:border border-[#C2F800]":""} rounded-full`}>My Plan</Link></li>
    </ul>
      
     
        </div>
    );
};

export default ActiveRoutes;