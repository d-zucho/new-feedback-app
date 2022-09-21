import { PropTypes } from 'prop-types'
import '../styles/button.styles.css'

const Button = ({ type, children, isDisabled }) => {
  return (
    <button
      type={type}
      disabled='true'
      isDisabled={isDisabled}
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
  type: PropTypes.string,
}

export default Button
