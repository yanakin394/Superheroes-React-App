import superheroes from '../data/superheroes.json'

export default function Cards() {
    return (
        <div className='container-cards'>
            {superheroes.map((item, index) => (
                <div className="hero-card" key={index}>
                    <p className='hero-title'>{item.name}</p>
                        <p>Universe: {item.universe}</p>
                        <p>Alterego: {item.alterego}</p>
                        <p>Occupation: {item.occupation}</p>
                        <p>Friends: {item.friends}</p>
                        <p>Superpowers: {item.superpowers}</p>
                        <img className='hero-img' src={item.url} alt='superhero image'></img>
                    </div>
            ))}
        </div>
    )
}
