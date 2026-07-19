import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/terms")({ component: TermsPage });

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the Nextgen Entrade website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of our website and services.",
  },
  {
    title: "2. Use of Our Services",
    body: "Our services — including website development, digital marketing, cloud and mobile application development, and e-commerce consultancy — are provided per individual service agreements or statements of work signed with each client, which take precedence over general website content.",
  },
  {
    title: "3. Intellectual Property",
    body: "All content on this website, including text, graphics, logos, and code, is the property of Nextgen Entrade unless otherwise stated. Deliverables produced under a signed client contract are governed by the intellectual-property terms specified in that contract.",
  },
  {
    title: "4. User Responsibilities",
    body: "You agree not to misuse our website, attempt unauthorized access to our systems, or submit false information through our contact or inquiry forms.",
  },
  {
    title: "5. Limitation of Liability",
    body: "Nextgen Entrade provides this website 'as is' and makes no warranties regarding uninterrupted or error-free operation. To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from use of this website.",
  },
  {
    title: "6. Indemnification",
    body: "You agree to indemnify and hold Nextgen Entrade harmless from any claims, damages, or expenses arising from your misuse of our website or violation of these terms.",
  },
  {
    title: "7. Termination",
    body: "We reserve the right to suspend or restrict access to our website for any user who violates these Terms of Service.",
  },
  {
    title: "8. Governing Law",
    body: "These Terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.",
  },
  {
    title: "9. Changes to These Terms",
    body: "We may revise these Terms from time to time. Continued use of our website after changes constitutes acceptance of the updated Terms.",
  },
  {
    title: "10. Contact Us",
    body: "For questions regarding these Terms of Service, contact us at hello@nextgenentrade.com or write to our Ahmedabad, India headquarters.",
  },
];

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="pt-32 pb-16 lg:pt-40">
          <div className="container-page max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Legal</div>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">Terms of Service</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: January 2026</p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              These Terms of Service govern your use of the Nextgen Entrade website. Please read them carefully before using our website or engaging our services.
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
