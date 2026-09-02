import React, { useEffect, useRef } from "react";
import { Smile, PenLine, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Smile size={24} className="text-indigo-400" />,
    title: "Choose Your Mood",
    description:
      "Select how you're feeling right now from a set of emotions that resonates with your current state.",
    accent: "from-indigo-500/20 to-indigo-500/0",
    borderColor: "border-indigo-500/30",
    dotColor: "bg-indigo-500",
  },
  {
    number: "02",
    icon: <PenLine size={24} className="text-violet-400" />,
    title: "Tell Us Why",
    description:
      "Write a few words about what's on your mind. Whatever brought you here — share it freely.",
    accent: "from-violet-500/20 to-violet-500/0",
    borderColor: "border-violet-500/30",
    dotColor: "bg-violet-500",
  },
  {
    number: "03",
    icon: <Sparkles size={24} className="text-purple-400" />,
    title: "Get Your Response",
    description:
      "AI Mood generates a thoughtful, personalized message based on your mood and what you shared.",
    accent: "from-purple-500/20 to-purple-500/0",
    borderColor: "border-purple-500/30",
    dotColor: "bg-purple-500",
  },
];

export default function HowItWorks() {
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
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div className="glow-blob glow-indigo w-[600px] h-[300px] left-1/2 -translate-x-1/2 bottom-0 opacity-25 animate-glow-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-5">
            <Sparkles size={12} />
            Simple by design
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            How <span className="gradient-text">AI Mood</span> Works
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Three simple steps to go from feeling something to understanding it.
          </p>
        </div>

        {/* Steps — Desktop horizontal layout */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-[52px] left-[calc(16.66%+40px)] right-[calc(16.66%+40px)] h-px">
            <div className="h-full bg-gradient-to-r from-indigo-500/40 via-violet-500/40 to-purple-500/40" />
            {/* Moving dots */}
            <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-indigo-400 -translate-y-1/2 animate-float" style={{ animationDuration: "2s" }} />
            <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-violet-400 -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDuration: "2s", animationDelay: "0.7s" }} />
            <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-purple-400 -translate-y-1/2 animate-float" style={{ animationDuration: "2s", animationDelay: "1.4s" }} />
          </div>

          <div className="grid grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center group`}
              >
                {/* Step badge + icon */}
                <div className="relative mb-8">
                  <div
                    className={`w-20 h-20 rounded-2xl glass-card border ${step.borderColor} flex items-center justify-center group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${step.accent}`}
                  >
                    {step.icon}
                  </div>
                  <div
                    className={`absolute -top-2 -right-2 w-7 h-7 rounded-full ${step.dotColor} text-white text-xs font-bold flex items-center justify-center shadow-lg ring-2 ring-zinc-900`}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Step number watermark */}
                <span className="text-zinc-700 text-5xl font-black mb-3 leading-none">
                  {step.number}
                </span>
                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Steps — Mobile vertical layout */}
        <div className="lg:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/40 to-purple-500/40" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${i + 1} relative flex gap-6 items-start`}
              >
                {/* Icon on timeline */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-xl glass-card border ${step.borderColor} flex items-center justify-center bg-gradient-to-br ${step.accent}`}
                  >
                    {step.icon}
                  </div>
                  <div
                    className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full ${step.dotColor} text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-zinc-900`}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <span className="text-zinc-700 text-2xl font-black">{step.number}</span>
                  <h3 className="text-white font-bold text-lg mt-1 mb-2">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
