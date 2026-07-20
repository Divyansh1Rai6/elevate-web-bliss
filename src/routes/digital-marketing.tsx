import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import svcMarketing from "@/assets/service-marketing.jpg";

export const Route = createFileRoute("/digital-marketing")({ component: Page });

function Page() {
  return (
    <ServiceDetail
      eyebrow="Digital Marketing"
      title="Marketing that's measured, not just launched."
      intro="SEO, PPC, content, and social campaigns backed by analytics dashboards and measurable ROI — built around your growth stage, from first launch to market leadership."
      img={svcMarketing}
      deliverables={[
        "SEO strategy: technical, on-page, and content",
        "PPC and paid social campaign management",
        "Content marketing and editorial calendars",
        "Marketing analytics dashboards and reporting",
        "Conversion rate optimization",
        "Email and lifecycle marketing automation",
      ]}
      approach={[
        { step: "Audit & Benchmarking", body: "We assess your current channels, competitors, and keyword landscape." },
        { step: "Strategy & Roadmap", body: "Channel priorities, budget allocation, and KPIs are defined upfront." },
        { step: "Campaign Build", body: "Creative, copy, and targeting are built and QA'd before launch." },
        { step: "Launch & Optimize", body: "Real-time budget pivots and A/B testing during the critical first weeks." },
        { step: "Scale", body: "Winning channels get scaled with lookalike audiences and expanded budgets." },
        { step: "Report & Iterate", body: "Monthly reporting against KPIs, with continuous refinement." },
      ]}
    />
  );
}
