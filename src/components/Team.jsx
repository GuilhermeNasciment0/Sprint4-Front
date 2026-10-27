import SectionHeader from './SectionHeader'

const team = [
  ['DEV-01', 'Eduardo Menzel', 'Web Development', 'Responsável pela migração da Landing Page para React.'],
  ['DEV-02', 'Guilherme de Sousa Caiano', 'Computational Thinking with Python', 'Responsável pelo desenvolvimento da solução em Python.'],
  ['DEV-03', 'Guilherme Nascimento dos Santos', 'Front-end Design', 'Responsável pelo desenvolvimento da Landing Page da solução.'],
  ['DEV-04', 'Luís Carlos', 'Software e Total Experience Design', 'Responsável pela documentação estruturada do projeto de software.'],
  ['DEV-05', 'Victor da Silva Souto', 'Storytelling e Inspiração Empreendedora', 'Responsável pelo documento detalhando os 10 tópicos do Story Canvas.'],
]

export default function Team() {
  return (
    <section
      id="equipe"
      className="relative border-y border-hud bg-surface bg-[image:radial-gradient(var(--color-hud)_1px,transparent_1px)] bg-size-[24px_24px] py-25"
      aria-labelledby="titulo-equipe"
    >
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <SectionHeader
          index="[ 04. EQUIPE ]"
          id="titulo-equipe"
          title="Desenvolvedores do Projeto"
          description="Conheça nossa equipe."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {team.map(([code, name, role, description]) => (
            <article
              key={name}
              className="grid grid-cols-[70px_1fr] items-start gap-4.5 rounded-md border border-hud bg-elevated p-6 transition-all duration-250 ease-hud hover:border-optics-border hover:bg-[rgba(21,26,36,0.95)]"
            >
              <div className="relative flex size-17.5 items-center justify-center overflow-hidden rounded-sm border border-optics-border bg-[#1a2233]">
                <div className="absolute top-0 h-0.5 w-full animate-scan bg-optics opacity-50" />
                <span className="font-mono text-[0.65rem] text-optics">{code}</span>
              </div>
              <div>
                <h3 className="text-[1.1rem] font-bold text-fg">{name}</h3>
                <span className="mb-2 block font-mono text-xs text-cyan-hud">{role}</span>
                <p className="text-[0.82rem] leading-[1.4] text-muted">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}