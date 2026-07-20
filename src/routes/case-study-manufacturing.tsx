import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyDetail } from "@/components/site/CaseStudyDetail";
import caseMfg from "@/assets/case-mfg.jpg";

export const Route = createFileRoute("/case-study-manufacturing")({ component: Page });

function Page() {
  return (
    <CaseStudyDetail
      tag="Manufacturing & Logistics"
      title="Optimizing Supply Chain Efficiency with IoT"
      client="GlobalFreight Solutions — a multinational logistics and supply chain provider"
      img={caseMfg}
      challenge="GlobalFreight faced inefficiencies tracking high-value cargo in remote environments. Manual checks and outdated tracking led to delays, increased risk of loss, and no real-time visibility across their global supply chain."
      solution="Nextgen Entrade built an end-to-end IoT-enabled cargo monitoring system, with custom sensors transmitting real-time location, temperature, humidity, and shock data. A Python backend and MEAN Stack frontend gave GlobalFreight a comprehensive oversight dashboard, with Machine Learning-driven predictive analytics for proactive routing."
      impact="98% real-time fleet visibility achieved, transit times cut 20%, cargo damage/loss down 15%, and 80% of potential delays mitigated proactively."
      quote="Nextgen Entrade's IoT solution has given us unprecedented control and insight into our supply chain — saving us significant costs and elevating our service delivery."
      author="Mr. Robert Davis, COO, GlobalFreight Solutions"
    />
  );
}
