import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

import Loader from "../../ui/Loader/Loader";

import { useCart } from "../../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "../ProductDetail/ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  console.log("ID recibido", id);

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [agregado, setAgregado] = useState(false);

  const { addItem } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const ref = doc(db, "items", id);

    getDoc(ref)
      .then((res) => {
        if (res.exists()) {
          setProducto({ id: res.id, ...res.data() });
        } else {
          setProducto(null);
        }
      })
      .catch((err) => {
        console.error("Error al cargar el producto", err);
        setProducto(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleAdd = (cantidad) => {
    if (cantidad > producto.stock) {
      alert("No hay stock suficiente");
      return;
    }
    addItem(producto, cantidad);
    setAgregado(true);
  };

  if (loading)
    return (
      <div className="loader">
        <Loader />
      </div>
    );

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="productDetail">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.descripcion}</p>
      <span className="precio">${producto.precio}</span>
      <div>
        {producto.stock > 0 ? (
          !agregado ? (
            <ItemCount stock={producto.stock} initial={1} onAdd={handleAdd} />
          ) : (
            <button onClick={() => navigate("/cart")}>Ir al carrito</button>
          )
        ) : (
          <p className="sin-stock">Sin stock disponible</p>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
