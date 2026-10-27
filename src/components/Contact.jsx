import { useState } from 'react'
import SectionHeader from './SectionHeader'

const STORAGE_KEY = 'jovistudy_contacts'

const fieldClass =
  'rounded-sm border border-hud bg-ink px-4 py-3 font-display text-[0.9rem] text-fg outline-none transition-all duration-250 ease-hud focus:border-optics focus:shadow-[0_0_10px_var(--color-optics-glow)]'
const labelClass = 'font-mono text-xs tracking-[1px] text-muted'

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
    <section id="contato" className="relative py-25" aria-labelledby="titulo-contato">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <SectionHeader
          index="[ 05. CONTATE-NOS ]"
          id="titulo-contato"
          title="Envie seu feedback!"
          description="Envie sua mensagem, dúvida técnica ou proposta de colaboração."
        />
        <div className="mx-auto max-w-190 overflow-hidden rounded-md border border-hud bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 border-b border-hud bg-[#080a0f] px-4.5 py-3">
            <span className="size-2.5 rounded-full bg-[#ff5f56]" />
            <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="size-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-[0.72rem] text-dim">EM BETA // Formulário de contato</span>
          </div>
          <form className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 md:p-9" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={labelClass}>NOME COMPLETO</label>
              <input type="text" id="name" name="name" placeholder="Ex: Eduardo Menzel" required className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelClass}>ENDEREÇO DE E-MAIL</label>
              <input type="email" id="email" name="email" placeholder="nome@dominio.com" required className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="subject" className={labelClass}>TEMA DO CONTATO</label>
              <select id="subject" name="subject" defaultValue="" required className={fieldClass}>
                <option value="" disabled>Selecione um tópico...</option>
                <option value="duvidas">Dúvidas sobre o Projeto Challenge</option>
                <option value="parceria">Integração & Parcerias</option>
                <option value="feedback">Feedback Técnico</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message" className={labelClass}>MENSAGEM / DADOS DE ENTRADA</label>
              <textarea id="message" name="message" rows="5" placeholder="Descreva sua solicitação..." required className={fieldClass} />
            </div>
            {sent && (
              <div
                role="status"
                className="rounded-sm border border-optics-border bg-optics/5 px-3.5 py-3 font-mono text-[0.78rem] text-optics md:col-span-2"
              >
                ✓ Mensagem registrada localmente com sucesso.
              </div>
            )}
            <button
              type="submit"
              className="flex cursor-pointer items-center justify-center gap-3 rounded-sm bg-[linear-gradient(90deg,var(--color-optics)_0%,#00d2ff_100%)] p-4 font-mono text-[0.85rem] font-bold tracking-[1px] text-ink transition-all duration-250 ease-hud hover:brightness-115 hover:shadow-[0_0_25px_rgba(0,245,155,0.4)] md:col-span-2"
            >
              <span>ENVIAR MENSAGEM</span>
              <span>&rarr;</span>
            </button>
          </form>
          <p className="mt-5.5 px-5 pb-5 text-center text-[0.82rem] text-muted">
            Os envios deste protótipo são armazenados no navegador usando localStorage.
          </p>
        </div>
      </div>
    </section>
  )
}