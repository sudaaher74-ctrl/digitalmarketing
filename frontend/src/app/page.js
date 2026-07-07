import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CaseStudies from "@/components/sections/CaseStudies";
import WorkProcess from "@/components/sections/WorkProcess";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does SEO take to show results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO is a long-term strategy. Typically, you can start seeing initial improvements within 3-6 months, with significant results in 6-12 months. We focus on sustainable, white-hat techniques that build lasting rankings.",
        },
      },
      {
        "@type": "Question",
        name: "What is your website development process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our process follows six key stages: Discovery Call, Research & Planning, Strategy Development, Design & Development, Launch & Optimization, and Growth & Scaling.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide ongoing support after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We offer 24/7 dedicated support and maintenance packages including regular updates, security monitoring, performance optimization, and technical support.",
        },
      },
      {
        "@type": "Question",
        name: "Can you manage our Google Ads and social media?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer comprehensive Google Ads management and social media marketing services with detailed analytics, A/B testing, and continuous optimization.",
        },
      },
      {
        "@type": "Question",
        name: "How much does digital marketing cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every business is unique, so we provide custom quotes. We offer flexible packages from affordable startup plans to comprehensive enterprise solutions. Schedule a free consultation for a tailored proposal.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
        <TrustedBy />
        <Services />
        <WhyChooseUs />
        <CaseStudies />
        <WorkProcess />
        <Testimonials />
        <FAQ />
        <Contact />
    </>
  );
}
