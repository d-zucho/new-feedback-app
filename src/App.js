import './App.css'
import DATA from './reviewData'
import Header from './components/Header'
// import InputBox from './components/InputBox'
import Reviews from './components/Reviews'
import FeedbackForm from './components/FeedbackForm'

import { useState } from 'react'
import AverageStats from './components/AverageStats'

function App() {
  const [feedbackData, setfeedbackData] = useState(DATA)
  // const [stats, setStats] = useState(10)

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setfeedbackData(feedbackData.filter((review) => id !== review.id))
    }
  }

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        {/* <InputBox /> */}
        <AverageStats feedbackData={feedbackData} />
        <FeedbackForm />
        <Reviews feedbackData={feedbackData} handleDelete={handleDelete} />
      </div>
    </div>
  )
}

export default App
