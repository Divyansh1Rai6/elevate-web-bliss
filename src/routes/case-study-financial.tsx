import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyDetail } from "@/components/site/CaseStudyDetail";
import caseFinance from "@/assets/case-finance.jpg";

export const Route = createFileRoute("/case-study-financial")({ component: Page });

function Page() {
  return (
    <CaseStudyDetail
      tag="Financial Services"
      title="Securing and Streamlining Digital Transactions"
      client="Apex Financial Group — a global investment and wealth management firm"
      img={caseFinance}
      challenge="Apex Financial Group, handling vast amounts of sensitive client data and high-value transactions, needed to enhance its cybersecurity posture and streamline internal audits. Disparate systems led to manual reconciliation, potential vulnerabilities, and a lack of real-time oversight."
      solution="Nextgen Entrade designed a custom Blockchain-based audit and compliance platform using Hyperledger Fabric, creating an immutable ledger for all transactions and audit trails. Built with a Java Spring Boot backend and a React.js frontend, it delivered real-time visibility and automated compliance checks, with Python-driven dashboards for anomaly detection and fraud prevention."
      impact="Quarterly audit time dropped 70%, manual reconciliation costs fell 40%, and detected suspicious activity was reduced by 99.9% — significantly mitigating financial risk."
      quote="The Blockchain solution from Nextgen Entrade has been a game-changer for our compliance and security. Their deep understanding of financial regulations combined with cutting-edge technology has given us unparalleled peace of mind."
      author="Mr. David Chen, Head of Risk & Compliance, Apex Financial Group"
    />
  );
}
