import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();

app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ Quote for specific reason
app.get("/api/quotefor/:reason", async (req, res) => {
  try {
    const mood = req.query.mood;
    const reason = req.params.reason;

    if (!reason) {
      return res.status(400).json({ error: "Reason is required" });
    }

    if (!mood) {
      return res.status(400).json({ error: "Mood is required" });
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
    const text = result.response.text();

    res.json({ quote: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate message" });
  }
});

// ✅ General quote
app.get("/api/quote", async (req, res) => {
  try {
    const mood = req.query.mood;

    if (!mood) {
      return res.status(400).json({ error: "Mood is required" });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `Give a short positive message for someone feeling ${mood}. Keep it under 25 words.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.json({ quote: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate message" });
  }
});

// ✅ IMPORTANT: Export instead of listen
export default app;