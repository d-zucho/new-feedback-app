// import { useState } from 'react'

import '../styles/inputBox.styles.css'

const InputBox = () => {
  // const [reviewText, setReviewText] = useState('')

  return (
    <section>
      <h4 className='input-header'>Input Area</h4>

      <div className='new-review-form'>
        <label htmlFor='rating' />
        <input
          type='text'
          className='new-review-text'
          required
          placeholder='Write a review...'
        />
        {/* <button onClick={handleClick} className='submit-button' type='submit'>
          Submit
        </button> */}
      </div>
    </section>
  )
}

export default InputBox
