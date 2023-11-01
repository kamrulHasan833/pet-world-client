import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../contexts/themeContext";
import SectionWrapper from "./SectionWrapper";

function Footer() {
  const { theme } = useTheme();
  const [brands, setBrands] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const loadBrand = async () => {
      try {
        const res = await fetch(`https://uniqueit-server.vercel.app/brands`);

        const data = await res.json();
        setBrands(data);
      } catch (err) {
        console.log(err);
      }
    };

    loadBrand();
  }, []);
  return (
    <footer
      className={` font-inter  ${theme === "light" ? "bg-primary" : "bg-dark"}`}
      data-aos={`${pathname === "/" ? "fade-up" : ""}`}
      data-aos-duration={`${pathname === "/" ? "1000" : ""}`}
    >
      <SectionWrapper>
        <div
          className={`footer p-10  text-white justify-center md:justify-between`}
        >
          <nav>
            <header className="footer-title text-xl">Brands</header>
            {brands &&
              brands.length > 0 &&
              brands.map((brand, ind) => (
                <a key={ind} className="link link-hover capitalize">
                  {brand.brand}
                </a>
              ))}
          </nav>
          <nav>
            <header className="footer-title  text-xl">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title text-xl ">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <header className="footer-title text-xl">Dealership</header>
            <div className="grid grid-cols-6 gap-3">
              {brands &&
                brands.length > 0 &&
                brands.map((brand, ind) => (
                  <a
                    key={ind}
                    className=" w-7 bg-white rounded-full bg-opacity-70 cursor-pointer hover:scale-110 "
                  >
                    <img
                      src={
                        brand.image.dark ? brand.image.dark : brand.image.light
                      }
                      alt=""
                      className="rounded-full"
                    />
                  </a>
                ))}
            </div>
          </form>
        </div>
      </SectionWrapper>
    </footer>
  );
}

export default Footer;
