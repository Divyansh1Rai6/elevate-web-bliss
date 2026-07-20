import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import svcMarketing from "@/assets/service-marketing.jpg";

export const Route = createFileRoute("/social-media-marketing")({ component: Page });

function Page() {
  return (
    <ServiceDetail
      eyebrow="Social Media Marketing"
      title="Content and campaigns that build real audiences."
      intro="Platform-native content strategy, community management, and paid social campaigns across Instagram, LinkedIn, and beyond — built to grow engaged, loyal audiences, not just followers."
      img={svcMarketing}
      deliverables={[
        "Platform-specific content strategy and calendars",
        "Organic content creation and community management",
        "Paid social campaign management (Meta, LinkedIn, etc.)",
        "Influencer and creator partnership coordination",
        "Social listening and brand sentiment tracking",
        "Monthly performance reporting and analytics",
      ]}
      approach={[
        { step: "Audience & Platform Audit", body: "We identify where your audience actually spends time and how competitors show up there." },
        { step: "Content Strategy", body: "A content pillar framework and posting calendar tailored to each platform's format." },
        { step: "Creative Production", body: "Native-feeling content — video, graphics, and copy — built for scroll-stopping engagement." },
        { step: "Community Management", body: "Active engagement, comment moderation, and response management." },
        { step: "Paid Amplification", body: "Targeted paid campaigns extend reach for top-performing organic content." },
        { step: "Reporting & Iteration", body: "Monthly performance reviews refine what's working and cut what isn't." },
      ]}
    />
  );
}
