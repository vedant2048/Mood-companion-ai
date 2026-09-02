import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import HowItWorks from "../components/HowItWorks";
import MoodSection from "../components/MoodSection";
import ResponsePreview from "../components/ResponsePreview";
import WhyAIMood from "../components/WhyAIMood";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
        <IntroSection />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
        <HowItWorks />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
        <MoodSection />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
        <ResponsePreview />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
        <WhyAIMood />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
