import { Button } from "../ui/Button"
import { BookOpen, Plus, MoreHorizontal, X } from "lucide-react"
import { StatusBadge } from "./StatusBadge"
import PropTypes from 'prop-types'

export const LearningItem = ({ title, description, status }) => (
  <div className="flex items-start gap-4">
    <Button
      variant="outline"
      size="icon"
      className="rounded-xl w-12 h-12 bg-black text-white hover:bg-black/90"
    >
      <BookOpen className="w-6 h-6" />
    </Button>
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <Plus className="w-5 h-5" />
      </div>
      <div className="flex items-center gap-2 mt-2">
        <StatusBadge status={status} />
        <Button variant="ghost" size="icon" className="w-6 h-6">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon" className="w-6 h-6">
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
)

LearningItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}
