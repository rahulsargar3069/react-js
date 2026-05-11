import { createContext, useState } from "react";

export const ThemeDataContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeDataContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeDataContext.Provider>
  );
};