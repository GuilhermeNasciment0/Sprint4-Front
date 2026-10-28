import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-25 text-center" aria-labelledby="titulo-404">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <p className="mb-2 font-mono text-[0.85rem] tracking-[2px] text-optics">[ ERRO 404 ]</p>
        <h1 id="titulo-404" className="mb-4 text-[2.3rem] font-extrabold">Página não encontrada</h1>
        <p className="mb-8 text-muted">O endereço que você tentou acessar não existe.</p>
        <Link
          to="/"
          className="rounded-sm border border-optics px-4.5 py-2 font-mono text-[0.8rem] font-semibold text-optics transition-all duration-250 ease-hud hover:bg-optics hover:text-ink"
        >
          Voltar para o início
        </Link>
      </div>
    </section>
  )
}