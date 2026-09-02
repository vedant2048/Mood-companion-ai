import React, { useState, useEffect, useRef } from "react";
import { Bot, User, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const conversations = [
  {
    mood: "😰 Anxious",
    moodColor: "text-orange-400",
    user: "I've been working really hard lately, but I still feel like I'm not doing enough.",
    ai: "You don't have to measure your progress by how exhausted you are. Sometimes doing your best simply means giving yourself permission to pause. The fact that you care this deeply is already something.",
  },
  {
    mood: "😔 Heavy-Hearted",
    moodColor: "text-blue-400",
    user: "Things just feel overwhelming today and I can't pinpoint exactly why.",
    ai: "Unexplainable heaviness is completely valid. You don't have to solve everything today — or understand it all right now. Just breathe. You're allowed to simply exist in this moment.",
  },
  {
    mood: "🤩 Celebratory",
    moodColor: "text-purple-400",
    user: "I finally tackled a fear I've been holding onto for months.",
    ai: "That bravery deserves to be fully celebrated. The version of you from a month ago would be so proud. Remember this exact moment whenever self-doubt tries to creep back in.",
  },
  {
    mood: "😡 Frustrated",
    moodColor: "text-red-400",
    user: "No matter what I do, nothing ever seems to go right.",
    ai: "Frustration like this is exhausting. When the ground feels unsteady, it's okay to stand still for a moment. You're not failing — you're navigating something genuinely hard.",
  },
];

export default function ResponsePreview() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
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

  const handleChange = (newIdx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIdx(newIdx);
      setAnimating(false);
    }, 200);
  };

  const prev = () => handleChange((activeIdx - 1 + conversations.length) % conversations.length);
  const next = () => handleChange((activeIdx + 1) % conversations.length);

  const current = conversations[activeIdx];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Glow backdrop */}
      <div className="glow-blob glow-indigo w-[700px] h-[500px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-20 animate-glow-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-5">
            <Bot size={12} />
            Live Preview
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            A Response That Starts
            <br />
            <span className="gradient-text">With How You Feel.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Every message is generated based on your emotional state and what you share.
            Thoughtful. Personal. Never generic.
          </p>
        </div>

        {/* Conversation Preview Card */}
        <div className={`reveal glass-card rounded-3xl p-6 sm:p-8 border border-zinc-700/40 shadow-2xl transition-opacity duration-200 ${animating ? "opacity-0" : "opacity-100"}`}>
          {/* Mood label */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className={`text-sm font-semibold ${current.moodColor}`}>
                {current.mood}
              </span>
            </div>
            <span className="text-xs text-zinc-600 bg-zinc-800/60 px-3 py-1 rounded-full">
              Sample conversation
            </span>
          </div>

          {/* User Message */}
          <div className="flex items-start gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-zinc-700 border border-zinc-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <User size={14} className="text-zinc-300" />
            </div>
            <div className="flex-1 bg-zinc-800/70 rounded-2xl rounded-tl-md px-4 py-3 border border-zinc-700/50">
              <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                "{current.user}"
              </p>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles size={14} className="text-indigo-400" />
            </div>
            <div className="flex-1">
              <div className="glass-response rounded-2xl rounded-tl-md px-4 py-3 shadow-lg shadow-indigo-500/10">
                <p className="text-zinc-100 text-sm sm:text-base leading-relaxed">
                  "{current.ai}"
                </p>
              </div>
              {/* AI label */}
              <div className="flex items-center gap-1.5 mt-2 pl-1">
                <Bot size={10} className="text-zinc-600" />
                <span className="text-zinc-600 text-xs">
                  AI-generated response · For thoughtful reflection, not clinical advice
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full glass-card border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/30 transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {conversations.map((_, i) => (
              <button
                key={i}
                onClick={() => handleChange(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIdx ? "w-6 bg-indigo-400" : "w-1.5 bg-zinc-600 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full glass-card border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/30 transition-all duration-200 hover:scale-105"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
