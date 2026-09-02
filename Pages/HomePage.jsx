import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowLeft } from "lucide-react";

const moods = [
  {
    label: "Angry",
    emoji: "😡",
    route: "Angry",
    description: "Acknowledge the storm",
    hoverBg: "hover:bg-red-600/80 hover:border-red-500/50 hover:shadow-red-500/20",
    activeBg: "bg-red-700/30",
  },
  {
    label: "Happy",
    emoji: "😊",
    route: "Happy",
    description: "Hold on to that feeling",
    hoverBg: "hover:bg-amber-500/80 hover:border-amber-400/50 hover:shadow-amber-500/20",
    activeBg: "bg-amber-500/20",
  },
  {
    label: "Lazy",
    emoji: "😴",
    route: "lazy",
    description: "Rest is productive too",
    hoverBg: "hover:bg-stone-600/80 hover:border-stone-500/50 hover:shadow-stone-500/20",
    activeBg: "bg-stone-600/20",
  },
  {
    label: "Sad",
    emoji: "😔",
    route: "sad",
    description: "It's okay not to be okay",
    hoverBg: "hover:bg-violet-600/80 hover:border-violet-500/50 hover:shadow-violet-500/20",
    activeBg: "bg-violet-600/20",
  },
  {
    label: "Anxious",
    emoji: "😰",
    route: "Anxious",
    description: "Take a breath. One step at a time.",
    hoverBg: "hover:bg-orange-500/80 hover:border-orange-400/50 hover:shadow-orange-500/20",
    activeBg: "bg-orange-500/20",
  },
  {
    label: "Excited",
    emoji: "🤩",
    route: "Excited",
    description: "Channel that spark",
    hoverBg: "hover:bg-purple-600/80 hover:border-purple-500/50 hover:shadow-purple-500/20",
    activeBg: "bg-purple-600/20",
  },
  {
    label: "Calm",
    emoji: "😌",
    route: "Calm",
    description: "Savor the stillness",
    hoverBg: "hover:bg-teal-600/80 hover:border-teal-500/50 hover:shadow-teal-500/20",
    activeBg: "bg-teal-600/20",
  },
  {
    label: "Motivated",
    emoji: "💪",
    route: "Motivated",
    description: "Build momentum now",
    hoverBg: "hover:bg-green-600/80 hover:border-green-500/50 hover:shadow-green-500/20",
    activeBg: "bg-green-600/20",
  },
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#09090B] text-white overflow-x-hidden">
      {/* Glow blobs */}
      <div className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div className="fixed bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.10) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      {/* Header */}
      <header className="relative z-10 border-b border-zinc-800/60" style={{ background: "rgba(9,9,11,0.85)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back to home */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 group text-sm"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Home
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-indigo-400" />
              <span className="text-white font-bold text-lg">AI Mood</span>
            </div>

            <div className="w-24" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Page heading */}
        <div className="text-center mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-4 sm:mb-5">
            <Sparkles size={12} />
            How are you feeling right now?
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
            Select Your{" "}
            <span style={{
              background: "linear-gradient(135deg, #818cf8, #a78bfa, #c4b5fd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Mood
            </span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-lg max-w-lg mx-auto">
            Choose the emotion that best captures how you're feeling right now.
          </p>
        </div>

        {/* Mood card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => navigate(`/mood/${mood.route}`)}
              className={`group relative flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 md:p-8 rounded-2xl border border-zinc-700/50 bg-zinc-800/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer text-center ${mood.hoverBg} w-full min-w-0`}
            >
              <span className="text-3xl sm:text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110 select-none">
                {mood.emoji}
              </span>
              <div className="w-full min-w-0 px-1">
                <div className="text-white font-semibold text-sm sm:text-base truncate">{mood.label}</div>
                <div className="text-zinc-400 text-[11px] sm:text-xs mt-0.5 line-clamp-2 leading-tight group-hover:text-zinc-200 transition-colors">
                  {mood.description}
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;