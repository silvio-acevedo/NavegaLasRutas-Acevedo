import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    const itemExistente = cart.find((prod) => prod.id === item.id);
    if (itemExistente) {
      const nuevoCarrito = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, cantidad: prod.cantidad + cantidad }
          : prod
      );
      setCart(nuevoCarrito);
    } else {
      if (cantidad > item.stock) {
        return;
      }

      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = cart.reduce((acc, prod) => acc + prod.cantidad, 0);

  const totalPrice = cart.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
