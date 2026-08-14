import './NotFound.scss'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className="error-404">
            <h1 className="error-404__code">404</h1>
            <p className="error-404__message">Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className="error-404__link">Retourner sur la page d'accueil</Link>
        </section>
    )
}

export default NotFound