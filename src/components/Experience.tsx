const experiences = [
  {
    company: "Retrocausal",
    role: "Applied Research Engineer",
    period: "Jun 2025 – Present",
    type: "US-based · Remote",
    description:
      "Building AI systems for industrial clients end-to-end, contributing to in-house frontend/backend software, and researching robot manipulation and Vision-Language-Action systems.",
    highlights: [
      "Designed and shipped an end-to-end AI solution for BMW, owning frontend, backend, and AI components, cutting study compilation and runs from 2–3 hours of manual work to under 15 minutes",
      "Shipped in-house full-stack features across a Vue.js frontend and Django backend, from API design to UI delivery",
      "Deployed and scaled AI models on AWS and RunPod GPU infrastructure, achieving ~5x faster step-name recommendation inference while cutting GPU compute costs by up to 90%",
      "Conducted research on unsupervised action segmentation, temporal long-video understanding, robot manipulation, and reinforcement learning — publishing two papers (see Research & Publications)",
    ],
    tech: ["Python", "PyTorch", "Computer Vision", "VLMs", "Reinforcement Learning", "Robotics", "Full-Stack", "Vue.js", "Django", "AWS", "RunPod"],
    companyLogo: "/assets/retrocausal_ai_logo.jpg",
    companyLink: "https://retrocausal.ai/",
    companyLinkedIn: "https://www.linkedin.com/company/retrocausal-ai/",
    current: true,
  },
  {
    company: "Confinality",
    role: "Management Trainee Officer (MTO) - AI/NLP",
    period: "Jul 2025 – Sep 2025",
    type: "Internship · Evening Shift · Remote",
    description:
      "Selected for the MTO trainee program, working on NLP and speech-focused AI workflows.",
    highlights: [
      "Engineered NLP pipelines for sentiment analysis, speech detection, and transcription",
      "Developed voice generation workflows reducing manual call handling for client operations",
      "Iteratively improved AI calling agents, raising their call transfer rate from <1% to ~6%",
      "Delivered call-performance analysis and next-step recommendations to clients and internal teams",
    ],
    tech: ["NLP", "Voice Generation", "Sentiment Analysis", "Speech Detection", "Transcription", "AI Calling Agents"],
    companyLogo: "/assets/confinality_logo.jpg",
    companyLink: "http://confinality.com/",
    companyLinkedIn: "https://www.linkedin.com/company/confinality/",
    referenceLink:
      "https://www.linkedin.com/posts/confinality_mto2025-confinalitycareers-lifeatconfinality-activity-7351599564967116800-xR4S/",
    current: false,
  },
  {
    company: "Retrocausal",
    role: "Software Engineer Intern",
    period: "Mar 2024 – Jun 2024",
    type: "Internship · US-based (Remote)",
    description:
      "Worked on industrial-scale AI systems across computer vision, NLP, and LLM workflows.",
    highlights: [
      "Built a video activity recognition pipeline using Body Pose Estimation and Vision-Language Models to automate PMTS code generation for industrial workflow optimization",
      "Developed LLM-based prompt engineering systems for automated analysis of industrial process data",
      "Generated automated Excel reports with graph and table visualizations, building 16 modules in total",
    ],
    tech: ["Python", "Django", "Computer Vision", "LLMs", "Backend Development", "MediaPipe", "Excel Automation"],
    companyLogo: "/assets/retrocausal_ai_logo.jpg",
    companyLink: "https://retrocausal.ai/",
    companyLinkedIn: "https://www.linkedin.com/company/retrocausal-ai/",
    current: false,
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
                        {exp.companyLogo && (
                          <img
                            src={exp.companyLogo}
                            alt={`${exp.company} logo`}
                            className="w-8 h-8 rounded-md object-contain border border-[#3f63ad]/15 bg-white p-0.5"
                            loading="lazy"
                          />
                        )}
                        <h3 className="text-xl font-bold text-[#1a2744]">{exp.company}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-[#3f63ad]/10 border border-[#3f63ad]/30 text-[#3f63ad] text-xs font-mono rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#3f63ad] font-medium">{exp.role}</p>
                      <p className="text-[#5a6a8a] text-sm font-mono mt-0.5">{exp.type}</p>
                      {exp.companyLink && (
                        <a
                          href={exp.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex mt-2 text-xs font-mono text-[#3f63ad] hover:text-[#2e4a84] underline underline-offset-2"
                        >
                          Company website
                        </a>
                      )}
                      {exp.companyLinkedIn && (
                        <a
                          href={exp.companyLinkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex mt-2 ml-3 text-xs font-mono text-[#3f63ad] hover:text-[#2e4a84] underline underline-offset-2"
                        >
                          Company LinkedIn
                        </a>
                      )}
                      {exp.referenceLink && (
                        <a
                          href={exp.referenceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex mt-2 ml-3 text-xs font-mono text-[#3f63ad] hover:text-[#2e4a84] underline underline-offset-2"
                        >
                          View reference
                        </a>
                      )}
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
