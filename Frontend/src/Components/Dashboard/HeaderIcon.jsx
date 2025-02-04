import PropTypes from 'prop-types'

export const HeaderIcon = ({ children }) => (
    <div className="flex items-center space-x-2">{children}</div>
  )

HeaderIcon.propTypes = {
  children: PropTypes.node.isRequired
}