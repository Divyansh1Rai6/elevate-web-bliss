import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import svcCloud from "@/assets/service-cloud.jpg";

export const Route = createFileRoute("/cloud-application-development")({ component: Page });

function Page() {
  return (
    <ServiceDetail
      eyebrow="Cloud Application Development"
      title="Cloud-native apps built to scale without breaking."
      intro="Scalable, secure cloud-native applications — architecture, migrations, DevOps, and enterprise-grade reliability across AWS, Azure, and Google Cloud."
      img={svcCloud}
      deliverables={[
        "Cloud architecture design (AWS, Azure, GCP)",
        "Application migration and modernization",
        "CI/CD pipeline setup (Jenkins, GitHub Actions)",
        "Container orchestration with Kubernetes and Docker",
        "Infrastructure-as-code and automated provisioning",
        "24/7 monitoring, logging, and incident response",
      ]}
      approach={[
        { step: "Architecture Assessment", body: "We evaluate current infrastructure and define a target cloud architecture." },
        { step: "Migration Planning", body: "A phased migration roadmap minimizes downtime and risk." },
        { step: "Build & Containerize", body: "Services are built or refactored into containerized, scalable components." },
        { step: "CI/CD & Automation", body: "Automated pipelines for testing, deployment, and rollback." },
        { step: "Go-Live", body: "Cutover executed with monitoring and rollback plans in place." },
        { step: "Ongoing Optimization", body: "Cost and performance tuning based on real usage patterns." },
      ]}
    />
  );
}
