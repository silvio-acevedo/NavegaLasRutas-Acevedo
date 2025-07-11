import "../Cards/Cards.css";
import { useCart } from "../../../Context/CartContext";

function Cards({ id, imagen, nombre, precio, ...rest }) {
  const { addItem } = useCart();

  const handleAgregar = () => {
    const producto = {
      id,
      imagen,
      nombre,
      precio,
      ...rest,
    };
    addItem(producto, 1);
  };
  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <span className="precio">${precio}</span>
      <div className="botones">
        <button onClick={handleAgregar}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default Cards;
