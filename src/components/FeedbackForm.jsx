import '../styles/feedbackForm.styles.css'
import { useState } from 'react'
import Button from './Button'

const FeedbackForm = () => {
  const [inputText, setInputText] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [message, setMessage] = useState('')

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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputText)
    const userInput = document.querySelector('.review-input')
    userInput.value = ''
  }

  return (
    <section className='container card feedback-form'>
      <form>
        <h2>How would you rate your service with us?</h2>

        <div className='input-group'>
          <input
            onChange={handleTextChange}
            className='review-input'
            type='text'
            placeholder='Write your review here...'
            value={inputText}
          />
          {message && <div className='message'>{message}</div>}
          <Button
            disabled={buttonDisabled}
            onClick={handleSubmit}
            type='submit'
            isDisabled={buttonDisabled}
          >
            Submit
          </Button>
          {/* <button onClick={handleSubmit} className='submit-button'>
            Submit
          </button> */}
        </div>
      </form>
    </section>
  )
}

export default FeedbackForm
