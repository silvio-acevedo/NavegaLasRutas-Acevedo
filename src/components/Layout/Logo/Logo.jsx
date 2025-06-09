import { FaStore } from "react-icons/fa";
import "../Logo/Logo.css";
import { Link } from "react-router";

function Logo() {
  return (
    <div>
      <Link to={"/"} className="logo-text">
        <FaStore style={{ marginRight: "8px" }} />
        My<span>Store</span>
      </Link>
    </div>
  );
}

export default Logo;
