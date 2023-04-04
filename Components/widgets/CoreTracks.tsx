'use client'
import React from 'react'
import Wrapper from '../shared/Wrapper'
import Button from '../shared/Button'
import QuarterWrapper from '../shared/QuarterWrapper'
import { Quaterdata } from '../shared/Quaterdata'
import { RevealWrapper } from 'next-reveal'

const CoreTracks = () => {
  const content= "Core Studies \n (Common in All Specialization):"
  return (
   <section id='CoreTracks'>
    <Wrapper>
      {/* Content */}
      <div className="flex flex-col ">
         <RevealWrapper  origin='top' delay={200} duration={1000} distance='100px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>

      <div  className="flex-1 mt-9 mx-4  items-center md:mt-24 
      max-w-screen-sm
      " >
      <h4 className="text-cyan-800 text-center sm:text-left  text-lg font-bold items-center" >
  PROGRAM OF STUDIES
      </h4>
      <h2 className="text-2xl text-center sm:text-left  sm:text-4xl font-bold whitespace-pre-line">
        {content}
      </h2>
      <p className="my-6 text-xl text-slate-600 text-center sm:text-left ">Every participant of the program will start by completing the following three core courses:</p>
      <div className='flex justify-center items-center md:justify-start'>
      <Button>Learn More</Button>
      </div>
      </div>
        </RevealWrapper>
      {/* Boxes */}

 

        <RevealWrapper  origin='bottom' delay={200} duration={1000} distance='100px' reset={true} >
      <div className="grid grid-cols-1 justify-center items-center max-w-screen-xl md:ml-32 md:gap-x-5 gap-y-5 my-20 md:grid-cols-3 relative ">
{
 Quaterdata.map((item ,i)=>

   <div key={item.id} className={"border rounded-lg relative w-11/12 px-8 py-20 shadow-xl"}>
<h2 className='font-bold text-xl'> {item.heading}</h2>
<p className='text-lg text-slate-600 z-0'>{item.description}</p>
<div className='absolute -top-20 right-20 text-[240px] font-bold -z-10 opacity-5'>{item.number}</div>
        </div>
  
 )
}
             
       
 </div>
</RevealWrapper>
      </div>
    </Wrapper>
   </section>
  )
}

export default CoreTracks
