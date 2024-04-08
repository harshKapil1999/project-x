import React from 'react'

type Props = {
    heading: string
    description: string
}
const DetailedIntroCard = ({ heading, description}: Props ) => {
  return (
    <div className='aspect-square'>
        <div className='w-full h-full flex flex-col items-center justify-center max-w-sm p-8 bg-neutral-100 rounded-xl'>

            <h1 className='text-xl font-bold'>{heading}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default DetailedIntroCard