export default function Hero({ sessionCode }) {
  return (
    <section id="inicio" className="secao-destaque" aria-labelledby="titulo-principal">
      <div className="container container-destaque">
        <div className="etiqueta-destaque">SPRINT 03 // FRONT & WEB DEVELOPMENT</div>
        <h1 id="titulo-principal" className="titulo-destaque">
          Sua câmera inteligente.<br />
          <span className="texto-gradiente">Capturas práticas e resumos precisos.</span>
        </h1>
        <p className="subtitulo-destaque">
          A Jovi SmartCam chegou para deixar o dia a dia dos estudantes mais prático e produtivo.
        </p>
        <div className="metricas-destaque">
          <div className="item-metrica"><span className="valor-metrica">Aplicativo</span><span className="rotulo-metrica">Organização de estudos de forma automática</span></div>
          <div className="divisor-metrica" />
          <div className="item-metrica"><span className="valor-metrica">Digitalização</span><span className="rotulo-metrica">Análise de conteúdo e definição de prioridade</span></div>
          <div className="divisor-metrica" />
          <div className="item-metrica"><span className="valor-metrica">Praticidade</span><span className="rotulo-metrica">Fácil de usar para todas as pessoas</span></div>
        </div>
        <p className="codigo-sessao">SESSION // {sessionCode}</p>
      </div>
    </section>
  )
}
