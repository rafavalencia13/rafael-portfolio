import { useFadeIn, useWipeReveal } from '../hooks/useFadeIn'

const icons = {
  python: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path d="M12 2c-1.7 0-3.2.1-4.4.4C5.4 2.9 4 4 4 5.8v2.7h8v1H4.7C2.7 9.5 1 11.2 1 14c0 2.8 1.3 4.3 3.7 4.5h2.1v-2.7c0-2.1 1.8-4 4-4h5.4c1.8 0 3.3-1.5 3.3-3.3V5.8c0-1.8-1.5-3.2-3.3-3.5C15 2.1 13.5 2 12 2zm-3 2.2a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" fill="currentColor" opacity="0.7"/>
      <path d="M12 22c1.7 0 3.2-.1 4.4-.4 2.2-.5 3.6-1.6 3.6-3.4v-2.7h-8v-1h7.3c2-.1 3.7-1.7 3.7-4.5 0-2.8-1.3-4.3-3.7-4.5h-2.1v2.7c0 2.1-1.8 4-4 4H7.8c-1.8 0-3.3 1.5-3.3 3.3v2.7c0 1.8 1.5 3.2 3.3 3.5 1.2.2 2.7.3 4.2.3zm3-2.2a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2z" fill="currentColor"/>
    </svg>
  ),
  django: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path d="M7 2h4v14.3c-2 .4-3.5.5-5.1.5C2.5 16.8 1 15.3 1 12.5c0-2.7 1.6-4.4 4.2-4.4.6 0 1.1.1 1.8.3V2zm0 8.2c-.5-.2-.9-.2-1.4-.2-1.5 0-2.4 1-2.4 2.5 0 1.6.8 2.5 2.3 2.5.5 0 .9 0 1.5-.1V10.2zM13 2h4v4h-4V2zm0 5.5h4V17l-.1.8c-.3 1.5-1 2.5-2.2 3.2-.9.5-2 .9-3 1.1l-1.2-2c.9-.2 1.6-.5 2.1-.9.6-.4.8-1 .9-1.7l-.1.1-.4-.1V7.5z" fill="currentColor"/>
    </svg>
  ),
  odoo: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="4" fill="currentColor"/>
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path d="M17.1 3.3C15.8 2.4 14 2 12 2 10 2 8.2 2.5 6.9 3.3 5.5 4.2 4.5 5.6 4.5 7.5c0 2.4.4 4.3 1 5.8.6 1.4 1.4 2.5 2.3 3.2.5.4 1 .6 1.5.6.3 0 .5-.1.7-.2l.3-.3c.5.6 1.1.9 1.7.9s1.2-.3 1.7-.9l.3.3c.2.1.4.2.7.2.5 0 1-.2 1.5-.6.9-.7 1.7-1.8 2.3-3.2.6-1.5 1-3.4 1-5.8 0-1.9-1-3.3-2.4-4.2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M9 9.5a1 1 0 102 0 1 1 0 00-2 0zM13 9.5a1 1 0 102 0 1 1 0 00-2 0z" fill="currentColor"/>
      <path d="M10 13c.5.5 1.2.8 2 .8s1.5-.3 2-.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  rest: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path d="M4 8h16M4 16h16M8 4v16M16 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M12 9v-5M12 15v5M9 12H4M15 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  htmx: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path d="M4 6l5 6-5 6M20 6l-5 6 5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 5l-4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path d="M9 3h3v6H9a3 3 0 010-6z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      <path d="M12 3h3a3 3 0 010 6h-3V3z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      <path d="M9 9h3v6H9a3 3 0 010-6z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      <circle cx="15" cy="12" r="3" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      <path d="M9 15h3v3a3 3 0 11-3-3z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" opacity="0.15"/>
      <path d="M13.3 17.7c.4.7 1 1.2 2 1.2.8 0 1.4-.4 1.4-1 0-.7-.5-1-1.5-1.4l-.5-.2c-1.5-.6-2.4-1.4-2.4-3 0-1.5 1.1-2.6 2.9-2.6 1.3 0 2.2.4 2.8 1.6l-1.5 1c-.3-.6-.7-.9-1.3-.9-.6 0-1 .4-1 .9 0 .6.4.9 1.3 1.2l.5.2c1.7.7 2.7 1.5 2.7 3.1 0 1.8-1.4 2.8-3.3 2.8-1.8 0-3-.9-3.6-2l1.5-.9zM7 17.9c.3.5.6 1 1.3 1 .7 0 1.1-.3 1.1-1.3v-7h1.9v7c0 2.2-1.3 3.1-3.1 3.1-1.7 0-2.6-.9-3.1-1.9L7 17.9z" fill="currentColor"/>
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path d="M12 6c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.7.2 1.3.8 1.8 1.3.9.9 1.9 2 4.2 2 2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.7-.2-1.3-.8-1.8-1.3C15.3 7 14.3 6 12 6zM7 12c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.7.2 1.3.8 1.8 1.3.9.9 1.9 2 4.2 2 2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.7-.2-1.3-.8-1.8-1.3C10.3 13 9.3 12 7 12z" fill="currentColor"/>
    </svg>
  ),
  html: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path d="M4 2l1.5 17L12 21l6.5-2L20 2H4z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 5v13.5l-4.5-1.3L6.5 5H12z" fill="currentColor" opacity="0.15"/>
      <path d="M8 8h8l-.3 3H9.5l.2 2h5.5l-.4 4.5L12 18.5l-2.8-1L9 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  photoshop: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity="0.15"/>
      <path d="M7 16V8h2.8c1.7 0 2.7 1 2.7 2.4 0 1.5-1 2.5-2.7 2.5H8.5V16H7zm1.5-4.5h1.2c.8 0 1.3-.5 1.3-1.1 0-.7-.5-1.1-1.3-1.1H8.5v2.2z" fill="currentColor"/>
      <path d="M14 14.3c.4.3 1 .6 1.7.6.7 0 1-.3 1-.7 0-.5-.5-.6-1.2-.9-.9-.3-1.9-.7-1.9-1.9 0-1.2 1-2 2.3-2 .8 0 1.5.2 2 .6l-.7 1.1c-.3-.2-.8-.4-1.3-.4-.6 0-.9.2-.9.6 0 .4.5.6 1.2.8 1 .3 1.9.8 1.9 2 0 1.2-.9 2-2.4 2-.9 0-1.7-.3-2.3-.7l.6-1.1z" fill="currentColor"/>
    </svg>
  ),
  illustrator: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity="0.15"/>
      <path d="M10 16l-.8-2.5H6.3L5.5 16H4l3-8.5h1.8L12 16h-2zm-1.3-4L7.5 8.5 6.3 12h2.4z" fill="currentColor"/>
      <path d="M14 10.5V16h-1.5V10.5H14zM13.3 7.5a.9.9 0 110 1.8.9.9 0 010-1.8z" fill="currentColor"/>
    </svg>
  ),
  adobefonts: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity="0.15"/>
      <path d="M7 16V8h4.5c.8 0 1.5.2 2 .7.5.4.7 1 .7 1.7 0 .6-.2 1.1-.5 1.5-.2.2-.4.4-.7.5.4.1.8.4 1 .7.3.4.4.9.4 1.4 0 .8-.3 1.4-.8 1.9-.5.4-1.3.6-2.2.6H7zm1.8-4.7h2.3c.5 0 .8-.1 1-.4.3-.2.4-.5.4-.9 0-.4-.1-.7-.4-.9-.2-.2-.6-.3-1-.3H8.8v2.5zm0 3.2h2.5c.5 0 .9-.1 1.1-.4.3-.2.4-.6.4-1s-.1-.7-.4-1c-.3-.2-.6-.3-1.1-.3H8.8v2.7z" fill="currentColor"/>
    </svg>
  ),
  uiux: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M3 8h18" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
      <rect x="5" y="10" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M13 11h6M13 13.5h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      <path d="M8 20l4-3 4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path d="M21.6 11.2L12.8 2.4a1.4 1.4 0 00-2 0l-1.8 1.8 2.3 2.3a1.7 1.7 0 012.1 2.2l2.2 2.2a1.7 1.7 0 011.8 2.9 1.7 1.7 0 01-2.8-1.9l-2-2.1V14a1.7 1.7 0 01.5 2.8 1.7 1.7 0 01-2.4-2.4c.2-.2.4-.3.6-.4V9.8c-.2-.1-.4-.2-.6-.4a1.7 1.7 0 01-.2-2.2L8.3 5l-5.9 6a1.4 1.4 0 000 2l8.8 8.8a1.4 1.4 0 002 0l8.5-8.5a1.4 1.4 0 000-2z" fill="currentColor"/>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path d="M13 4h2v2h-2V4zM10 4h2v2h-2V4zM7 4h2v2H7V4zM4 6h2v2H4V6zM7 6h2v2H7V6zM10 6h2v2h-2V6zM13 6h2v2h-2V6zM16 6h2v2h-2V6zM10 8h2v2h-2V8z" fill="currentColor"/>
      <path d="M22.3 9.7c-.4-.3-1.3-.4-2-.2-.1-1-.7-1.8-1.6-2.5l-.5-.4-.4.5c-.5.7-.7 1.7-.6 2.5.1.6.3 1.1.6 1.5-.5.3-1.1.5-1.6.6-.7.2-1.4.2-2.1.2H1l-.1.6c-.1 1.5.1 3 .8 4.4.8 1.5 2 2.5 3.6 3 1.8.6 3.8.7 5.7.4 1.5-.2 2.9-.7 4.1-1.5 1-.6 1.9-1.5 2.6-2.5.9-1.4 1.5-3 1.8-4.7h.5c1 0 1.6-.3 2-.6.2-.2.4-.5.5-.8l.1-.4-.3-.2z" fill="currentColor"/>
    </svg>
  ),
  linux: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path d="M12 2C9.8 2 8.5 4.2 8.5 7c0 1.5.3 3 .8 4.2-.8.6-2 1.5-2.8 2.6C5.5 15.2 5 17 6 18.2c.5.6 1.2.8 2 .8 1 0 1.8-.3 2.5-.6.5.2 1 .3 1.5.3s1-.1 1.5-.3c.7.3 1.5.6 2.5.6.8 0 1.5-.2 2-.8 1-1.2.5-3-.5-4.4-.8-1.1-2-2-2.8-2.6.5-1.2.8-2.7.8-4.2 0-2.8-1.3-5-3.5-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="10" cy="7" r="0.8" fill="currentColor"/>
      <circle cx="14" cy="7" r="0.8" fill="currentColor"/>
      <path d="M10.5 10c.4.4 1 .6 1.5.6s1.1-.2 1.5-.6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  vscode: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path d="M17 2l4 1.5v17L17 22l-9.7-7.7L3.5 17.5 1 16V8l2.5-1.5 3.8 3.2L17 2z" fill="currentColor" opacity="0.7"/>
      <path d="M17 2v20l4-1.5v-17L17 2z" fill="currentColor"/>
      <path d="M17 2L7.3 9.7 3.5 6.5 1 8v8l2.5 1.5 3.8-3.2L17 22" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
  cfdi: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path d="M6 2h8l4 4v14a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M14 2v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M8 13h8M8 16h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      <path d="M9 9l1.5 2L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  modules: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="2 2"/>
      <path d="M16 17h3M17.5 15.5v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  migrations: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <path d="M4 12a8 8 0 0114-5.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M20 12a8 8 0 01-14 5.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M18 4v4h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M6 20v-4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  mexico: (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <rect x="2" y="5" width="20" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M2 12h20" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <path d="M9.3 5v14M14.7 5v14" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M11 12h2M12 11v2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
    </svg>
  ),
}

const stackData = [
  {
    category: 'Backend',
    items: [
      { name: 'Python', icon: icons.python },
      { name: 'Django', icon: icons.django },
      { name: 'Odoo', icon: icons.odoo },
      { name: 'PostgreSQL', icon: icons.postgresql },
      { name: 'REST / SOAP', icon: icons.rest },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: icons.react },
      { name: 'JavaScript', icon: icons.javascript },
      { name: 'Tailwind CSS', icon: icons.tailwind },
      { name: 'HTMX', icon: icons.htmx },
      { name: 'HTML / CSS', icon: icons.html },
    ],
  },
  {
    category: 'Diseño',
    items: [
      { name: 'Photoshop', icon: icons.photoshop },
      { name: 'Illustrator', icon: icons.illustrator },
      { name: 'Figma', icon: icons.figma },
      { name: 'Adobe Fonts', icon: icons.adobefonts },
      { name: 'UI / UX', icon: icons.uiux },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', icon: icons.git },
      { name: 'Docker', icon: icons.docker },
      { name: 'Linux', icon: icons.linux },
      { name: 'VS Code', icon: icons.vscode },
    ],
  },
  {
    category: 'Especialidad ERP',
    items: [
      { name: 'CFDI / SAT', icon: icons.cfdi },
      { name: 'Módulos custom', icon: icons.modules },
      { name: 'Migraciones', icon: icons.migrations },
      { name: 'Localizaciones MX', icon: icons.mexico },
    ],
  },
]

function StackCard({ category, items, index }) {
  const ref = useFadeIn({ delay: index * 0.07 })

  return (
    <div
      ref={ref}
      className="fade-up rounded-2xl border border-light-border dark:border-dark-border p-6 hover:border-accent/40 transition-colors duration-300 relative overflow-hidden group"
      style={{
        background: 'linear-gradient(145deg, rgba(4,163,110,0.04) 0%, transparent 50%)',
      }}
    >
      {/* Hover glow corner */}
      <div
        className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(4,163,110,0.18), transparent 70%)' }}
      />
      {/* Top border accent on hover */}
      <div
        className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to right, #04a36e, transparent)' }}
      />

      <h3
        className="font-polymath font-bold text-accent uppercase tracking-widest mb-5"
        style={{ fontSize: '10px' }}
      >
        {category}
      </h3>

      <ul className="space-y-3">
        {items.map(item => (
          <li key={item.name} className="flex items-center gap-3">
            <span className="flex-shrink-0" style={{ color: '#04a36e' }}>{item.icon}</span>
            <span
              className="font-polymath-text text-light-text dark:text-dark-text"
              style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}
            >
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Stack() {
  const headerRef = useWipeReveal()

  return (
    <section id="stack" className="py-16 md:py-24 section-divider">
      <div className="mb-10 md:mb-16">
        <img ref={headerRef} src="/assets/logo_stack.png" alt="Stack" className="h-16 sm:h-20 md:h-32" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4">
        {stackData.map((col, i) => (
          <StackCard key={col.category} {...col} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Stack