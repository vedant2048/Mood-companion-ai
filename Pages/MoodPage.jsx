import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Sparkles, ArrowLeft, Shuffle, Send, Bot, LayoutGrid } from "lucide-react";
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
    const trimmedReason = reason.trim();
    if (!trimmedReason) {
      setQuote("Please enter a reason first.");
      return;
    }

    setLoading(true);
    setQuote("");

    try {
      const res = await fetch(
        `${API}/api/quotefor/${encodeURIComponent(trimmedReason)}?mood=${encodeURIComponent(mood)}`
      );

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      setQuote(data.quote || "No message generated.");

    } catch (error) {
      console.error(error);
      setQuote("Failed to generate message. Please make sure the backend server is running on port 5000.");
    } finally {
      setLoading(false);
    }
  }

  // ✅ Random message
  async function handleClick() {
    setLoading(true);
    setQuote("");

    try {
      const res = await fetch(`${API}/api/quote?mood=${encodeURIComponent(mood)}`);

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      setQuote(data.quote || "No message generated.");

    } catch (error) {
      console.error(error);
      setQuote("Failed to generate message. Please make sure the backend server is running on port 5000.");
    } finally {
      setLoading(false);
    }
  }

  const moodEmojis = {
    Happy: "😊", Sad: "😔", sad: "😔", Angry: "😡", lazy: "😴",
    Anxious: "😰", Calm: "😌", Excited: "🤩", Motivated: "💪",
    Lonely: "😞", Frustrated: "😤",
  };
  const emoji = moodEmojis[mood] || "💭";

  return (
    <div className="mainapipage min-h-screen bg-[#09090B] text-white overflow-x-hidden">
      {/* Fixed glow blobs */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.10) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b border-zinc-800/60"
        style={{ background: "rgba(9,9,11,0.88)", backdropFilter: "blur(20px)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Back button */}
            <button
              onClick={() => navigate("/moods")}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group text-sm"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">Change Mood</span>
              <LayoutGrid size={14} className="sm:hidden" />
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-indigo-400" />
              <span className="text-white font-bold text-base">AI Mood</span>
            </div>

            {/* Home link */}
            <button
              onClick={() => navigate("/")}
              className="text-zinc-500 hover:text-white text-xs sm:text-sm transition-colors"
            >
              Home
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-12 md:py-16 flex flex-col gap-6 sm:gap-8 w-full">
        {/* Mood heading */}
        <div className="text-center">
          <div className="text-5xl sm:text-7xl mb-3 sm:mb-4 block select-none">{emoji}</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold capitalize mb-2 sm:mb-3">
            You're feeling{" "}
            <span style={{
              background: "linear-gradient(135deg, #818cf8, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              {mood}
            </span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto">
            Tell us a little about what's going on, and we'll respond.
          </p>
        </div>

        {/* Input card */}
        <div
          className="rounded-2xl border border-zinc-700/50 overflow-hidden"
          style={{ background: "rgba(39,39,42,0.5)", backdropFilter: "blur(12px)" }}
        >
          <div className="p-4 border-b border-zinc-700/40">
            <p className="text-zinc-400 text-sm font-medium">What's on your mind?</p>
          </div>
          <textarea
            placeholder="Share what's going on... (optional)"
            className="txtarea w-full h-36 p-4 bg-transparent text-zinc-100 text-sm placeholder-zinc-600 resize-none focus:outline-none"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) sendPrompt();
            }}
          />
          <div className="px-4 pb-4 flex items-center justify-between gap-3">
            <span className="text-zinc-700 text-xs">Ctrl+Enter to send</span>
            <button
              onClick={sendPrompt}
              disabled={loading}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                boxShadow: "0 4px 15px rgba(99,102,241,0.3)",
              }}
            >
              <Send size={14} />
              Send
            </button>
          </div>
        </div>

        {/* Or divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-zinc-600 text-sm font-medium px-2">or</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        {/* Random button */}
        <div className="text-center">
          <button
            onClick={handleClick}
            disabled={loading}
            className="homebtn inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-700/60 text-zinc-300 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Shuffle size={16} />
            Get a Random Message
          </button>
          <p className="text-zinc-700 text-xs mt-2">
            No words needed — just a little encouragement
          </p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex flex-col items-center gap-3 py-6">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-indigo-400"
                  style={{
                    animation: "pulse 1.2s ease-in-out infinite",
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
            <p className="text-indigo-400 text-sm animate-pulse font-medium">
              AI Mood is thinking...
            </p>
          </div>
        )}

        {/* Quote output */}
        {quote && !loading && (
          <div
            className="rounded-2xl border p-6"
            style={{
              background: "rgba(30,27,75,0.35)",
              backdropFilter: "blur(12px)",
              borderColor: "rgba(99,102,241,0.25)",
              boxShadow: "0 8px 32px rgba(99,102,241,0.1)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-indigo-500/25 flex items-center justify-center">
                <Bot size={12} className="text-indigo-400" />
              </div>
              <span className="text-indigo-400 text-xs font-semibold tracking-wide uppercase">
                AI Mood Response
              </span>
            </div>
            <p className="text-zinc-100 text-base leading-relaxed">
              "{quote}"
            </p>
            <p className="text-zinc-600 text-xs mt-4">
              AI-generated · For thoughtful reflection, not clinical advice.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default MoodPage;