"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";

const GOLD_MEDAL_CERTIFICATE = "/assets/ICPC-GOLD_MEDAL.jpg";
const SUMMA_CUM_LAUDE_CERTIFICATE = "/assets/bs-degree.jpeg";

const awards = [
  { icon: "🥇", 
    title: "Gold Medal", 
    body: "ICPC National Competitive Programming", 
    date: "Nov 2024",
  },
  { icon: "🎓", 
    title: "Summa Cum Laude", 
    body: "Graduated with a high GPA (3.90 / 4.00) at FAST NUCES", 
    date: "2025"
  },
  { icon: "🥉", 
    title: "Bronze Medal", 
    body: "ICPC National Competitive Programming", 
    date: "Feb 2024", 
    link: "https://www.linkedin.com/posts/shaheerluqman_fast-nuces-karachi-campus-won-gold-silver-activity-7168175925929480192-TAw7/" 
  },
  { icon: "🥇",
    title: "Winner",
    body: "Code Sprint — PROCOM 2023",
    date: "2023",
    link: "https://www.linkedin.com/posts/activity-7046925543056785408-b71-/",
  },
  { icon: "🏆", title: "Best Team Award", body: "Coder's Cup — ACM FAST", date: "" },
  { icon: "🎓", title: "Rector's List (4.0 GPA)", body: "FAST NUCES — 4 semesters", date: "" },
  { icon: "🎓", title: "Dean's List (3.5+ GPA)", body: "FAST NUCES — 4 semesters", date: "" },
];

const leadership = [
  {
    role: "Director Technical Affairs",
    org: "Developers Day'25",
    icon: "🏛️",
    link: "https://www.linkedin.com/posts/developersday_director-tech-muhammad-shaheer-luqman-activity-7305518349768089600-Q9Z8/",
  },
  { role: "Technical Lead", org: "ACM NUCES", icon: "⚡",
    link: "https://www.linkedin.com/posts/acmnuceskhi_with-his-wealth-of-knowledge-in-cutting-edge-activity-7255914996855959552-RXcg/",
  },
  {
    role: "CS Competition Head",
    org: "Developers Day'24",
    icon: "🎯",
    link: "https://www.linkedin.com/posts/shaheerluqman_devday-selection-letter-activity-7165614369710575616-PqMe",
  },
  { role: "CS Competition Co-Head", org: "PROCOM'24", icon: "🎯",
    link: "https://www.linkedin.com/posts/shaheerluqman_fastnuces-legacymeetsinnovation-procom2024-activity-7158011213329674240-6Iy6/",
   },
  { role: "Training & Mentorship Head", org: "ACM NUCES", icon: "🤝", 
    link: "https://www.linkedin.com/posts/shaheerluqman_devday24-developersday2024-comingsoon-activity-7157756514466701312-yQyd/" },
];

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Honors & Awards */}
          <div>
            <p className="font-mono text-[#3f63ad] text-sm tracking-widest uppercase mb-3">
              Recognition
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-8">
              Honors &amp; Awards
            </h2>

            <div className="space-y-4">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-[#f5f8ff] border border-[#3f63ad]/15 rounded-xl hover:border-[#3f63ad]/35 hover:shadow-md hover:shadow-[#3f63ad]/8 transition-all duration-300"
                >
                  <span className="text-2xl shrink-0">{award.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[#1a2744] text-sm">{award.title}</p>
                    <p className="text-[#5a6a8a] text-xs mt-0.5">{award.body}</p>
                    {award.title === "Gold Medal" && (
                      <PhotoProvider>
                        <PhotoView src={GOLD_MEDAL_CERTIFICATE}>
                          <button
                            type="button"
                            className="mt-2 inline-flex items-center rounded-md border border-[#3f63ad]/25 px-2.5 py-1 text-[11px] font-mono text-[#3f63ad] hover:bg-[#3f63ad]/8 transition-colors"
                          >
                            View certificate
                          </button>
                        </PhotoView>
                      </PhotoProvider>
                    )}
                    {award.title === "Summa Cum Laude" && (
                      <PhotoProvider>
                        <PhotoView src={SUMMA_CUM_LAUDE_CERTIFICATE}>
                          <button
                            type="button"
                            className="mt-2 inline-flex items-center rounded-md border border-[#3f63ad]/25 px-2.5 py-1 text-[11px] font-mono text-[#3f63ad] hover:bg-[#3f63ad]/8 transition-colors"
                          >
                            View certificate
                          </button>
                        </PhotoView>
                      </PhotoProvider>
                    )}
                    {award.link && (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex mt-2 text-xs font-mono text-[#3f63ad] hover:text-[#2e4a84] underline underline-offset-2"
                      >
                        View reference
                      </a>
                    )}
                  </div>
                  {award.date && (
                    <span className="shrink-0 font-mono text-xs text-[#98b3d9]">{award.date}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <p className="font-mono text-[#3f63ad] text-sm tracking-widest uppercase mb-3">
              Giving Back
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-8">
              Leadership
            </h2>

            <div className="space-y-4">
              {leadership.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-[#f5f8ff] border border-[#3f63ad]/15 rounded-xl hover:border-[#3f63ad]/35 hover:shadow-md hover:shadow-[#3f63ad]/8 transition-all duration-300 group"
                >
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-[#1a2744] text-sm group-hover:text-[#3f63ad] transition-colors">
                      {item.role}
                    </p>
                    <p className="text-[#3f63ad] text-xs font-mono mt-0.5">{item.org}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex mt-2 text-xs font-mono text-[#3f63ad] hover:text-[#2e4a84] underline underline-offset-2"
                      >
                        View reference
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
