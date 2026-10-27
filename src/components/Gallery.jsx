import SectionHeader from './SectionHeader'
import cameraImage from '../assets/camera.jpg'
import appHomeImage from '../assets/app_figma.jpg'
import appStudiesImage from '../assets/app_figma2.jpg'

const items = [
  [cameraImage, 'JoviSmartCam', 'FIGMA - Protótipo da Interface da Câmera', 'Seleção de diretório'],
  [appHomeImage, 'APP de Estudos', 'FIGMA - Protótipo do APP de Estudos', 'Tela inicial ao abrir o APP'],
  [appStudiesImage, 'APP de Estudos', 'FIGMA - Protótipo do APP de Estudos', 'Tela de organização por disciplinas'],
]

export default function Gallery() {
  return (
    <section id="galeria" className="relative py-25" aria-labelledby="titulo-galeria">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <SectionHeader
          index="[ 03. GALERIA ]"
          id="titulo-galeria"
          title="Galeria da JoviStudy"
          description="Confira alguns dos nossos protótipos."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([src, meta, title, description]) => (
            <figure
              key={src}
              className="group relative overflow-hidden rounded-md border border-hud bg-surface transition-all duration-250 ease-hud hover:border-optics"
            >
              <div className="pointer-events-none absolute inset-0 z-2 border border-white/5">
                <div className="absolute top-[40%] left-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-optics opacity-70" />
                <div className="absolute top-3 left-3.5 rounded-sm bg-black/65 px-2 py-0.5 font-mono text-[0.65rem] tracking-[1px] text-optics">
                  {meta}
                </div>
              </div>
              <img
                src={src}
                alt={title}
                loading="lazy"
                className="block h-65 w-full object-cover brightness-85 saturate-110 transition-all duration-250 ease-hud group-hover:scale-103 group-hover:brightness-100 group-hover:saturate-120"
              />
              <figcaption className="border-t border-hud bg-surface px-5 py-4 text-[0.85rem] text-muted">
                <strong className="mb-0.5 block text-fg">{title}</strong>
                {description}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}