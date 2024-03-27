import React from 'react'

const LandingNavnar = () => {
  return (
    <div className='w-full bg-neutral-600 p-4 lg:p-8 flex items-center justify-between'>
        <div>
            Logo Project-X
        </div>
        <ul className='flex gap-4'>
            <li>Home</li>
            <li>Features</li>
            <li>Company</li>
            <li>Blog</li>
        </ul>
        <div>
            Account
        </div>
    </div>
  )
}

export default LandingNavnar