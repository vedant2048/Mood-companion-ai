import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
    >
      {/* Dramatic glow backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] rounded-full bg-gradient-radial opacity-25 animate-glow-pulse"
          style={{
            background: "radial-gradient(ellipse at center, rgba(99,102,241,0.4) 0%, rgba(139,92,246,0.2) 40%, transparent 70%)"
          }}
        />
      </div>

      {/* Subtle particle dots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-indigo-400/40 animate-float"
          style={{
            left: `${10 + i * 11}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + (i % 3)}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-medium mb-8">
          <Sparkles size={12} className="text-indigo-400" />
          Begin your experience
        </div>

        {/* Headline */}
        <h2 className="reveal reveal-delay-1 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
          Whatever you're feeling,
          <br />
          <span className="gradient-text">start here.</span>
        </h2>

        {/* Supporting text */}
        <p className="reveal reveal-delay-2 text-zinc-400 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Choose a mood. Say what's on your mind.
          <br />
          See what AI Mood has to say.
        </p>

        {/* CTA Button */}
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/moods")}
            className="group relative btn-primary text-base px-10 py-4 flex items-center gap-3 overflow-hidden"
          >
            {/* Button shimmer on hover */}
            <span className="relative z-10 flex items-center gap-2 font-semibold text-base">
              Get Started
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </span>
            {/* Shimmer overlay */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </button>

          <div className="flex items-center gap-3 text-zinc-600 text-sm">
            <span className="w-px h-4 bg-zinc-700" />
            <span>No account required</span>
          </div>
        </div>

        {/* Reassurance text */}
        <p className="reveal reveal-delay-4 text-zinc-600 text-xs mt-8">
          AI Mood is a personal digital companion. Not a substitute for professional mental health support.
        </p>
      </div>
    </section>
  );
}
