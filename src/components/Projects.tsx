const projects = [
  {
    title: "PixelForge - Digital Marketing Tool Using GenAI",
    company: "Final Year Project",
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
    githubLink: "https://github.com/ShaheerLuqman/PixelForge",
  },
  // {
  //   title: "Video Activity Recognition System",
  //   company: "Retrocausal · Production",
  //   description:
  //     "Industrial AI system for analyzing human activity in videos and mapping them to structured PMTS codes for industrial process optimization.",
  //   highlights: [
  //     "Combined pose estimation + vision-language models for activity analysis",
  //     "Designed scalable pipeline for long video processing",
  //     "Enabled automation of industrial process analysis",
  //   ],
  //   tech: ["PyTorch", "MediaPipe", "Computer Vision", "VLMs", "Python"],
  //   tag: "Production",
  //   tagStyle: "bg-[#3f63ad]/10 border-[#3f63ad]/30 text-[#3f63ad]",
  //   githubLink: "https://github.com/your-username/repo-name",
  // },
  // {
  //   title: "Full-Stack Web Applications",
  //   company: "Project Lead · Sep 2024 – Apr 2025",
  //   description:
  //     "Led development of multiple production-level web applications as Project Lead, handling both backend APIs and responsive frontends.",
  //   highlights: [
  //     "Acted as Project Lead across multiple projects",
  //     "Built systems using MERN stack (MongoDB, Express, React, Node.js)",
  //     "Developed automation scripts to streamline workflows",
  //   ],
  //   tech: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
  //   tag: "Lead",
  //   tagStyle: "bg-emerald-50 border-emerald-200 text-emerald-600",
  //   githubLink: "https://github.com/your-username/repo-name",
  // },
  {
    title: "Crypto Trading Simulator",
    company: "Personal",
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
    githubLink: "https://github.com/ShaheerLuqman/Crypto-Trading-Simulator",
  },
  {
    title: "LushWear-IMS Inventory Management System",
    company: "Personal",
    description:
      "A desktop inventory management system with a FastAPI backend, Electron frontend, and Supabase integration for managing products and stock movement.",
    highlights: [
      "Built backend APIs in FastAPI for products, search, and stock movement",
      "Developed desktop frontend using Electron with a modern dark-themed UI",
      "Integrated Supabase for cloud-hosted inventory data and persistence",
    ],
    tech: ["FastAPI", "Python", "Electron", "JavaScript", "Supabase"],
    tag: "Desktop",
    tagStyle: "bg-cyan-50 border-cyan-200 text-cyan-700",
    githubLink: "https://github.com/ShaheerLuqman/LushWear-IMS",
  },
  {
    title: "Fashion Industry Recommender System",
    company: "Personal",
    description:
      "A CNN-powered recommender system for the fashion industry that analyzes visual clothing features to generate personalized item suggestions.",
    highlights: [
      "Built recommendation pipeline using deep learning-based visual embeddings",
      "Created Python app interface to surface tailored product suggestions",
      "Worked with feature datasets and serialized recommendation artifacts for inference",
    ],
    tech: ["Python", "CNN", "Deep Learning", "Recommendation Systems", "Flask"],
    tag: "AI/ML",
    tagStyle: "bg-violet-50 border-violet-200 text-violet-700",
    githubLink: "https://github.com/ShaheerLuqman/Fashion-Industry-RS",
  },
  {
    title: "Phishing Detection Web App",
    company: "Personal",
    description:
      "A phishing detection application that classifies suspicious content and provides an accessible web interface for checking potential threats.",
    highlights: [
      "Developed detection workflow in Python for phishing-related classification",
      "Implemented web-facing experience for quick URL/content safety checks",
      "Prepared deployment configuration for hosting and accessibility",
    ],
    tech: ["Python", "Cyber Security", "Phishing Detection"],
    tag: "Cyber Security",
    tagStyle: "bg-rose-50 border-rose-200 text-rose-700",
    githubLink: "https://github.com/ShaheerLuqman/phish_detector",
  },
  {
    title: "Contacts Organizer",
    company: "Personal",
    description:
      "A C++ contact management application for storing, searching, updating, and organizing personal contact records using file-backed data.",
    highlights: [
      "Built core contact CRUD operations with search and sorting support",
      "Implemented CSV-based persistence with backup file handling",
      "Structured terminal-based workflows for efficient contact management",
    ],
    tech: ["C++", "Data Structures", "File Handling", "CSV"],
    tag: "Systems",
    tagStyle: "bg-slate-100 border-slate-300 text-slate-700",
    githubLink: "https://github.com/ShaheerLuqman/Contacts_Organizer",
  },
  // {
  //   title: "VQ-VAE / RVQ / HVQ Research",
  //   company: "Research",
  //   description:
  //     "Explored advanced quantization techniques in deep learning models including Vector Quantized VAE, Residual VQ, and Hierarchical VQ.",
  //   highlights: [
  //     "Implemented VQ-VAE architectures from scratch",
  //     "Experimented with Residual Vector Quantization (RVQ)",
  //     "Analyzed representation quality and efficiency trade-offs",
  //   ],
  //   tech: ["PyTorch", "Deep Learning", "Representation Learning", "VQ-VAE"],
  //   tag: "Research",
  //   tagStyle: "bg-slate-100 border-slate-300 text-slate-600",
  //   githubLink: "https://github.com/your-username/repo-name",
  // },
  // {
  //   title: "IoT Child Safety Surveillance",
  //   company: "Research · IEEE Published",
  //   description:
  //     "An intelligent IoT system for monitoring children and detecting anomalous behavior remotely. Published in IEEE Xplore at ICETST 2024.",
  //   highlights: [
  //     "Designed anomaly detection pipeline for behavioral monitoring",
  //     "Integrated IoT sensors with real-time alerting system",
  //     "Published in IEEE Xplore — ICETST 2024",
  //   ],
  //   tech: ["IoT", "Python", "Arduino", "AI", "Anomaly Detection"],
  //   tag: "📄 IEEE",
  //   tagStyle: "bg-emerald-50 border-emerald-200 text-emerald-600",
  //   githubLink: "https://github.com/your-username/repo-name",
  // },
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
