import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import svcWeb from "@/assets/service-web.jpg";

export const Route = createFileRoute("/website-development")({ component: Page });

function Page() {
  return (
    <ServiceDetail
      eyebrow="Website Development"
      title="Websites engineered to convert, not just impress."
      intro="Fast, accessible, SEO-ready marketing sites and web platforms crafted with modern frameworks and thoughtful UX — built to turn visitors into customers."
      img={svcWeb}
      deliverables={[
        "Custom UI/UX design aligned to your brand",
        "Responsive, mobile-first development",
        "CMS integration (WordPress, headless, or custom)",
        "SEO-ready architecture and clean semantic markup",
        "Performance optimization for fast load times",
        "90-day post-launch warranty and support",
      ]}
      approach={[
        { step: "Discovery & Requirements", body: "We map your goals, audience, and content needs before a single wireframe is drawn." },
        { step: "Information Architecture", body: "Site maps and low-fidelity wireframes define navigation and page hierarchy." },
        { step: "Visual Design & Prototyping", body: "High-fidelity, on-brand mockups with clickable prototypes for feedback." },
        { step: "Development & QA", body: "Front-end and back-end build on a staging environment, tested across browsers and devices." },
        { step: "Launch", body: "DNS, SSL, and monitoring configured for a smooth go-live." },
        { step: "Warranty Support", body: "90 days of defect fixes and performance monitoring after launch." },
      ]}
    />
  );
}
