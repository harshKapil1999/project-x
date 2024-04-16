

import Image from 'next/image'


type Props = {
    heading: string
    imageUrl: string
    subHeading: string
    description: string
}
const DetailedIntroCard = ({ heading, imageUrl, subHeading, description}: Props ) => {
  return (
    <div className='relative aspect-square w-full h-full max-w-sm flex items-center overflow-hidden transition-all duration-700 ease-in-out cursor-pointer mx-auto card'>
        {/* Card Front */}
          <div className='absolute inset-0 w-full h-full flex flex-col items-center justify-center max-w-sm p-8 bg-neutral-100 rounded-xl gap-4 transition-all duration-100 delay-200 z-20 hover:opacity-0'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex flex-col '>
                <h1 className='text-4xl font-bold'>2x</h1>
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
            <h2 className='font-semibold text-muted-foreground'>{subHeading}</h2>
          </div>
        

          {/* Card Back */}
          <div className='absolute inset-0 w-full h-full flex items-center justify-center max-w-sm p-8 bg-neutral-100 rounded-xl gap-4 transition-all card-back z-10'>
            <p className='text-md text-muted-foreground'>{description}</p>
          </div>
         
    </div>
  )
}

export default DetailedIntroCard