import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'

const Footer = () => {
    return (
        <div >
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center px-10 py-7  ">
  <aside className="grid-flow-col items-center">
     <Image src={logo} alt="Logo"/>FITLOG
  </aside>
  <nav className=" md:place-self-center md:justify-self-end">
    <p className='text-sm text-gray-400'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
    

   
  </nav>
</footer>

        </div>
    );
};

export default Footer;