import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ServiceDetail({
  eyebrow,
  title,
  intro,
  img,
  deliverables,
  approach,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  img: string;
  deliverables: string[];
  approach: { step: string; body: string }[];
}) {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24 bg-[oklch(0.15_0.03_260)] text-white">
          <div aria-hidden className="absolute inset-0 opacity-60"
            style={{ background: "radial-gradient(60% 60% at 80% 20%, oklch(0.35 0.09 265 / 0.5), transparent 60%), radial-gradient(50% 50% at 10% 80%, oklch(0.72 0.13 75 / 0.15), transparent 60%)" }} />
          <div className="container-page relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">{eyebrow}</div>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">{title}</h1>
              <p className="mt-6 max-w-xl text-white/70 leading-relaxed">{intro}</p>
              <a href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[oklch(0.72_0.13_75)] px-5 py-3 text-sm font-medium text-[oklch(0.15_0.03_260)] hover:bg-[oklch(0.78_0.13_75)] transition">
                Start a project <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={img} alt={title} className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="container-page">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">What's included</div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl leading-[1.05]">
                Everything you need, <span className="italic text-gradient-gold">nothing you don't</span>.
              </h2>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {deliverables.map((d) => (
                <div key={d} className="flex items-start gap-3 rounded-2xl hairline p-5 bg-card">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/90">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-cream/50">
          <div className="container-page">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our Approach</div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl leading-[1.05]">
                How we <span className="italic text-gradient-gold">get it done</span>.
              </h2>
            </div>
            <div className="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-6">
              {approach.map((a, i) => (
                <div key={a.step} className="relative pl-14 py-2">
                  <div className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base font-medium" style={{ fontFamily: "var(--font-sans)" }}>{a.step}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container-page">
            <div className="rounded-3xl bg-[oklch(0.15_0.03_260)] text-white p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl">Ready to get started?</h3>
                <p className="mt-2 text-white/70 text-sm max-w-md">Tell us about your project — a senior engineer will respond within one business day.</p>
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
