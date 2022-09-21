import './App.css'
import DATA from './reviewData'
import Header from './components/Header'
// import InputBox from './components/InputBox'
import Reviews from './components/Reviews'
import FeedbackForm from './components/FeedbackForm'

import { useState } from 'react'
import AverageStats from './components/AverageStats'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [feedbackData, setfeedbackData] = useState(DATA)

  // const [stats, setStats] = useState(10)

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setfeedbackData(feedbackData.filter((review) => id !== review.id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)

    setfeedbackData([newFeedback, ...feedbackData])
  }

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        {/* <InputBox /> */}
        <AverageStats feedbackData={feedbackData} />
        <FeedbackForm handleAdd={addFeedback} feedbackData={feedbackData} />
        <Reviews feedbackData={feedbackData} handleDelete={handleDelete} />
      </div>
    </div>
  )
}

export default App
