import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyDetail } from "@/components/site/CaseStudyDetail";
import caseEcom from "@/assets/case-ecom.jpg";

export const Route = createFileRoute("/case-study-ecommerce")({ component: Page });

function Page() {
  return (
    <CaseStudyDetail
      tag="E-commerce & Retail"
      title="Boosting Online Sales and Customer Loyalty"
      client="UrbanThreads — a fast-growing fashion e-commerce brand"
      img={caseEcom}
      challenge="Despite a strong product line, UrbanThreads struggled with low conversion rates and retention. Slow loading times, a clunky UX, and no personalized recommendations led to high bounce rates and abandoned carts."
      solution="Nextgen Entrade rebuilt UrbanThreads' platform on a robust MERN Stack — a React.js frontend for a fast, intuitive UI, and Node.js with MongoDB for scalable backend performance. An AI-powered recommendation engine built with Python personalized product suggestions, alongside advanced SEO and content marketing."
      impact="Conversion rates rose 50% and average order value climbed 30% within three months. Page load times improved 75%, and repeat purchases rose 25%."
      quote="Nextgen Entrade transformed our online presence. Their MERN stack expertise and AI integration created an e-commerce experience that not only looks fantastic but performs exceptionally."
      author="Ms. Sarah Jenkins, CEO, UrbanThreads"
    />
  );
}
