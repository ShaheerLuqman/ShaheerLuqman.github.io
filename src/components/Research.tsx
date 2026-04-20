export default function Research() {
  return (
    <section id="research" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[#3f63ad] text-sm tracking-widest uppercase mb-3">
            Academic Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744]">Research & Publications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Publication Card */}
          <div className="bg-[#f5f8ff] border border-[#3f63ad]/15 rounded-xl p-7 hover:border-[#3f63ad]/35 hover:shadow-lg hover:shadow-[#3f63ad]/8 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="p-3 bg-[#3f63ad]/10 border border-[#3f63ad]/20 rounded-lg shrink-0">
                <svg className="w-6 h-6 text-[#3f63ad]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#98b3d9] text-xs font-mono">ICETST 2024 · IEEE Xplore</span>
                </div>
                <h3 className="text-base font-bold text-[#1a2744] group-hover:text-[#3f63ad] transition-colors leading-snug">
                  Ensuring Child Safety: An IoT-Based Surveillance System for Remote Monitoring and
                  Detection of Anomalous Behavior
                </h3>
              </div>
            </div>

            <p className="text-[#5a6a8a] text-sm leading-relaxed mb-5">
              Proposed an intelligent IoT-based system for remote child monitoring, combining hardware
              sensors, software components, and AI-driven anomaly detection to deliver real-time safety
              alerts.
            </p>

            <ul className="space-y-2 mb-6">
              {[
                "Proposed a system for remote child monitoring using IoT + AI",
                "Focused on detecting anomalous behavioral patterns",
                "Combined hardware + software + intelligent analytics",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[#5a6a8a] text-sm">
                  <span className="text-emerald-500 mt-1 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://ieeexplore.ieee.org/document/10737980"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#3f63ad] text-sm font-mono hover:text-[#2e4a84] transition-colors group/link"
            >
              View on IEEE Xplore
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* arXiv Publication */}
            <div className="bg-[#f5f8ff] border border-[#3f63ad]/15 rounded-xl p-7 hover:border-[#3f63ad]/35 hover:shadow-lg hover:shadow-[#3f63ad]/8 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-5">
                <div className="p-3 bg-[#3f63ad]/10 border border-[#3f63ad]/20 rounded-lg shrink-0">
                  <svg className="w-6 h-6 text-[#3f63ad]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#98b3d9] text-xs font-mono">arXiv:2604.15196 · 2026</span>
                  </div>
                  <h3 className="text-base font-bold text-[#1a2744] group-hover:text-[#3f63ad] transition-colors leading-snug">
                    Unsupervised Skeleton-Based Action Segmentation via Hierarchical Spatiotemporal
                    Vector Quantization
                  </h3>
                </div>
              </div>

              <p className="text-[#5a6a8a] text-sm leading-relaxed mb-5">
                Introduced a hierarchical spatiotemporal vector quantization framework for unsupervised
                skeleton-based temporal action segmentation, achieving state-of-the-art performance on
                HuGaDB, LARa, and BABEL benchmarks.
              </p>

              <a
                href="https://arxiv.org/abs/2604.15196"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#3f63ad] text-sm font-mono hover:text-[#2e4a84] transition-colors group/link"
              >
                View on arXiv
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Research interests */}
            <div className="bg-[#f5f8ff] border border-[#3f63ad]/15 rounded-xl p-6">
              <h3 className="font-semibold text-[#1a2744] mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Robotics", "Computer Vision", "Temporal Video Understanding",
                  "Vector Quantization", "IoT + AI Systems", "Vision Language Models",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 bg-white border border-[#3f63ad]/20 text-[#3f63ad] text-xs font-mono rounded-md"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
