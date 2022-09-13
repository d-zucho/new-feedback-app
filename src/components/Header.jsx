import PropTypes from 'prop-types'
import '../styles/header.styles.css'

const Header = ({ text }) => {
  return (
    <header className='header'>
      <div className='container'>
        <h1>{text}</h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
}

Header.propTypes = {
  text: PropTypes.string, //
}

export default Header
