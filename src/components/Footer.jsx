import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Emotions", href: "#moods" },
  { label: "Why AI Mood", href: "#why" },
];

export default function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-zinc-800/60 bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo & tagline */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group w-fit"
            >
              <div className="relative">
                <Sparkles size={16} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <div className="absolute inset-0 blur-sm bg-indigo-500/30 rounded-full" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight group-hover:text-indigo-100 transition-colors">
                AI Mood
              </span>
            </button>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">
              A small space for your thoughts.
              <br />
              Express. Reflect. Respond.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col sm:flex-row gap-2 sm:gap-1">
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm text-zinc-500 hover:text-white rounded-lg hover:bg-white/5 transition-all text-left sm:text-center font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => navigate("/moods")}
              className="px-4 py-2 text-sm text-indigo-400 hover:text-indigo-300 rounded-lg hover:bg-indigo-500/10 transition-all text-left sm:text-center font-medium"
            >
              Get Started
            </button>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-zinc-800/40 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-zinc-600 text-xs">
            © 2026 AI Mood. Personal digital companion.
          </p>
          <p className="text-zinc-700 text-xs">
            Not a substitute for professional mental health support.
          </p>
        </div>
      </div>
    </footer>
  );
}
