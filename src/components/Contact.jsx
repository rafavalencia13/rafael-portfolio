import { useFadeIn, useWipeReveal } from '../hooks/useFadeIn'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/rafavalencia13' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rafael-lopez-valencia-6a15532b4' },
  { label: 'Instagram', href: 'https://www.instagram.com/rafa.lv.13/' },
  { label: 'DYAD Systems', soon: true },
]

function Contact() {
  const ref = useFadeIn()
  const headerRef = useWipeReveal()

  return (
    <section id="contacto" className="py-16 md:py-24 section-divider">
      <div className="mb-10 md:mb-16">
        <img ref={headerRef} src="/assets/logo_contact.png" alt="Contacto" className="h-16 sm:h-20 md:h-32" />
      </div>

      <div ref={ref} className="fade-up">
        <p
          className="font-polymath font-bold leading-tight mb-12"
          style={{ fontSize: 'clamp(32px, 6vw, 80px)' }}
        >
          ¿Tienes un<span className="text-accent"> proyecto?</span>
        </p>

        <div className="section-divider pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <a
            href="mailto:rafaelvalencia1302@gmail.com"
            className="font-polymath-text text-base sm:text-lg md:text-xl hover:text-accent transition-colors break-all"
          >
            rafaelvalencia1302@gmail.com
          </a>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
            {socialLinks.map(l =>
              l.soon ? (
                <span
                  key={l.label}
                  className="font-polymath-text text-sm text-light-muted dark:text-dark-muted flex items-center gap-2"
                >
                  {l.label}
                  <span className="text-[10px] uppercase tracking-widest text-accent border border-accent/40 px-2 py-0.5 rounded-full">
                    Próximamente
                  </span>
                </span>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-polymath-text text-sm text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors"
                >
                  {l.label} ↗
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
