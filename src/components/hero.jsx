function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-between pt-20">
      {/* Logo completo: portafolio + firma — rompe el max-w-6xl para usar viewport completo */}
      <div className="flex-1 flex items-center justify-center min-h-0">
        <img
          src="/assets/logo_port_firm.png"
          alt="Portafolio · Rafael Lopez Valencia"
          className="w-[90vw] max-w-none max-h-full object-contain"
        />
      </div>

      {/* Bottom bar — siempre visible */}
      <div className="section-divider flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-4 sm:py-5 shrink-0">
        <span className="font-polymath-text text-xs sm:text-sm text-light-muted dark:text-dark-muted">
          Desarrollador Full Stack · Especialista en ERP
        </span>
        <span className="font-polymath-text text-xs sm:text-sm text-light-muted dark:text-dark-muted break-all">
          rafaelvalencia1302@gmail.com
        </span>
      </div>
    </section>
  )
}

export default Hero
