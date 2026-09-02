import React, { useEffect, useRef } from "react";
import { PenLine, Eye, MessageCircle } from "lucide-react";

const cards = [
  {
    icon: <PenLine size={22} className="text-indigo-400" />,
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    title: "Express",
    description:
      "Put your feelings into words without overthinking them. There's no wrong way to feel.",
    gradient: "from-indigo-500/5 to-transparent",
    borderHover: "hover:border-indigo-500/30",
    glowHover: "hover:shadow-indigo-500/10",
  },
  {
    icon: <Eye size={22} className="text-violet-400" />,
    iconBg: "bg-violet-500/10 border-violet-500/20",
    title: "Reflect",
    description:
      "Give yourself a moment to acknowledge how you're actually feeling. No judgment, no pressure.",
    gradient: "from-violet-500/5 to-transparent",
    borderHover: "hover:border-violet-500/30",
    glowHover: "hover:shadow-violet-500/10",
  },
  {
    icon: <MessageCircle size={22} className="text-purple-400" />,
    iconBg: "bg-purple-500/10 border-purple-500/20",
    title: "Respond",
    description:
      "Receive an AI-generated message that meets you exactly where you are, based on what you shared.",
    gradient: "from-purple-500/5 to-transparent",
    borderHover: "hover:border-purple-500/30",
    glowHover: "hover:shadow-purple-500/10",
  },
];

export default function WhyAIMood() {
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
      id="why"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle background variation */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-transparent to-zinc-900/20" />
      <div className="glow-blob glow-violet w-[500px] h-[400px] right-0 top-1/2 -translate-y-1/2 opacity-15 animate-glow-pulse" />
      <div className="glow-blob glow-indigo w-[400px] h-[400px] left-0 top-1/2 -translate-y-1/2 opacity-10 animate-glow-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-5">
            <span>🌙</span>
            Why it matters
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            Made for the Moments
            <br />
            <span className="gradient-text">Between Everything Else.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            The quiet moments when you're not sure what you're feeling.
            The heavy ones when words feel too far away. AI Mood meets you there.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal reveal-delay-${i + 1} group glass-card rounded-2xl p-8 border border-zinc-700/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${card.glowHover} ${card.borderHover} bg-gradient-to-br ${card.gradient}`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl ${card.iconBg} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {card.icon}
              </div>

              {/* Number */}
              <div className="text-zinc-700 text-6xl font-black mb-3 leading-none">
                0{i + 1}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-2xl mb-3">{card.title}</h3>

              {/* Description */}
              <p className="text-zinc-500 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
