import "../ItemListContainer/ItemListContainer.css";
import Cards from "../Cards/Cards";
import getProducts from "../../../service/mockService";
import { useEffect, useState } from "react";
import Loader from "../../ui/Loader/Loader";
import { useParams } from "react-router";

function ItemListContainer() {
  const [TodosLosProductos, setTodosLosProductos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoria } = useParams();

  const filtrarProductos = (arrayProductos, categoria) => {
    if (categoria) {
      setProductos(
        arrayProductos.filter(
          (elem) => elem.categoria.toLowerCase() === categoria?.toLowerCase()
        )
      );
    } else {
      setProductos(arrayProductos);
    }
  };

  useEffect(() => {
    if (TodosLosProductos.length === 0) {
      setLoading(true);
      getProducts()
        .then((resultado) => {
          setTodosLosProductos(resultado);
          filtrarProductos(resultado, categoria);
          setLoading(false);
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      filtrarProductos(TodosLosProductos, categoria);
    }
  }, [categoria]);

  return (
    <div className="itemList">
      {loading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : productos.length > 0 ? (
        productos.map((elem) => <Cards key={elem.id} {...elem} />)
      ) : (
        <p>No se encontrado productos</p>
      )}
    </div>
  );
}

export default ItemListContainer;
