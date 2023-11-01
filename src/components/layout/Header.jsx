import { useLocation } from "react-router-dom";
import { useTheme } from "../contexts/themeContext";
import HeroSlider from "../sections/HeroSlider";
import Navbar from "../sections/Navbar";
function Header() {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  return (
    <header className={` font-inter ${theme == "dark" ? "bg-dark" : ""}`}>
      <Navbar></Navbar>
      {pathname === "/" && <HeroSlider></HeroSlider>}
    </header>
  );
}

export default Header;
