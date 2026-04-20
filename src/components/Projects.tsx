const projects = [
  {
    title: "Digital Marketing Tool Using GenAI",
    company: "PixelForge · Sep 2024 – May 2025",
    description:
      "A generative AI platform for creating marketing content including images and videos. Built for real-world marketing workflows with usability and scalability in mind.",
    highlights: [
      "Built full-stack system using React + Flask",
      "Integrated Stable Diffusion for AI image generation",
      "Developed pipelines for automated ad content generation (image/video)",
    ],
    tech: ["React", "Flask", "Stable Diffusion", "GenAI", "Python"],
    tag: "GenAI",
    tagStyle: "bg-purple-50 border-purple-200 text-purple-600",
    githubLink: "https://github.com/your-username/repo-name",
  },
  {
    title: "Video Activity Recognition System",
    company: "Retrocausal · Production",
    description:
      "Industrial AI system for analyzing human activity in videos and mapping them to structured PMTS codes for industrial process optimization.",
    highlights: [
      "Combined pose estimation + vision-language models for activity analysis",
      "Designed scalable pipeline for long video processing",
      "Enabled automation of industrial process analysis",
    ],
    tech: ["PyTorch", "MediaPipe", "Computer Vision", "VLMs", "Python"],
    tag: "Production",
    tagStyle: "bg-[#3f63ad]/10 border-[#3f63ad]/30 text-[#3f63ad]",
    githubLink: "https://github.com/your-username/repo-name",
  },
  {
    title: "Full-Stack Web Applications",
    company: "Project Lead · Sep 2024 – Apr 2025",
    description:
      "Led development of multiple production-level web applications as Project Lead, handling both backend APIs and responsive frontends.",
    highlights: [
      "Acted as Project Lead across multiple projects",
      "Built systems using MERN stack (MongoDB, Express, React, Node.js)",
      "Developed automation scripts to streamline workflows",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
    tag: "Lead",
    tagStyle: "bg-emerald-50 border-emerald-200 text-emerald-600",
    githubLink: "https://github.com/your-username/repo-name",
  },
  {
    title: "Crypto Trading Simulator",
    company: "Personal · Sep 2023 – Nov 2023",
    description:
      "A simulated trading platform for learning and experimenting with crypto markets, integrating real-time APIs with an intuitive trading UI.",
    highlights: [
      "Built using MERN stack with real-time market data APIs",
      "Designed intuitive UI using Ant Design",
      "Implemented database-backed trading simulation logic",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Ant Design"],
    tag: "MERN",
    tagStyle: "bg-amber-50 border-amber-200 text-amber-600",
    githubLink: "https://github.com/your-username/repo-name",
  },
  {
    title: "VQ-VAE / RVQ / HVQ Research",
    company: "Research",
    description:
      "Explored advanced quantization techniques in deep learning models including Vector Quantized VAE, Residual VQ, and Hierarchical VQ.",
    highlights: [
      "Implemented VQ-VAE architectures from scratch",
      "Experimented with Residual Vector Quantization (RVQ)",
      "Analyzed representation quality and efficiency trade-offs",
    ],
    tech: ["PyTorch", "Deep Learning", "Representation Learning", "VQ-VAE"],
    tag: "Research",
    tagStyle: "bg-slate-100 border-slate-300 text-slate-600",
    githubLink: "https://github.com/your-username/repo-name",
  },
  {
    title: "IoT Child Safety Surveillance",
    company: "Research · IEEE Published",
    description:
      "An intelligent IoT system for monitoring children and detecting anomalous behavior remotely. Published in IEEE Xplore at ICETST 2024.",
    highlights: [
      "Designed anomaly detection pipeline for behavioral monitoring",
      "Integrated IoT sensors with real-time alerting system",
      "Published in IEEE Xplore — ICETST 2024",
    ],
    tech: ["IoT", "Python", "Arduino", "AI", "Anomaly Detection"],
    tag: "📄 IEEE",
    tagStyle: "bg-emerald-50 border-emerald-200 text-emerald-600",
    githubLink: "https://github.com/your-username/repo-name",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[#3f63ad] text-sm tracking-widest uppercase mb-3">
            What I&apos;ve Built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-[#f5f8ff] border border-[#3f63ad]/15 rounded-xl p-6 hover:border-[#3f63ad]/35 hover:shadow-lg hover:shadow-[#3f63ad]/8 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p className="text-xs font-mono text-[#98b3d9] mb-1">{project.company}</p>
                  <h3 className="text-base font-bold text-[#1a2744] group-hover:text-[#3f63ad] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>
                <span className={`shrink-0 px-2.5 py-1 border text-xs font-mono rounded-full ${project.tagStyle}`}>
                  {project.tag}
                </span>
              </div>

              <p className="text-[#5a6a8a] text-sm leading-relaxed mb-4">{project.description}</p>

              <ul className="space-y-1.5 mb-5 flex-1">
                {project.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-[#5a6a8a] text-xs">
                    <span className="text-[#3f63ad] mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mb-4 text-xs font-mono text-[#3f63ad] hover:text-[#2e4a84] underline underline-offset-2"
                >
                  View GitHub
                </a>
              )}

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#3f63ad]/10">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-white border border-[#3f63ad]/20 text-[#3f63ad] text-xs font-mono rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
