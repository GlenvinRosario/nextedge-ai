import React from 'react'

const MainLayout = ({children}) => {
  return (
    //Redirect user after onBoarding
    
    <div className='container x-auto mt-24 mb-20'>
      {children}
    </div>
  )
}

export default MainLayout