import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly to us — such as your name, email, company, and project details submitted through our contact forms — as well as automatically collected data like IP address, browser type, and pages visited, gathered via cookies and analytics tools.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use collected information to respond to inquiries, deliver and improve our services, send relevant updates about your project, and analyze site usage to improve our website's performance and content.",
  },
  {
    title: "3. Cookies & Tracking",
    body: "Our website uses cookies and similar technologies to remember preferences and understand how visitors interact with our site. You can disable cookies through your browser settings, though some site features may not function as intended.",
  },
  {
    title: "4. Data Sharing & Third Parties",
    body: "We do not sell your personal information. We may share data with trusted third-party service providers (such as hosting, analytics, or payment processors) solely to operate our business, and only under confidentiality obligations.",
  },
  {
    title: "5. Data Security",
    body: "We maintain ISO 27001-certified security practices, including encryption, access controls, and regular audits, to protect your information from unauthorized access, alteration, or disclosure.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us at privacy@nextgenentrade.com. We will respond to verified requests within a reasonable timeframe.",
  },
  {
    title: "7. Children's Privacy",
    body: "Our services are not directed at individuals under 18. We do not knowingly collect personal information from children.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The 'last updated' date below will reflect the most recent revision.",
  },
  {
    title: "9. Contact Us",
    body: "For questions about this Privacy Policy or our data practices, reach out to privacy@nextgenentrade.com or write to us at our Ahmedabad, India headquarters.",
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="pt-32 pb-16 lg:pt-40">
          <div className="container-page max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Legal</div>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">Privacy Policy</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: January 2026</p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Nextgen Entrade ("we", "us", "our") respects your privacy. This policy explains what information we collect, how we use it, and the choices you have regarding your data when you use our website and services.
            </p>
          </div>
        </section>
        <section className="pb-24 lg:pb-32">
          <div className="container-page max-w-3xl space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-xl sm:text-2xl mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
