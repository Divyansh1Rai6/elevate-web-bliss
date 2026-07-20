import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyDetail } from "@/components/site/CaseStudyDetail";
import caseHealth from "@/assets/case-health.jpg";

export const Route = createFileRoute("/case-study-healthcare")({ component: Page });

function Page() {
  return (
    <CaseStudyDetail
      tag="Healthcare & Life Sciences"
      title="Revolutionizing Patient Engagement"
      client="MediCare Connect — a leading multi-specialty hospital chain"
      img={caseHealth}
      challenge="MediCare Connect faced significant challenges in patient engagement and appointment management. Patients struggled with long wait times, fragmented communication, and a cumbersome booking process, leading to dissatisfaction and operational inefficiencies."
      solution="Nextgen Entrade developed a comprehensive, AI-powered patient engagement platform, accessible via a Flutter mobile application and a responsive web portal — with smart appointment scheduling, real-time queue management, and a secure patient communication module. A Python backend powered predictive scheduling algorithms, and a personalized health dashboard gave patients secure access to records, test results, and prescriptions."
      impact="Patient satisfaction scores rose 35% within six months, driven by a 60% reduction in appointment booking time and a 45% decrease in physical waiting-room time. Administrative efficiency improved by 20%."
      quote="Nextgen Entrade didn't just build an app; they built a bridge between our patients and our care. Their AI-driven approach to scheduling and intuitive design transformed our patient experience."
      author="Dr. Anya Sharma, Chief Digital Officer, MediCare Connect"
    />
  );
}
