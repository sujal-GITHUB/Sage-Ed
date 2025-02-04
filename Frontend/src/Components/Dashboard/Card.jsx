import PropTypes from 'prop-types'

export const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-xl shadow-sm ${className}`}>
      {children}
    </div>
  )

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}