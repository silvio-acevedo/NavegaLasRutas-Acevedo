import CartWidget from '../CartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top px-4 d-flex justify-content-between align-items-center">
      <p className="navbar-brand m-0">Logo</p>
      
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contacto</a>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
