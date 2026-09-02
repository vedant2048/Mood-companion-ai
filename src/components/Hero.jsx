import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown, Sparkles, Bot } from "lucide-react";

const moods = [
  { emoji: "😊", label: "Happy", color: "hover:bg-amber-500/20 hover:border-amber-400/40" },
  { emoji: "😔", label: "Sad", color: "hover:bg-blue-500/20 hover:border-blue-400/40" },
  { emoji: "😡", label: "Angry", color: "hover:bg-red-500/20 hover:border-red-400/40" },
  { emoji: "😰", label: "Anxious", color: "hover:bg-orange-500/20 hover:border-orange-400/40" },
  { emoji: "😌", label: "Calm", color: "hover:bg-teal-500/20 hover:border-teal-400/40" },
  { emoji: "🤩", label: "Excited", color: "hover:bg-purple-500/20 hover:border-purple-400/40" },
];

const aiResponses = [
  "It's okay to have difficult days. Take things one step at a time.",
  "You are allowed to feel everything you're feeling. That's what makes you human.",
  "Sometimes the bravest thing you can do is sit with your emotions.",
  "Your feelings are valid. Give yourself the grace you'd give a close friend.",
];

export default function Hero() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState(null);
  const [responseIdx, setResponseIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setResponseIdx((i) => (i + 1) % aiResponses.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Ambient Glow Blobs */}
      <div className="glow-blob glow-indigo animate-glow-pulse w-[600px] h-[600px] -top-32 -left-40 opacity-60" />
      <div className="glow-blob glow-violet animate-glow-pulse w-[500px] h-[500px] top-1/2 right-0 opacity-40" style={{ animationDelay: "1.5s" }} />
      <div className="glow-blob glow-blue w-[400px] h-[400px] bottom-0 left-1/3 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ─── LEFT: Copy ─── */}
          <div className={`flex flex-col gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
              <Sparkles size={12} className="text-indigo-400" />
              Personal Digital Companion · AI-Powered
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight">
              <span className="text-white">Your Mood</span>
              <br />
              <span className="gradient-text">Matters.</span>
              <br />
              <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">Tell Us How You Feel.</span>
            </h1>

            {/* Supporting line */}
            <p className="text-zinc-300 text-lg sm:text-xl font-light leading-relaxed max-w-lg" style={{ transitionDelay: "0.1s" }}>
              A little space to express what's on your mind,
              <br />
              and a little AI to respond.
            </p>

            {/* Description */}
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-md">
              AI Mood helps you express your emotions, understand what you're feeling,
              and receive a personalized message based on your mood and what you're going through.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                onClick={() => navigate("/moods")}
                className="btn-primary flex items-center justify-center gap-2 text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Get Started
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollToSection("#how-it-works")}
                className="btn-secondary flex items-center justify-center gap-2 text-base px-7 py-3.5 w-full sm:w-auto"
              >
                How It Works
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-1">
              {["No login needed", "100% judgment-free", "Instant empathy"].map((txt) => (
                <span key={txt} className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/70 inline-block" />
                  {txt}
                </span>
              ))}
            </div>
          </div>

          {/* ─── RIGHT: Hero Card ─── */}
          <div
            className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-radial from-indigo-600/40 via-violet-600/20 to-transparent rounded-3xl scale-110" />

            {/* Hero Preview Card */}
            <div className="glass-hero-card rounded-3xl p-6 shadow-2xl shadow-black/50 animate-float-slow">
              {/* Card Header */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                  <Bot size={14} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">AI Mood</p>
                  <p className="text-zinc-500 text-xs">How are you feeling today?</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[0,1,2].map(i => (
                    <div key={i} className={`w-2.5 h-2.5 rounded-full ${i===0 ? "bg-red-500/70" : i===1 ? "bg-amber-500/70" : "bg-green-500/70"}`} />
                  ))}
                </div>
              </div>

              {/* Question */}
              <p className="text-zinc-300 text-xs font-medium mb-3 uppercase tracking-widest">
                Select your mood
              </p>

              {/* Mood Selector Pills */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {moods.map((m) => (
                  <button
                    key={m.label}
                    onClick={() => setSelectedMood(m.label)}
                    className={`flex flex-col items-center gap-1 py-2.5 px-2 rounded-xl border transition-all duration-200 cursor-pointer text-center
                      ${selectedMood === m.label
                        ? "bg-indigo-500/25 border-indigo-400/50 scale-105 shadow-lg shadow-indigo-500/20"
                        : `bg-zinc-800/60 border-zinc-700/50 ${m.color}`
                      }`}
                  >
                    <span className="text-xl">{m.emoji}</span>
                    <span className="text-xs text-zinc-300 font-medium">{m.label}</span>
                  </button>
                ))}
              </div>

              {/* Text input mock */}
              <div className="bg-zinc-800/60 rounded-xl border border-zinc-700/50 px-4 py-3 mb-4">
                <p className="text-zinc-500 text-sm">Tell us what's on your mind...</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent mb-4" />

              {/* AI Response */}
              <div className="glass-response rounded-xl px-4 py-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/30 flex items-center justify-center">
                    <Sparkles size={10} className="text-indigo-400" />
                  </div>
                  <span className="text-indigo-400 text-xs font-semibold">AI Mood Response</span>
                </div>
                <p
                  key={responseIdx}
                  className="text-zinc-200 text-sm leading-relaxed animate-fade-in"
                >
                  "{aiResponses[responseIdx]}"
                </p>
              </div>
            </div>

            {/* Floating accent badges */}
            <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-3 py-2 border border-indigo-500/20 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-1.5">
                <span className="text-base">✨</span>
                <span className="text-xs text-zinc-300 font-medium">AI-Powered</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-3 py-2 border border-violet-500/20 shadow-xl animate-float" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-1.5">
                <span className="text-base">💜</span>
                <span className="text-xs text-zinc-300 font-medium">Judgment-free</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
