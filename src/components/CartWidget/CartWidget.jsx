import { FaShoppingCart } from 'react-icons/fa'
import '../CartWidget/CartWidget.css'


function CartWidget () {
    return (
        <div className='cart-widget'>
            <FaShoppingCart className='cart-icon' />
            <span>Carrito</span>
        </div>
        )
    }

export default CartWidget