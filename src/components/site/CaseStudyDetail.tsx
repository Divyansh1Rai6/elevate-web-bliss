import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Quote } from "lucide-react";

export function CaseStudyDetail({
  tag,
  title,
  client,
  img,
  challenge,
  solution,
  impact,
  quote,
  author,
}: {
  tag: string;
  title: string;
  client: string;
  img: string;
  challenge: string;
  solution: string;
  impact: string;
  quote: string;
  author: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[oklch(0.15_0.03_260)] text-white">
          <div aria-hidden className="absolute inset-0 opacity-60"
            style={{ background: "radial-gradient(60% 60% at 80% 20%, oklch(0.35 0.09 265 / 0.5), transparent 60%), radial-gradient(50% 50% at 10% 80%, oklch(0.72 0.13 75 / 0.15), transparent 60%)" }} />
          <div className="container-page relative max-w-3xl">
            <div className="text-xs uppercase tracking-wider text-gold">{tag}</div>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">{title}</h1>
            <p className="mt-4 text-white/60">{client}</p>
          </div>
        </section>

        <section className="pb-16">
          <div className="container-page max-w-3xl -mt-10">
            <div className="rounded-3xl overflow-hidden border border-border shadow-xl">
              <img src={img} alt={tag} className="w-full h-auto object-cover aspect-[16/9]" />
            </div>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="container-page max-w-3xl space-y-10">
            <div>
              <h2 className="font-display text-2xl mb-3">Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl mb-3">Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{solution}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl mb-3">Impact & Results</h2>
              <p className="text-muted-foreground leading-relaxed">{impact}</p>
            </div>
            <blockquote className="relative rounded-2xl bg-cream/50 border-l-4 border-gold p-7">
              <Quote className="h-6 w-6 text-gold mb-3" />
              <p className="italic text-foreground/90 leading-relaxed">"{quote}"</p>
              <footer className="mt-4 text-sm text-muted-foreground">— {author}</footer>
            </blockquote>
          </div>
        </section>

        <section className="pb-20 lg:pb-24">
          <div className="container-page">
            <div className="rounded-3xl bg-[oklch(0.15_0.03_260)] text-white p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl">Have a similar challenge?</h3>
                <p className="mt-2 text-white/70 text-sm max-w-md">Let's talk about what we can build for you.</p>
              </div>
              <a href="/#contact" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-[oklch(0.15_0.03_260)] hover:bg-[oklch(0.78_0.13_75)] transition">
                Start a project <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
