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
    <section id="galeria" className="secao" aria-labelledby="titulo-galeria">
      <div className="container">
        <header className="cabecalho-secao">
          <span className="indice-secao">[ 03. GALERIA ]</span>
          <h2 id="titulo-galeria">Galeria da JoviStudy</h2>
          <p>Confira alguns dos nossos protótipos.</p>
        </header>
        <div className="grade-galeria">
          {items.map(([src, meta, title, description]) => (
            <figure className="quadro-galeria" key={src}>
              <div className="lente-visor">
                <div className="reticulo centro" />
                <div className="metadados">{meta}</div>
              </div>
              <img src={src} alt={title} loading="lazy" />
              <figcaption><strong>{title}</strong>{description}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
