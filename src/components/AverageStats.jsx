import '../styles/averageStats.styles.css'

import PropTypes from 'prop-types'

const AverageStats = ({ feedbackData }) => {
  const getAverage = (feedbackData) => {
    let total = 0
    feedbackData.forEach((item) => {
      total += item.rating
    })
    return (total / feedbackData.length).toFixed(1)
  }
  console.log(getAverage(feedbackData))

  return (
    <section className='average-section'>
      <div className='container stats-container'>
        <div className='number-reviews'>
          {/* Number of reviews */}
          <p>
            {feedbackData.length} <span>reviews</span>
          </p>
        </div>
        <div className='stats'>
          {/* Average rating of all reviews */}
          <p>
            Average Rating:
            <span className='rating-average'>{getAverage(feedbackData)}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

AverageStats.propTypes = {
  feedbackData: PropTypes.array.isRequired,
}

export default AverageStats
