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
    <section id="solucao" className="secao" aria-labelledby="titulo-solucao">
      <div className="container">
        <header className="cabecalho-secao">
          <span className="indice-secao">[ 01. SOLUÇÃO ]</span>
          <h2 id="titulo-solucao">A Solução Tecnológica</h2>
          <p>Solucionando as dores de quem tem vontade de crescer aprendendo.</p>
        </header>
        <div className="grade-solucoes">
          {cards.map((card) => (
            <article key={card.title} className={`cartao-solucao ${card.wide ? 'cartao-largo' : ''} ${card.highlight ? 'cartao-destaque' : ''}`}>
              <div className="etiqueta-cartao">{card.tag}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {card.title === 'A Câmera Inteligente' && (
                <div className="barra-telemetria">
                  <span>Estágio de Desenvolvimento:</span>
                  <div className="preenchimento-barra preenchimento-vermelho" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
