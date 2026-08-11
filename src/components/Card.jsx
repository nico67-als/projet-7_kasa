import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ logement }) => {
    return (
        <section>
            <Link to={`/logement/${logement.id}`}>
                <article
                    className="presentation__card"
                    style={{ '--cover': `url(${logement.cover})` }}
                >
                    <h2 className="presentation__card-title">{logement.title}</h2>
                </article>
            </Link>
        </section>
    )
}

export default Card