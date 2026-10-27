export default function Footer({ contactCount }) {
  return (
    <footer className="border-t border-hud bg-[#040508] py-10">
      <div className="mx-auto flex w-[90%] max-w-[1200px] flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <span className="font-mono text-[1.1rem] font-extrabold text-fg">
            Jovi<span className="text-optics">Study</span>
          </span>
          <p className="mt-1 text-[0.85rem] text-dim">
            Site desenvolvido para a Sprint 4 - Front-End Design & Web Development • FIAP 2026.
          </p>
        </div>
        <div className="text-center md:text-right">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-optics">
            <span className="size-1.5 rounded-full bg-optics" /> Câmeras prontas para os estudos!
          </span>
          <p className="mt-1 text-[0.85rem] text-dim">Interações locais registradas: {contactCount}</p>
          <p className="text-[0.85rem] text-dim">© 2026 JoviStudy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}