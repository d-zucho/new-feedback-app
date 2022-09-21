import { useState } from 'react'
import '../styles/ratingSelect.styles.css'

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  return (
    <ul className='rating'>
      <li>
        <input
          onChange={handleChange}
          checked={selected === 1}
          value='1'
          type='radio'
          name='rating'
          id='num1'
        />
        <label htmlFor='num1'>1</label>
      </li>
      <li>
        <input
          onChange={handleChange}
          checked={selected === 2}
          value='2'
          type='radio'
          name='rating'
          id='num2'
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input
          onChange={handleChange}
          checked={selected === 3}
          value='3'
          type='radio'
          name='rating'
          id='num3'
        />
        <label htmlFor='num3'>3</label>
      </li>
      <li>
        <input
          onChange={handleChange}
          checked={selected === 4}
          value='4'
          type='radio'
          name='rating'
          id='num4'
        />
        <label htmlFor='num4'>4</label>
      </li>
      <li>
        <input
          onChange={handleChange}
          checked={selected === 5}
          value='5'
          type='radio'
          name='rating'
          id='num5'
        />
        <label htmlFor='num5'>5</label>
      </li>
      <li>
        <input
          onChange={handleChange}
          checked={selected === 6}
          value='6'
          type='radio'
          name='rating'
          id='num6'
        />
        <label htmlFor='num6'>6</label>
      </li>
      <li>
        <input
          onChange={handleChange}
          checked={selected === 7}
          value='7'
          type='radio'
          name='rating'
          id='num7'
        />
        <label htmlFor='num7'>7</label>
      </li>
      <li>
        <input
          onChange={handleChange}
          checked={selected === 8}
          value='8'
          type='radio'
          name='rating'
          id='num8'
        />
        <label htmlFor='num8'>8</label>
      </li>
      <li>
        <input
          onChange={handleChange}
          checked={selected === 9}
          value='9'
          type='radio'
          name='rating'
          id='num9'
        />
        <label htmlFor='num9'>9</label>
      </li>
      <li>
        <input
          onChange={handleChange}
          checked={selected === 10}
          value='10'
          type='radio'
          name='rating'
          id='num10'
        />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>
  )
}

export default RatingSelect
