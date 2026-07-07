import { TEAM_MEMBERS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About Us | Your Agency",
  description: "Learn more about the team behind Your Agency and our mission to deliver exceptional digital experiences.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container">
        {/* Hero Section */}
        <div className="max-w-3xl mb-24">
          <div className="uppercase mb-4" style={{ fontFamily: "var(--font-heading)", letterSpacing: "1.5px", fontSize: 13, color: "var(--violet)", fontWeight: 600 }}>
            Who We Are
          </div>
          <h1 className="text-white mb-6" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(44px, 6vw, 72px)", lineHeight: 1.1 }}>
            Crafting Digital Excellence.
          </h1>
          <p className="text-[var(--muted)] text-xl leading-relaxed max-w-2xl">
            We are a dedicated team of digital creators, strategists, and problem solvers. 
            Our mission is to bridge the gap between complex technology and beautiful, user-centric design.
          </p>
        </div>

        {/* Founders Section */}
        <section>
          <SectionHeading
            number="01"
            subtitle="Leadership"
            title="Meet the Founders."
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {TEAM_MEMBERS.map((member) => (
              <div 
                key={member.name} 
                className="group relative bg-[var(--card)] border border-[var(--hair)] p-8 overflow-hidden transition-colors hover:border-[var(--muted)]"
              >
                {/* Abstract Background Glow */}
                <div 
                  className="absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full"
                  style={{ background: member.color, transform: "translate(30%, -30%)" }}
                />

                <div className="flex items-start gap-6 mb-8 relative z-10">
                  <div 
                    className="w-20 h-20 shrink-0 flex items-center justify-center rounded-xl text-3xl font-bold"
                    style={{ 
                      background: `color-mix(in srgb, ${member.color} 15%, transparent)`,
                      color: member.color,
                      border: `1px solid color-mix(in srgb, ${member.color} 30%, transparent)`,
                      fontFamily: "var(--font-heading)"
                    }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-3xl text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                      {member.name}
                    </h3>
                    <p className="text-lg" style={{ color: member.color }}>{member.role}</p>
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-[var(--muted)] text-[16px] leading-relaxed mb-8 min-h-[80px]">
                    {member.bio}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-white text-sm uppercase tracking-widest font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1.5 text-xs text-[var(--muted)]" 
                          style={{ border: "1px solid var(--hair)", fontFamily: "var(--font-heading)" }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
