import "../ItemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loader from "../../ui/Loader/Loader";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);

    const itemsRef = collection(db, "items");

    getDocs(itemsRef)
      .then((res) => {
        const productosFirebase = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (categoria) {
          const categoriaNormalizada = categoria
            .toLowerCase()
            .replace(/\s+/g, "");
          const filtrados = productosFirebase.filter(
            (prod) =>
              prod.categoria.toLowerCase().replace(/\s+/g, "") ===
              categoriaNormalizada
          );
          setProductos(filtrados);
        } else {
          setProductos(productosFirebase);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("error al cargar los preductos", err);
        setLoading(false);
      });
  }, [categoria]);

  return (
    <div className="itemList">
      {loading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <p>No se encontrado productos</p>
      )}
    </div>
  );
}

export default ItemListContainer;
