import React from 'react'
import Introduction from './introduction'
import DetailedIntroduction from './detailed-introduction'
import QuestionAnswers from './question-answers'
import BookADemo from './book-a-demo'

const LandingHero = () => {
  return (
    <div>
      <Introduction />
      <DetailedIntroduction />
      <QuestionAnswers />
      <BookADemo />
    </div>
  )
}

export default LandingHero