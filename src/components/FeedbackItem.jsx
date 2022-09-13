import { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

import '../styles/feedbackItem.styles.css'

const FeedbackItem = ({ rating, text }) => {
  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>

      <div className='text-display'>
        <p>{text}</p>
      </div>
      <div className='icons'>
        <div className='delete'>
          <AiOutlineClose />
        </div>
        <div className='edit'>
          <BiEdit />
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
