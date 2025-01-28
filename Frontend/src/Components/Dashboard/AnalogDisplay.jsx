import React from "react";

const AnalogDisplay = ({ time, mode }) => {
  const hours = Math.floor((time / 3600000) % 12);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);

  const hourDegrees = ((hours % 12) + minutes / 60) * 30;
  const minuteDegrees = (minutes + seconds / 60) * 6;
  const secondDegrees = seconds * 6;

  return (
    <div className="relative w-48 h-48">
      {/* Clock Face */}
      <div className="absolute inset-0 rounded-full border-4 border-black bg-white">

        {/* Hour Markers */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`marker-${i}`}
            className="absolute w-1 h-3 bg-black"
            style={{
              top: '8px',
              left: 'calc(50% - 2px)',
              transformOrigin: '50% calc(100% + 70px)',
              transform: `rotate(${i * 30}deg)`
            }}
          />
        ))}

        {/* Clock Hands */}
        <div
          className="absolute w-1.5 h-16 bg-black rounded-full origin-bottom"
          style={{
            bottom: '50%',
            left: 'calc(50% - 3px)',
            transform: `rotate(${hourDegrees}deg)`,
            transformOrigin: 'bottom'
          }}
        />
        <div
          className="absolute w-1 h-20 bg-black rounded-full origin-bottom"
          style={{
            bottom: '50%',
            left: 'calc(50% - 2px)',
            transform: `rotate(${minuteDegrees}deg)`,
            transformOrigin: 'bottom'
          }}
        />
        <div
          className="absolute w-0.5 h-24 bg-red-500 rounded-full origin-bottom"
          style={{
            bottom: '50%',
            left: 'calc(50% - 1px)',
            transform: `rotate(${secondDegrees}deg)`,
            transformOrigin: 'bottom'
          }}
        />

        {/* Center Dot */}
        <div className="absolute w-3 h-3 bg-black rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default AnalogDisplay;
