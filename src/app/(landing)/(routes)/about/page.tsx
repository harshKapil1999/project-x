"use client"

import Image from 'next/image'
import React from 'react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const AboutPage = () => {

  const team = [
    {
      name: "Willem",
      role: "Co-founder",
      image: "https://picsum.photos/400",
      
    },
    {
      name: "Bob",
      role: "Co-founder",
      image: "https://picsum.photos/401",
      
    },
    {
      name: "Rita",
      role: "People Ops",
      image: "https://picsum.photos/402",
      
    },
    {
      name: "Joris",
      role: "Design",
      image: "https://picsum.photos/403",
      
    },
    {
      name: "Arkaitz",
      role: "Engineering",
      image: "https://picsum.photos/404",
      
    },
    {
      name: "Bahram",
      role: "Growth",
      image: "https://picsum.photos/405",
      
    },
    {
      name: "Lydia",
      role: "Content",
      image: "https://picsum.photos/406",
      
    },
    {
      name: "Stephen",
      role: "Product Marketing",
      image: "https://picsum.photos/407",
      
    },
    {
      name: "Sanne",
      role: "People Ops",
      image: "https://picsum.photos/408",
      
    },
    {
      name: "Adrian",
      role: "Engineering",
      image: "https://picsum.photos/409",
      
    },
    {
      name: "JMatteo",
      role: "Engineering",
      image: "https://picsum.photos/410",
      
    },
    {
      name: "Adam",
      role: "Leadership",
      image: "https://picsum.photos/411",
      
    },
    {
      name: "Jennifer",
      role: "Customer success",
      image: "https://picsum.photos/412",
      
    },
    {
      name: "George",
      role: "Engineering",
      image: "https://picsum.photos/413",
      
    },
  ]

  return (
    <div className='w-full h-full min-h-screen flex flex-col items-center justify-center gap-10 my-24 p-2'>
      {/* Team Image */}
      <div className='w-full h-full flex items-center justify-center'>
        <Image 
          src="https://images.pexels.com/photos/6476188/pexels-photo-6476188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          width={1280} 
          height={854} 
          alt='about' 
          className='rounded-3xl w-full h-full max-w-4xl -rotate-2' 
        />
      </div>
      {/* vision */}
      <div className='flex flex-col items-center gap-4 max-w-6xl'>
        <div className='w-0.5 h-28 bg-black my-8'></div>
        <h1 className='text-6xl font-bold'>Our Vision</h1>
        <p className='text-2xl text-muted-foreground w-full text-center '>Transform recruitment with AI, building a future of seamless, data-driven hiring for everyone.</p>
        <ul className='text-lg flex flex-col gap-2'>
          <li><strong>The Perfect Fit, Worldwide:</strong> Break down barriers and access the perfect fit, anywhere on Earth.</li>
          <li><strong>Unlock Potential:</strong> AI whispers talent secrets, building dream teams with laser focus.</li>
          <li><strong>Effortless Matching:</strong> AI takes the guesswork out, seamlessly pairing companies with their ideal candidates.</li>
        </ul>
      </div> 

      {/* Mission */} 
      <div className='flex flex-col items-center gap-4  max-w-6xl'>
        <div className='w-0.5 h-28 bg-black my-8'></div>
        <h1 className='text-6xl font-bold'>Our Mission</h1>
        <p className='text-2xl text-muted-foreground w-full text-center'>Empower businesses to build diverse teams faster through AI-powered talent acquisition.</p>
        <ul className='text-lg flex flex-col gap-2'>
          <li><strong>Effortless Efficiency:</strong> We automate routine tasks, freeing up HR professionals to focus on strategic initiatives and talent engagement.</li>
          <li><strong>AI-powered Precision:</strong> Our platform pinpoints top talent with unmatched accuracy, ensuring you hire the best fit for every role.</li>
          <li><strong>Data-driven Inclusivity:</strong> We foster a more inclusive recruitment landscape through data-driven insights, ensuring a wider talent pool and better connections between businesses and candidates.</li>
        </ul>
      </div>  

      {/* Values */}
      <div className='flex flex-col items-center gap-4  max-w-6xl'>
        <div className='w-0.5 h-28 bg-black my-8'></div>
        <h1 className='text-6xl font-bold'>Our Values</h1>
        <p className='text-2xl text-muted-foreground w-full text-center'>Empower businesses to build diverse teams faster through AI-powered talent acquisition.</p>
        <ul className='text-lg flex flex-col gap-2'>
          <li><strong>Inclusive Talent:</strong> We empower businesses to build diverse teams with the best talent, anywhere, using AI.</li>
          <li><strong>AI Innovation:</strong> We push boundaries in AI to create a seamless and efficient hiring experience for all.</li>
          <li><strong>Results Matter:</strong> We leverage AI to deliver exceptional hiring outcomes for businesses and candidates.</li>
        </ul>
      </div>  

      {/* Mind Prism Team */}
      <div className='w-full h-full flex flex-col items-center gap-8 max-w-7xl min-h-screen rounded-3xl bg-[#9667E0]/[98] p-10 my-16 text-white'>
        <h1 className='text-7xl font-extrabold  text-center'>The Mind Prism team</h1>
        <p className='text-2xl  w-full text-center max-w-5xl'>Everyone adds their own special spice to MindPrism&apos;s culture. We&apos;re a close-knit team of designers, engineers, marketers, people and support specialists who have a shared love for design, positivity, work-life balance and doing good.</p>
        <div className='flex flex-wrap items-center justify-center gap-24'>
          {team.map((member, index) => (
            <div key={index} className='flex flex-col items-center justify-center gap-1 text-xl font-semibold'>
              <Avatar className='w-24 h-24 '>
                <AvatarImage src={member.image} alt={member.name}  />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <span>{member.name}</span>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutPage