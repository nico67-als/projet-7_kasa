import { Link } from 'react-router-dom'
import './Footer.scss'
import logo from '../assets/images/white-logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="logo Kasa" className="footer__logo" />
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer

