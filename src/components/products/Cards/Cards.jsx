import { BsEye } from "react-icons/bs";
import "../Cards/Cards.css";
import { Link } from "react-router";

function Cards({ id, imagen, nombre, precio }) {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <span className="precio">${precio}</span>
      <div className="botones">
        <Link to={`/detalle/${id}`} className="ver">
          <BsEye />
        </Link>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default Cards;
