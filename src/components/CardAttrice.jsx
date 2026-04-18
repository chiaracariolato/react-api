const CardAttrice = (props) => {

    const { attrice } = props;

    return (
        <div className="card actor-card">
            <img className="card-img-top card-img" src={attrice.image} alt={attrice.name} />
            <div className="card-body">
                <h5 className="card-title">{attrice.name}</h5>
                <p className="card-text">{attrice.biography}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Anno di nascita: {attrice.birth_year}</li>
                <li className="list-group-item"> {attrice.death_year
                    ? `Anno di morte: ${attrice.death_year}`
                    : 'In vita'}</li>
                <li className="list-group-item">Nazionalità: {attrice.nationality}</li>
                <li className="list-group-item">Premi: {attrice.awards}</li>
            </ul>
        </div >
    )
}

export default CardAttrice


