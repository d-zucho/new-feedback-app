import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'

const Reviews = ({ feedbackData, handleDelete }) => {
  return (
    <section>
      <AnimatePresence>
        {feedbackData.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={review.id}
              review={review}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  )

  // return (
  //   <section>
  //     {feedbackData.map((review) => (
  //       <FeedbackItem
  //         key={review.id}
  //         review={review}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </section>
  // )
}

export default Reviews
