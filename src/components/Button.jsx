import { PropTypes } from 'prop-types'
import '../styles/button.styles.css'

const Button = ({ children, isDisabled }) => {
  return (
    <button
      // disabled='true'
      disabled={isDisabled}
      className={`submit-button btn-${isDisabled}`}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  isDisabled: false,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
}

export default Button
