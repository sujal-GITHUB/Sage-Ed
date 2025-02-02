import React from "react"
import { useState } from "react"
import { Upload, Play, PlusCircle, X } from 'lucide-react'

export default function VideoSummarizer() {
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
  const [video, setVideo] = useState(null)
  const [questions, setQuestions] = useState([])
  const [showSummary, setShowSummary] = useState(false)
  const [summary, setSummary] = useState("")

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

  const handleVideoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setVideo(URL.createObjectURL(file))
    }
  }

  const generateQuestions = () => {
    // Sample questions - replace with actual API call
    setQuestions([
      "What are the key concepts discussed in the video?",
      "How does this relate to previous topics?",
      "Can you explain the main example used?",
      "What are the practical applications mentioned?"
    ])
  }

  const handleSummarize = () => {
    setSummary("This video discusses the fundamental concepts of machine learning, focusing on supervised learning algorithms. The speaker explains various use cases and practical applications in real-world scenarios. Key points include data preprocessing, model selection, and evaluation metrics. The presentation also covers common pitfalls and best practices for implementing machine learning solutions.")
    setShowSummary(true)
  }

  const handleCloseSummary = () => {
    setShowSummary(false)
    setVideo(null)
    setSummary("")
  }

  return (
    <div className="w-full h-[calc(100vh-100px)]">
      <div className="h-full bg-[#fffbea] border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 p-4 md:p-6">
        <div className="flex flex-col lg:flex-row h-full gap-4">
          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-4 h-[60vh] lg:h-full">
            {!showSummary ? (
              <>
                {!video ? (
                  // Upload Section
                  <label className="h-full flex flex-col items-center justify-center border-2 border-dashed border-black rounded-xl cursor-pointer bg-[#fffdef] transition-colors">
                    <Upload size={48} className="mb-2" />
                    <span className="text-lg font-bold text-center px-2">Upload Video</span>
                    <span className="text-xs sm:text-sm px-2 text-center">Click to browse or drag & drop</span>
                    <input type="file" accept="video/*" className="hidden" onChange={handleVideoUpload} />
                  </label>
                ) : (
                  // Video Player
                  <video 
                    src={video} 
                    controls 
                    className="w-full h-full rounded-xl border-2 border-black bg-black object-contain"
                  />
                )}
                <button
                  onClick={handleSummarize}
                  className="w-full py-3 bg-[#d7e933] rounded-xl border-2 border-black hover:bg-purple-300 transition-colors font-bold"
                >
                  Summarize Video
                </button>
              </>
            ) : (
              <div className="h-full bg-white p-6 rounded-xl border-2 border-black relative">
                <button
                  onClick={handleCloseSummary}
                  className="absolute top-4 right-4 p-2 bg-red-200 rounded-lg border-2 border-black hover:bg-red-300 transition-colors"
                >
                  <X size={20} />
                </button>
                <h3 className="text-xl font-bold mb-4">Video Summary</h3>
                <p className="text-gray-800 leading-relaxed">{summary}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-72 flex flex-col gap-4 bg-[#d7e933] p-4 rounded-xl border-2 border-black min-h-[200px] lg:min-h-0">
            <button
              onClick={generateQuestions}
              className="flex items-center gap-2 px-4 py-2 bg-[#fffdef] rounded-lg border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              <PlusCircle size={20} />
              <span>Generate Questions</span>
            </button>

            <div className="flex-1 space-y-2">
              {questions.map((question, index) => (
                <div 
                  key={index}
                  className="p-3 bg-[#fffbea] rounded-lg border-2 border-black cursor-pointer hover:bg-black hover:text-white transition-colors"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
