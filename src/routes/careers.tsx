import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, TrendingUp, Coffee, Globe2, Users2 } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/careers")({ component: CareersPage });

const values = [
  { icon: Sparkles, title: "Innovation First", body: "Backed by a PhD-led Innovation Lab, we give engineers room to experiment with AI, blockchain, and emerging tech on real client work." },
  { icon: Heart, title: "Ownership Culture", body: "Every team member owns outcomes, not just tasks. Your name is on the work, and so is the credit." },
  { icon: TrendingUp, title: "Real Growth", body: "Structured mentorship, certification support, and a clear path from associate to lead — not just a title change." },
  { icon: Coffee, title: "Balanced Pace", body: "Agile sprints with sane hours. We measure output, not hours logged at a desk." },
  { icon: Globe2, title: "Global Exposure", body: "Work with clients across healthcare, fintech, manufacturing, and media — spanning six continents." },
  { icon: Users2, title: "350+ Strong", body: "Join a team of engineers, consultants, data scientists, and designers who actually like solving hard problems together." },
];

const openings = [
  { title: "Senior Full-Stack Engineer (MERN)", type: "Full-time · Ahmedabad / Remote", desc: "Build and scale production web platforms across our client portfolio using MongoDB, Express, React, and Node.js." },
  { title: "Flutter Mobile Engineer", type: "Full-time · Ahmedabad", desc: "Ship cross-platform mobile apps for healthcare, retail, and logistics clients, from architecture to app-store release." },
  { title: "AI/ML Engineer (Python)", type: "Full-time · Remote", desc: "Design predictive models, NLP pipelines, and computer-vision systems as part of our Innovation Lab." },
  { title: "DevOps Engineer (AWS/Azure)", type: "Full-time · Ahmedabad", desc: "Own CI/CD pipelines, Kubernetes clusters, and infrastructure reliability across multi-cloud client environments." },
  { title: "UI/UX Designer", type: "Full-time · Ahmedabad / Remote", desc: "Translate client requirements into wireframes, prototypes, and polished design systems for web and mobile." },
  { title: "QA Automation Engineer", type: "Full-time · Ahmedabad", desc: "Build and maintain automated test suites (Selenium, Cypress, Appium) across our client delivery pipeline." },
];

function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[oklch(0.15_0.03_260)] text-white">
          <div aria-hidden className="absolute inset-0 opacity-60"
            style={{ background: "radial-gradient(60% 60% at 80% 20%, oklch(0.35 0.09 265 / 0.5), transparent 60%), radial-gradient(50% 50% at 10% 80%, oklch(0.72 0.13 75 / 0.15), transparent 60%)" }} />
          <div className="container-page relative">
            <div className="text-xs uppercase tracking-[0.2em] text-white/50">Careers</div>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
              Build what's <span className="italic text-gradient-gold">next</span>, with us.
            </h1>
            <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
              We're 350+ engineers, consultants, data scientists, and designers empowering global businesses with future-ready technology — from Ahmedabad to the world.
            </p>
            <a href="#openings" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[oklch(0.72_0.13_75)] px-5 py-3 text-sm font-medium text-[oklch(0.15_0.03_260)] hover:bg-[oklch(0.78_0.13_75)] transition">
              See open roles <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="container-page">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Why Nextgen Entrade</div>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">
                A culture built on <span className="italic text-gradient-gold">ownership and craft</span>.
              </h2>
            </div>
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-2xl hairline p-6 bg-card"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/5 text-primary">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium tracking-tight" style={{ fontFamily: "var(--font-sans)" }}>{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="openings" className="py-24 lg:py-32 bg-cream/50">
          <div className="container-page">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Open Roles</div>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">
                Current <span className="italic text-gradient-gold">openings</span>.
              </h2>
            </div>
            <div className="mt-14 grid gap-4">
              {openings.map((o) => (
                <div key={o.title} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-card hairline p-6">
                  <div>
                    <h3 className="text-lg font-medium" style={{ fontFamily: "var(--font-sans)" }}>{o.title}</h3>
                    <div className="mt-1 text-xs uppercase tracking-wider text-gold">{o.type}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">{o.desc}</p>
                  </div>
                  <a href="/#contact" className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition">
                    Apply <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Don't see a fit? Write to us anyway at{" "}
              <a href="mailto:careers@nextgenentrade.com" className="text-primary hover:underline">careers@nextgenentrade.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
