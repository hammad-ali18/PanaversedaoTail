import React from "react"
import {FC} from "react"
const ButtonUnderline:FC<{children:React.ReactNode}> = ({children}) => {
  return (
 <button className=" font-semibold  text-cyan-600 text-xl underline hover:shadow-xl hover:scale-105 hover:bg-cyan-600 ease-in-out duration-300 hover:text-white gap-1" >
    {children}
 </button>
  )
}
export default ButtonUnderline