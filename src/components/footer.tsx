import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import React from 'react'

const Footer = () => {

  const links = [
    {
      label: 'Home',
      href: '#'
    },
    {
      label: 'Features',
      href: '#'
    },
    {
      label: 'Company',
      href: '#'
    },
    {
      label: 'Blog',
      href: '#'
    },
    {
      label: 'Signin',
      href: '#'
    },

  ]

  const Products = [
    {
      label: 'Analytics',
      href: '#'
    },
    {
      label: 'Marketing',
      href: '#'
    },
    {
      label: 'Commerce',
      href: '#'
    },
    {
      label: 'Insights',
      href: '#'
    },
  ]

  const policies = [
    {
      label: 'Privacy',
      href: '#'
    },
    {
      label: 'Terms',
      href: '#'
    },
    {
      label: 'Settings',
      href: '#'
    },
  ]

  return (
    <div className='w-full h-full bg-neutral-950 text-white p-8 md:p-16 '>
        <div className='w-full flex flex-col md:flex-row items-center justify-between border-b border-b-neutral-300 p-8'>
          <div className='flex flex-col gap-4  w-full max-w-md h-full order-last md:order-first'>
            <h1 className='text-3xl font-semibold'>Mind Prism</h1>
            <p className=' text-muted-foreground'>Making the world a better place through constructing elegant hierarchies.</p>
            <div className='flex gap-4 text-muted-foreground '>
              <LinkedInLogoIcon className='w-8 h-8 hover:text-white' />
              <InstagramLogoIcon className='w-8 h-8 hover:text-white'/>
              <TwitterLogoIcon className='w-8 h-8 hover:text-white' />
              <DiscordLogoIcon className='w-8 h-8 hover:text-white' />
              <GitHubLogoIcon className='w-8 h-8 hover:text-white' />
            </div>
            <p className='text-muted-foreground text-sm'>© 2024 Mind Prism, Inc. All rights reserved.</p>
          </div>
          <div className='flex flex-col sm:flex-row gap-8  justify-between  w-full h-full p-8'>
            <div className='flex flex-col gap-4'>
              <h1>Our Products</h1>
              <ul>
                {Products.map((item) => (
                  <li className='text-muted-foreground cursor-pointer hover:text-white' key={item.label}>{item.label}</li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <h1>Quick Links</h1>
              <ul className='gap-4'>
                {links.map((item) => (
                  <li className='text-muted-foreground cursor-pointer hover:text-white' key={item.label}>{item.label}</li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <h1>Policies</h1>
              <ul>
                {policies.map((item) => (
                  <li className='text-muted-foreground cursor-pointer hover:text-white' key={item.label}>{item.label}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer