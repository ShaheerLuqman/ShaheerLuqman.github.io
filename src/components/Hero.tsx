"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PROFILE_IMAGE = "/assets/pfp.jpg";

const roles = [
  "Applied Research Engineer",
  "AI Systems Builder",
  "Computer Vision Engineer",
  "Competitive Programmer",
  "Full-Stack Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    if (typing) {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f8ff]"
    >
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(63,99,173,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(63,99,173,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3f63ad]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#6b8ec4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Profile photo */}
        <div className="flex justify-center mb-8">
          <button
            type="button"
            onClick={() => setIsImageFullscreen(true)}
            className="relative h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 rounded-full overflow-hidden ring-4 ring-[#3f63ad]/20 ring-offset-4 ring-offset-[#f5f8ff] shadow-lg shadow-[#3f63ad]/15 cursor-zoom-in"
            aria-label="Open profile photo in full screen"
          >
            <Image
              src={PROFILE_IMAGE}
              alt="Muhammad Shaheer Luqman"
              fill
              className="object-cover object-top"
              priority
              quality={100}
              sizes="(max-width: 768px) 128px, 160px"
            />
          </button>
        </div>

        {/* Greeting */}
        <p className="font-mono text-[#3f63ad] text-sm mb-4 tracking-widest uppercase">
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#1a2744] mb-4 tracking-tight">
          Muhammad{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3f63ad] to-[#6b8ec4]">
            Shaheer
          </span>{" "}
          Luqman
        </h1>

        {/* Typing Role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="font-mono text-xl md:text-2xl text-[#5a6a8a]">
            {displayed}
            <span className="animate-pulse text-[#3f63ad]">|</span>
          </span>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-[#5a6a8a] text-base md:text-lg leading-relaxed mb-10">
          Building production-grade AI systems and end-to-end solutions for real-world industrial
          problems. ICPC Gold Medalist · IEEE Published · CGPA 3.90/4.00.
        </p>

        {/* Key Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            "💼 Applied Research Engineer @ Retrocausal",
            "📄 IEEE Xplore Published",
            "🥇 ICPC Gold Medalist",
            "🎓 CGPA 3.90 / 4.00",
          ].map((badge) => (
            <span
              key={badge}
              className="px-4 py-1.5 bg-white border border-[#3f63ad]/25 text-[#3f63ad] text-sm rounded-full font-mono shadow-sm"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#3f63ad] hover:bg-[#2e4a84] text-white font-semibold rounded-lg transition-colors duration-200 text-sm shadow-md shadow-[#3f63ad]/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#3f63ad] text-[#3f63ad] hover:bg-[#3f63ad]/8 font-semibold rounded-lg transition-colors duration-200 text-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#98b3d9] animate-bounce">
          <span className="text-xs font-mono tracking-widest">scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {isImageFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-[#0f172b]/90 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setIsImageFullscreen(false)}
        >
          <div
            className="relative mx-auto flex h-full w-full max-w-5xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsImageFullscreen(false)}
              className="absolute right-2 top-2 z-10 rounded-md border border-white/25 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 transition-colors"
            >
              Close
            </button>
            <div className="relative h-[80vh] w-full">
              <Image
                src={PROFILE_IMAGE}
                alt="Muhammad Shaheer Luqman full screen"
                fill
                className="object-contain"
                quality={100}
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 1280px"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
