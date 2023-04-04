"use client"
import Image from "next/image"
import Wrapper from "../shared/Wrapper"
import Heroimage from "@/public/HeroImage.webp"
import Button from "../shared/Button"
import { RevealList } from  'next-reveal'
import { RevealWrapper } from  'next-reveal'
const Hero = () => {
  return (
 
 <section id="Hero" className="bg-white z-0">
     <Wrapper>
        <div className="flex flex-col md:flex-row ">
          {/* left Side */}
          
          <div className="flex-1 md:pt-8 mt-9 mx-4  items-center md:mt-24"> <RevealWrapper  origin='left' delay={200} duration={1000} distance='100px' reset={true} >
            <h4 className="text-cyan-800 text-center sm:text-left  text-lg  font-bold items-center" >Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4></RevealWrapper>
            <RevealWrapper  origin='left' delay={200} duration={1000} distance='100px' reset={true} >
            <h1 className="text-4xl text-center sm:text-left  sm:text-6xl font-bold align-middle">Certified Web 3.0 and Metaverse Developer</h1></RevealWrapper>
            <RevealWrapper  origin='left' delay={200} duration={1000} distance='100px' reset={true} >

            <p className="my-6 md:pr-12 text-slate-600 text-center text-[18px] sm:text-left ">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet

              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
            </p>
            </RevealWrapper>
            <RevealWrapper  origin='left' delay={200} duration={1000} distance='100px' reset={true} >
            <div className=" flex items-center justify-center lg:justify-start  ">
            <Button >
              Learn More
            </Button>
            </div>
            </RevealWrapper>
          </div>
          <RevealWrapper  origin='right' delay={200} duration={1000} distance='100px' reset={true} >
          <div className="flex-1 my-5 pt-20">
          {/* right Side */}
          <Image  className="rounded-lg max-w-xs md:max-w-2xl shadow-2xl " src={Heroimage} alt={"Hero pic"} ></Image>
          </div>
</RevealWrapper>
        </div>
     </Wrapper>
  <div className="relative">
    <svg className="absolute -bottom-50 left-0" width="730" height="1315" viewBox="0 0 730 1315" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_1_123)">
<circle cx="72.5" cy="657.5" r="157.5" fill="#05C19C" fill-opacity="0.6"/>
</g>
<defs>
<filter id="filter0_f_1_123" x="-585" y="0" width="1315" height="1315" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_1_123"/>
</filter>
</defs>
</svg>

  </div>
 </section>
 
  )
}

export default Hero
