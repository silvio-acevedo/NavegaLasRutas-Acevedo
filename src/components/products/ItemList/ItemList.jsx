import Cards from "../Cards/Cards";
import "../ItemList/ItemList.css";

function ItemList({ productos }) {
  return (
    <div className="item-list">
      {productos.map((producto) => (
        <Cards key={producto.id} {...producto} />
      ))}
    </div>
  );
}

export default ItemList;
