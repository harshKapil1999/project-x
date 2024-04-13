import Image from 'next/image'
import React from 'react'

type Props = {
    heading: string
    imageUrl: string
    description: string
}
const DetailedIntroCard = ({ heading, imageUrl, description}: Props ) => {
  return (
    <div className='aspect-square'>
        <div className='w-full h-full flex flex-col items-center justify-center max-w-sm p-8 bg-neutral-100 rounded-xl gap-4'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex flex-col items-center '>
                <h1 className='text-2xl font-bold'>2x</h1>
                <h1 className='text-xl font-bold'>{heading}</h1>
              </div>
              <Image 
                src={imageUrl}
                alt='card picture'
                height={400}
                width={400}
                className='w-20'
              />
            </div>
            <p className='font-semibold text-muted-foreground'>{description}</p>
        </div>
    </div>
  )
}

export default DetailedIntroCard