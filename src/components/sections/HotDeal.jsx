import { CiDiscount1 } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/themeContext";
import SectionWrapper from "../layout/SectionWrapper";
import SectionWrapperBig from "../layout/SectionWrapperBig";

function HotDeal() {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  return (
    <section data-aos="fade-up" data-aos-duration="1000">
      <SectionWrapperBig>
        <SectionWrapper>
          <div className="flex items-start gap-3  mb-6 md:mb-12 pt-12 md:pt-24  ">
            {" "}
            <h3
              className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
                theme === "light" ? "text-title-color" : "text-white"
              }`}
            >
              Hot Deals{" "}
            </h3>
            <span>
              <CiDiscount1 className="text-3xl md:text-4xl lg:text-5xl rounded-full hover:text-secondary hover:bg-white text-white bg-secondary"></CiDiscount1>
            </span>
          </div>
        </SectionWrapper>

        <div
          className={pathname === "/products/all" ? "pb-0" : `pb-20 md:pb-32`}
        >
          <div
            className={`${
              theme === "light"
                ? "bg-[url('https://i.ibb.co/D5FfdwK/hot-deal.jpg')]"
                : "bg-[url('https://i.ibb.co/Fg3QWxT/hot-dea-darkl.jpg')]"
            } bg-cover  py-20 md:py-28 lg:py-40 w-full`}
          >
            <SectionWrapper>
              <p className="text-lg md:text-2xl text-gray-600 mb-4">
                {"Don't Miss"}
              </p>
              <h3 className="text-3xl md:text-5xl lg-text-6xl font-bold text-secondary mb-6 ">
                20 to 30% Off
              </h3>
              <p
                className={`max-w-[500px] mb-10 ${
                  theme === "dark" && "text-gray-500"
                }`}
              >
                {"Don't"} wait any longer! Upgrade your mobile experience with
                the [Phone Model] from [Mobile Phone Company]. Get in touch with
                us today to order your new smartphone or visit our website for
                more information. This hot deal is too good to pass up!
              </p>
              <div>
                <Link to="/products/all" className="btn btn-primary bg-primary">
                  Get Now
                </Link>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </SectionWrapperBig>
    </section>
  );
}

export default HotDeal;
