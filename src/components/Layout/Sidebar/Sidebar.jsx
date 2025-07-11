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
import { Link } from "react-router-dom";
import "../Sidebar/Sidebar.css";

function Sidebar() {
  return (
    <div>
      <aside className="sidebar">
        <h2 className="sidebarTitulo">Categorías</h2>
        <ul className="sidebarLista">
          <li className="sidebarItem">
            <Link to={"/categoria/CamarasDeFotos"}>
              <BsCamera />
              Cámaras de fotos
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to={"/categoria/Auriculares"}>
              <BsHeadphones />
              Auriculares
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to={"/categoria/ConsolasJoysticks"}>
              <BsController />
              Consoles y Joysticks
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to={"/categoria/CelularesTablets"}>
              <BsPhone />
              Celulares y Tablets
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to={"/categoria/Laptops"}>
              <BsLaptop />
              Laptops
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to={"/categoria/ComputadorasGamers"}>
              <BsPcDisplay />
              PC Gamers
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to={"/categoria/TV"}>
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
