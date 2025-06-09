import { useState } from "react";
import { BsBrightnessHigh, BsMoon } from "react-icons/bs";
import "../ThemeMode/themeMode.css";

function themeMode() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div>
      <button className="modoTema" onClick={toggleDarkMode}>
        {darkMode ? <BsBrightnessHigh /> : <BsMoon />}
      </button>
    </div>
  );
}

export default themeMode;
