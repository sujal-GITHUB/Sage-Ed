import { Card } from "./Card"
import { Clock } from "lucide-react"
import PropTypes from 'prop-types'

export const EventCard = ({ type, description, time, date, icon: Icon, variant }) => {
  const variantStyles = {
    default: 'bg-white',
    purple: 'bg-purple-100',
    yellow: 'bg-yellow-50'
  }

  return (
    <Card className={`p-4 ${variantStyles[variant || 'default']}`}>
      <div className="flex items-start gap-4">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Icon className="w-4 h-4 text-purple-600" />
        </div>
        <div>
          <div className="font-medium">{type}</div>
          <div className="text-sm text-gray-500">{description}</div>
          {time && (
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{time}</span>
            </div>
          )}
          <div className="text-xs text-gray-400 mt-1">{date}</div>
        </div>
      </div>
    </Card>
  )
}

EventCard.propTypes = {
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string,
  date: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  variant: PropTypes.oneOf(['default', 'purple', 'yellow'])
}
