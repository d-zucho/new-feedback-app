import DATA from '../reviewData'
import FeedbackItem from './FeedbackItem'
import { useState } from 'react'

const Reviews = () => {
  const [feedbackData, setfeedbackData] = useState(DATA)

  const handleDelete = (id) => {
    console.log(id)
    console.log('From Reviews')
  }

  return (
    <section>
      {feedbackData.map((review) => (
        <FeedbackItem
          key={review.id}
          review={review}
          onDelete={(id) => handleDelete(id)}
          setfeedbackData={setfeedbackData}
        />
      ))}
    </section>
  )
}

export default Reviews
