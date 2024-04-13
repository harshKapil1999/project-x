import React from 'react'
import DetailedIntroCard from './detailed-intro-card'

 const DetailedIntroduction = () => {

    const cardData = [
                {
                    imageUrl: "https://img.icons8.com/color/96/find-matching-job.png",
                    heading: "Faster Hiring",
                    description: "70% of Resumes Get Dismissed in Under 10 Seconds. Don't Miss Top Talent."
                },
                {
                    imageUrl: "https://img.icons8.com/cotton/64/positive-dynamic--v2.png",
                    heading: "Your Hiring Speed",
                    description: "How Much Time Does Your Team Spend Screening Resumes?"
                },
                {
                    imageUrl: "https://img.icons8.com/fluency/96/conference-background-selected.png",
                    heading: "Your Talent Pool",
                    description: "The Future of Recruitment is Here: AI-powered Talent Discovery with MindPrism."
                }
            ]

  return (
    <div className='w-full h-full flex items-center justify-center min-h-screen flex-col gap-10'>
        <p className='text-xl text-muted-foreground'>Recruit Faster, Smarter, & Fairer: MindPrism - The All-in-One AI Hiring Solution</p>
        <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8'>
           {cardData.map((card, index) => (
            <DetailedIntroCard key={index} heading={card.heading} imageUrl={card.imageUrl} description={card.description} />
            ))} 
        </div>
        
    </div>
  )
}

export default DetailedIntroduction