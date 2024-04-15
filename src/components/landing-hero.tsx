import React from 'react'
import Introduction from './introduction'
import DetailedIntroduction from './detailed-introduction'
import BookADemo from './book-a-demo'
import StepsCarousel from './steps-carousel'
import QAIntro from './q-a-intro'

const LandingHero = () => {
  return (
    <div>
      <Introduction />
      <DetailedIntroduction />
      <QAIntro />
      <StepsCarousel />
      <BookADemo />
    </div>
  )
}

export default LandingHero