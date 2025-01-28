import React from "react"
import { useState } from "react"

export default function AiAssistant() {
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      role: "user",
      content: "Hey, can you explain how the model determines token usage and tracks interactions?",
      timestamp: "2:45 PM",
    },
    {
      id: 2,
      role: "assistant",
      content:
        "Our model counts tokens, spaces and special characters. Each token corresponds roughly to one word, depending on the language and complexity of the sentence. For more detailed tracking of your interactions, we use timestamps and session IDs to ensure the most relevant responses.",
      timestamp: "2:46 PM",
    },
  ])
  const [input, setInput] = useState("")
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)

  const chatHistory = [
    "How can I improve my time man...",
    "What's the best way to learn a n...",
    "How do I start investing in stock...",
    "What are the benefits of daily ex...",
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        role: "user",
        content: input,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ])
    setInput("")
  }

  return (
    <div className="w-full h-[calc(100vh-100px)]">
      <div className="h-full bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 p-6">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold mb-6">Ask your doubts</h2>
          <h4 className="text-sm font-semibold mb-6">Powered by Gemini</h4>
          </div>
          
          {/* Messages Container with Hidden Scrollbar */}
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

          {/* Input Area */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black font-mono"
                placeholder="Type your message..."
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                <button
                  onClick={() => setIsBold(!isBold)}
                  className={`p-1 px-1.5 sm:px-2 text-xs sm:text-sm hover:cursor-pointer rounded border-2 border-black ${
                    isBold ? "bg-black text-white" : "bg-[#d7e933]"
                  }`}
                >
                  B
                </button>
                <button
                  onClick={() => setIsItalic(!isItalic)}
                  className={`p-1 px-2 sm:px-2 text-xs sm:text-sm hover:cursor-pointer rounded border-2 border-black ${
                    isItalic ? "bg-black text-white" : "bg-[#d7e933]"
                  }`}
                >
                  I
                </button>
              </div>
            </div>
            <button 
              onClick={handleSubmit}
              className="px-4 sm:px-6 py-2 text-sm sm:text-base bg-[#d7e933] rounded-lg border-2 border-black hover:cursor-pointer transition-colors font-mono whitespace-nowrap"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
