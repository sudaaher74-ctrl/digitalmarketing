import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

// Generate static params for SSG
export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export function generateMetadata({ params }) {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug);
  if (!study) return { title: "Not Found" };
  
  return {
    title: `${study.title} | Case Study | Your Agency`,
    description: study.challenge,
  };
}

export default function ProjectPage({ params }) {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug);
  
  if (!study) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container">
        {/* Project Header */}
        <div className="mb-16 border-b border-[var(--hair)] pb-12">
          <div className="uppercase mb-4" style={{ fontFamily: "var(--font-heading)", letterSpacing: "1.5px", fontSize: 13, color: "var(--violet)", fontWeight: 600 }}>
            {study.category}
          </div>
          <h1 className="text-white mb-6" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(44px, 6vw, 72px)", lineHeight: 1.1 }}>
            {study.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {study.services.map((s) => (
              <span key={s} className="px-4 py-2 text-sm text-[var(--text)] rounded-full" style={{ border: "1px solid var(--hair)", background: "var(--card)" }}>
                {s}
              </span>
            ))}
          </div>

          <a href={study.link} target="_blank" rel="noopener noreferrer" className="btn-lime">
            Visit Live Website ↗
          </a>
        </div>

        {/* Project Content */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-16">
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>The Challenge</h2>
              <p className="text-[var(--muted)] text-lg leading-relaxed">{study.challenge}</p>
            </section>
            
            <section>
              <h2 className="text-3xl text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>Our Solution</h2>
              <p className="text-[var(--muted)] text-lg leading-relaxed">{study.solution}</p>
            </section>
            
            <section>
              <h2 className="text-3xl text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>The Result</h2>
              <p className="text-[var(--muted)] text-lg leading-relaxed">{study.result}</p>
            </section>
          </div>

          {/* Sidebar / Metrics */}
          <div>
            <div className="bg-[var(--card)] border border-[var(--hair)] p-8 sticky top-32">
              <h3 className="text-xl text-white mb-8" style={{ fontFamily: "var(--font-heading)" }}>Project Metrics</h3>
              
              <div className="flex flex-col gap-8">
                {study.metrics.map((m) => (
                  <div key={m.l} className="border-b border-[var(--hair)] pb-6 last:border-0 last:pb-0">
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: study.color || "var(--lime)", fontSize: 44, letterSpacing: "-0.03em", lineHeight: 1 }}>
                      {m.v}
                    </div>
                    <div className="text-[var(--muted)] text-[14px] uppercase mt-2" style={{ letterSpacing: "1px" }}>
                      {m.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
