const groups = [
  ['01', 'Estudantes Full-Time', 'Que desejam otimizar o tempo e a praticidade.', ['Idade entre 19 e 26 anos', 'Conciliam estudo, interações sociais e ambição', 'Sempre em movimento, buscando progresso e estabilidade']],
  ['02', 'Principais Benefícios', 'Qual o impacto real da solução?', ['Digitalização rápida e prática', 'Resumos automáticos prontos para leitura', 'Direcionamento de estudos com base no conteúdo atual', 'Maior disposição para aprender']],
  ['03', 'Funcionalidades', 'Confira algumas possibilidades da nossa solução:', ['Status de revisão e checklist geral', 'Criação de grupos de estudo (pastas)', 'Trilhas de estudo personalizadas feitas pela IA', 'Correção ortográfica do conteúdo digitalizado']],
]

export default function Audience() {
  return (
    <section id="publico-alvo" className="secao fundo-padrao" aria-labelledby="titulo-publico">
      <div className="container">
        <header className="cabecalho-secao">
          <span className="indice-secao">[ 02. PÚBLICO-ALVO ]</span>
          <h2 id="titulo-publico">Público-Alvo & Proposta de Valor</h2>
          <p>Quem é o foco da nossa proposta e como se beneficiam.</p>
        </header>
        <div className="grade-alvo">
          {groups.map(([number, title, description, items]) => (
            <article className="cartao-alvo" key={title}>
              <div className="selo-alvo">{number}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="recursos-alvo">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
