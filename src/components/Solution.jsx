import SectionHeader from './SectionHeader'

const cards = [
  {
    tag: 'DESAFIO ÓPTICO',
    title: 'A Câmera Inteligente',
    text: 'A JoviSmartCam tem como proposta otimizar e facilitar a captura de imagens no momento de estudo, seja uma foto de anotações no caderno, na lousa ou até mesmo no post-it. Ela analisa a estrutura das anotações e ajusta a imagem com ajuda da IA para capturar uma leitura melhor.',
    wide: true,
    highlight: false,
  },
  {
    tag: 'TRANSCRIÇÃO DE TEXTO',
    title: 'Digitalização Prática',
    text: 'Com o simples toque de um botão, o estudante consegue digitalizar as anotações e trazer o texto diretamente para o dispositivo, permitindo organizar, salvar ou compartilhar os textos através do APP de Estudos.',
  },
  {
    tag: 'EXPERIÊNCIA',
    title: 'Interface intuitiva e simples',
    text: 'Um dos nossos objetivos é alcançar tanto quem já tem familiaridade com tecnologia quanto quem não tem; por isso, pensamos em uma interface simples e intuitiva.',
  },
  {
    tag: 'A GRANDE JOGADA',
    title: 'Como Funciona o Aplicativo de Estudos',
    text: 'Ao digitalizar as imagens na JoviSmartCam, o conteúdo é analisado e a IA determina assunto, contexto e prioridade. No aplicativo, a imagem fica disponível na pasta da matéria com resumo, prioridade de estudo, dicas relacionadas e materiais de aprofundamento.',
    wide: true,
    highlight: true,
  },
]

export default function Solution() {
  return (
    <section id="solucao" className="relative py-25" aria-labelledby="titulo-solucao">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <SectionHeader
          index="[ 01. SOLUÇÃO ]"
          id="titulo-solucao"
          title="A Solução Tecnológica"
          description="Solucionando as dores de quem tem vontade de crescer aprendendo."
        />
        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className={[
                'relative overflow-hidden rounded-md border border-hud bg-card p-7.5 backdrop-blur-[10px]',
                'transition-all duration-250 ease-hud',
                'hover:-translate-y-0.75 hover:border-optics-border hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]',
                card.wide ? 'md:col-span-2' : '',
                card.highlight
                  ? 'border-l-[3px] border-l-optics bg-[linear-gradient(145deg,rgba(14,25,27,0.8)_0%,rgba(10,15,24,0.9)_100%)] hover:border-l-optics'
                  : '',
              ].join(' ')}
            >
              <div className="mb-3 font-mono text-[0.72rem] tracking-[1px] text-optics">{card.tag}</div>
              <h3 className="mb-2.5 text-xl font-bold text-fg">{card.title}</h3>
              <p className="text-[0.95rem] leading-normal text-muted">{card.text}</p>
              {card.title === 'A Câmera Inteligente' && (
                <div className="mt-4.5 font-mono text-xs text-muted">
                  <span>Estágio de Desenvolvimento:</span>
                  <div className="relative mt-1.5 h-1 w-full overflow-hidden rounded-xs bg-white/10">
                    <div className="absolute top-0 left-0 h-full w-[82%] bg-danger" />
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}