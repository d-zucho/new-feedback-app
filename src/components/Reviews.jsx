import FeedbackItem from './FeedbackItem'

const Reviews = ({ feedbackData, handleDelete }) => {
  return (
    <section>
      {feedbackData.map((review) => (
        <FeedbackItem
          key={review.id}
          review={review}
          handleDelete={handleDelete}
        />
      ))}
    </section>
  )
}

export default Reviews
