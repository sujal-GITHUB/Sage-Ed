"use client";

export default function WeeklyChart() {
  const data = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 1.2 },
    { day: "Wed", hours: 4.0 },
    { day: "Thu", hours: 3.5 },
    { day: "Fri", hours: 2.8 },
    { day: "Sat", hours: 1.5 },
    { day: "Sun", hours: 2.2 },
  ];

  const maxHours = Math.max(...data.map((item) => item.hours));
  const totalHours = data.reduce((sum, item) => sum + item.hours, 0);

  return (
    <div className="p-4 md:p-6 bg-blue-200 rounded-xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">Weekly Progress</h2>
          <p className="text-sm mt-1">Total: {totalHours.toFixed(1)}h</p>
        </div>
      </div>

      <div className="relative flex items-end h-48 gap-2">
        {data.map((item) => (
          <div key={item.day} className="relative flex-1 flex flex-col items-center">
            <span className="absolute -top-6 text-xs font-mono">{item.hours}h</span>
            <div
              style={{ height: `${item.hours*30}px` }}
              className="w-1/2 bg-white border-2 border-black rounded-lg hover:bg-black transition-all"
            />
            <span className="mt-2 text-sm font-bold">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
