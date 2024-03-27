import Image from 'next/image'
import React from 'react'

const DashboardHero = () => {

    type SpaceProps = {
        name: string,
        description: string,
    }

    const spaces: SpaceProps[] = [
        {
            name: 'Backup',
            description: 'This space contains all backup dashboards'
        },
        {
            name: 'Default',
            description: 'This is your default space'
        },
        {
            name: 'Testing',
            description: 'This space will be used for testing'
        },
        {
            name: 'UAT',
            description: 'This space will be used for utamanak'
        },
        {
            name: 'Bis',
            description: 'This space is for production dashboards'
        }
    ]

  return (
    <div className='flex flex-col items-center p-4 w-full h-full min-h-screen bg-neutral-200'>
        {/* Dashboard header */}
        <div className='p-4 w-full flex flex-col items-center'>
            <svg className='w-12 h-12' id="logo-13" width="100%" height="100%" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.98441 29.2899C1.98441 27.0299 2.42954 24.7919 3.29444 22.704C4.15935 20.6159 5.42701 18.7187 7.02513 17.1206C8.62324 15.5225 10.5204 14.2548 12.6084 13.3899C14.6965 12.5251 16.9344 12.0799 19.1945 12.0799V29.2899H1.98441Z"  fill="#442781"></path> <path d="M1.98441 29.2899C1.98441 31.55 2.42954 33.7879 3.29444 35.876C4.15935 37.964 5.42701 39.8612 7.02513 41.4593C8.62324 43.0574 10.5204 44.3251 12.6084 45.19C14.6965 46.0549 16.9344 46.5 19.1945 46.5V29.2899H1.98441Z"  fill="#61459C"></path> <path d="M36.4043 29.2899C36.4043 31.55 35.9595 33.7879 35.0947 35.876C34.2298 37.964 32.9622 39.8612 31.3638 41.4593C29.7657 43.0574 27.8685 44.3251 25.7804 45.19C23.6925 46.0549 21.4545 46.5 19.1945 46.5V29.2899H36.4043Z"  fill="#A992DB"></path> <path d="M47.0156 14.422C47.0156 21.5586 41.23 27.344 34.0935 27.344H21.1716V14.422C21.1716 7.2854 26.957 1.5 34.0935 1.5C41.23 1.5 47.0156 7.2854 47.0156 14.422Z" fill="#FF7917"></path> </svg>
            
            <div className='flex flex-col items-center justify-center p-2'>
                <h1 className='text-3xl font-bold'>Select your space</h1>
                <p className='text-xs text-muted-foreground'>You can change your space anytime</p>
            </div>
            
        </div>
        {/* Space Selection */}
        <div className='flex items-center justify-center w-full p-4 md:p-10 flex-wrap bg-white gap-4 rounded-md'>
           {spaces.map((space, index) => (
            <div key={index} className='flex flex-col items-center justify-center p-4 shadow-xl rounded-md aspect-square w-full max-w-xs cursor-pointer scale-90 hover:scale-100 transition-transform'>
                <Image 
                    src={`https://picsum.photos/${150+index}`}
                    alt='space image'
                    width={100}
                    height={100}
                    className='w-10 h-10 rounded-md'
                />
                <h1 className='text-xl font-bold'>{space.name}</h1>
                <p className='text-xs text-muted-foreground '>{space.description}</p>
            </div>
           ))}
        </div>
    </div>
  )
}

export default DashboardHero