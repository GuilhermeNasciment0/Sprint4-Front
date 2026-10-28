import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { useAuth } from '../hooks/useAuth'

const STORAGE_KEY = 'jovistudy_contacts'

const subjects = {
  duvidas: 'Dúvidas sobre o Projeto Challenge',
  parceria: 'Integração & Parcerias',
  feedback: 'Feedback Técnico',
}

function readContacts() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export default function Dashboard() {
  const { user } = useAuth()
  const { setContactCount } = useOutletContext()
  const [contacts, setContacts] = useState(readContacts)

  function save(next) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setContacts(next)
    setContactCount(next.length)
  }

  function removeContact(createdAt) {
    save(contacts.filter((contact) => contact.createdAt !== createdAt))
  }

  return (
    <section className="relative py-25" aria-labelledby="titulo-painel">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <SectionHeader
          index="[ PAINEL ]"
          id="titulo-painel"
          title={`Olá, ${user.name}`}
          description={`${contacts.length} feedback(s) registrado(s) neste navegador.`}
        />

        {contacts.length === 0 ? (
          <p className="text-center text-muted">
            Nenhum feedback ainda. Envie uma mensagem pelo formulário de contato da página inicial.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {[...contacts].reverse().map((contact) => (
              <article
                key={contact.createdAt}
                className="rounded-md border border-hud bg-elevated p-6 transition-all duration-250 ease-hud hover:border-optics-border"
              >
                <div className="mb-3 font-mono text-[0.72rem] tracking-[1px] text-optics">
                  {subjects[contact.subject] ?? contact.subject}
                </div>
                <h3 className="text-[1.1rem] font-bold text-fg">{contact.name}</h3>
                <span className="mb-3 block font-mono text-xs text-cyan-hud">{contact.email}</span>
                <p className="mb-4 text-[0.9rem] text-muted">{contact.message}</p>
                <div className="flex items-center justify-between">
                  <time className="font-mono text-[0.7rem] text-dim" dateTime={contact.createdAt}>
                    {new Date(contact.createdAt).toLocaleString('pt-BR')}
                  </time>
                  <button
                    type="button"
                    onClick={() => removeContact(contact.createdAt)}
                    className="cursor-pointer rounded-sm border border-danger/50 px-3 py-1 font-mono text-[0.7rem] text-danger transition-all duration-250 ease-hud hover:bg-danger hover:text-ink"
                  >
                    EXCLUIR
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}