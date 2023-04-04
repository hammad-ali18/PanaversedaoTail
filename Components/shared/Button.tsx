import React from 'react'
import { FC } from 'react'
const Button:FC<{children:React.ReactNode}> = ({children}) => {
  return (
 <button className="bg-cyan-500 font-semibold text-white px-4 py-4 rounded-3xl hover:shadow-lg hover:scale-105 hover:bg-cyan-900 ease-in-out duration-300" >
    {children}
 </button>
  )
}

export default Button 
