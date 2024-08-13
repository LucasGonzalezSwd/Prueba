import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={theme === "light" ? "header-light" : "header-dark"}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
    </header>
  );
};

export const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};
