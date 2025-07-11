import { useState } from "react";
import "../ItemCount/ItemCount.css";

function ItemCount({ stock, initial = 1, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="itemCount">
      <div className="contador">
        <button onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>
      <button className="agregarCarrito" onClick={() => onAdd(cantidad)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
