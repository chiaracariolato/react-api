const CardAttore = (props) => {

    const { attore } = props;

    return (
        <div className="card actor-card">
            <img className="card-img-top card-img" src={attore.image} alt={attore.name} />
            <div className="card-body mb-3">
                <div className="my-3">
                    <h3 className="card-title mb-0">{attore.name}</h3>
                    <span> {attore.birth_year} - {attore.death_year
                        ? `${attore.death_year}`
                        : 'Oggi'}</span>
                </div>
                <p className="card-text">{attore.biography}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Nazionalità: {attore.nationality}</li>
                <li className="list-group-item">Premi: {attore.awards}</li>
                <li className="list-group-item"> Film noti:
                    <ul>
                        {(attore.known_for || attore.most_famous_movies || []).map((film, index) => (
                            <li key={index}>{film}</li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div >
    )
}

export default CardAttore


