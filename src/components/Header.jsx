import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <header className="header">
            <Link to='/'>
                <img src={ logo } alt="logo Kasa" />
            </Link>
            <nav className="header__nav">
                <Link to='/' className="header__nav-a">Accueil</Link>
                <Link to='/a-propos' className="header__nav-a">À Propos</Link>
            </nav>
        </header>
    )
}

export default Header

