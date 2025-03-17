import React from 'react'

const CoverLetter = async ({params}) => {

    const id = await params.id;
  return (
    <div className='mt-[100px]'>
      Id is : {id}
    </div>
  )
}

export default CoverLetter
