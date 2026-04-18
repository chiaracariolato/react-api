import CardAttore from './CardAttore'

const ListaAttori = (props) => {
    const { attori, attrici } = props;
    let attoriTot = [...attori, ...attrici];

    const renderCard = () => {
        return attoriTot.map((attore) => (
            <CardAttore attore={attore} />
        ))
    }

    return (
        <section>
            <h2 id="serie-title">ATTORI E ATTRICI</h2>
            <div className="card-list">
                {renderCard()}
            </div>
        </section>
    )
}

export default ListaAttori