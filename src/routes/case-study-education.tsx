import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyDetail } from "@/components/site/CaseStudyDetail";
import caseEdu from "@/assets/case-edu.jpg";

export const Route = createFileRoute("/case-study-education")({ component: Page });

function Page() {
  return (
    <CaseStudyDetail
      tag="Education & EdTech"
      title="Personalizing Learning Experiences"
      client="Academix University — a prestigious international university"
      img={caseEdu}
      challenge="Academix's existing LMS was rigid, lacked interactive features, and struggled to adapt to individual student needs — leading to lower engagement and retention in online courses."
      solution="Nextgen Entrade built a next-generation, AI-driven personalized learning platform using Python for adaptive learning paths and intelligent content recommendations. The interactive frontend was built with Angular (MEAN stack), plus a dedicated Flutter mobile app for consistent access across devices."
      impact="Student retention for online courses rose 25%, course completion rates rose 18%, and positive student feedback increased 40%."
      quote="Nextgen Entrade's vision for personalized learning aligned perfectly with ours. Their AI and Flutter expertise delivered a platform that truly understands and adapts to each student."
      author="Dr. Elena Petrova, Dean of Digital Learning, Academix University"
    />
  );
}
