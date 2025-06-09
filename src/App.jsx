import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

import NavBar from "./components/Layout/NavBar/NavBar";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import ItemListContainer from "./components/products/ItemListContainer/ItemListContainer";

import Search from "./components/ui/Search/Search";
import ProductDetail from "./components/products/ProductDetail/ProductDetail";
import ContactForm from "./components/Layout/ContactForm/ContactForm";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="layout">
        <Sidebar />
        <div className="contenido">
          <Search />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/detalle/:id" element={<ProductDetail />} />
            <Route path="/contacto" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
