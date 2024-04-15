import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from 'next/link'
const QAIntro = () => {

    const questionAnswers = [
        
        {
            question: "What's the biggest benefit of using MindPrism in the long run?",
            answer: "MindPrism empowers you to build a sustainable recruiting strategy. By automating routine tasks and improving your time management, you can focus on building a strong talent pipeline and attracting top candidates. This translates to better retention rates, reduced costs per hire, and a competitive edge in the talent market. With MindPrism, you can recruit smarter, not harder, and build a dream team that drives your company's success."
        },
        {
            question: "I'm swamped with resumes, and qualified candidates get lost in the pile. How can MindPrism help?",
            answer: "We get it! MindPrism automates the initial screening process, analyzing resumes with AI to identify key skills and experience that align perfectly with your job descriptions. This saves you countless hours sifting through irrelevant applications, allowing you to focus on interviewing the best talent."
        },
        {
            question: "How can I be sure MindPrism won't miss out on qualified candidates?",
            answer: "Unlike keyword searches, MindPrism goes beyond the surface level.  Our AI dives deep into a candidate's skills and experience, using sophisticated algorithms to identify potential that might be missed in traditional screening. You can also customize the tool to prioritize specific skills or experience relevant to your specific role."
        },
        
    ]

  return (
    <div className='w-full h-full min-h-screen flex flex-col items-center justify-center my-10 gap-5'>
        <div className='w-full h-full flex flex-col items-center justify-center gap-3'>
            <h1 className='text-5xl font-extrabold'>Questions? Answers.</h1>
            <p className='text-xl text-muted-foreground'>If you can&apos;t find an answer to your question, 
              <Link href="/questions" className='text-[#9667E0] hover:text-[#9667E0]/70'> see more.</Link>  
            </p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-7xl">
            {questionAnswers.map((questionAnswer, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className=' p-4 hover:bg-muted rounded-2xl'>
                    <AccordionTrigger className='text-2xl'>{questionAnswer.question}</AccordionTrigger>
                    <AccordionContent className='text-lg text-muted-foreground'>
                    {questionAnswer.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
        
    </div>
  )
}

export default QAIntro