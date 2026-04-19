const skillGroups = [
  {
    category: "AI / Machine Learning",
    icon: "🧠",
    skills: [
      "PyTorch", "Scikit-learn", "Hugging Face",
      "Computer Vision (YOLO, MediaPipe)",
      "Diffusion Models (Stable Diffusion)",
      "NLP (BERT, Whisper, 11Labs)",
      "LLM Prompt Engineering",
    ],
  },
  {
    category: "Software Engineering",
    icon: "💻",
    skills: [
      "Backend: Django, Flask, FastAPI, Express.js",
      "Frontend: React, Next.js, Vue",
      "Databases: MySQL, MongoDB, Oracle",
    ],
  },
  {
    category: "Systems & Tools",
    icon: "⚙️",
    skills: [
      "Selenium (Web Automation)",
      "NumPy, Matplotlib",
      "Arduino Programming",
      "Assembly Language",
      "Git & Version Control",
      "Linux",
    ],
  },
  {
    category: "Programming Languages",
    icon: "{ }",
    skills: ["Python", "C / C++", "JavaScript"],
  },
];

const alsoFamiliar = [
  "Docker", "REST APIs", "Data Analysis", "Experimental Design",
  "Technical Writing", "System Design", "IoT", "Data Structures & Algorithms",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#f5f8ff]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[#3f63ad] text-sm tracking-widest uppercase mb-3">
            What I Know
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white border border-[#3f63ad]/15 rounded-xl p-6 hover:border-[#3f63ad]/40 hover:shadow-lg hover:shadow-[#3f63ad]/8 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-xl font-mono ${group.icon === "{ }" ? "text-[#3f63ad] font-bold" : ""}`}>
                  {group.icon}
                </span>
                <h3 className="font-semibold text-[#1a2744] group-hover:text-[#3f63ad] transition-colors text-sm leading-tight">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-sm text-[#5a6a8a]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3f63ad]/60 shrink-0 mt-1.5" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Also familiar with */}
        <div className="mt-12 pt-8 border-t border-[#3f63ad]/10">
          <p className="text-center font-mono text-xs text-[#98b3d9] tracking-widest uppercase mb-6">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {alsoFamiliar.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 border border-[#3f63ad]/20 text-[#5a6a8a] text-xs font-mono rounded-md hover:border-[#3f63ad]/50 hover:text-[#3f63ad] hover:bg-[#e8eef7] transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
