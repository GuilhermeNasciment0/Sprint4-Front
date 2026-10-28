import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { useAuth } from '../hooks/useAuth'

const fieldClass =
  'rounded-sm border border-hud bg-ink px-4 py-3 font-display text-[0.9rem] text-fg outline-none transition-all duration-250 ease-hud focus:border-optics focus:shadow-[0_0_10px_var(--color-optics-glow)]'
const labelClass = 'font-mono text-xs tracking-[1px] text-muted'

export default function Login() {
  const { user, login } = useAuth()
  const location = useLocation()
  const [error, setError] = useState('')

  const destination = location.state?.from?.pathname || '/painel'

  if (user) {
    return <Navigate to={destination} replace />
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const ok = login(form.get('email'), form.get('password'))
    if (!ok) setError('E-mail ou senha inválidos.')
  }

  return (
    <section className="relative py-25" aria-labelledby="titulo-login">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <SectionHeader
          index="[ ACESSO RESTRITO ]"
          id="titulo-login"
          title="Entrar no painel"
          description="Faça login para ver os feedbacks recebidos pela landing page."
        />
        <div className="mx-auto max-w-110 overflow-hidden rounded-md border border-hud bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <form className="flex flex-col gap-5 p-6 md:p-9" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelClass}>E-MAIL</label>
              <input type="email" id="email" name="email" placeholder="admin@jovistudy.com" required className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className={labelClass}>SENHA</label>
              <input type="password" id="password" name="password" placeholder="••••••••" required className={fieldClass} />
            </div>
            {error && (
              <div
                role="alert"
                className="rounded-sm border border-danger/50 bg-danger/10 px-3.5 py-3 font-mono text-[0.78rem] text-danger"
              >
                {error}
              </div>
            )}
            <button
              type="submit"
              className="cursor-pointer rounded-sm bg-[linear-gradient(90deg,var(--color-optics)_0%,#00d2ff_100%)] p-4 font-mono text-[0.85rem] font-bold tracking-[1px] text-ink transition-all duration-250 ease-hud hover:brightness-115 hover:shadow-[0_0_25px_rgba(0,245,155,0.4)]"
            >
              ENTRAR
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}