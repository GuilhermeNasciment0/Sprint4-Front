const links = [
  ['01', 'Solução', '#solucao'],
  ['02', 'Público-Alvo', '#publico-alvo'],
  ['03', 'Galeria', '#galeria'],
  ['04', 'Equipe', '#equipe'],
]

export default function Header() {
  return (
    <header className="sticky top-0 z-100 border-b border-hud bg-ink/85 backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-3.5 p-3 md:flex-row md:justify-between md:px-6 md:py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 rounded-sm border border-optics bg-optics/10 px-2 py-1 font-mono text-[0.7rem] text-optics">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-optics shadow-[0_0_8px_var(--color-optics)]" />
            EM BETA
          </div>
          <a href="#inicio" className="font-mono text-[1.25rem] font-extrabold tracking-[1px] text-fg no-underline">
            <span className="text-optics">Jovi</span>Study
          </a>
        </div>
        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap items-center justify-center gap-3 md:flex-nowrap md:gap-7">
            {links.map(([number, label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex items-center gap-1.5 text-[0.9rem] font-semibold text-muted transition-all duration-250 ease-hud hover:text-fg"
                >
                  <span className="font-mono text-xs text-cyan-hud">{number}</span> {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                className="rounded-sm border border-optics px-4.5 py-2 font-mono text-[0.8rem] font-semibold text-optics transition-all duration-250 ease-hud hover:bg-optics hover:text-ink hover:shadow-[0_0_15px_var(--color-optics-glow)]"
              >
                Contate-nos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
