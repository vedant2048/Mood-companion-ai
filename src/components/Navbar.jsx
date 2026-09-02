import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Emotions", href: "#moods" },
  { label: "Why AI Mood", href: "#why" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <Sparkles
                  size={18}
                  className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200"
                />
                <div className="absolute inset-0 blur-sm bg-indigo-500/40 rounded-full animate-glow-pulse" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight group-hover:text-indigo-100 transition-colors">
                AI Mood
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/moods")}
                className="hidden sm:flex items-center gap-1.5 btn-primary text-sm"
              >
                Get Started
                <ArrowRight size={14} />
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 glass-nav shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6 pt-20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium text-base"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-zinc-800">
              <button
                onClick={() => { navigate("/moods"); setMenuOpen(false); }}
                className="w-full flex items-center justify-center gap-2 btn-primary"
              >
                Get Started
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
