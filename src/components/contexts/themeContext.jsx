import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import dataFromLocalStarage from "../../utilities/dataFromLocalStrorage";

const themeContext = createContext(null);
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const theme = useContext(themeContext);
  return theme;
};
const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const newTheme = localStorage.getItem("theme");
    const modiTheme = newTheme === null ? "light" : newTheme;
    setTheme(modiTheme);
  }, []);

  const handleThemeMode = () => {
    setIsLight(!isLight);
    const newTheme = dataFromLocalStarage(isLight);

    setTheme(newTheme);
  };

  return (
    <themeContext.Provider value={{ handleThemeMode, theme }}>
      {children && children}
    </themeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.element,
};

export default ThemeProvider;
