import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import.meta.env;
import.meta.env.VITE_API_URL;

function MoodPage() {
  const { mood } = useParams();

  // ⭐ API URL (works for local + production)
  const API = import.meta.env.VITE_API_URL || "";

  const [reason, setReason] = useState("");
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ Send with reason
  async function sendPrompt() {
    if (!reason.trim()) {
      setQuote("Please enter a reason first.");
      return;
    }

    setLoading(true);
    setQuote("");

    try {
      const res = await fetch(
        `${API}/api/quotefor/${encodeURIComponent(reason)}?mood=${mood}`
      );

      const data = await res.json();
      setQuote(data.quote);

    } catch (error) {
      console.error(error);
      setQuote("Failed to generate message.");
    } finally {
      setLoading(false);
    }
  }

  // ✅ Random message
  async function handleClick() {
    setLoading(true);
    setQuote("");

    try {
      const res = await fetch(`${API}/api/quote?mood=${mood}`);

      const data = await res.json();
      setQuote(data.quote);

    } catch (error) {
      console.error(error);
      setQuote("Failed to generate message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className= "mainapipage bg-zinc-900 min-h-screen text-white flex flex-col items-center gap-8">

      {/* Heading */}
      <h1 className="headingMoodPage text-5xl font-bold capitalize p-4 mt-4 hover:text-indigo-500">
        You Feeling {mood}? Let us Know Why!
      </h1>

      {/* Text Area */}
      <textarea
        placeholder="Type your words"
        className="txtarea w-full max-w-3xl h-36 p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6 bg-zinc-800"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      {/* Send Button */}
      <button
        className="border-2 rounded-4xl border-indigo-500 px-4 py-3 text-2xl hover:bg-indigo-600"
        onClick={sendPrompt}
      >
        Send
      </button>

      <div>
        <h1 className="text-6xl">Or</h1>
      </div>

      {/* Random Button */}
      <button
        onClick={handleClick}
        className="border-2 border-indigo-500 px-6 py-3 rounded-3xl hover:bg-indigo-600 transition"
      >
        Get Random
      </button>

      {/* Loading */}
      {loading && (
        <p className="text-lg text-indigo-400 animate-pulse">
          Generating message...
        </p>
      )}

      {/* Quote Output */}
      {quote && !loading && (
        <div className="w-full max-w-3xl p-4 bg-zinc-800 rounded-xl text-lg text-center">
          {quote}
        </div>
      )}

      {/* Back Button */}
      <button
        className="homebtn text-2xl text-white border-2 rounded-xl border-indigo-500 p-4 hover:bg-sky-800"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>

    </div>
  );
}

export default MoodPage;