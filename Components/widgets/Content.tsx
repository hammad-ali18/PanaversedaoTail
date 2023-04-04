"use client"
import Wrapper from "../shared/Wrapper"
import Button from "../shared/Button"
import ButtonUnderline from "../shared/ButtonUnderline"
import Image from "next/image"
import data from "./VerticalSpecialTracksInfo"
import { RevealWrapper } from "next-reveal"
// images
import AiImg1 from "@/public/Verticalimg1.png" 
import AiImg2 from "@/public/Verticalimg2.png" 
import AiImg3 from "@/public/Verticalimg3.png" 
import AiImg4 from "@/public/Verticalimg4.png" 
import AiImg5 from "@/public/Verticalimg5.png" 
import AiImg6 from "@/public/Verticalimg6.png" 
import { useState } from "react"

export const clickedSpeacialized=[
{
  slug:"wmd",
  h4:"Specialized Program",
  h3:"Web 3.0 (Blockchain) and Metaverse Specialization",
  description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
  btntext:"Learn More",
  image:AiImg1,
  quarters:[
    {
    h4:"Quarter IV",
    description:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number:"4"
    },
    {
    h4:"Quarter V",
    description:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number:"5"

    }
  ]
},
{
  slug:"ai",
  h4:"Speacilized Program",
  h3:"Artificial Intelligence (AI) and Deep Learning Specialization",
  description:"How is AI used in Web3 AI applications in Web3 include the deployment of digital collectibles in gaming, NFTs, asset creation, and software development. Outside of content generation, AI can also help in driving the Web3 space by streamlining development processes and improving user experience in decentralised apps (dapps). ",
  btntext:"Learn More",
  image:AiImg2,
  quarters:[
    {
    h4:"Quarter IV",
    description:"W202-A Web3 API (application programming interface) is a set of standards that enable decentralized applications (dApps) to access and index all the blockchain information they need, broadcast new transactions, and scale to meet demand.",
    number:"4"
    },
    {
    h4:"Quarter V",
    description:"W202-A Web3 API (application programming interface) is a set of standards that enable decentralized applications (dApps) to access and index all the blockchain information they need, broadcast new transactions, and scale to meet demand.",
    number:"5"

    }
  ]
},
{
  slug:"cnc",
  h4:"Speacilized Program",
  h3:"Artificial Intelligence (AI) and Deep Learning Specialization",
  description:"How is AI used in Web3 AI applications in Web3 include the deployment of digital collectibles in gaming, NFTs, asset creation, and software development. Outside of content generation, AI can also help in driving the Web3 space by streamlining development processes and improving user experience in decentralised apps (dapps). ",
  btntext:"Learn More",
  image:AiImg3,
  quarters:[
    {
    h4:"Quarter IV",
    description:"W202-A Web3 API (application programming interface) is a set of standards that enable decentralized applications (dApps) to access and index all the blockchain information they need, broadcast new transactions, and scale to meet demand.",
    number:"4"
    },
    {
    h4:"Quarter V",
    description:"W202-A Web3 API (application programming interface) is a set of standards that enable decentralized applications (dApps) to access and index all the blockchain information they need, broadcast new transactions, and scale to meet demand.",
    number:"5"

    }
  ]
},
{
  slug:"deeplearing",
  h4:"Speacilized Program",
  h3:"Artificial Intelligence (AI) and Deep Learning Specialization",
  description:"How is AI used in Web3 AI applications in Web3 include the deployment of digital collectibles in gaming, NFTs, asset creation, and software development. Outside of content generation, AI can also help in driving the Web3 space by streamlining development processes and improving user experience in decentralised apps (dapps). ",
  btntext:"Learn More",
  image:AiImg4,
  quarters:[
    {
    h4:"Quarter IV",
    description:"W202-A Web3 API (application programming interface) is a set of standards that enable decentralized applications (dApps) to access and index all the blockchain information they need, broadcast new transactions, and scale to meet demand.",
    number:"4"
    },
    {
    h4:"Quarter V",
    description:"W202-A Web3 API (application programming interface) is a set of standards that enable decentralized applications (dApps) to access and index all the blockchain information they need, broadcast new transactions, and scale to meet demand.",
    number:"5"

    }
  ]
},
{
  slug:"networks",
  h4:"Speacilized Program",
  h3:"Artificial Intelligence (AI) and Deep Learning Specialization",
  description:"How is AI used in Web3 AI applications in Web3 include the deployment of digital collectibles in gaming, NFTs, asset creation, and software development. Outside of content generation, AI can also help in driving the Web3 space by streamlining development processes and improving user experience in decentralised apps (dapps). ",
  btntext:"Learn More",
  image:AiImg5,
  quarters:[
    {
    h4:"Quarter IV",
    description:"W202-A Web3 API (application programming interface) is a set of standards that enable decentralized applications (dApps) to access and index all the blockchain information they need, broadcast new transactions, and scale to meet demand.",
    number:"4"
    },
    {
    h4:"Quarter V",
    description:"W202-A Web3 API (application programming interface) is a set of standards that enable decentralized applications (dApps) to access and index all the blockchain information they need, broadcast new transactions, and scale to meet demand.",
    number:"5"

    }
  ]
},
{
  slug:"Marketing",
  h4:"Speacilized Program",
  h3:"Artificial Intelligence (AI) and Deep Learning Specialization",
  description:"How is AI used in Web3 AI applications in Web3 include the deployment of digital collectibles in gaming, NFTs, asset creation, and software development. Outside of content generation, AI can also help in driving the Web3 space by streamlining development processes and improving user experience in decentralised apps (dapps). ",
  btntext:"Learn More",
  image:AiImg6,
  quarters:[
    {
    h4:"Quarter IV",
    description:"W202-A Web3 API (application programming interface) is a set of standards that enable decentralized applications (dApps) to access and index all the blockchain information they need, broadcast new transactions, and scale to meet demand.",
    number:"4"
    },
    {
    h4:"Quarter V",
    description:"W202-A Web3 API (application programming interface) is a set of standards that enable decentralized applications (dApps) to access and index all the blockchain information they need, broadcast new transactions, and scale to meet demand.",
    number:"5"

    }
  ]
},
]

const Content = () => { 
  const [selectedItem,setSelectedItem] = useState("wmd")
  const selectedItemData = clickedSpeacialized.find((item)=>item.slug === selectedItem)
  console.log(selectedItem);
  
    const content = "After completing the first three quarters the participants will select one or more specializations consisting of two courses each:"
  return (
   
    <section id="Content" className="my-12">
        <Wrapper>
          
            <div>
               <RevealWrapper  origin='left' delay={200} duration={1000} distance='100px' reset={true}>
                <h2 className="text-4xl font-bold my-5" >Specialized Tracks:</h2>
                <p className="text-xl mb-4 text-slate-600 whitespace-pre-line max-w-md">{content} </p>
                </RevealWrapper>
            </div>
            {/* Speacilized Programs */}
            <div className="flex flex-col-reverse gap-x-6 gap-y-8 md:flex-row" >
          
        {/* Horizontal Program */}
               <RevealWrapper  origin='left' delay={200} duration={1000} distance='100px' reset={true}>


                <div className="flex-auto md:max-w-7xl border rounded-lg ">

      <div  className="mt-9 mx-4  items-center md:mt-24 
      max-w-screen-sm
      " >
      <h4 className="text-cyan-800 text-center sm:text-left  text-lg font-bold items-center" >
  {selectedItemData?.h4}
      </h4>
      <h2 className="text-2xl text-center sm:text-left  sm:text-4xl font-bold whitespace-pre-line">
      {selectedItemData?.h3}
      </h2>
      <p className="my-6 text-xl text-slate-600 text-center sm:text-left ">{selectedItemData?.description}
</p>

      <ButtonUnderline >Learn More</ButtonUnderline>
     
                </div>
                
                
    <div className="flex flex-col lg:flex-row  gap-4 mt-8 items-center">
   
    
          {selectedItemData?.quarters.map((item,i)=>
           <div key={i} className=" flex-1 relative w-11/12 px-8 py-24 shadow-xl max-w-md mb-3 mx-3 self-center">
<h4 className='font-bold text-xl'> {item.h4} </h4>
<p className='text-[18px] text-slate-600 z-0'>{item.description}</p>
<div className='absolute -top-20 right-20 text-[240px] font-bold -z-10 opacity-5'>{item.number}</div>
      
      </div>     
     )  
    }   
    

        
   </div>
            
          
           </div>
    </RevealWrapper>
         {/* Vertical Side Programs */}
        
           <div className="bg-slate-100 sticky top-28 bg-cover self-start  lg:w-4/12 py-10 px-5  space-y-6 items-center">
            {clickedSpeacialized.map((item:any,i)=>
              
                <div onClick={(()=>setSelectedItem(item.slug))} key={item.slug} className={"flex items-center gap-x-4 my-4 cursor-pointer "}> 
                   
                   <div className=" basis-3/12 relative ">
                  
              <Image src={item.image} alt="images" className="object-cover max-w-[110px] h-[80px] relative rounded-lg"></Image>
              
          </div>
            <div className="basis-9/12">
             <h4 className=" text-primary font-medium">{item.h4}</h4>
             <h3 className="text-xl font-semibold">{item.h3}</h3>
            </div>
            {/*  UnderLine*/}
          
            </div>
               
              )}   
           </div>
        
          </div>  
        </Wrapper>
    </section>
  )
}

export default Content
