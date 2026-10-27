export default function Header() {
  const links = [
    ['01', 'Solução', '#solucao'],
    ['02', 'Público-Alvo', '#publico-alvo'],
    ['03', 'Galeria', '#galeria'],
    ['04', 'Equipe', '#equipe'],
  ]

  return (
    <header className="cabecalho">
      <div className="caixa-cabecalho">
        <div className="marca">
          <div className="indicador-sensor"><span className="ponto-pulsante" /> EM BETA</div>
          <a href="#inicio" className="logo-marca"><span>Jovi</span>Study</a>
        </div>
        <nav className="navegacao" aria-label="Navegação principal">
          <ul className="trilha-nav">
            {links.map(([number, label, href]) => (
              <li key={href}><a href={href}><span className="num-nav">{number}</span> {label}</a></li>
            ))}
            <li><a href="#contato" className="botao-nav">Contate-nos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
