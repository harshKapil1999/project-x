import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from 'next/link'
const QuestionAnswers = () => {

    const questionAnswers = [
        {
            question: "I'm drowning in resumes. Can MindPrism help me streamline my hiring process?",
            answer: "Absolutely! MindPrism automates the initial screening process, analyzing hundreds of applications with unmatched accuracy. It identifies key skills and experience that align with your job descriptions, saving you countless hours spent sifting through irrelevant resumes. Now you can focus on what truly matters – interviewing and hiring top talent to build your dream team."
        },
        {
            question: "I'm worried about AI introducing bias into the hiring process. How does MindPrism address this?",
            answer: "We understand your concerns. MindPrism's AI model is trained on diverse datasets and focuses solely on objective criteria like skills and experience. This helps eliminate the potential for unconscious bias that can creep into traditional resume screening. Additionally, you have complete control over the screening process, allowing you to customize it to ensure alignment with your company's specific diversity and inclusion goals."
        },
        {
            question: "What's the biggest benefit of using MindPrism in the long run?",
            answer: "MindPrism empowers you to build a sustainable recruiting strategy. By automating routine tasks and improving your time management, you can focus on building a strong talent pipeline and attracting top candidates. This translates to better retention rates, reduced costs per hire, and a competitive edge in the talent market. With MindPrism, you can recruit smarter, not harder, and build a dream team that drives your company's success."
        },
        {
            question: "Can MindPrism integrate with my existing applicant tracking system (ATS)?",
            answer: "Yes! MindPrism is designed to work seamlessly with your existing workflows and systems. This allows you to easily integrate it with your ATS for a smooth and efficient talent acquisition experience."
        },
        {
            question: "I'm swamped with resumes, and qualified candidates get lost in the pile. How can MindPrism help?",
            answer: "We get it! MindPrism automates the initial screening process, analyzing resumes with AI to identify key skills and experience that align perfectly with your job descriptions. This saves you countless hours sifting through irrelevant applications, allowing you to focus on interviewing the best talent."
        },
        {
            question: "How can I be sure MindPrism won't miss out on qualified candidates?",
            answer: "Unlike keyword searches, MindPrism goes beyond the surface level.  Our AI dives deep into a candidate's skills and experience, using sophisticated algorithms to identify potential that might be missed in traditional screening. You can also customize the tool to prioritize specific skills or experience relevant to your specific role."
        },
        {
            question: "How can I be sure MindPrism is secure and protects candidate data?",
            answer: "We take data security and privacy very seriously. MindPrism employs robust security measures to ensure the protection of candidate information, complying with all relevant data privacy regulations."
        },
        {
            question: "I'm worried about losing my touch as a recruiter if I rely on AI.",
            answer: "MindPrism is your recruitment wingman, not a replacement. It frees you from the tedious screening tasks, allowing you to focus on what you do best - building relationships, conducting in-depth interviews, and making strategic hiring decisions. You'll have more time to build a strong employer brand and attract top talent."
        },
    ]

  return (
    <div className='w-full h-full min-h-screen flex flex-col items-center justify-center my-10 gap-5'>
        <div className='w-full h-full flex flex-col items-center justify-center gap-3'>
            <h1 className='text-5xl font-extrabold'>Questions? Answers.</h1>
            <p className='text-xl text-muted-foreground'>If you can&apos;t find an answer to your question, pop us a message 
              <Link href="/contact" className='text-[#9667E0] hover:text-[#9667E0]/70'> here.</Link>  
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

export default QuestionAnswers