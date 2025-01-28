import React, { useState, useEffect, useCallback } from "react";
import AnalogDisplay from "./AnalogDisplay";
import { Play, Pause, RotateCcw, StopCircle } from 'lucide-react'

const Clock = () => {
  const [time, setTime] = useState(0); // Current time in milliseconds
  const [isRunning, setIsRunning] = useState(false); // Running state
  const [mode, setMode] = useState("stopwatch"); // Current mode
  const [timerDuration, setTimerDuration] = useState(60000); // Timer duration (default 1 minute)

  // Handle time updates when running
  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (mode === "stopwatch") {
            return prevTime + 10; // Stopwatch increments
          } else {
            const newTime = prevTime - 10; // Timer decrements
            if (newTime <= 0) {
              clearInterval(intervalId);
              setIsRunning(false);
              return 0; // Stop at 0 for timer
            }
            return newTime;
          }
        });
      }, 10);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning, mode]);

  // Start/Stop toggle
  const handleStartStop = () => {
    if (mode === "timer" && !isRunning && time === 0) {
      setTime(timerDuration); // Reset timer duration if it's 0
    }
    setIsRunning(!isRunning);
  };

  // Reset functionality
  const handleReset = () => {
    setIsRunning(false);
    setTime(mode === "stopwatch" ? 0 : timerDuration);
  };

  // Change mode (stopwatch or timer)
  const handleChangeMode = (newMode) => {
    setMode(newMode);
    setIsRunning(false);
    setTime(newMode === "stopwatch" ? 0 : timerDuration);
  };

  // Format time into HH:mm:ss.cc
  const formatTime = useCallback((milliseconds) => {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`;
  }, []);

  return (
    <div className="p-4 md:p-6 bg-violet-200 rounded-xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex flex-col items-center gap-4">
      <select
            className="w-full px-4 py-2 bg-white rounded-lg border-2 border-black font-bold focus:outline-none cursor-pointer"
            value={mode}
            onChange={(e) => handleChangeMode(e.target.value)}
          >
            <option value="stopwatch">Stopwatch</option>
            <option value="timer">Timer</option>
          </select>
        <AnalogDisplay time={time} mode={mode} />
        
        <div className="font-mono text-xl font-bold">
          {formatTime(time)}
        </div>

        <div className="flex w-full gap-3">
          {mode === "timer" && (
            <select
              className="w-full px-4 py-2 bg-white rounded-lg border-2 border-black font-bold focus:outline-none cursor-pointer"
              value={timerDuration}
              onChange={(e) => {
                const newDuration = Number.parseInt(e.target.value, 10);
                setTimerDuration(newDuration);
                if (!isRunning) setTime(newDuration);
              }}
            >
              <option value={60000}>1 minute</option>
              <option value={300000}>5 minutes</option>
              <option value={600000}>10 minutes</option>
              <option value={1800000}>30 minutes</option>
              <option value={3600000}>1 hour</option>
            </select>
          )}
          <div className="flex  gap-3">
            <button
              className={`p-2 rounded-lg border-2 border-black transition-all hover:scale-105
                ${isRunning 
                  ? "bg-red-200 hover:bg-red-300" 
                  : "bg-green-200 hover:bg-green-300"
                }`}
              onClick={handleStartStop}
              title={isRunning ? "Pause" : "Play"}
            >
              {isRunning ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button
              className="p-2 bg-yellow-200 rounded-lg border-2 border-black hover:bg-yellow-300 transition-all hover:scale-105"
              onClick={handleReset}
              title="Reset"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default Clock;
