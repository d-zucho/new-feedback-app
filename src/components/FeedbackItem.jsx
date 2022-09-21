import { BiEdit } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

import '../styles/feedbackItem.styles.css'

const FeedbackItem = ({ review, handleDelete }) => {
  return (
    <div className='card'>
      <div className='numb-display'>{review.rating}</div>

      <div className='text-display'>
        <p>{review.text}</p>
      </div>
      <div className='icons'>
        <div onClick={() => handleDelete(review.id)} className='delete'>
          <AiOutlineClose title='delete' />
        </div>
        <div className='edit'>
          <BiEdit title='Edit' />
        </div>
      </div>
    </div>
  )
}

// FeedbackItem.propTypes = {
//   rating: PropTypes.number,
//   text: PropTypes.string,
// }

export default FeedbackItem
