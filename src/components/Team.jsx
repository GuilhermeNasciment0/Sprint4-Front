const team = [
  ['DEV-01', 'Eduardo Menzel', 'Web Development', 'Responsável pela migração da Landing Page para React.'],
  ['DEV-02', 'Guilherme de Sousa Caiano', 'Computational Thinking with Python', 'Responsável pelo desenvolvimento da solução em Python.'],
  ['DEV-03', 'Guilherme Nascimento dos Santos', 'Front-end Design', 'Responsável pelo desenvolvimento da Landing Page da solução.'],
  ['DEV-04', 'Luís Carlos', 'Software e Total Experience Design', 'Responsável pela documentação estruturada do projeto de software.'],
  ['DEV-05', 'Victor da Silva Souto', 'Storytelling e Inspiração Empreendedora', 'Responsável pelo documento detalhando os 10 tópicos do Story Canvas.'],
]

export default function Team() {
  return (
    <section id="equipe" className="secao fundo-padrao" aria-labelledby="titulo-equipe">
      <div className="container">
        <header className="cabecalho-secao">
          <span className="indice-secao">[ 04. EQUIPE ]</span>
          <h2 id="titulo-equipe">Desenvolvedores do Projeto</h2>
          <p>Conheça nossa equipe.</p>
        </header>
        <div className="grade-equipe">
          {team.map(([code, name, role, description]) => (
            <article className="cartao-equipe" key={name}>
              <div className="quadro-foto-membro"><div className="linha-escaneamento" /><span className="etiqueta-membro">{code}</span></div>
              <div className="info-membro"><h3>{name}</h3><span className="cargo-membro">{role}</span><p>{description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
