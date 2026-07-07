import CaseStudies from "@/components/sections/CaseStudies";

export const metadata = {
  title: "Projects | Your Agency",
  description: "View our portfolio of case studies and successful digital marketing projects.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-12">
      <CaseStudies />
    </div>
  );
}
