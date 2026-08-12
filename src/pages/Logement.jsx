import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Collapse from '../components/Collapse'
import Gallery from '../components/Gallery'
import './Logement.scss'

const Logement = () => {
    const { id } = useParams()
    const [logement, setLogement] = useState(null)


    useEffect(() => {
        fetch('/logements.json')
            .then(response => response.json())
            .then(data => setLogement(data.find(logement => logement.id === id)))
    }, [id])

    if (!logement) return <div>Chargement ...</div>

    const rating = Number(logement.rating)



    return (
        <main>
            <Gallery pictures={logement.pictures} title={logement.title} />

            <section className="infos">
                <div className="infos__main">
                    <h1 className="infos__title">{logement.title}</h1>
                    <p className="infos__location">{logement.location}</p>
                    <ul className="infos__tags">
                        {logement.tags.map((tag, index) => (
                            <li key={index} className="infos__tag">{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="infos__host">
                    <div className="host">
                        <p className="host__name">{logement.host.name}</p>
                        <img className="host__avatar" src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <ul className="rating" aria-label={`Note : ${rating} sur 5`}>
                        {[...Array(5)].map((_, index) => (
                            <li key={index} className={`fa-solid fa-star rating__star ${index < rating ? 'rating__star--filled' : ""}`}></li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="collapses">
                <Collapse title="Description">
                        <p>{logement.description}</p>
                </Collapse>
                <Collapse title="Equipements">
                        <ul className="equipments">
                            {logement.equipments.map((equipement, index) => (
                                <li key={index} className="equipments__item">{equipement}</li>
                            ))}
                        </ul>
                </Collapse>
            </section>
        </main>
    )
}

export default Logement