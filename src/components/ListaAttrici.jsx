import CardAttrice from './CardAttrice'

const ListaAttrici = (props) => {
    const { attrici } = props;

    const renderCard = () => {
        return attrici.map((attrice) => (
            <CardAttrice attrice={attrice} key={attrice.id} />
        ))
    }

    return (
        <section>
            <h2>Attrici</h2>
            <div className="card-list">
                {renderCard()}
            </div>
        </section>
    )
}

export default ListaAttrici