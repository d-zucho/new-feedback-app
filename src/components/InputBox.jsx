import { useState } from 'react'

const InputBox = () => {
  return (
    <section>
      <h3>Input Area</h3>
      <div className='input-area'>
        <label htmlFor='rating' />
        <input type='text' required placeholder='Write a review...' />
      </div>
    </section>
  )
}

export default InputBox
