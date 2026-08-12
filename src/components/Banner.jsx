import { Link } from 'react-router-dom'
import './Banner.scss'

const Banner = ({ variant, children }) => {
    return (
        <section class={`hero hero--${variant}`}>
            {children}
        </section>
    )
}

export default Banner