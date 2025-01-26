import { useState } from 'react'

const ActivitiesDonut = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Week')
  const [activeSegment, setActiveSegment] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const radius = 50
  const circumference = 2 * Math.PI * radius
  const strokeWidth = 20
  
  const activities = [
    { name: 'Study', percentage: 57, color: '#FCD34D' },
    { name: 'Exams', percentage: 19, color: '#60A5FA' },
    { name: 'Practice', percentage: 24, color: '#34D399' }
  ]

  const periods = ['Day', 'Week', 'Month', 'Year']

return (
    <div className="p-4 md:p-6 h-80 bg-purple-200 rounded-xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Activities</h2>
            <div className="relative">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="px-4 py-2 bg-white rounded-lg border-2 border-black hover:bg-gray-50 flex items-center gap-2"
                >
                    {selectedPeriod} <i className="ri-arrow-down-s-line"></i>
                </button>
                {isOpen && (
                    <div className="absolute top-full right-0 mt-2 w-32 bg-white border-2 border-black rounded-lg shadow-lg z-10">
                        {periods.map(period => (
                            <button
                                key={period}
                                className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                                onClick={() => {
                                    setSelectedPeriod(period)
                                    setIsOpen(false)
                                    
                                }}
                            >
                                {period}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>

        {/* Circle Chart */}
        <div className="flex items-center justify-between">
            <div className="relative w-44 h-44">
                <svg className="transform -rotate-90" viewBox="0 0 150 150">
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
                                stroke={activeSegment === activity.name ? activity.color : `${activity.color}99`}
                                strokeWidth={activeSegment === activity.name ? strokeWidth + 4 : strokeWidth}
                                strokeDasharray={`${normalizedPercentage} ${circumference}`}
                                strokeDashoffset={-prevPercentages}
                                className="transition-all duration-300 cursor-pointer"
                                onMouseEnter={() => setActiveSegment(activity.name)}
                                onMouseLeave={() => setActiveSegment(null)}
                            />
                        )
                    })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">
                        {activeSegment 
                            ? `${activities.find(a => a.name === activeSegment)?.percentage}%`
                            : '100%'}
                    </span>
                </div>
            </div>

            {/* Legend */}
            <div className="flex md:hidden xl:flex flex-col gap-3">
                {activities.map(activity => (
                    <div 
                        key={activity.name}
                        className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all
                            ${activeSegment === activity.name ? 'bg-black text-white' : 'hover:bg-black/5'}`}
                        onMouseEnter={() => setActiveSegment(activity.name)}
                        onMouseLeave={() => setActiveSegment(null)}
                    >
                        <div
                            className="w-4 h-4 rounded border-2 border-black"
                            style={{ backgroundColor: activity.color }}
                        />
                        <span className="font-bold">{activity.name}</span>
                        <span className="text-sm">({activity.percentage}%)</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}

export default ActivitiesDonut