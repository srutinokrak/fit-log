'use client'

import Link from 'next/link';
import React, { useContext } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png'
import { WorkoutsContext } from '@/context/Workoutscontext';


const Navbar = () => {

  const { todaysPlan, saved } = useContext(WorkoutsContext);
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><Link href="/workouts">Workouts</Link></li>
       <li><Link href="/my-plan">My Plan</Link></li>
      </ul>
    </div>
    <div className="flex items-center gap-2 ml-2">
        <Image src={logo} alt="Logo"/>FITLOG
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><Link href="/workouts" className="hover:btn btn-soft btn-warning  rounded-full">Workouts</Link></li>
       <li><Link href="/my-plan" className="hover:btn btn-soft btn-warning rounded-full">My Plan</Link></li>
      
     
    </ul>
  </div>
  <div className="navbar-end flex-wrap gap-2 ">
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
</div>
    );
};

export default Navbar;