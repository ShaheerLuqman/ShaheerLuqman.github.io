"use client";

import { useMemo, useState } from "react";

type PreviewDocument = {
  title: string;
  file: string;
};

const education = [
  {
    degree: "BS Computer Science",
    institution: "FAST NUCES",
    period: "Sep 2021 – Aug 2025",
    grade: "CGPA: 3.90 / 4.00",
    documents: [
      {
        title: "Degree",
        file: "/assets/bs-degree.jpeg",
      },
      {
        title: "Transcript",
        file: "/assets/bs-transcript.jpeg",
      },
    ],
    highlights: [
      "Summa Cum Laude Honors",
      "Rector's List (4.0 GPA) — 4 semesters",
      "Dean's List (3.5+ GPA) — 4 semesters",
    ],
  },
  {
    degree: "A Levels",
    institution: "Generation's School",
    period: "",
    grade: "Grades: A*, 2A",
    highlights: [],
  },
  {
    degree: "O Levels",
    institution: "Habib Public School",
    period: "",
    grade: "Grades: 4A*, 2A, 3B",
    highlights: [],
  },
];

export default function Education() {
  const [bsEducation, aLevels, oLevels] = education;
  const bsDocuments = bsEducation.documents ?? [];
  const [selectedDocument, setSelectedDocument] = useState<PreviewDocument | null>(null);

  const selectedDocumentType = useMemo(() => {
    if (!selectedDocument?.file) {
      return null;
    }

    return selectedDocument.file.toLowerCase().endsWith(".pdf") ? "pdf" : "image";
  }, [selectedDocument]);

  return (
    <section id="education" className="py-24 px-6 bg-[#f5f8ff]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[#3f63ad] text-sm tracking-widest uppercase mb-3">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">Education</h2>
        </div>

        <div className="w-full space-y-6">
          <div
            className="h-full bg-white border border-[#3f63ad]/15 rounded-xl p-7 hover:border-[#3f63ad]/35 hover:shadow-lg hover:shadow-[#3f63ad]/8 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#1a2744] group-hover:text-[#3f63ad] transition-colors">
                  {bsEducation.degree}
                </h3>
                <p className="text-[#3f63ad] font-medium mt-0.5">{bsEducation.institution}</p>
                {bsEducation.period && (
                  <p className="text-[#5a6a8a] text-sm font-mono mt-0.5">{bsEducation.period}</p>
                )}
              </div>
              {bsEducation.grade && (
                <span className="shrink-0 px-3 py-1.5 bg-[#e8eef7] border border-[#3f63ad]/20 text-[#3f63ad] text-sm font-mono rounded-lg">
                  {bsEducation.grade}
                </span>
              )}
            </div>

            <div className="mt-6 border-t border-[#3f63ad]/10 pt-5 md:flex md:items-start md:justify-between md:gap-6">
              <div className="flex-1">
                {bsEducation.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {bsEducation.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-[#5a6a8a] text-sm">
                        <span className="text-[#3f63ad] mt-1 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {bsDocuments.length > 0 && (
                <div className="mt-5 md:mt-0 md:w-[360px] shrink-0">
                  <div className="grid grid-cols-2 gap-3">
                    {bsDocuments.map((doc: PreviewDocument) => (
                      <button
                        key={doc.title}
                        type="button"
                        onClick={() => setSelectedDocument(doc)}
                        className="group/preview text-left overflow-hidden rounded-lg border border-[#3f63ad]/15 bg-[#f8fbff] hover:border-[#3f63ad]/35 hover:shadow-sm transition-all duration-200"
                      >
                        <div className="aspect-[4/3] bg-[#e8eef7]">
                          <img
                            src={doc.file}
                            alt={`${doc.title} thumbnail`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="px-3 py-2">
                          <p className="text-sm font-semibold text-[#1a2744] group-hover/preview:text-[#3f63ad] transition-colors">
                            {doc.title}
                          </p>
                          <p className="text-xs text-[#5a6a8a]">Click to view full screen</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white border border-[#3f63ad]/15 rounded-xl p-7 hover:border-[#3f63ad]/35 hover:shadow-lg hover:shadow-[#3f63ad]/8 transition-all duration-300 group">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#1a2744] group-hover:text-[#3f63ad] transition-colors">
                    {aLevels.degree}
                  </h3>
                  <p className="text-[#3f63ad] font-medium mt-0.5">{aLevels.institution}</p>
                  {aLevels.period && (
                    <p className="text-[#5a6a8a] text-sm font-mono mt-0.5">{aLevels.period}</p>
                  )}
                </div>
                {aLevels.grade && (
                  <span className="shrink-0 px-3 py-1.5 bg-[#e8eef7] border border-[#3f63ad]/20 text-[#3f63ad] text-sm font-mono rounded-lg">
                    {aLevels.grade}
                  </span>
                )}
              </div>

              {aLevels.highlights.length > 0 && (
                <ul className="space-y-2">
                  {aLevels.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-[#5a6a8a] text-sm">
                      <span className="text-[#3f63ad] mt-1 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
          </div>

          <div className="bg-white border border-[#3f63ad]/15 rounded-xl p-7 hover:border-[#3f63ad]/35 hover:shadow-lg hover:shadow-[#3f63ad]/8 transition-all duration-300 group">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#1a2744] group-hover:text-[#3f63ad] transition-colors">
                    {oLevels.degree}
                  </h3>
                  <p className="text-[#3f63ad] font-medium mt-0.5">{oLevels.institution}</p>
                  {oLevels.period && (
                    <p className="text-[#5a6a8a] text-sm font-mono mt-0.5">{oLevels.period}</p>
                  )}
                </div>
                {oLevels.grade && (
                  <span className="shrink-0 px-3 py-1.5 bg-[#e8eef7] border border-[#3f63ad]/20 text-[#3f63ad] text-sm font-mono rounded-lg">
                    {oLevels.grade}
                  </span>
                )}
              </div>

              {oLevels.highlights.length > 0 && (
                <ul className="space-y-2">
                  {oLevels.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-[#5a6a8a] text-sm">
                      <span className="text-[#3f63ad] mt-1 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
          </div>
        </div>
      </div>

      {selectedDocument && (
        <div
          className="fixed inset-0 z-50 bg-[#0f172b]/85 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setSelectedDocument(null)}
        >
          <div
            className="relative mx-auto h-full w-full max-w-6xl rounded-xl border border-white/20 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#3f63ad]/15 px-4 py-3">
              <p className="font-semibold text-[#1a2744]">{selectedDocument.title}</p>
              <button
                type="button"
                onClick={() => setSelectedDocument(null)}
                className="rounded-md border border-[#3f63ad]/20 px-3 py-1.5 text-sm text-[#1a2744] hover:bg-[#f5f8ff] transition-colors"
              >
                Close
              </button>
            </div>

            <div className="h-[calc(100%-58px)] w-full bg-[#f5f8ff]">
              {selectedDocumentType === "pdf" ? (
                <iframe
                  src={selectedDocument.file}
                  title={selectedDocument.title}
                  className="h-full w-full"
                />
              ) : (
                <img
                  src={selectedDocument.file}
                  alt={selectedDocument.title}
                  className="h-full w-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
