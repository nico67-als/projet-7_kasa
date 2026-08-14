import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Banner from '../components/Banner'

const Accueil = () => {
    const [logements, setLogements] = useState([])

    useEffect(() => {
        fetch('/logements.json')
            .then(response => response.json())
            .then(data => setLogements(data))
    }, [])

    return (
        <>
            <Banner variant="home">
                <h1 class="hero__title">Chez vous, partout et ailleurs</h1>
            </Banner>
            <section class="presentation">
                <div class="presentation__cards">
                    {logements.map(logement => (
                        <Card key={logement.id} logement={logement} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Accueil