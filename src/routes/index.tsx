import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Sparkles, Shield, Users, Zap, Trophy, Globe,
  CheckCircle2, Quote, Mail, Phone, MapPin,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/hero.jpg";
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
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[oklch(0.15_0.03_260)] text-[oklch(0.98_0.005_90)]">
      <div aria-hidden className="absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(60% 60% at 80% 20%, oklch(0.35 0.09 265 / 0.5), transparent 60%), radial-gradient(50% 50% at 10% 80%, oklch(0.72 0.13 75 / 0.15), transparent 60%)" }} />
      <div className="container-page relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[oklch(0.82_0.11_78)]" />
            Empowering Global Digital Tomorrow From India
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98]">
            Future-ready mobile apps <span className="italic text-gradient-gold">for startups</span> and enterprises.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed">
            Our mobile division specializes in intuitive, high-performance applications that align with your unique KPIs. We embed the latest frameworks and UX best practices to accelerate adoption, engagement, and sustainable growth.
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
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-float-slow">
            <img src={heroImg} alt="" width={1600} height={1200} className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-white/95 text-foreground p-4 shadow-xl backdrop-blur">
            <div className="text-3xl font-display">93%+</div>
            <div className="text-xs text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="absolute -top-6 -right-6 hidden sm:block rounded-2xl bg-white/95 text-foreground p-4 shadow-xl">
            <div className="text-3xl font-display">250+</div>
            <div className="text-xs text-muted-foreground">Solutions Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["ISO 27001", "CMMI Level 5", "AWS Partner", "Google Cloud", "Microsoft Azure", "PhD-Led R&D", "Agile Delivery", "350+ Engineers"];
  return (
    <div className="border-y border-border bg-cream/40 py-6 overflow-hidden">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
          {items.map((i) => <span key={i} className="font-medium">{i}</span>)}
        </div>
      </div>
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
    { img: svcWeb, title: "Website Development", body: "Fast, accessible, SEO-ready marketing sites and web platforms crafted with modern frameworks and thoughtful UX." },
    { img: svcMarketing, title: "Digital Marketing", body: "SEO, PPC, content, and social campaigns backed by analytics dashboards and measurable ROI." },
    { img: svcCloud, title: "Cloud Application Development", body: "Scalable, secure cloud-native apps — architecture, migrations, DevOps, and enterprise-grade reliability." },
    { img: svcMobile, title: "Mobile Application Development", body: "Intuitive, high-performance iOS & Android apps with the latest frameworks and UX best practices." },
    { img: svcEcom, title: "E-commerce Consultancy", body: "Storefront strategy, marketplace onboarding, and conversion optimization across Shopify, Magento, and custom stacks." },
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
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group h-full flex flex-col overflow-hidden rounded-2xl bg-card hairline shadow-sm hover:shadow-[0_28px_60px_-24px_oklch(0.22_0.05_265_/_0.28)] transition-shadow duration-500"
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
                <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const cases = [
    {
      img: caseHealth,
      tag: "Healthcare & Life Sciences",
      title: "Revolutionizing Patient Engagement",
      client: "MediCare Connect — a leading multi-specialty hospital chain",
      challenge: "MediCare Connect faced significant challenges in patient engagement and appointment management. Patients struggled with long wait times, fragmented communication, and a cumbersome booking process, leading to dissatisfaction and operational inefficiencies.",
      solution: "Nextgen Entrade developed a comprehensive, AI-powered patient engagement platform, accessible via a Flutter mobile application and a responsive web portal — with smart appointment scheduling, real-time queue management, and a secure patient communication module. A Python backend powered predictive scheduling algorithms, and a personalized health dashboard gave patients secure access to records, test results, and prescriptions.",
      impact: "Patient satisfaction scores rose 35% within six months, driven by a 60% reduction in appointment booking time and a 45% decrease in physical waiting-room time. Administrative efficiency improved by 20%.",
      quote: "Nextgen Entrade didn't just build an app; they built a bridge between our patients and our care. Their AI-driven approach to scheduling and intuitive design transformed our patient experience.",
      author: "Dr. Anya Sharma, Chief Digital Officer, MediCare Connect",
    },
    {
      img: caseFinance,
      tag: "Financial Services",
      title: "Securing and Streamlining Digital Transactions",
      client: "Apex Financial Group — a global investment and wealth management firm",
      challenge: "Apex Financial Group, handling vast amounts of sensitive client data and high-value transactions, needed to enhance its cybersecurity posture and streamline internal audits. Disparate systems led to manual reconciliation, potential vulnerabilities, and a lack of real-time oversight.",
      solution: "Nextgen Entrade designed a custom Blockchain-based audit and compliance platform using Hyperledger Fabric, creating an immutable ledger for all transactions and audit trails. Built with a Java Spring Boot backend and a React.js frontend, it delivered real-time visibility and automated compliance checks, with Python-driven dashboards for anomaly detection and fraud prevention.",
      impact: "Quarterly audit time dropped 70%, manual reconciliation costs fell 40%, and detected suspicious activity was reduced by 99.9% — significantly mitigating financial risk.",
      quote: "The Blockchain solution from Nextgen Entrade has been a game-changer for our compliance and security. Their deep understanding of financial regulations combined with cutting-edge technology has given us unparalleled peace of mind.",
      author: "Mr. David Chen, Head of Risk & Compliance, Apex Financial Group",
    },
    {
      img: caseEcom,
      tag: "E-commerce & Retail",
      title: "Boosting Online Sales and Customer Loyalty",
      client: "UrbanThreads — a fast-growing fashion e-commerce brand",
      challenge: "Despite a strong product line, UrbanThreads struggled with low conversion rates and retention. Slow loading times, a clunky UX, and no personalized recommendations led to high bounce rates and abandoned carts.",
      solution: "Nextgen Entrade rebuilt UrbanThreads' platform on a robust MERN Stack — a React.js frontend for a fast, intuitive UI, and Node.js with MongoDB for scalable backend performance. An AI-powered recommendation engine built with Python personalized product suggestions, alongside advanced SEO and content marketing.",
      impact: "Conversion rates rose 50% and average order value climbed 30% within three months. Page load times improved 75%, and repeat purchases rose 25%.",
      quote: "Nextgen Entrade transformed our online presence. Their MERN stack expertise and AI integration created an e-commerce experience that not only looks fantastic but performs exceptionally.",
      author: "Ms. Sarah Jenkins, CEO, UrbanThreads",
    },
    {
      img: caseMfg,
      tag: "Manufacturing & Logistics",
      title: "Optimizing Supply Chain Efficiency with IoT",
      client: "GlobalFreight Solutions — a multinational logistics and supply chain provider",
      challenge: "GlobalFreight faced inefficiencies tracking high-value cargo in remote environments. Manual checks and outdated tracking led to delays, increased risk of loss, and no real-time visibility across their global supply chain.",
      solution: "Nextgen Entrade built an end-to-end IoT-enabled cargo monitoring system, with custom sensors transmitting real-time location, temperature, humidity, and shock data. A Python backend and MEAN Stack frontend gave GlobalFreight a comprehensive oversight dashboard, with Machine Learning-driven predictive analytics for proactive routing.",
      impact: "98% real-time fleet visibility achieved, transit times cut 20%, cargo damage/loss down 15%, and 80% of potential delays mitigated proactively.",
      quote: "Nextgen Entrade's IoT solution has given us unprecedented control and insight into our supply chain — saving us significant costs and elevating our service delivery.",
      author: "Mr. Robert Davis, COO, GlobalFreight Solutions",
    },
    {
      img: caseEdu,
      tag: "Education & EdTech",
      title: "Personalizing Learning Experiences",
      client: "Academix University — a prestigious international university",
      challenge: "Academix's existing LMS was rigid, lacked interactive features, and struggled to adapt to individual student needs — leading to lower engagement and retention in online courses.",
      solution: "Nextgen Entrade built a next-generation, AI-driven personalized learning platform using Python for adaptive learning paths and intelligent content recommendations. The interactive frontend was built with Angular (MEAN stack), plus a dedicated Flutter mobile app for consistent access across devices.",
      impact: "Student retention for online courses rose 25%, course completion rates rose 18%, and positive student feedback increased 40%.",
      quote: "Nextgen Entrade's vision for personalized learning aligned perfectly with ours. Their AI and Flutter expertise delivered a platform that truly understands and adapts to each student.",
      author: "Dr. Elena Petrova, Dean of Digital Learning, Academix University",
    },
    {
      img: caseMedia,
      tag: "Media & Entertainment",
      title: "Delivering Immersive Digital Experiences",
      client: "CineVerse Studios — a leading film production and digital content house",
      challenge: "CineVerse wanted a groundbreaking interactive experience for their upcoming blockbuster, extending the narrative beyond the screen — needing a partner who could handle massive traffic and rich multimedia, including early Metaverse elements.",
      solution: "Nextgen Entrade built an interactive fan engagement platform on a MERN Stack for scalability and real-time interaction, with AR features integrated into a Flutter mobile app letting fans interact with virtual characters in the real world. A Blockchain-based digital collectibles marketplace let fans own unique in-universe assets.",
      impact: "5M+ unique users engaged in the first month, 70% AR adoption among mobile users, and $2M in digital-collectible revenue within the first week.",
      quote: "Nextgen Entrade brought our vision for immersive storytelling to life. Their expertise in MERN, Flutter, Metaverse, and Blockchain allowed us to create an experience that truly captivated our audience.",
      author: "Mr. Alex Thorne, Head of Digital Innovation, CineVerse Studios",
    },
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
          {cases.map((c, i) => (
            <article
              key={c.tag}
              onClick={() => setOpenIndex(i)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-card hairline transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_oklch(0.22_0.05_265_/_0.3)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.tag} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-gold">{c.tag}</div>
                <h3 className="mt-2 text-lg leading-snug" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>{c.title}</h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
                >
                  Read case <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(v) => !v && setOpenIndex(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {openIndex !== null && (
            <>
              <DialogHeader>
                <div className="text-xs uppercase tracking-wider text-gold">{cases[openIndex].tag}</div>
                <DialogTitle className="font-display text-2xl leading-snug">{cases[openIndex].title}</DialogTitle>
                <DialogDescription>{cases[openIndex].client}</DialogDescription>
              </DialogHeader>
              <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
                <div>
                  <h4 className="font-medium text-foreground mb-1.5">Challenge</h4>
                  <p>{cases[openIndex].challenge}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1.5">Solution</h4>
                  <p>{cases[openIndex].solution}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1.5">Impact & Results</h4>
                  <p>{cases[openIndex].impact}</p>
                </div>
                <blockquote className="border-l-2 border-gold pl-4 italic text-foreground/80">
                  "{cases[openIndex].quote}"
                  <footer className="mt-2 not-italic text-xs text-muted-foreground">— {cases[openIndex].author}</footer>
                </blockquote>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      price: "₹10,000", tier: "Starter",
      pros: ["Very low upfront cost", "Quick turnaround (days–week)", "Off-the-shelf platforms (WordPress, Shopify Basic)"],
      cons: ["Very limited customization", "Minimal feature set", "No formal support or SLAs"],
      best: "Solo entrepreneurs, micro-businesses.",
    },
    {
      price: "₹1,00,000", tier: "Growth", featured: true,
      pros: ["Semi-custom branding & UX refinement", "Up to ~500 SKUs and bulk upload", "Integrated payments & shipping", "SEO, analytics, CMS training", "1–3 months post-launch support"],
      cons: ["Template-based core", "Enhancements beyond scope quoted separately"],
      best: "Mid-market brands ready to scale.",
    },
    {
      price: "₹10,00,000", tier: "Enterprise",
      pros: ["Fully bespoke UX/UI (wireframes → final)", "Unlimited products, marketplace/ERP sync", "Enterprise performance & security audits", "Deep SEO/CRO, PWA / companion app", "Dedicated PM, SLA support, roadmap"],
      cons: ["Higher initial investment", "Longer development cycle (months)"],
      best: "Large enterprises with complex needs.",
    },
  ];
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Pricing</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">Choosing the right <span className="italic text-gradient-gold">e-commerce package</span>.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Investing in an e-commerce website is a critical decision that impacts your brand's online presence, customer experience, and long-term growth. Below we outline what to expect at each tier.
          </p>
        </div>
        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div key={t.tier} className={`relative rounded-3xl p-8 flex flex-col ${t.featured ? "bg-[oklch(0.15_0.03_260)] text-white shadow-2xl lg:-mt-6" : "bg-card hairline"}`}>
              {t.featured && <div className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-xs font-medium text-[oklch(0.15_0.03_260)]">Most popular</div>}
              <div className={`text-xs uppercase tracking-[0.2em] ${t.featured ? "text-white/60" : "text-muted-foreground"}`}>{t.tier}</div>
              <div className="mt-3 font-display text-5xl">{t.price}</div>
              <div className="mt-6 space-y-2.5">
                {t.pros.map((p) => (
                  <div key={p} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${t.featured ? "text-gold" : "text-primary"}`} />
                    <span className={t.featured ? "text-white/90" : ""}>{p}</span>
                  </div>
                ))}
              </div>
              <div className={`mt-6 pt-6 border-t ${t.featured ? "border-white/10" : "border-border"}`}>
                <div className={`text-xs uppercase tracking-wider mb-3 ${t.featured ? "text-white/50" : "text-muted-foreground"}`}>Trade-offs</div>
                <ul className={`space-y-1.5 text-sm ${t.featured ? "text-white/70" : "text-muted-foreground"}`}>
                  {t.cons.map((c) => <li key={c}>— {c}</li>)}
                </ul>
              </div>
              <div className={`mt-6 text-sm ${t.featured ? "text-white/80" : "text-foreground"}`}>
                <span className={`font-medium ${t.featured ? "text-gold" : "text-primary"}`}>Best for:</span> {t.best}
              </div>
              <a href="#contact" className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${t.featured ? "bg-gold text-[oklch(0.15_0.03_260)] hover:bg-[oklch(0.78_0.13_75)]" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}>
                Get started <ArrowRight className="h-4 w-4" />
              </a>
            </div>
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
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  return (
    <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur p-8 flex flex-col items-center justify-center min-h-[440px] overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.13 75 / 0.35), transparent 70%)" }}
        animate={{ opacity: awake ? 1 : 0, scale: awake ? 1 : 0.6 }}
        transition={{ duration: 0.6 }}
      />

      <AnimatePresence mode="wait">
        {!awake ? (
          <motion.button
            key="lamp"
            type="button"
            onClick={() => setAwake(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 flex flex-col items-center gap-4 group"
            aria-label="Wake up the lamp to start a conversation"
          >
            <svg width="140" height="160" viewBox="0 0 140 160" fill="none">
              <path d="M35 60 L105 60 L120 20 L20 20 Z" fill="oklch(0.72 0.13 75 / 0.15)" stroke="oklch(0.72 0.13 75)" strokeWidth="2" />
              <path d="M55 42 q6 6 12 0" stroke="oklch(0.98 0.005 90)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M78 42 q6 6 12 0" stroke="oklch(0.98 0.005 90)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <line x1="70" y1="60" x2="70" y2="130" stroke="oklch(0.5 0.02 260)" strokeWidth="3" />
              <ellipse cx="70" cy="135" rx="24" ry="6" fill="oklch(0.3 0.03 260)" />
            </svg>
            <span className="text-sm text-white/60 group-hover:text-white transition-colors">Click to wake me up</span>
          </motion.button>
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
              <button type="submit" className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-[oklch(0.15_0.03_260)] hover:bg-[oklch(0.78_0.13_75)] transition">
                {sent ? "Thank you — we'll be in touch" : "Send inquiry"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
    <Pricing key="pricing" />,
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