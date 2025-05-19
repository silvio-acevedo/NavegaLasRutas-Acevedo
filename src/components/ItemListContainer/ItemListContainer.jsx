import '../ItemListContainer/ItemListContainer.css'

function ItemListContainer ({greeting}) {
    return (
        <div className='item-list-container'>
            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer