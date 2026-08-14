import './Banner.scss'

const Banner = ({ variant, children }) => {
    return (
        <section className={`hero hero--${variant}`}>
            {children}
        </section>
    )
}

export default Banner