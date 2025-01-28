import { useState } from 'react'

const ActivitiesDonut = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Week')
  const [activeSegment, setActiveSegment] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const radius = 50
  const circumference = 2 * Math.PI * radius
  const strokeWidth = 20
  
  const activities = [
    { name: 'Study', percentage: 57, color: '#F59E0B' },  // Warm amber
    { name: 'Exams', percentage: 19, color: '#3B82F6' },  // Vibrant blue
    { name: 'Practice', percentage: 24, color: '#10B981' } // Rich emerald
  ]

  return (
    <div className="p-4 h-80  bg-violet-100 rounded-xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Activities</h2>
        </div>

        {/* Circle Chart */}
        <div className="flex justify-center items-center z-40">
            <div className="relative w-52 h-52">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 150 150">
                    {activities.map((activity, index) => {
                        const normalizedPercentage = (activity.percentage / 100) * circumference
                        const prevPercentages = activities
                            .slice(0, index)
                            .reduce((sum, a) => sum + (a.percentage / 100) * circumference, 0)

                        return (
                            <circle
                                key={activity.name}
                                cx="75"
                                cy="75"
                                r={radius}
                                fill="none"
                                stroke={activity.color}
                                strokeOpacity={activeSegment === activity.name ? 1 : 0.8}
                                strokeWidth={activeSegment === activity.name ? strokeWidth + 4 : strokeWidth}
                                strokeDasharray={`${normalizedPercentage} ${circumference}`}
                                strokeDashoffset={-prevPercentages}
                                className="transition-all duration-500 ease-in-out cursor-pointer hover:filter hover:brightness-110"
                                onMouseEnter={() => setActiveSegment(activity.name)}
                                onMouseLeave={() => setActiveSegment(null)}
                            />
                        )
                    })}
                </svg>
                {activeSegment && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300">
                        <span className="text-3xl font-bold mb-1">
                            {activities.find(a => a.name === activeSegment)?.percentage}%
                        </span>
                        <span className="text-sm text-black">
                            {activeSegment}
                        </span>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default ActivitiesDonut