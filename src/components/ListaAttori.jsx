import CardAttore from './CardAttore'

const ListaAttori = (props) => {
    const { attori } = props;
    const renderCard = () => {
        return attori.map((attore) => (
            <CardAttore attore={attore} />
        ))
    }

    return (
        <section>
            <h2 id="serie-title">ATTORI</h2>
            <div className="card-list">
                {renderCard()}
            </div>
        </section>
    )
}

export default ListaAttori