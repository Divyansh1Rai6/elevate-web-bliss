export function Footer() {
  const companyLinks = [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Technology", href: "/#technology" },
    { label: "Case Studies", href: "/#cases" },
    { label: "Careers", href: "/careers" },
  ];
  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];
  return (
    <footer className="bg-[oklch(0.12_0.025_260)] text-white/70 border-t border-white/5">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gold text-[oklch(0.15_0.03_260)] font-display">N</span>
            <span className="font-display text-xl text-white">Nextgen Entrade</span>
          </div>
          <p className="mt-4 text-sm max-w-sm leading-relaxed">Empowering Global Digital Tomorrow From India. Founded 2017 · Ahmedabad · 350+ engineers worldwide.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-white/50">Company</div>
          <ul className="mt-4 space-y-2 text-sm">
            {companyLinks.map((x) => (
              <li key={x.label}><a href={x.href} className="hover:text-white transition">{x.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-white/50">Get in touch</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>hello@nextgenentrade.com</li>
            <li>+91 79 4000 0000</li>
            <li>Ahmedabad, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-page py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
          <div>© 2026 Nextgen Entrade. All rights reserved.</div>
          <div className="flex items-center gap-4">
            {legalLinks.map((x) => (
              <a key={x.label} href={x.href} className="hover:text-white/70 transition">{x.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
