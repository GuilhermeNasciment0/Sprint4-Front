import { useState } from 'react'

const STORAGE_KEY = 'jovistudy_contacts'

export default function Contact({ onSent }) {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const contact = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message'),
      createdAt: new Date().toISOString(),
    }

    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...saved, contact]))
    } catch {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([contact]))
    }

    event.currentTarget.reset()
    setSent(true)
    onSent()
  }

  return (
    <section id="contato" className="secao" aria-labelledby="titulo-contato">
      <div className="container">
        <header className="cabecalho-secao">
          <span className="indice-secao">[ 05. CONTATE-NOS ]</span>
          <h2 id="titulo-contato">Envie seu feedback!</h2>
          <p>Envie sua mensagem, dúvida técnica ou proposta de colaboração.</p>
        </header>
        <div className="terminal-contato">
          <div className="barra-terminal">
            <span className="ponto-terminal vermelho" /><span className="ponto-terminal amarelo" /><span className="ponto-terminal verde" />
            <span className="titulo-terminal">EM BETA // Formulário de contato</span>
          </div>
          <form className="formulario-contato" onSubmit={handleSubmit}>
            <div className="grupo-input"><label htmlFor="name">NOME COMPLETO</label><input type="text" id="name" name="name" placeholder="Ex: Eduardo Menzel" required /></div>
            <div className="grupo-input"><label htmlFor="email">ENDEREÇO DE E-MAIL</label><input type="email" id="email" name="email" placeholder="nome@dominio.com" required /></div>
            <div className="grupo-input cheio"><label htmlFor="subject">TEMA DO CONTATO</label>
              <select id="subject" name="subject" defaultValue="" required>
                <option value="" disabled>Selecione um tópico...</option>
                <option value="duvidas">Dúvidas sobre o Projeto Challenge</option>
                <option value="parceria">Integração & Parcerias</option>
                <option value="feedback">Feedback Técnico</option>
              </select>
            </div>
            <div className="grupo-input cheio"><label htmlFor="message">MENSAGEM / DADOS DE ENTRADA</label><textarea id="message" name="message" rows="5" placeholder="Descreva sua solicitação..." required /></div>
            {sent && <div className="aviso-formulario" role="status">✓ Mensagem registrada localmente com sucesso.</div>}
            <button type="submit" className="botao-enviar"><span>ENVIAR MENSAGEM</span><span className="seta-botao">&rarr;</span></button>
          </form>
          <p className="historico-contato">Os envios deste protótipo são armazenados no navegador usando localStorage.</p>
        </div>
      </div>
    </section>
  )
}
