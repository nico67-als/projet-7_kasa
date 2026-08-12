import { useState } from 'react'
import './Gallery.scss'

const Gallery = ({ pictures, title }) => {
    const [currentImage, setCurrentImage] = useState(0)
    const hasMultiplePictures = pictures.length > 1

    const next = () => setCurrentImage((i) => (i + 1) % pictures.length)
    const prev = () => setCurrentImage((i) => (i - 1 + pictures.length) % pictures.length)

    return (
        <section className="gallery">
            {hasMultiplePictures && (
                <button type="button"
                    className="fa-solid fa-angle-left gallery__arrow gallery__arrow--prev"
                    aria-label="Image précédente"
                    onClick={prev}>
                </button>)}
            <img className="gallery__image" src={pictures[currentImage]} alt={title} />
            {hasMultiplePictures && (
                <button type="button"
                    className="fa-solid fa-angle-right gallery__arrow gallery__arrow--next"
                    aria-label="Image suivante"
                    onClick={next}>
                </button>)}
            {hasMultiplePictures && (
                <span className="gallery__counter">{currentImage + 1}/{pictures.length}</span>)}
        </section>
    )
}

export default Gallery