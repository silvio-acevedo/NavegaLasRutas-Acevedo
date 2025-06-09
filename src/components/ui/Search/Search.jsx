import { BsSearch } from "react-icons/bs";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Buscar..." className="textbox" />
      <button className="icono">
        <BsSearch />
      </button>
    </div>
  );
}

export default Search;
