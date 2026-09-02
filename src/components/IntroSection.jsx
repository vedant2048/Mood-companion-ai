import React, { useEffect, useRef } from "react";
import { MessageSquare, Heart, Sparkles, Shuffle } from "lucide-react";

const features = [
  {
    icon: <Heart size={20} className="text-rose-400" />,
    iconBg: "bg-rose-500/10 border-rose-500/20",
    title: "Express Your Mood",
    description:
      "Choose how you're genuinely feeling right now. No filters, no judgment — just honest emotion.",
  },
  {
    icon: <MessageSquare size={20} className="text-indigo-400" />,
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    title: "Unpack Your Thoughts",
    description:
      "Write a few words about what's going on. A safe space to put your feelings into language.",
  },
  {
    icon: <Sparkles size={20} className="text-violet-400" />,
    iconBg: "bg-violet-500/10 border-violet-500/20",
    title: "Empathetic AI Response",
    description:
      "Receive a personalized, thoughtful message tailored to your emotional state and what you shared.",
  },
  {
    icon: <Shuffle size={20} className="text-amber-400" />,
    iconBg: "bg-amber-500/10 border-amber-500/20",
    title: "Instant Encouragement",
    description:
      "Not feeling wordy? Generate a spontaneous uplifting quote whenever you just need a boost.",
  },
];

export default function IntroSection() {
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
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Glow accent */}
      <div className="glow-blob glow-violet w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 animate-glow-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5">
            <Heart size={12} />
            What AI Mood Offers
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            Sometimes, you just
            <br />
            <span className="gradient-text">need to say it.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            You don't always need an answer. Sometimes you just need a place
            to put your thoughts into words — without overthinking, without filtering.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal reveal-delay-${i + 1} group glass-card rounded-2xl p-6 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl ${feature.iconBg} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
