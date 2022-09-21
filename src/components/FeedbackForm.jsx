import '../styles/feedbackForm.styles.css'
import { useState } from 'react'
import Button from './Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = ({ handleAdd }) => {
  const [inputText, setInputText] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)

  const handleTextChange = (e) => {
    if (inputText === '') {
      setButtonDisabled(true)
      setMessage(null)
    } else if (inputText !== '' && inputText.length < 10) {
      setMessage('Please add 10 or more characters')
    } else {
      setButtonDisabled(false)
      setMessage(null)
    }

    setInputText(e.target.value)
  }

  //? form submit handler function
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputText)
    const userInput = document.querySelector('.review-input')

    //* Create new Feedback object from user input
    const newFeedback = {
      id: 4,
      rating: rating,
      review: inputText,
    }
    handleAdd(newFeedback)

    userInput.value = ''
  }

  return (
    <section className='container card feedback-form'>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* @todo add rating select component */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            className='review-input'
            type='text'
            placeholder='Write your review here...'
            value={inputText}
          />
          {message && <div className='message'>{message}</div>}
          <Button isDisabled={buttonDisabled}>Submit</Button>
          {/* <button onClick={handleSubmit} className='submit-button'>
            Submit
          </button> */}
        </div>
      </form>
    </section>
  )
}

export default FeedbackForm
