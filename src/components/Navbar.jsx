import { useState } from 'react'

const links = [
  { label: 'Sobre mí', href: '#sobremi' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' },
  {
    label: 'Descargar CV',
    href: '/assets/CV-Rafael-Lopez-Valencia-2026.pdf',
    download: true,
  },
]

function NavLink({ link, onClick, className }) {
  const extra = link.download
    ? { download: '', target: '_blank', rel: 'noopener noreferrer' }
    : {}
  return (
    <a href={link.href} onClick={onClick} className={className} {...extra}>
      {link.label}
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-light-bg/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-5 sm:px-6 md:px-8 py-4 md:py-5">
        <span className="font-polymath font-bold text-sm tracking-wide">Portafolio</span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <NavLink
              key={l.label}
              link={l}
              className={
                l.download
                  ? 'font-polymath-text text-sm text-accent hover:text-accent-dark transition-colors'
                  : 'font-polymath-text text-sm text-light-muted hover:text-light-text transition-colors'
              }
            />
          ))}
        </div>

        <span className="hidden md:block font-polymath font-bold text-sm tracking-wide">
          Rafael Lopez Valencia
        </span>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
          className="md:hidden p-1"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-5 pb-6 flex flex-col gap-4 border-t border-light-border pt-4">
          {links.map(l => (
            <NavLink
              key={l.label}
              link={l}
              onClick={() => setOpen(false)}
              className={
                l.download
                  ? 'font-polymath-text text-base text-accent hover:text-accent-dark transition-colors'
                  : 'font-polymath-text text-base text-light-muted hover:text-accent transition-colors'
              }
            />
          ))}
          <span className="font-polymath font-bold text-xs tracking-wide pt-2 text-light-muted">
            Rafael Lopez Valencia
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
