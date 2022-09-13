import DATA from '../reviewData'
import FeedbackItem from './FeedbackItem'

import { useState } from 'react'

const Reviews = () => {
  const [feedbackData, setFeedbackData] = useState(DATA)

  return (
    <section>
      {DATA.map((review) => (
        <FeedbackItem
          key={review.id}
          rating={review.rating}
          text={review.text}
        />
      ))}
    </section>
  )
}

export default Reviews
