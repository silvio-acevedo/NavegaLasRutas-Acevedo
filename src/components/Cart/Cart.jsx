import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "../Cart/Cart.css";

function Cart() {
  const { cart, removeItem, clearCart, totalQuantity, totalPrice } = useCart();
  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Tu carrito esta vacío</h2>
        <Link to="/" className="btn">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <ul className="cartList">
        {cart.map((prod) => (
          <li key={prod.id} className="cartItem">
            <img src={prod.imagen} alt={prod.nombre} />
            <div>
              <h3>
                <strong>{prod.nombre}</strong>
              </h3>
              <p>Precio: ${prod.precio}</p>
              <p>Cantidad: {prod.cantidad}</p>
              <p>Subtotal: ${prod.precio * prod.cantidad.toFixed(2)}</p>
              <button onClick={() => removeItem(prod.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cartResumen">
        <p>Total de productos: {totalQuantity}</p>
        <p>Total a pagar: {totalPrice.toFixed(2)}</p>
        <div className="cartBotones">
          <button onClick={clearCart}>Vaciar carrito</button>
          <Link to="/checkout" className="btn">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
