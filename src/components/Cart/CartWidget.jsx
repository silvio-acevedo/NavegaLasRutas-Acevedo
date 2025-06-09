import { BsCart2 } from "react-icons/bs";
import "../Cart/CartWidget.css";

function CartWidget({ cantidad }) {
  return (
    <div>
      <button className="cartWidget">
        <BsCart2 />
        <span className="cartCount">{cantidad}</span>
      </button>
    </div>
  );
}

export default CartWidget;
