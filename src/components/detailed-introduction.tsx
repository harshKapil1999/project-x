import React from 'react'
import DetailedIntroCard from './detailed-intro-card'

 const DetailedIntroduction = () => {

    const cardData = [
                {
                    heading: "70% of Resumes Get Dismissed in Under 10 Seconds. Don&apos;t Miss Top Talent.",
                    description: "MindPrism analyzes skills and experience, not just keywords, ensuring you find the perfect fit. According to a study by EyeRecruiting, on average, recruiters only spend 6 seconds reviewing a resume before making a decision. This can lead to qualified candidates being overlooked. MindPrism uses AI to analyze resumes in-depth, identifying the best fit for your needs."
                },
                {
                    heading: "How Much Time Does Your Team Spend Screening Resumes?",
                    description: "A typical recruiter spends 1 hour screening 20 resumes. With hundreds of applications, this can quickly become a bottleneck in the hiring process. MindPrism automates resume screening, freeing up your team's time to focus on what matters most - building relationships with top talent. (Interactive Calculator: Enter the number of applicants you typically receive to see how much time and money MindPrism could save you. this will redirect us to ROI page)"
                },
                {
                    heading: "The Future of Recruitment is Here: AI-powered Talent Discovery with MindPrism.",
                    description: "Traditional recruiting methods are slow, biased, and often miss out on top talent. (72% of recruiters report difficulty finding qualified candidates, according to a recent study by LinkedIn). MindPrism goes beyond resumes, using AI to identify hidden potential and skills that match your specific requirements. Build your dream team faster with unbiased and efficient hiring."
                }
            ]

  return (
    <div className='w-full h-full flex items-center justify-center min-h-screen flex-col gap-10'>
        <p>WEBINAR SOFTWARE THAT GETS RESULTS BY REPURPOSING AND SCALING VIDEO CONTENT</p>
        <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8'>
           {cardData.map((card, index) => (
            <DetailedIntroCard key={index} heading={card.heading} description={card.description} />
            ))} 
        </div>
        
    </div>
  )
}

export default DetailedIntroduction