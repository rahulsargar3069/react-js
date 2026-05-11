// src/components/Button.jsx
import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default Button;
