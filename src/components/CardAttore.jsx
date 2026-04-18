const CardAttore = (props) => {

    const { attore } = props;

    return (
        <div className="card actor-card">
            <img className="card-img-top card-img" src={attore.image} alt={attore.name} />
            <div className="card-body">
                <h5 className="card-title">{attore.name}</h5>
                <p className="card-text">{attore.biography}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Anno di nascita: {attore.birth_year}</li>
                <li className="list-group-item"> {attore.death_year
                    ? `Anno di morte: ${attore.death_year}`
                    : 'In vita'}</li>
                <li className="list-group-item">Nazionalità: {attore.nationality}</li>
                <li className="list-group-item">Premi: {attore.awards}</li>
            </ul>
        </div >
    )
}

export default CardAttore


