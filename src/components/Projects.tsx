const projects = [
  {
    title: "PixelForge — AI-Driven Digital Marketing Platform",
    company: "Final Year Project",
    description:
      "A full-stack generative AI platform for automated advertisement image and video generation, enabling users to create branded marketing content from product images with minimal manual input.",
    highlights: [
      "Built a full-stack platform using React, Flask, and PostgreSQL for automated ad image and video generation",
      "Developed AI pipelines combining BLIP captioning, Gemini-powered slogan generation, and diffusion-based image synthesis for product-aware content",
      "Integrated RunwayML Gen-1 workflows for AI-generated promotional videos using image-conditioned prompt engineering",
    ],
    tech: ["React", "Flask", "PostgreSQL", "BLIP", "Gemini", "Stable Diffusion", "RunwayML", "Python"],
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
    title: "LushWear — Business Operation Management",
    company: "Client · In Production",
    description:
      "Built, sold, and actively maintained for a local business to manage their day-to-day operations; currently in production use. A cross-platform desktop app for inventory, orders, and storefront sync.",
    highlights: [
      "Engineered scalable backend APIs in FastAPI for inventory, product catalog, stock tracking, and search",
      "Built a cross-platform Electron desktop app with a modern responsive UI, integrating Supabase for real-time data, auth, and cloud storage",
      "Built end-to-end order management with live tracking via courier APIs and two-way Shopify integration for storefront sync",
    ],
    tech: ["FastAPI", "Python", "Electron", "Supabase", "Shopify", "JavaScript"],
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
