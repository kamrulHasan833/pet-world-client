import { useLoaderData } from "react-router-dom";
import { useTheme } from "../contexts/themeContext";
import HotDeal from "../sections/HotDeal";
import NoDataInfo from "../sections/NoDataInfo";
import Products from "../sections/Products";
import PromoSlider from "../sections/PromoSlider";

function AllProducts() {
  const { theme } = useTheme();
  const loaderData = useLoaderData();
  const loaderProducts =
    loaderData && Array.isArray(loaderData) && loaderData.length > 0
      ? loaderData
      : loaderData.length === 0
      ? loaderData
      : null;
  const promoSlides =
    loaderProducts && loaderProducts.length > 0
      ? loaderProducts.filter((loaderProduct, ind) => ind < 3)
      : [];

  return (
    <main
      className={` font-inter ${theme === "dark" ? "bg-dark" : "bg-white"}`}
    >
      {promoSlides && promoSlides.length > 0 ? (
        <PromoSlider promoSlides={promoSlides}></PromoSlider>
      ) : !loaderProducts ? (
        <HotDeal></HotDeal>
      ) : (
        ""
      )}
      {loaderProducts && loaderProducts.length === 0 ? (
        <NoDataInfo>No Product Found! </NoDataInfo>
      ) : !loaderProducts ? (
        <Products loadProducts={[]}></Products>
      ) : (
        <Products loadProducts={loaderProducts && loaderProducts}></Products>
      )}
    </main>
  );
}

export default AllProducts;
