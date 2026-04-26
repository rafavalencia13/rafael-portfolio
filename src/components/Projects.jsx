import { useFadeIn, useWipeReveal } from '../hooks/useFadeIn'

const projects = [
  {
    number: '01',
    name: 'Quantik ERP',
    description: 'Sistema ERP moderno para PyMEs mexicanas. Construido con Django y Tailwind desde cero.',
    tags: ['Django', 'Tailwind', 'PostgreSQL', 'En desarrollo'],
  },
  {
    number: '02',
    name: 'DYAD Systems',
    description: 'Identidad de marca, línea gráfica y sitio web del estudio de software.',
    tags: ['Branding', 'React', 'Tailwind', '2026'],
  },
  {
    number: '03',
    name: 'Módulos Odoo Custom',
    description: 'Colección de módulos desarrollados para clientes en manufactura, eCommerce y finanzas.',
    tags: ['Odoo', 'Python', 'XML', 'CFDI'],
  },
]

function ProjectRow({ project, index }) {
  const ref = useFadeIn({ delay: index * 0.08, x: -8 })

  return (
    <div
      ref={ref}
      className="fade-up section-divider py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 md:items-center"
    >
      <div className="md:col-span-1">
        <span className="font-polymath-text text-xs text-light-muted dark:text-dark-muted tabular-nums">
          {project.number}
        </span>
      </div>

      <div className="md:col-span-4">
        <h3
          className="font-polymath font-bold"
          style={{ fontSize: 'clamp(18px, 2.5vw, 32px)' }}
        >
          {project.name}
        </h3>
      </div>

      <div className="md:col-span-4">
        <p className="font-polymath-text text-sm text-light-muted dark:text-dark-muted leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="md:col-span-3 flex flex-wrap gap-2">
        {project.tags.map(t => (
          <span key={t} className="text-[10px] font-polymath-text uppercase tracking-wider text-light-muted dark:text-dark-muted border border-light-border dark:border-dark-border px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  const headerRef = useWipeReveal()

  return (
    <section id="proyectos" className="py-16 md:py-24 section-divider">
      <div className="mb-4">
        <img ref={headerRef} src="/assets/logo_proyectos.png" alt="Proyectos" className="h-16 sm:h-20 md:h-32" />
      </div>

      <div>
        {projects.map((p, i) => (
          <ProjectRow key={p.number} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Projects
