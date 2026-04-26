import { useFadeIn, useWipeReveal } from '../hooks/useFadeIn'

const experience = [
  {
    period: '2024 — Presente',
    company: 'Birtum',
    role: 'Consultor Técnico Junior',
    desc: 'Desarrollo de módulos Odoo custom, integraciones con el SAT, migraciones de versión y sistemas a medida para clientes en manufactura, eCommerce y finanzas.',
  },
  {
    period: '2023 — 2024',
    company: 'Club Alpha',
    role: 'Programador Backend · Prácticas',
    desc: 'Desarrollo de módulo en ERP Odoo para administración de clases deportivas, sistema de inscripciones, consultas SQL optimizadas en PostgreSQL y dashboard interactivo de ocupación de casilleros (JS / XML / SCSS).',
  },
]

const odooModules = ['Inventario', 'Manufactura', 'Facturación', 'eCommerce', 'RRHH', 'Contabilidad', 'Compras', 'Ventas']
const odooVersions = ['Odoo 16', 'Odoo 17', 'Odoo 18', 'Odoo 19']

const challenges = [
  {
    title: 'Módulo de fabricación con variantes',
    desc: 'Customización del módulo de manufactura para soportar variantes de producto en órdenes de producción, con etapas diferenciadas por tipo de variante y flujos de aprobación independientes.',
    tags: ['Manufactura', 'Variantes', 'Python'],
  },
  {
    title: 'Integración WhatsApp → Odoo CRM',
    desc: 'Conexión de WhatsApp Business con el CRM de Odoo para automatizar la captura de leads, asignación de responsables y seguimiento de conversaciones directamente desde el pipeline.',
    tags: ['CRM', 'API', 'Automatización'],
  },
  {
    title: 'Migración de módulos entre versiones',
    desc: 'Migración completa de módulos custom entre versiones mayores de Odoo. Adaptación de APIs depreciadas, cambios en el ORM y compatibilidad con nuevas estructuras de datos.',
    tags: ['Migración', 'ORM', 'Versiones'],
  },
  {
    title: 'Localización MX — Timbrado CFDI',
    desc: 'Correcciones y extensiones en la localización mexicana para timbrado correcto de facturas y complementos de pago, incluyendo casos especiales no contemplados en el módulo nativo.',
    tags: ['CFDI', 'SAT', 'Localización MX'],
  },
  {
    title: 'Integración con MONEX',
    desc: 'Conexión de Odoo con la plataforma MONEX para automatizar la gestión de pagos y transferencias bancarias directamente desde el módulo de contabilidad.',
    tags: ['Contabilidad', 'Banca', 'API'],
  },
  {
    title: 'Gestión de backorders',
    desc: 'Desarrollo de lógica custom para manejo de backorders en ventas y compras, con notificaciones automáticas, reagrupación de líneas pendientes y control de entregas parciales.',
    tags: ['Ventas', 'Compras', 'Inventario'],
  },
  {
    title: 'Reportes personalizados',
    desc: 'Diseño y desarrollo de reportes QWeb a medida — facturas, picking, kardex, balance de prueba — adaptados a las necesidades visuales y fiscales de cada cliente.',
    tags: ['QWeb', 'XML', 'Reportes'],
  },
  {
    title: 'Portal de vacaciones',
    desc: 'Módulo de gestión de solicitudes de vacaciones con portal para empleados, flujo de aprobación por niveles y cálculo automático de días disponibles según políticas de la empresa.',
    tags: ['RRHH', 'Portal', 'Workflows'],
  },
]

function ChallengeCard({ challenge, index }) {
  const ref = useFadeIn()

  return (
    <div
      ref={ref}
      className="fade-up rounded-2xl border border-light-border dark:border-dark-border p-7 hover:border-accent/40 transition-all duration-300 relative overflow-hidden group"
      style={{
        transitionDelay: `${index * 0.06}s`,
        background: 'linear-gradient(145deg, rgba(4,163,110,0.04) 0%, transparent 60%)',
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to right, #04a36e, transparent)' }}
      />

      <div className="flex items-start justify-between mb-4 gap-4">
        <h4
          className="font-polymath font-bold text-light-text dark:text-dark-text group-hover:text-accent transition-colors leading-tight"
          style={{ fontSize: 'clamp(14px, 1.3vw, 17px)' }}
        >
          {challenge.title}
        </h4>
      </div>

      <p className="font-polymath-text text-sm text-light-muted dark:text-dark-muted leading-relaxed mb-5">
        {challenge.desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {challenge.tags.map(t => (
          <span key={t} className="font-polymath-text text-[10px] uppercase tracking-wider text-light-muted dark:text-dark-muted border border-light-border dark:border-dark-border px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function Experience() {
  const timelineRef = useFadeIn()
  const odooRef = useFadeIn()
  const challengesRef = useFadeIn()
  const headerRef = useWipeReveal()

  return (
    <section id="experiencia" className="py-16 md:py-24 section-divider">
      <div className="mb-10 md:mb-16">
        <img ref={headerRef} src="/assets/logo_exp.png" alt="Experiencia" className="h-16 sm:h-20 md:h-32" />
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="fade-up mb-24">
        {experience.map((e, i) => (
          <div key={i} className="section-divider py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 group">
            <div className="md:col-span-2">
              <span className="font-polymath-text text-xs text-light-muted dark:text-dark-muted tracking-wide">
                {e.period}
              </span>
            </div>
            <div className="md:col-span-3">
              <p
                className="font-polymath font-bold group-hover:text-accent transition-colors"
                style={{ fontSize: 'clamp(16px, 1.8vw, 22px)' }}
              >
                {e.company}
              </p>
              <p className="font-polymath-text text-sm text-accent mt-1">{e.role}</p>
            </div>
            <div className="md:col-span-7">
              <p className="font-polymath-text text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                {e.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Odoo specialty */}
      <div ref={odooRef} className="fade-up mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="font-polymath-text text-xs text-accent uppercase tracking-widest mb-3">
              Especialización Odoo
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {odooVersions.map(v => (
              <span key={v} className="font-polymath-text text-sm border border-accent/40 text-accent px-4 py-2 rounded-full">
                {v}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-16">
          {odooModules.map(m => (
            <span
              key={m}
              className="font-polymath-text text-sm text-light-text dark:text-dark-text border border-light-border dark:border-dark-border px-4 py-2 rounded-xl hover:border-accent/40 hover:text-accent transition-colors cursor-default"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Challenge cards */}
      <div ref={challengesRef} className="fade-up">
        <p className="font-polymath-text text-xs text-light-muted dark:text-dark-muted uppercase tracking-widest mb-8">
          Retos técnicos resueltos
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {challenges.map((c, i) => (
            <ChallengeCard key={c.title} challenge={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience