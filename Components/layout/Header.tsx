"use client"
import React from 'react'
import Logo from "/public/Panaversedao.png"
import Image from 'next/image'
import { Link } from 'react-scroll/modules';

import Wrapper from '../shared/Wrapper'

import Button from '../shared/Button'

export default function Header() {
    
  return (
  <section className='bg-white  sticky top-0 opacity-100 duration-100  z-40'>
 <nav className="md:mx-16 md:py-1">
    
  <div className="mx-auto mt-4 px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
   
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
  
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <Image className=" block h-16 lg:hidden " src={Logo} alt="Your Company"  />
          <Image className="hidden  md:-mt-4  lg:block  w-[110px] h-[60px]" src={Logo} alt="Your Company" />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            
            <Link to='Hero' className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer "  spy={true} smooth={true} offset={-40} duration={500}>Home</Link>

             
            <Link to='CoreTracks' className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm cursor-pointer font-medium "  spy={true} smooth={true} offset={-40} duration={500}>About</Link>

              
            <Link to='Content' className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm cursor-pointer font-medium"  spy={true} smooth={true} offset={-40} duration={500}>Details</Link>

            <Link to='Outcome' className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm cursor-pointer font-medium"  spy={true} smooth={true} offset={-40} duration={500}>Outcomes</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
       <Button>Sign In</Button>

      
      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">
       <Link to='Hero' className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base  font-bold cursor-pointer  "  spy={true} smooth={true} offset={-40} duration={500}>Home</Link>

             
            <Link to='CoreTracks' className="text-gray-300 block rounded-md px-3 py-2 text-base  font-bold cursor-pointer "  spy={true} smooth={true} offset={-40} duration={500}>About</Link>

              
            <Link to='Content' className="text-gray-300 block rounded-md px-3 py-2 text-base  font-bold cursor-pointer "  spy={true} smooth={true} offset={-40} duration={500}>Details</Link>

            <Link to='Outcome' className="text-gray-300 block rounded-md px-3 py-2 text-base  font-bold cursor-pointer "  spy={true} smooth={true} offset={-40} duration={500}>Outcomes</Link>
    </div>
  </div>
  
</nav>

</section>

  )}