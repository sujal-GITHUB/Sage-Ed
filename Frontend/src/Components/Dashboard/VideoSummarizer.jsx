import { useState } from "react";
import { Link, Upload, Bot, FileVideo, List, Plus, Send, X } from "lucide-react";

const VideoSummarizer = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [questions, setQuestions] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload logic here
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const generateQuestions = () => {
    setQuestions([
      "What are the main themes discussed in the video?",
      "How does the speaker support their arguments?",
      "What are the key takeaways from this presentation?"
    ]);
  };

  return (
    <div className="flex flex-col lg:flex-row h-[110%] bg-[#FEFCE8] dark:bg-gray-800">
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col items-start sm:flex-row sm:items-center justify-between mb-6">
          <h1 className="text-2xl font-bold dark:text-white text-left">Video Summarizer</h1>
          <div className="px-4 py-2 bg-[#ADFF00] rounded-lg mt-3 sm:mt-0">
            <span className="text-sm font-medium">Videos Analyzed: 42</span>
          </div>
        </div>

        {/* Video Input Section */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Paste YouTube URL here..."
              className="flex-1 p-3 rounded-lg bg-white dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              <Link className="w-5 h-5" />
            </button>
          </div>

          {/* Drop Zone */}
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`p-6 sm:p-8 border-2 border-dashed rounded-lg text-center transition-colors ${
              isDragging 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            <FileVideo className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 text-gray-400" />
            <p className="mb-2 text-lg font-medium dark:text-white">Drop your video file here</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">or</p>
            <button className="mt-2 px-4 py-2 bg-[#ADFF00] rounded-lg hover:bg-[#9EE800]">
              Browse Files
            </button>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white dark:bg-gray-700 rounded-lg p-5 sm:p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Summary</h2>
          {summary ? (
            <p className="text-gray-700 dark:text-gray-200">{summary}</p>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Bot className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2" />
              <p>Your video summary will appear here</p>
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar - Questions Generator */}
      <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold dark:text-white">Questions</h2>
          <button 
            onClick={generateQuestions}
            className="p-2 bg-[#ADFF00] rounded-lg hover:bg-[#9EE800]"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
              <div className="flex justify-between items-start gap-2">
                <p className="text-sm dark:text-white">{question}</p>
                <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-500 rounded">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          {!questions.length && (
            <div className="text-center text-gray-500 dark:text-gray-400 py-6">
              <List className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Generate questions based on the video summary</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSummarizer;
