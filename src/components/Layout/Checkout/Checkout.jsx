import { useEffect, useState } from "react";
import { useCart } from "../../../Context/CartContext";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import "../../Layout/Checkout/Checkout.css";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    const orden = {
      comprador: { nombre, email },
      items: cart.map((prod) => ({
        id: prod.id,
        nombre: prod.nombre,
        precio: prod.precio,
        cantidad: prod.cantidad,
      })),
      total: totalPrice,
      fecha: Timestamp.fromDate(new Date()),
    };
    try {
      const ordenesRef = collection(db, "ordenes");
      const docRef = await addDoc(ordenesRef, orden);
      setOrderId(docRef.id);
      clearCart();
      console.log("Orden generada con ID", docRef.id);
    } catch (error) {
      console.error("Error al generar orden", error);
    }
  };

  useEffect(() => {
    if (orderId) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [orderId, navigate]);

  if (orderId) {
    return (
      <div className="checkoutConfimacion">
        <h2>¡Gracias por tu compra!</h2>
        <p>
          Tu número de orden es: <strong>{orderId}</strong>
        </p>
        <p>Te enviaremos los detalles a {email}</p>
      </div>
    );
  }

  return (
    <form className="checkoutForm" onSubmit={handleSubmit}>
      <h2>Finalizar compra</h2>
      <label>
        Nombre:{" "}
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Confirmar compra</button>
    </form>
  );
}

export default CheckoutForm;
