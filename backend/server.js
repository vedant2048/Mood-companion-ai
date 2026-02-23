import dotenv from "dotenv";
dotenv.config();
console.log(process.env.GEMINI_API_KEY);
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();

app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
app.get("/api/quotefor/:reason", async (req, res) => {
  try {
    const mood = req.query.mood;
    const reason = req.params.reason;
    if (!reason) {
      return res.status(400).json({ error: "Text is required" });
    }
    if (!mood) {
      return res.status(400).json({ error: "Text is required" });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash", 
    });
    const prompt = `
You are a caring human friend, not an AI.

A person feels ${mood} because: ${reason}.

Write a short, heartfelt message that clearly refers to this specific situation.
Make it personal, warm, and realistic.

Rules:
- Max 25 words
- Must mention the reason
- Avoid generic phrases
- No quotes or emojis
`;
    const result = await model.generateContent(prompt);
    const text = result.response.text()
    res.json({quote: text});
    console.log("QUOTEFOR API HIT");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate message" });
  }
  });

app.get("/api/quote", async (req, res) => {
 try {
    const mood = req.query.mood;

    if (!mood) {
      return res.status(400).json({ error: "Mood is required" });
    }

    // UPDATED: Use the 2026 stable model ID
    const  model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash", 
    });

    const prompt = `Give a short positive message for someone feeling ${mood}. Keep it under 25 words.`;

    // Standard call remains the same
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    console.log("QUOTE API HIT");
    res.json({ quote: text });

  }catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate message" });
  }
});

const PORT = 5000;
console.log("API HIT");

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});