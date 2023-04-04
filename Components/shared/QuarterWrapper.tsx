
import React from "react"
import { FC } from "react"
import { Quaterdata } from "./Quaterdata"
interface Data{
    id:number
heading:string,
description:string,
number:number,
haveBorder?:true
}
const QuarterWrapper:FC<Data> = ({id,heading,description,number,haveBorder=true}) => {
  return (
  
      <div className={`border rounded-lg relative w-11/12 px-8 py-20 shadow-xl ${haveBorder && "border"}`}>
<h4 className='font-bold text-lg'> {heading}</h4>
<p className='text-lg text-slate-600 z-0'>{description}</p>
<div className='absolute -top-20 right-20 text-[240px] font-bold -z-10 opacity-5'>{number}</div>
        </div>

  )
}

export default QuarterWrapper
