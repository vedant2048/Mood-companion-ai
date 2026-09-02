import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const moods = [
  {
    emoji: "😊",
    label: "Happy",
    description: "Hold on to that feeling.",
    color: "hover:border-amber-400/40 hover:bg-amber-500/8 hover:shadow-amber-500/10",
    emojiGlow: "drop-shadow(0 0 8px rgba(251,191,36,0.5))",
    route: "Happy",
  },
  {
    emoji: "😔",
    label: "Sad",
    description: "It's okay not to be okay.",
    color: "hover:border-blue-400/40 hover:bg-blue-500/8 hover:shadow-blue-500/10",
    emojiGlow: "drop-shadow(0 0 8px rgba(96,165,250,0.5))",
    route: "sad",
  },
  {
    emoji: "😡",
    label: "Angry",
    description: "Acknowledge the storm, find your center.",
    color: "hover:border-red-400/40 hover:bg-red-500/8 hover:shadow-red-500/10",
    emojiGlow: "drop-shadow(0 0 8px rgba(248,113,113,0.5))",
    route: "Angry",
  },
  {
    emoji: "😰",
    label: "Anxious",
    description: "Take a breath. One thing at a time.",
    color: "hover:border-orange-400/40 hover:bg-orange-500/8 hover:shadow-orange-500/10",
    emojiGlow: "drop-shadow(0 0 8px rgba(251,146,60,0.5))",
    route: "Anxious",
  },
  {
    emoji: "😞",
    label: "Lonely",
    description: "You are not as alone as you feel.",
    color: "hover:border-sky-400/40 hover:bg-sky-500/8 hover:shadow-sky-500/10",
    emojiGlow: "drop-shadow(0 0 8px rgba(56,189,248,0.5))",
    route: "Lonely",
  },
  {
    emoji: "🤩",
    label: "Excited",
    description: "Channel the spark into what brings you joy.",
    color: "hover:border-purple-400/40 hover:bg-purple-500/8 hover:shadow-purple-500/10",
    emojiGlow: "drop-shadow(0 0 8px rgba(192,132,252,0.5))",
    route: "Excited",
  },
  {
    emoji: "😌",
    label: "Calm",
    description: "Savor the quiet and stillness.",
    color: "hover:border-teal-400/40 hover:bg-teal-500/8 hover:shadow-teal-500/10",
    emojiGlow: "drop-shadow(0 0 8px rgba(45,212,191,0.5))",
    route: "Calm",
  },
  {
    emoji: "💪",
    label: "Motivated",
    description: "Build momentum while the fire burns.",
    color: "hover:border-green-400/40 hover:bg-green-500/8 hover:shadow-green-500/10",
    emojiGlow: "drop-shadow(0 0 8px rgba(74,222,128,0.5))",
    route: "Motivated",
  },
];

export default function MoodSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) =>
              el.classList.add("revealed")
            );
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="moods"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/30 to-transparent" />
      <div className="glow-blob glow-indigo w-[700px] h-[400px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-15 animate-glow-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5">
            <span>💭</span>
            Every emotion is valid
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Whatever You're Feeling,
            <br />
            <span className="gradient-text">Start There.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Click any mood below to jump straight into your AI Mood companion experience.
          </p>
        </div>

        {/* Mood Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
          {moods.map((mood, i) => (
            <button
              key={mood.label}
              onClick={() => navigate(`/mood/${mood.route}`)}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} group glass-card rounded-2xl p-3.5 sm:p-5 text-left border border-zinc-700/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${mood.color} cursor-pointer min-w-0 w-full flex flex-col justify-between`}
            >
              <div>
                {/* Emoji */}
                <div
                  className="text-3xl sm:text-4xl mb-2 sm:mb-3 block transition-transform duration-300 group-hover:scale-110 w-fit select-none"
                  style={{
                    filter: "drop-shadow(0 0 0px transparent)",
                    transition: "filter 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = mood.emojiGlow)}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
                >
                  {mood.emoji}
                </div>

                {/* Mood name */}
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1 group-hover:text-indigo-200 transition-colors truncate">
                  {mood.label}
                </h3>

                {/* Description */}
                <p className="text-zinc-500 text-[11px] sm:text-xs leading-relaxed group-hover:text-zinc-400 transition-colors line-clamp-2">
                  {mood.description}
                </p>
              </div>

              {/* Subtle arrow on hover */}
              <div className="mt-2 sm:mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-indigo-400 text-xs font-medium">Start here →</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
