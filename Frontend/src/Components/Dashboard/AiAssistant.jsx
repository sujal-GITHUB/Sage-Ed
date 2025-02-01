import React, { useState, useEffect } from "react";
import { Mic, MessageCircle, X } from "lucide-react";

const SiriAnimation = ({ isListening }) => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="absolute top-0 left-0">
    <defs>
      <linearGradient id="siriGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF1493" />
        <stop offset="50%" stopColor="#00CED1" />
        <stop offset="100%" stopColor="#9400D3" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {isListening && (
      <>
        <circle 
          cx="60" 
          cy="60" 
          r="45" 
          fill="none" 
          stroke="url(#siriGradient)" 
          strokeWidth="2"
          filter="url(#glow)"
          className="animate-pulse"
        />
        <path
          d={`M 30 60 Q 60 ${45 + Math.sin(Date.now() / 500) * 15} 90 60`}
          fill="none"
          stroke="url(#siriGradient)"
          strokeWidth="2"
          filter="url(#glow)"
          className="animate-pulse"
        >
          <animate
            attributeName="d"
            dur="2s"
            repeatCount="indefinite"
            values={`
              M 30 60 Q 60 45 90 60;
              M 30 60 Q 60 75 90 60;
              M 30 60 Q 60 45 90 60
            `}
          />
        </path>
      </>
    )}
  </svg>
);

export default function AiAssistant() {
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }
  ]);
  const [input, setInput] = useState("");

  const handleVoiceToggle = () => {
    setIsVoiceMode(!isVoiceMode);
    setIsListening(false);
  };

  const startListening = () => {
    setIsListening(true);
    // Simulate listening for 3 seconds
    setTimeout(() => {
      setIsListening(false);
    }, 3000);
  };

  return (
    <div className="w-full h-[calc(100vh-100px)]">
      <div className="h-full bg-[#fffbea] border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 p-6">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              {isVoiceMode ? <Mic className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
              <h2 className="text-2xl font-bold">AI Assistant</h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleVoiceToggle}
                className={`p-2 rounded-full border-2 border-black transition-all ${
                  isVoiceMode ? "bg-[#FED6C1]" : "bg-[#d7e933]"
                }`}
              >
                {isVoiceMode ? <MessageCircle className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {isVoiceMode ? (
            // Voice Interface
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="relative" onClick={startListening}>
                {/* Compact Siri circle */}
                <div className="relative w-[120px] h-[120px]">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 flex items-center justify-center cursor-pointer
                    ${isListening ? 'animate-pulse' : ''}`}>
                    <Mic className="w-8 h-8 text-white z-10" />
                  </div>
                  <SiriAnimation isListening={isListening} />
                </div>
              </div>
              <p className="mt-4 text-lg font-semibold">
                {isListening ? "Listening..." : "Tap to speak"}
              </p>
            </div>
          ) : (
            // Chat Interface
            <div className="flex-1 overflow-y-auto mb-6 pr-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className={`max-w-[85%] sm:max-w-[80%] p-3 sm:p-4 rounded-xl border-2 border-black ${
                      message.role === "user" ? "bg-[#fffdef]" : "bg-[#FED6C1]"
                    }`}>
                      <p className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">{message.content}</p>
                      <span className="text-[10px] sm:text-xs font-semibold text-black">{message.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Only show input area in chat mode */}
          {!isVoiceMode && (
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black font-mono"
                placeholder="Type your message..."
              />
              <button 
                className="px-4 sm:px-6 py-2 text-sm sm:text-base bg-[#d7e933] rounded-lg border-2 border-black hover:cursor-pointer transition-colors font-mono"
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}