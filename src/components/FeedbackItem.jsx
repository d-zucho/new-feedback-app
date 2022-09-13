import PropTypes, { number } from 'prop-types'

import { useState } from 'react'

import '../styles/feedbackItem.styles.css'

const FeedbackItem = () => {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('Example of text')

  const handleClick = () => {
    setRating(() => {
      return 10
    })
  }

  const handleInput = (text) => {
    setText(() => {
      return text
    })
  }

  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>
        <p>{text}</p>
      </div>
    </div>
  )
}

FeedbackItem.propTypes = {
  rating: PropTypes.number,
  text: PropTypes.string,
}

export default FeedbackItem
