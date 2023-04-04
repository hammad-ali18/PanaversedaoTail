"use client"
import React from 'react'

import Wrapper from '../shared/Wrapper'
import logo from "../../public/Outcome.jpg"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { RevealWrapper } from 'next-reveal';
const OutcomePrograms = ["Freelancing","Remote Jobs","Contracts","Boosting Economy","Global Marketing by Panaverse Dao"]
const Outcome = () => {
  return (
    <section id='Outcome' >
       

   <Wrapper>
    <div className='flex flex-col my-40 gap-x-10 md:flex-row'>
        {/* Image */}
               <RevealWrapper  origin='left' delay={200} duration={1000} distance='100px' reset={true}>


        <div className=' basis-5/12 '>
            <Image src={logo} alt="professional image" className=' md:max-w-2xl rounded-full shadow-2xl'></Image>
        </div>
               </RevealWrapper>
        {/* right side text */}
               <RevealWrapper  origin='right' delay={200} duration={1000} distance='100px' reset={true}>


        <div className='basis-7/12 my-6 max-w-3xl '>
          
            <h2 className=' tracking-tight font-extrabold text-4xl '>The Outcome for Participants of the Program</h2>
            <p className='md:text-xl text-lg text-slate-600 mt-4'>As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistans software exports.</p>
            <div className=' mt-10 grid grid-cols-2 gap-x-2 gap-y-4   '>
                
              {
                OutcomePrograms.map((items,i)=>(
                  <div key={i} className="flex">
                    <svg className=' basis-4/12' width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3431 2.65686C20.4673 -0.467337 25.5327 -0.46734 28.6569 2.65685L43.3431 17.3431C46.4673 20.4673 46.4673 25.5327 43.3431 28.6569L28.6569 43.3431C25.5327 46.4673 20.4673 46.4673 17.3431 43.3431L2.65686 28.6569C-0.467337 25.5327 -0.46734 20.4673 2.65685 17.3431L17.3431 2.65686Z" fill="url(#paint0_radial_3874_9)"/>
<defs>
<radialGradient id="paint0_radial_3874_9" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.5455 -9.96429) rotate(59.1918) scale(77.3011 169.686)">
<stop offset="0.125" stopColor="#00E1F0"/>
<stop offset="1" stopColor="#00616C"/>
</radialGradient>
</defs>
</svg>
  <h3 className=" basis-8/12 text-md md:text-lg text-slate-800 font-medium">{items}</h3>
                 </div>
                ))
              }
            </div>
     </div>

              </RevealWrapper>
    </div>
      <div className='mt-20'>
        <footer>
            <div className='flex justify-center items-center '>
<FontAwesomeIcon width={30} height={20} icon={faCopyright} style={{color: "#0f8ba3",}} />  <h2 className='text-lg text-gray-500 font-extrabold tracking-tight'>By Muhammad Hammad Ali</h2>
  
        </div>
        </footer>
      </div>
   </Wrapper>

   <div className='relative '>
     <svg className='absolute right-0 bottom-4' width="699"  height="1085" viewBox="0 0 699 1085" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_1_42)">
<circle cx="657.5" cy="657.5" r="157.5" fill="#05C19C" fill-opacity="0.9"/>
</g>
<defs>
<filter id="filter0_f_1_42" x="0" y="0" width="1315" height="1315" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_1_42"/>
</filter>
</defs>
</svg>
   </div>

   </section>
  )
}

export default Outcome
