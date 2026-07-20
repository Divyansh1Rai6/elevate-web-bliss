import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import svcMobile from "@/assets/service-mobile.jpg";

export const Route = createFileRoute("/mobile-application-development")({ component: Page });

function Page() {
  return (
    <ServiceDetail
      eyebrow="Mobile Application Development"
      title="Mobile apps that feel native, ship fast."
      intro="Intuitive, high-performance iOS & Android apps with the latest frameworks and UX best practices — built with Flutter and native tooling depending on your needs."
      img={svcMobile}
      deliverables={[
        "Native iOS (Swift) and Android (Kotlin) development",
        "Cross-platform builds with Flutter",
        "UI/UX design tailored to platform conventions",
        "Third-party API and payment gateway integration",
        "App Store and Play Store submission support",
        "Post-launch monitoring and updates",
      ]}
      approach={[
        { step: "Product Discovery", body: "We define core flows, platforms, and success metrics." },
        { step: "UX & Prototyping", body: "Wireframes and interactive prototypes validate the experience early." },
        { step: "Development", body: "Sprints deliver working builds for continuous feedback." },
        { step: "QA Across Devices", body: "Functional and performance testing across real device matrices." },
        { step: "Store Submission", body: "App Store and Play Store listings, compliance, and release management." },
        { step: "Post-Launch Support", body: "Monitoring, crash reporting, and iterative updates." },
      ]}
    />
  );
}
