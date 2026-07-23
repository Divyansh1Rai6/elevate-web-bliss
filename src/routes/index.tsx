import { createFileRoute } from "@tanstack/react-router";
import { Hero3D } from "@/components/site/Hero3D";
import { useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useScroll, type Variants } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Sparkles, Shield, Users, Zap, Trophy, Globe,
  CheckCircle2, Quote, Mail, Phone, MapPin,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/hero.webp";
import caseHealth from "@/assets/case-health.jpg";
import caseFinance from "@/assets/case-finance.jpg";
import caseEcom from "@/assets/case-ecom.jpg";
import caseMfg from "@/assets/case-mfg.jpg";
import caseEdu from "@/assets/case-edu.jpg";
import caseMedia from "@/assets/case-media.jpg";
import svcWeb from "@/assets/service-web.jpg";
import svcMarketing from "@/assets/service-marketing.jpg";
import svcCloud from "@/assets/service-cloud.jpg";
import svcMobile from "@/assets/service-mobile.jpg";
import svcEcom from "@/assets/service-ecom.jpg";

export const Route = createFileRoute("/")({ component: Index });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({
  children,
  delay = 0,
  className,
  as: _as,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div";
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  return (
    <section id="home" ref={heroRef} className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[oklch(0.15_0.03_260)] text-[oklch(0.98_0.005_90)]">
      <div aria-hidden className="absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(60% 60% at 80% 20%, oklch(0.35 0.09 265 / 0.5), transparent 60%), radial-gradient(50% 50% at 10% 80%, oklch(0.72 0.13 75 / 0.15), transparent 60%)" }} />
      <div className="container-page relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[oklch(0.82_0.11_78)]" />
            Empowering Global Digital Tomorrow From India
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98]">
            Future-ready tech services <span className="italic text-gradient-gold">for startups</span> and enterprises.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed">
            Future ready tech services for startups and small & medium bussinesses.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-[oklch(0.72_0.13_75)] px-5 py-3 text-sm font-medium text-[oklch(0.15_0.03_260)] hover:bg-[oklch(0.78_0.13_75)] transition">
              Start a project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white hover:bg-white/5 transition">
              Explore services
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/60">
            <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4" /> ISO 27001 Certified</span>
            <span className="inline-flex items-center gap-2"><Trophy className="h-4 w-4" /> CMMI Level 5</span>
            <span className="inline-flex items-center gap-2"><Users className="h-4 w-4" /> 350+ Engineers</span>
          </div>
        </div>
        <motion.div className="relative" style={{ y: imgY }}>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
            <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[oklch(0.15_0.03_260)]/40" />
            <div className="absolute inset-0">
              <Hero3D />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-white/95 text-foreground p-4 shadow-xl backdrop-blur">
            <div className="text-3xl font-display">93%+</div>
            <div className="text-xs text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="absolute -top-6 -right-6 hidden sm:block rounded-2xl bg-white/95 text-foreground p-4 shadow-xl">
            <div className="text-3xl font-display">250+</div>
            <div className="text-xs text-muted-foreground">Solutions Delivered</div>
          </div>
         </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["ISO 9001:2015", "ISO/IEC 27001:2022", "CMMI Level 5", "PhD Scholar-Led R&D", "Agile Delivery", "350+ Engineers"];
  const loop = [...items, ...items];
  return (
    <div className="border-y border-black/10 bg-gold py-6 overflow-hidden">
      <motion.div
        className="flex items-center gap-x-14 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {loop.map((i, idx) => (
          <span key={idx} className="text-sm font-semibold text-[oklch(0.15_0.03_260)] shrink-0">{i}</span>
        ))}
      </motion.div>
    </div>
  );
}

function About() {
  const points = [
    {
      icon: Sparkles,
      title: "Dr. Aman Verma — CEO & Co-Founder",
      body: "PhD in Computer Science (Boston University); previously led AI research teams at a Fortune 100 tech firm in Silicon Valley. Sets strategic direction and engages major clients at the executive level.",
    },
    {
      icon: Zap,
      title: "Dr. Rina Kapoor — COO & Co-Founder",
      body: "PhD in Industrial Engineering (Boston University), focused on process optimization; former management consultant at a top-tier global firm. Oversees delivery excellence across every project.",
    },
    {
      icon: Globe,
      title: "Dr. Karthik Menon — CTO & Co-Founder",
      body: "PhD in Data Science (Boston University); headed R&D for a leading cloud-native startup and holds multiple patents. Leads the Innovation Lab and defines our technology standards.",
    },
    {
      icon: Shield,
      title: "Ms. Priya Anand — CFO",
      body: "Chartered Accountant (ICAI), MBA in Finance from IIM Ahmedabad; previously Finance Director at two global BPO firms. Manages financial strategy, budgeting, and investor relations.",
    },
    {
      icon: Trophy,
      title: "Mr. Neil Das — Head of Global Sales & Marketing",
      body: "20 years in global IT sales, including senior leadership at a multinational ERP vendor; MBA from XLRI Jamshedpur. Drives new client acquisition and global GTM strategy.",
    },
    {
      icon: Users,
      title: "Ms. Kavita Rao — Head of Human Resources",
      body: "MA in Organizational Psychology (TISS), with 15 years of HR leadership in technology firms. Leads talent management, diversity & inclusion, and employee wellbeing programs.",
    },
  ];
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container-page">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">
              Empowering your business with <span className="italic text-gradient-gold">strategic digital</span> campaigns.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Nextgen Entrade was founded in 2017 and is headquartered in Ahmedabad, India. Our guiding mission—<em>"Empowering Global Digital Tomorrow From India"</em>—drives every project we undertake. We help organizations of all sizes harness technology to streamline operations, delight customers, and unlock new revenue streams.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you need to launch a mobile app in eight weeks, automate complex supply chains, or build an omnichannel e-commerce platform, we're the partner that turns today's vision into tomorrow's competitive advantage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <div key={p.title} className="group rounded-2xl hairline p-6 bg-card transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_oklch(0.22_0.05_265_/_0.25)]">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/5 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-medium tracking-tight" style={{ fontFamily: "var(--font-sans)" }}>{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
   const services = [
    { img: svcWeb, title: "Website Development", href: "/website-development", body: "Fast, accessible, SEO-ready marketing sites and web platforms crafted with modern frameworks and thoughtful UX." },
    { img: svcMarketing, title: "Digital Marketing", href: "/digital-marketing", body: "SEO, PPC, content, and social campaigns backed by analytics dashboards and measurable ROI." },
    { img: svcCloud, title: "Cloud Application Development", href: "/cloud-application-development", body: "Scalable, secure cloud-native apps — architecture, migrations, DevOps, and enterprise-grade reliability." },
    { img: svcMobile, title: "Mobile Application Development", href: "/mobile-application-development", body: "Intuitive, high-performance iOS & Android apps with the latest frameworks and UX best practices." },
    { img: svcEcom, title: "E-commerce Consultancy", href: "/ecommerce-consultancy", body: "Storefront strategy, marketplace onboarding, and conversion optimization across Shopify, Magento, and custom stacks." },
    { img: svcMarketing, title: "Social Media Marketing", href: "/social-media-marketing", body: "Platform-native content, community management, and paid campaigns that build engaged, loyal audiences." },
  ];
  return (
    <section id="services" className="py-24 lg:py-32 bg-cream/50">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Services</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">
              Empowering your business with <span className="italic text-gradient-gold">scalable cloud</span> services.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              onClick={() => { window.location.href = s.href; }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group h-full flex flex-col overflow-hidden rounded-2xl bg-card hairline shadow-sm hover:shadow-[0_28px_60px_-24px_oklch(0.22_0.05_265_/_0.28)] transition-shadow duration-500 cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-medium tracking-[0.18em] uppercase text-primary">
                  0{i + 1}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-medium leading-tight" style={{ fontFamily: "var(--font-sans)" }}>{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.body}</p>
                <a href={s.href} className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all">
                  Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "93%+", l: "Customer Satisfaction" },
    { v: "250+", l: "Custom Solutions Delivered" },
    { v: "120+", l: "Enterprise Partnerships" },
    { v: "85%", l: "On-Time Delivery" },
    { v: "1,500+", l: "Support Tickets Resolved" },
    { v: "200+", l: "Certified Engineers" },
    { v: "10,000K+", l: "Lines of Production Code" },
    { v: "50+", l: "Compliance Audits Passed" },
    { v: "5,000+", l: "Automated Test Scripts" },
    { v: "75%", l: "Reduction in Time-to-Market" },
    { v: "300+", l: "Cloud Migrations" },
    { v: "14+", l: "Patents & Algorithms" },
    { v: "12+", l: "International Awards" },
    { v: "95%", l: "Client Retention (8+ yrs)" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-[oklch(0.15_0.03_260)] text-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">Achievements</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-white leading-[1.05]">
            Numbers that speak for <span className="italic text-gradient-gold">two decades</span> of craft.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.l} className="bg-[oklch(0.15_0.03_260)] p-7 hover:bg-[oklch(0.19_0.04_265)] transition-colors">
              <div className="font-display text-4xl sm:text-5xl text-gradient-gold">{s.v}</div>
              <div className="mt-2 text-sm text-white/60 leading-snug">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  const cats = [
    { title: "Mobile", items: ["Flutter", "Swift", "Objective-C", "Kotlin", "Java"] },
    { title: "Frontend", items: ["React", "Vue.js", "Next.js", "TypeScript", "Web3.js"] },
    { title: "Backend", items: ["Node.js", "Express.js", "MongoDB", "Python", "Java", "Spring Boot"] },
    { title: "AI & Machine Learning", items: ["Predictive Analytics", "NLP", "Computer Vision", "Intelligent Automation"] },
    { title: "Data & Big Data", items: ["Apache HBase", "Data Engineering", "Big Data Architecture", "Data Visualization"] },
    { title: "Blockchain", items: ["Ethereum", "Hyperledger Fabric", "Smart Contracts", "Tokenization"] },
    { title: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Jenkins"] },
    { title: "IoT", items: ["Real-Time Monitoring", "Remote Control", "Edge Devices", "Automated Systems"] },
    { title: "Metaverse & AR", items: ["Metaverse", "Augmented Reality", "Digital Assets", "Immersive Environments"] },
    { title: "QA Testing", items: ["Selenium", "Postman", "TestNG", "Cypress", "Jest", "Appium"] },
    { title: "Analytics", items: ["Jira", "Power BI", "Tableau", "Looker", "Mixpanel", "Segment"] },
    { title: "Security", items: ["OWASP ZAP", "Vault", "Snyk", "SonarQube", "Burp", "Wiz"] },
  ];
  return (
    <section id="technology" className="py-24 lg:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Technology</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">
            Programming languages & tools used for <span className="italic text-gradient-gold">top quality</span>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cats.map((c) => (
            <div key={c.title} className="rounded-2xl hairline p-6 bg-card">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">{c.title}</h3>
                <div className="h-1.5 w-1.5 rounded-full bg-gold" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.items.map((i) => (
                  <span key={i} className="rounded-full border border-border bg-background px-3 py-1 text-xs">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cases() {
  const cases = [
    { img: caseHealth, tag: "Healthcare & Life Sciences", title: "Patient-first mobile platforms with HIPAA-grade security.", href: "/case-study-healthcare" },
    { img: caseFinance, tag: "Financial Services", title: "Real-time analytics and automations for global fintech.", href: "/case-study-financial" },
    { img: caseEcom, tag: "E-commerce & Retail", title: "Omnichannel commerce with marketplace and ERP sync.", href: "/case-study-ecommerce" },
    { img: caseMfg, tag: "Manufacturing", title: "Warehouse automation and supply-chain intelligence.", href: "/case-study-manufacturing" },
    { img: caseEdu, tag: "Education", title: "Adaptive learning platforms for institutions worldwide.", href: "/case-study-education" },
    { img: caseMedia, tag: "Media & Broadcast", title: "Content pipelines and streaming for modern newsrooms.", href: "/case-study-media" },
  ];
  return (
    <section id="cases" className="py-24 lg:py-32 bg-cream/50">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Industry Case Studies</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">Case studies across <span className="italic text-gradient-gold">every sector</span>.</h2>
          </div>
          <a href="#contact" className="text-sm text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">See all <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <article
              key={c.tag}
              onClick={() => { window.location.href = c.href; }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-card hairline transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_oklch(0.22_0.05_265_/_0.3)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.tag} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-gold">{c.tag}</div>
                <h3 className="mt-2 text-lg leading-snug" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>{c.title}</h3>
                <a href={c.href} className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all">
                  Read case <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    "Lead Capture & Initial Qualification",
    "Preliminary Discovery Call",
    "Mutual Non-Disclosure Agreement",
    "Detailed Requirements Gathering",
    "Solution Architecture & Feasibility",
    "Commercial Proposal & SOW",
    "Contract Finalization",
    "Project Onboarding & Kick-off",
    "Advance Invoice & Receipt",
    "Execution & Governance",
    "Closure & Handover",
    "Post-Project Support & Feedback",
  ];
  const details = [
    "Client inquiries are logged and quickly checked for fit. Misaligned leads are politely declined or referred.",
    "A brief call clarifies goals, timelines, and budgets. Red flags are identified before proceeding further.",
    "An NDA is signed before sharing sensitive data. May be one-way or mutual, reviewed and executed digitally.",
    "Workshops and audits document exact needs. Output includes FRD, NFR checklist, and scope matrix.",
    "Architecture is outlined and tech stack chosen. Team effort and timeline estimates in a feasibility report.",
    "Detailed SOW with milestones, deliverables, and commercial terms is prepared for review.",
    "NDA, proposal, and SOW are legally reviewed. Final contract signed and securely archived.",
    "Team is assigned and tools set up. Kick-off meeting aligns expectations and communication flow.",
    "An initial invoice is raised and tracked. Work begins only after payment confirmation.",
    "Regular updates, demos, and reports are shared. Change requests follow a structured approval process.",
    "Deliverables are reviewed and accepted. Documents, credentials, and final invoices handed over.",
    "Support is provided per SLA. Client feedback is collected and internal improvements made.",
  ];
  return (
    <section id="process" className="py-24 lg:py-32 bg-cream/50">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">How we work</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">How our care starts and <span className="italic text-gradient-gold">gets delivered</span>.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-6">
          {steps.map((s, i) => (
            <div key={s} className="relative pl-14 py-2">
              <div className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-base font-medium" style={{ fontFamily: "var(--font-sans)" }}>{s}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{details[i]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { co: "Stellar Pharmaceuticals — Mumbai, India", quote: "Nextgen Entrade transformed our online presence with a cost-effective strategy that optimized our Amazon & Flipkart storefronts in just six weeks — boosting monthly sales by 45%.", name: "Dr. Rajesh Sharma", role: "CFO" },
    { co: "Harmony Textiles — Manchester, UK", quote: "Partnering with Nextgen Entrade proved exceptionally cost-effective. Within eight weeks they had implemented an automated returns system, freeing our team to focus on design.", name: "Olivia Mauerer", role: "Director" },
    { co: "Quantum Electronics — Jerusalem, Israel", quote: "A complete overhaul and API-driven inventory automation. Every milestone on time, mobile-first site in ten weeks, and organic traffic up 60% post-launch.", name: "Charlotte Savcı", role: "Chief Technology Officer" },
    { co: "Greenleaf Organics — Delhi, India", quote: "Tailored Amazon Pantry onboarding cut our setup time by half. Creatives and dashboards were premium, and a 35% reduction in CAC followed.", name: "Arjun Mehta", role: "Chief Procurement Officer" },
    { co: "Luxe Home Furnishings — Auckland, NZ", quote: "Built our Shopify store with advanced automations for inventory and abandoned-cart in three weeks. A 70% lift in conversion rate followed.", name: "Joseph L. Mabie", role: "CEO" },
    { co: "Zenith Health Solutions — Brisbane, Australia", quote: "Handled our Magento migration and warehouse-automation bots 20% below competing bids. Page-load speeds improved 40% and PPC delivered high-quality leads.", name: "Mia L. Mabie", role: "Chief Marketing Officer" },
  ];
  return (
    <section id="news" className="py-24 lg:py-32">
      <div className="container-page">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Testimonials</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">Real success stories <span className="italic text-gradient-gold">from our clients</span>.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            From pharmaceutical companies in Mumbai to healthcare firms in Brisbane, our clients praise Nextgen Entrade for delivering cost-effective solutions on time and on budget — with measurable ROI.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.map((x) => (
            <figure key={x.co} className="relative rounded-2xl bg-card hairline p-7 flex flex-col">
              <Quote className="h-6 w-6 text-gold" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90 italic">"{x.quote}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{x.co}</div>
                <div className="mt-1.5 text-sm font-medium">{x.name}</div>
                <div className="text-xs text-muted-foreground">{x.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
 
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[oklch(0.15_0.03_260)] text-white">
      <div className="container-page grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">Contact</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-white leading-[1.05]">Let's build what's <span className="italic text-gradient-gold">next</span>.</h2>
          <p className="mt-6 max-w-md text-white/70 leading-relaxed">Tell us about your project. A senior engineer will respond within one business day with a discovery call proposal.</p>
          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-3"><Mail className="h-5 w-5 text-gold mt-0.5" /><div><div className="text-sm text-white/60">Email</div><div>hello@nextgenentrade.com</div></div></div>
            <div className="flex items-start gap-3"><Phone className="h-5 w-5 text-gold mt-0.5" /><div><div className="text-sm text-white/60">Phone</div><div>+91 79 4000 0000</div></div></div>
            <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-gold mt-0.5" /><div><div className="text-sm text-white/60">HQ</div><div>Ahmedabad, India</div></div></div>
          </div>
        </div>
        <LampContactCard />
      </div>
    </section>
  );
}
function LampContactCard() {
  const [awake, setAwake] = useState(false);
  const [pulling, setPulling] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const y = useMotionValue(0);
  const cordHeight = useTransform(y, (v) => 46 + v);

  const handleDragEnd = (_: unknown, info: { offset: { y: number } }) => {
    setPulling(false);
    if (info.offset.y > 55) {
      setAwake(true);
    }
  };

  return (
    <motion.div layout className="relative rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur p-8 flex flex-col items-center justify-center min-h-[440px] overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.13 75 / 0.35), transparent 70%)" }}
        animate={{ opacity: awake ? 1 : 0, scale: awake ? 1 : 0.6 }}
        transition={{ duration: 0.6 }}
      />

      <AnimatePresence mode="wait">
        {!awake ? (
          <motion.div
            key="lamp"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 flex flex-col items-center gap-3"
          >
            <div className="relative" style={{ width: 140, height: 190 }}>
              <svg width="140" height="160" viewBox="0 0 140 160" fill="none" className="absolute top-0 left-0">
                <path d="M35 60 L105 60 L120 20 L20 20 Z" fill="oklch(0.72 0.13 75 / 0.15)" stroke="oklch(0.72 0.13 75)" strokeWidth="2" />
                <path d="M55 42 q6 6 12 0" stroke="oklch(0.98 0.005 90)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M78 42 q6 6 12 0" stroke="oklch(0.98 0.005 90)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <line x1="70" y1="60" x2="70" y2="130" stroke="oklch(0.5 0.02 260)" strokeWidth="3" />
                <ellipse cx="70" cy="135" rx="24" ry="6" fill="oklch(0.3 0.03 260)" />
              </svg>

              {/* pull cord */}
              <motion.div
                className="absolute bg-white/40 origin-top"
                style={{ left: 96, top: 60, width: 2, height: cordHeight }}
              />
              <motion.div
                drag="y"
                dragConstraints={{ top: 0, bottom: 70 }}
                dragElastic={0.2}
                dragSnapToOrigin
                onDragStart={() => setPulling(true)}
                onDragEnd={handleDragEnd}
                style={{ left: 96, top: 60, y }}
                whileDrag={{ scale: 1.15 }}
                className="absolute -ml-2 w-4 h-4 rounded-full bg-[oklch(0.72_0.13_75)] shadow-lg cursor-grab active:cursor-grabbing"
              />
            </div>
            <span className="text-sm text-white/60">
              {pulling ? "Keep pulling…" : "Pull the cord to wake me up"}
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg width="56" height="64" viewBox="0 0 140 160" fill="none">
                <path d="M35 60 L105 60 L120 20 L20 20 Z" fill="oklch(0.72 0.13 75 / 0.25)" stroke="oklch(0.72 0.13 75)" strokeWidth="2" />
                <circle cx="61" cy="40" r="3.5" fill="oklch(0.98 0.005 90)" />
                <circle cx="90" cy="40" r="3.5" fill="oklch(0.98 0.005 90)" />
                <path d="M62 50 q8 5 16 0" stroke="oklch(0.98 0.005 90)" strokeWidth="2" strokeLinecap="round" fill="none" />
                <line x1="70" y1="60" x2="70" y2="130" stroke="oklch(0.5 0.02 260)" strokeWidth="3" />
                <ellipse cx="70" cy="135" rx="24" ry="6" fill="oklch(0.3 0.03 260)" />
              </svg>
              <span className="text-white font-display text-lg">Hi, let's talk</span>
            </div>
            <form
              ref={formRef}
              onSubmit={(e) => { e.preventDefault(); setSent(true); formRef.current?.reset(); setTimeout(() => setSent(false), 4000); }}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" />
                <Field label="Work email" name="email" type="email" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Company" name="company" />
                <Field label="Budget range" name="budget" placeholder="₹10L – ₹50L" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-white/60">Project details</label>
                <textarea name="message" rows={4} required className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition" placeholder="Tell us about your goals…" />
              </div>
              <motion.button whileTap={{ scale: 0.97 }} type="submit" className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-[oklch(0.15_0.03_260)] hover:bg-[oklch(0.78_0.13_75)] transition">
                {sent ? "Thank you — we'll be in touch" : "Send inquiry"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-white/60">{label}</span>
      <input required name={name} type={type} placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition" />
    </label>
  );
}

function Index() {
  const sections = [
    <Hero key="hero" />,
    <Marquee key="marquee" />,
    <About key="about" />,
    <Services key="services" />,
    <Stats key="stats" />,
    <Technology key="technology" />,
    <Cases key="cases" />,
    <Process key="process" />,
    <Testimonials key="testimonials" />,
    <Contact key="contact" />,
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-background"
    >
      <Nav />
      <main>
        {sections.map((s, i) => (
          <motion.div
            key={s.key}
            initial={i === 0 ? false : { opacity: 0, y: 32 }}
            whileInView={i === 0 ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {s}
          </motion.div>
        ))}
      </main>
      <Footer />
    </motion.div>
  );
}

export default Index;