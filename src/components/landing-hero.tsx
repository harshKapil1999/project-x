import React from 'react'
import Introduction from './introduction'
import DetailedIntroduction from './detailed-introduction'
import QuestionAnswers from './question-answers'
import BookADemo from './book-a-demo'
import StepsCarousel from './steps-carousel'

const LandingHero = () => {
  return (
    <div>
      <Introduction />
      <DetailedIntroduction />
      <QuestionAnswers />
      <StepsCarousel />
      <BookADemo />
    </div>
  )
}

export default LandingHero