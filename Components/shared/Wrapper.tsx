//here we are making a wrapper which will handle the max width of our overall page
import React, {FC}  from 'react'

const Wrapper:FC<{children: React.ReactNode}> = ({children}) => {
  return (
  <div className='max-w-screen-2xl mx-auto px-4'>
    {children}
  </div>
  )
}

export default Wrapper
