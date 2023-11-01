import { useTheme } from "../contexts/themeContext";
import Brands from "../sections/Brands";
import HotDeal from "../sections/HotDeal";
import Products from "../sections/Products";

function Home() {
  const { theme } = useTheme();
  return (
    <main
      className={` font-inter ${theme === "light" ? `bg-white` : "bg-dark"}`}
    >
      <Brands></Brands>
      <Products></Products>
      <HotDeal></HotDeal>
    </main>
  );
}

export default Home;
