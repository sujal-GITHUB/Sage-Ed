"use client";

const WeeklyChart = () => {
  const data = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 1.2 },
    { day: "Wed", hours: 4.0 },
    { day: "Thu", hours: 3.5 },
    { day: "Fri", hours: 2.8 },
    { day: "Sat", hours: 1.5 },
    { day: "Sun", hours: 2.2 },
  ]

  const maxHours = Math.max(...data.map(item => item.hours))
  const totalHours = data.reduce((sum, item) => sum + item.hours, 0)
  const graphHeight = 192
  const padding = 20

  return (
    <div className="bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Weekly Progress</h2>
          <p className="text-lg font-medium">Total: {totalHours.toFixed(1)}h</p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col justify-between h-48 pr-2 font-bold">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-right">
              {(maxHours - (i * maxHours/4)).toFixed(1)}h
            </span>
          ))}
        </div>

        <div className="relative flex-1">
          <div className="absolute inset-0 flex flex-col justify-between">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="border-t-2 border-black/10 w-full" />
            ))}
          </div>

          <div className="relative flex items-end h-48 gap-2">
            {data.map((item) => (
              <div key={item.day} className="flex-1 flex flex-col items-center">
                <div
                  style={{ height: `${(item.hours / maxHours) * (192 - 40)}px` }}
                  className="w-full max-w-[30px] bg-white border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
                />
                <span className="mt-2 font-bold">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeeklyChart