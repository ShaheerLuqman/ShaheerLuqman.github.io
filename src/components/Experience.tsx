const experiences = [
  {
    company: "Retrocausal",
    role: "Applied Research Engineer",
    period: "Mar 2024 – Present",
    type: "Intern → Full-Time · US-based",
    description:
      "Working on industrial-scale AI systems combining computer vision, NLP, and LLMs to solve real-world problems. Owned 16+ modules due to consistent high-quality delivery.",
    highlights: [
      "Built end-to-end video activity recognition pipeline using Body Pose Estimation + Vision-Language Models, translating visual + textual data into PMTS codes for industrial optimization",
      "Delivered a complete AI-powered solution for BMW — designed and implemented frontend, backend, and AI components across the full lifecycle",
      "Conducted research on unsupervised action segmentation and temporal long-video understanding",
      "Developed LLM-based prompt engineering systems with automated Excel report generation and visual analytics",
      "Owned 16+ modules due to consistent high-quality delivery",
    ],
    tech: ["Python", "PyTorch", "Computer Vision", "LLMs", "Full-Stack", "YOLO", "MediaPipe", "Whisper"],
    current: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#f5f8ff]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[#3f63ad] text-sm tracking-widest uppercase mb-3">
            Work History
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#3f63ad]/60 via-[#3f63ad]/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-24">
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-[27px] top-6 w-3 h-3 rounded-full bg-[#3f63ad] shadow-[0_0_10px_rgba(63,99,173,0.5)]" />

                <div className="bg-white border border-[#3f63ad]/15 rounded-xl p-6 hover:border-[#3f63ad]/35 hover:shadow-lg hover:shadow-[#3f63ad]/8 transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-[#1a2744]">{exp.company}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-[#3f63ad]/10 border border-[#3f63ad]/30 text-[#3f63ad] text-xs font-mono rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#3f63ad] font-medium">{exp.role}</p>
                      <p className="text-[#5a6a8a] text-sm font-mono mt-0.5">{exp.type}</p>
                    </div>
                    <span className="font-mono text-sm text-[#5a6a8a] bg-[#f5f8ff] px-3 py-1 rounded-md border border-[#3f63ad]/15">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-[#5a6a8a] mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-[#5a6a8a] text-sm">
                        <span className="text-[#3f63ad] mt-1 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-[#e8eef7] border border-[#3f63ad]/20 text-[#3f63ad] text-xs font-mono rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
