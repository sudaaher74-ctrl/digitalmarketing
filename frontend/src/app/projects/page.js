import CaseStudies from "@/components/sections/CaseStudies";
import GalaxyBackground from "@/components/ui/GalaxyBackground";

export const metadata = {
  title: "Projects | My Agency",
  description: "View our portfolio of case studies and successful digital marketing projects.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-12 relative min-h-screen overflow-hidden">
      <GalaxyBackground />
      <div className="relative z-10">
        <CaseStudies />
      </div>
    </div>
  );
}
