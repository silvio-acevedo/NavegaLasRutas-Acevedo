import { BsCart2 } from "react-icons/bs";
import "../Cart/CartWidget.css";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalQuantity } = useCart();

  return (
    <div>
      <Link to={"/cart"}>
        <button className="cartWidget">
          <BsCart2 />
          {totalQuantity > 0 && (
            <span className="cartCount">{totalQuantity}</span>
          )}
        </button>
      </Link>
    </div>
  );
}

export default CartWidget;
