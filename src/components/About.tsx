const highlights = [
  { label: "Company", value: "Retrocausal (US-based)" },
  { label: "Focus", value: "Applied AI & Computer Vision" },
  { label: "ICPC", value: "Gold + Bronze Medalist" },
  { label: "CGPA", value: "3.90 / 4.00 — FAST NUCES" },
  { label: "Research", value: "IEEE Xplore Published" },
  { label: "Modules Owned", value: "16+ at Retrocausal" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="font-mono text-[#3f63ad] text-sm tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-6">
              Building systems that matter
            </h2>
            <div className="space-y-4 text-[#5a6a8a] leading-relaxed">
              <p>
                I&apos;m a Software Engineer currently working as an{" "}
                <span className="text-[#3f63ad] font-medium">Applied Research Engineer at Retrocausal</span>,
                a US-based company, building production-grade AI systems for real-world industrial
                use cases. My work spans computer vision, NLP, LLMs, and full-stack development.
              </p>
              <p>
                I hold a{" "}
                <span className="text-[#3f63ad] font-medium">CGPA of 3.90/4.00</span> from FAST NUCES,
                am a{" "}
                <span className="text-[#3f63ad] font-medium">Gold Medalist at ICPC National 2024</span>,
                and a published researcher in{" "}
                <span className="text-[#3f63ad] font-medium">IEEE Xplore (ICETST 2024)</span>.
              </p>
              <p>
                Whether it&apos;s designing full-stack AI pipelines, researching temporal video
                understanding, or leading technical teams — I bring a rigorous, first-principles
                mindset to everything I build.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-[#f5f8ff] border border-[#3f63ad]/15 rounded-xl p-5 hover:border-[#3f63ad]/40 hover:shadow-md hover:shadow-[#3f63ad]/8 transition-all duration-300"
              >
                <p className="font-mono text-xs text-[#3f63ad] tracking-widest uppercase mb-2">
                  {item.label}
                </p>
                <p className="text-[#1a2744] font-semibold text-sm leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Code snippet */}
        <div className="mt-12 bg-[#1a2744] border border-[#2e4a84] rounded-xl p-5 font-mono text-xs shadow-lg max-w-xl">
          <div className="flex gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-red-400/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
          <p className="text-slate-400">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-[#6b8ec4]">shaheer</span>{" "}
            <span className="text-slate-300">= {"{"}</span>
          </p>
          <p className="pl-4 text-slate-400">
            <span className="text-blue-300">role</span><span className="text-slate-300">:</span>{" "}
            <span className="text-green-300">&apos;Applied Research Engineer&apos;</span><span className="text-slate-500">,</span>
          </p>
          <p className="pl-4 text-slate-400">
            <span className="text-blue-300">company</span><span className="text-slate-300">:</span>{" "}
            <span className="text-green-300">&apos;Retrocausal&apos;</span><span className="text-slate-500">,</span>
          </p>
          <p className="pl-4 text-slate-400">
            <span className="text-blue-300">icpc</span><span className="text-slate-300">:</span>{" "}
            <span className="text-green-300">&apos;Gold Medalist 🥇&apos;</span><span className="text-slate-500">,</span>
          </p>
          <p className="pl-4 text-slate-400">
            <span className="text-blue-300">cgpa</span><span className="text-slate-300">:</span>{" "}
            <span className="text-orange-300">3.90</span>
          </p>
          <p className="text-slate-300">{"}"}</p>
        </div>
      </div>
    </section>
  );
}
