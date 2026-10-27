import SectionHeader from './SectionHeader'

const groups = [
  ['01', 'Estudantes Full-Time', 'Que desejam otimizar o tempo e a praticidade.', ['Idade entre 19 e 26 anos', 'Conciliam estudo, interações sociais e ambição', 'Sempre em movimento, buscando progresso e estabilidade']],
  ['02', 'Principais Benefícios', 'Qual o impacto real da solução?', ['Digitalização rápida e prática', 'Resumos automáticos prontos para leitura', 'Direcionamento de estudos com base no conteúdo atual', 'Maior disposição para aprender']],
  ['03', 'Funcionalidades', 'Confira algumas possibilidades da nossa solução:', ['Status de revisão e checklist geral', 'Criação de grupos de estudo (pastas)', 'Trilhas de estudo personalizadas feitas pela IA', 'Correção ortográfica do conteúdo digitalizado']],
]

export default function Audience() {
  return (
    <section
      id="publico-alvo"
      className="relative border-y border-hud bg-surface bg-[image:radial-gradient(var(--color-hud)_1px,transparent_1px)] bg-size-[24px_24px] py-25"
      aria-labelledby="titulo-publico"
    >
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <SectionHeader
          index="[ 02. PÚBLICO-ALVO ]"
          id="titulo-publico"
          title="Público-Alvo & Proposta de Valor"
          description="Quem é o foco da nossa proposta e como se beneficiam."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map(([number, title, description, items]) => (
            <article
              key={title}
              className="relative rounded-md border border-hud bg-elevated px-7 py-9 transition-all duration-250 ease-hud hover:-translate-y-1 hover:border-cyan-hud"
            >
              <div className="mb-4 font-mono text-[1.8rem] leading-none font-bold text-dim">{number}</div>
              <h3 className="mb-3 text-[1.2rem] font-bold text-fg">{title}</h3>
              <p className="mb-5 text-[0.92rem] text-muted">{description}</p>
              <ul className="border-t border-hud pt-4">
                {items.map((item) => (
                  <li
                    key={item}
                    className="mb-2 flex items-center gap-2 text-[0.85rem] text-fg before:text-optics before:content-['▸']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}