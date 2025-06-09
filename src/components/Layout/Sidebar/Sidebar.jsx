import {
  BsCamera,
  BsController,
  BsGrid,
  BsHeadphones,
  BsLaptop,
  BsPcDisplay,
  BsPhone,
  BsTv,
} from "react-icons/bs";
import { Link } from "react-router";
import "../Sidebar/Sidebar.css";

function Sidebar() {
  return (
    <div>
      <aside className="sidebar">
        <h2 className="sidebarTitulo">Categorías</h2>
        <ul className="sidebarLista">
          <li className="sidebarItem">
            <Link to={"/categoria/camarasDeFotos"}>
              <BsCamera />
              Cámaras de fotos
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to={"/categoria/auriculares"}>
              <BsHeadphones />
              Auriculares
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to={"/categoria/consolasJoysticks"}>
              <BsController />
              Consoles y Joysticks
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to={"/categoria/celularesTablets"}>
              <BsPhone />
              Celulares y Tablets
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to={"/categoria/laptops"}>
              <BsLaptop />
              Laptops
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to={"/categoria/computadorasGamers"}>
              <BsPcDisplay />
              PC Gamers
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to={"/categoria/tv"}>
              <BsTv />
              TV
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to={"/"}>
              <BsGrid />
              Ver todo
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
