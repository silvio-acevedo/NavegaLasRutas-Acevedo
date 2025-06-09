import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getProducts from "../../../service/mockService";
import Loader from "../../ui/Loader/Loader";
import "../ProductDetail/ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((productos) => {
      const prod = productos.find((p) => p.id === parseInt(id));
      setProducto(prod);
      setLoading(false);
    });
  }, [id]);

  if (loading)
    return (
      <div className="loader">
        <Loader />;
      </div>
    );

  return (
    <div className="productDetail">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.descripcion}</p>
      <span className="precio">${producto.precio}</span>
      <div>
        <button>Comprar ahora</button>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ProductDetail;
