const metrics = [
  ['Aplicativo', 'Organização de estudos de forma automática'],
  ['Digitalização', 'Análise de conteúdo e definição de prioridade'],
  ['Praticidade', 'Fácil de usar para todas as pessoas'],
]

export default function Hero({ sessionCode }) {
  return (
    <section
      id="inicio"
      className="relative pt-17.5 pb-12.5 text-center md:pt-30 md:pb-22.5"
      aria-labelledby="titulo-principal"
    >
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <div className="mb-5 font-mono text-[0.8rem] tracking-[2px] text-cyan-hud">
          SPRINT 04 // FRONT & WEB DEVELOPMENT
        </div>
        <h1
          id="titulo-principal"
          className="mb-6 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.15] font-extrabold"
        >
          Sua câmera inteligente.<br />
          <span className="bg-[linear-gradient(135deg,var(--color-optics)_0%,var(--color-cyan-hud)_100%)] bg-clip-text text-transparent">
            Capturas práticas e resumos precisos.
          </span>
        </h1>
        <p className="mx-auto mb-12.5 max-w-[720px] text-[1.15rem] text-muted">
          A Jovi SmartCam chegou para deixar o dia a dia dos estudantes mais prático e produtivo.
        </p>
        <div className="mx-auto flex max-w-[780px] flex-col items-center justify-center gap-4 rounded-lg border border-hud bg-surface p-5 md:flex-row md:gap-5 lg:gap-10 lg:px-9 lg:py-6">
          {metrics.map(([value, label], i) => (
            <div key={value} className="contents">
              {i > 0 && <div className="h-px w-15 bg-hud md:h-10 md:w-px" />}
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[1.6rem] font-bold text-optics">{value}</span>
                <span className="text-[0.8rem] tracking-[0.5px] text-muted uppercase">{label}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4.5 font-mono text-[0.72rem] text-dim">SESSION // {sessionCode}</p>
      </div>
    </section>
  )
}