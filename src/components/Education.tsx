const education = [
  {
    degree: "BS Computer Science",
    institution: "FAST NUCES",
    period: "Sep 2021 – Aug 2025",
    grade: "CGPA: 3.90 / 4.00",
    highlights: [
      "Rector's List (4.0 GPA) — 4 semesters",
      "Dean's List (3.5+ GPA) — 4 semesters",
      "Technical Lead at ACM NUCES",
      "Director Technical Affairs — Developers Day'25",
    ],
  },
  {
    degree: "A Levels",
    institution: "Generation's School",
    period: "",
    grade: "Grades: A*, 2A",
    highlights: [],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-[#f5f8ff]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[#3f63ad] text-sm tracking-widest uppercase mb-3">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white border border-[#3f63ad]/15 rounded-xl p-7 hover:border-[#3f63ad]/35 hover:shadow-lg hover:shadow-[#3f63ad]/8 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#1a2744] group-hover:text-[#3f63ad] transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-[#3f63ad] font-medium mt-0.5">{edu.institution}</p>
                  {edu.period && (
                    <p className="text-[#5a6a8a] text-sm font-mono mt-0.5">{edu.period}</p>
                  )}
                </div>
                <span className="shrink-0 px-3 py-1.5 bg-[#e8eef7] border border-[#3f63ad]/20 text-[#3f63ad] text-sm font-mono rounded-lg">
                  {edu.grade}
                </span>
              </div>

              {edu.highlights.length > 0 && (
                <ul className="space-y-2">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-[#5a6a8a] text-sm">
                      <span className="text-[#3f63ad] mt-1 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
