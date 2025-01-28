import { YoutubeTranscript } from "youtube-transcript";
import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'

console.log("api key : ",process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const summarizeWithGemini = async (text) => {
  try {
    const prompt = `Summarize the following transcript:\n${text}`;
    const result = await model.generateContentStream(prompt);

    let summary = "";
    for await (const chunk of result.stream) {
      summary += chunk.text(); 
    }

    return summary;
  } catch (error) {
    console.error("Error summarizing with Gemini API:", error.message);
    throw new Error("Failed to summarize the text");
  }
};

const testFetchTranscript = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "YouTube video URL is required" });
    }

    // const url = "https://www.youtube.com/watch?v=OVnnVnLZPEo"

    const transcriptArray = await YoutubeTranscript.fetchTranscript(url);
    const transcriptText = transcriptArray.map((item) => item.text).join(" ");
    console.log("Transcript fetched successfully");

    const summary = await summarizeWithGemini(transcriptText);

    console.log(summary);
    
    res.status(200).json({
      message: "Transcript fetched and summarized successfully",
      summary,
    });
  } catch (error) {
    console.error("Error in testFetchTranscript:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export default testFetchTranscript;
