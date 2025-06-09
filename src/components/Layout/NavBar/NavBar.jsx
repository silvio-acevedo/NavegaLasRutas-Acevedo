import Logo from "../Logo/Logo";
import Contact from "../../ui/Contact/Contact";
import ThemeMode from "../../ui/ThemeMode/ThemeMode";
import CartWidget from "../../Cart/CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="container">
      <nav className="navbar">
        <Logo />
        <div className="icons">
          <ThemeMode />
          <Contact />
          <CartWidget cantidad={2} />
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
