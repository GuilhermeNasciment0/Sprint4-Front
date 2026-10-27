export default function SectionHeader({ index, id, title, description }) {
  return (
    <header className="mb-12.5 text-center">
      <span className="mb-2 inline-block font-mono text-[0.85rem] tracking-[2px] text-optics">
        {index}
      </span>
      <h2 id={id} className="mb-2.5 text-[2.3rem] font-extrabold tracking-[-0.5px] text-fg">
        {title}
      </h2>
      <p className="mx-auto max-w-[600px] text-[1.05rem] text-muted">{description}</p>
    </header>
  )
}