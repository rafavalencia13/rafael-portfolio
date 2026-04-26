import { useFadeIn, useWipeReveal } from '../hooks/useFadeIn'

const stats = [
  { value: '2+', label: 'Años de experiencia' },
  { value: '10+', label: 'Proyectos entregados' },
  { value: '4', label: 'Versiones de Odoo' },
]

function About() {
  const ref = useFadeIn()
  const headerRef = useWipeReveal()
  const statsRef = useFadeIn({ delay: 0.1 })

  return (
    <section id="sobremi" className="py-16 md:py-24 section-divider">

      {/* Título + subtítulo en dos columnas */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <img
          ref={headerRef}
          src="/assets/logo_acerca_de_mi.png"
          alt="Acerca de mí"
          className="h-28 md:h-36 lg:h-44 object-contain object-left"
        />
        <p className="font-polymath-text text-sm text-light-muted dark:text-dark-muted max-w-xs text-right hidden md:block">
          Desarrollador · Diseñador · Emprendedor
        </p>
      </div>

      {/* Texto en dos columnas */}
      <div ref={ref} className="fade-up grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 md:mb-20">
        <div className="space-y-6">
          <p
            className="font-polymath font-bold text-light-text dark:text-dark-text leading-snug"
            style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
          >
            ¡Encantado de conocerte!
          </p>
          <p
            className="font-polymath-text text-light-muted dark:text-dark-muted leading-relaxed"
            style={{ fontSize: 'clamp(14px, 1.3vw, 17px)' }}
          >
            Soy Ingeniero en Sistemas<br />
            y curso una Maestría en Dirección de Empresas.<br />
            Me interesa el diseño tanto como el código —<br />
            construir cosas que funcionen y que se vean bien.
          </p>
        </div>

        <div className="space-y-6">
          <div className="w-8 h-px bg-accent mt-2 md:mt-10" />
          <p
            className="font-polymath-text text-light-muted dark:text-dark-muted leading-relaxed"
            style={{ fontSize: 'clamp(14px, 1.3vw, 17px)' }}
          >
            Trabajo en Birtum, uno de los<br />
            principales partners de Odoo en México.<br />
            Desarrollo módulos desde cero, customizo<br />
            la plataforma nativa, integro Odoo con<br />
            sistemas externos y construyo soluciones<br />
            a medida para empresas reales.<br />
            Junto a Jonathan Falcón estoy levantando DYAD Systems,<br />
            donde construimos Quantik ERP —<br />
            un sistema moderno para las PyMEs mexicanas.
          </p>

          <div className="pt-2">
            <span className="font-polymath-text text-xs text-light-muted dark:text-dark-muted uppercase tracking-widest">
              Puebla, México
            </span>
          </div>
        </div>
      </div>

      {/* Stats — full width, balance visual + proof point */}
      <div
        ref={statsRef}
        className="fade-up section-divider pt-10 md:pt-14 grid grid-cols-3 gap-6 md:gap-12"
      >
        {stats.map(s => (
          <div key={s.label}>
            <p
              className="font-polymath font-bold text-accent leading-none"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
            >
              {s.value}
            </p>
            <p className="font-polymath-text text-xs text-light-muted dark:text-dark-muted uppercase tracking-widest mt-3 md:mt-4">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
